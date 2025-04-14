import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PaymentService } from './application/payments.service';
import { PaymentsPort } from './domain/port/payments.port';
import { PaymentsAdapter } from './infrastruture/adapter/payments.adapter';
import { PaymentsController } from './infrastruture/controller/payments.controller';

@Module({
  imports: [HttpModule],
  controllers: [PaymentsController],
  providers: [
    PaymentService,
    PaymentsAdapter,
    {
      provide: PaymentsPort,
      useClass: PaymentsAdapter,
    },
  ],
  exports: [PaymentService],
})
export class PaymentstModule {}
