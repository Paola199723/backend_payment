import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Merchant } from '../domain/entity/merchant.entity';
import { MerchantPort } from '../domain/port/merchant.port';

@Injectable()
export class MerchantService {
  constructor(private readonly merchantPort: MerchantPort) {}

  async getMerchant(): Promise<Merchant> {
    try {
        return await this.merchantPort.getMerchant();
      } catch (error) {
        console.error('❌ Error en getMerchantData:', error);
        throw new InternalServerErrorException('Error al obtener merchant data');
      }
    return this.merchantPort.getMerchant();
  }
}
