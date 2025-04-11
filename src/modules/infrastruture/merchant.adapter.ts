import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Merchant } from '../domain/merchant.entity';
import { MerchantPort } from '../domain/merchant.port';

@Injectable()
export class MerchantAdapter implements MerchantPort {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
  ) {}

  async getMerchant(): Promise<Merchant> {
    const publicKey = this.configService.get<string>('SANDBOX_PUBLIC_KEY');
    const urlAux = this.configService.get<string>('SANDBOX_ECCEPTANCE_TOKEN');

    const url = `${urlAux}/${publicKey}`;

    const response = await this.httpService.axiosRef.get(url);
    try {
        const response = await this.httpService.axiosRef.get(url);
        console.error('❌ response.data.presigned_acceptance.acceptance_token:', response.data);
        return response.data.data.presigned_acceptance;
      } catch (error) {
        console.error('❌ Error en MerchantAdapter:', error.response?.data || error.message);
        throw new Error('Error al consumir el endpoint de Wompi');
      }
  }
}
