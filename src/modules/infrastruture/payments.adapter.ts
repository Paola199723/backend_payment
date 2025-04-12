import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import { PaymentsEntity } from '../domain/payments.entity';
import { PaymentsPort } from '../domain/payments.port';

@Injectable()
export class PaymentsAdapter implements PaymentsPort {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  async createPayment(Payment: any): Promise<PaymentsEntity> {
  const url = this.configService.get<string>('SANDBOX_PAYMENTS_URL');
  const KEY_PUBLIC = this.configService.get<string>('SANDBOX_PUBLIC_KEY');
  const referencia = this.generarReferencia();
  Payment.reference = referencia;
  const KEY = this.configService.get<string>('clave');


  const dataParaFirmar = `${referencia}${Payment.amount_in_cents}${Payment.currency}${KEY}`;
  //var concatenatedText = "sk8-438k4-xmxm392-sn2m2490000COPprod_integrity_Z5mMke9x0k8gpErbDqwrJXMqsI6SFli6"
  // Example
  const encondedText = new TextEncoder().encode(dataParaFirmar);
  const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // "37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
  Payment.signature = hashHex;
  console.error('payments data:',Payment);

    try {
        const response = await this.httpService.axiosRef.post(
            url, // <- URL correcta
            Payment,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${KEY_PUBLIC}`},
          }
        );
        console.error('❌ response.data:', response.data);
        return  response.data;
      } catch (error) {
        console.error('❌ Error en payments:', error.response?.data || error.message.PaymentMethod);
        console.error('❌ Error en payments:', error.response?.data || Payment);

        throw new Error('Error al consumir el endpoint de Wompi');
      }
  }
  private generarReferencia(longitud: number = 17): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
    let referencia = '';
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      referencia += caracteres[indice];
    }
    return referencia;
  }
}
