import { Controller, Get } from '@nestjs/common';
import { MerchantService } from '../application/merchant.service';
import { Merchant } from '../domain/entity/merchant.entity';

@Controller('merchant')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Get()
  async getMerchant(): Promise<Merchant> {
    return this.merchantService.getMerchant();
  }
}
