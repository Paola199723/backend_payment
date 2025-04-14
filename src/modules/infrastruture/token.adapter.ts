import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CardToken } from '../domain/token.entity';
import { TokenPort } from '../domain/token.port';
@Injectable()
export class TokenAdapter implements TokenPort {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  async createToken(cardData: any): Promise<CardToken> {
    const tokenUrl = this.configService.get<string>('SANDBOX_TOKEN_URL');
    const KER_PUBLIC = this.configService.get<string>('SANDBOX_PUBLIC_KEY');

    const response = await this.httpService.axiosRef.post(
      tokenUrl,
      cardData,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${KER_PUBLIC}`},
    }
  );
     try {
      console.error('❌ response data:', response.data);
      return response.data; // ajusta esto si usas una entidad CardToken como clase
    } catch (error) {
        console.error('❌ Error en getMerchantData:', error);
        throw new Error('Error al consumir el endpoint de Wompi');
      }
    

  }
}
