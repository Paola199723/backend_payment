import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
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
        throw new Error('Error al consumir el endpoint de Wompi');
      }
  }
}
