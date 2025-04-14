import { Injectable } from '@nestjs/common';
import { PaymentsEntity } from '../domain/entity/payments.entity';
import { PaymentsPort } from '../domain/port/payments.port';

@Injectable()
export class PaymentService {
  constructor(private readonly paymentPort: PaymentsPort) {}

  async createPaymentsUser(Payment: any): Promise<PaymentsEntity> {
    return this.paymentPort.createPayment(Payment);
  }
}