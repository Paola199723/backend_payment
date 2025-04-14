
import { PaymentsEntity } from "./payments.entity";


export abstract class PaymentsPort {
    abstract createPayment(Payment: any): Promise<PaymentsEntity>;
  }