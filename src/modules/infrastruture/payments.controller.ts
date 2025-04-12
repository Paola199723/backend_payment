import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from '../application/payments.service';
import { PaymentsEntity } from '../domain/payments.entity';


@Controller('payment')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async createPayment(@Body() Payment: any): Promise<PaymentsEntity> {
    return this.paymentService.createPaymentsUser(Payment);
  }
}
