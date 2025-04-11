import { Int32 } from "typeorm";

export class PaymentsEntity {
    acceptance_token: string;
    amount_in_cents: Int32;
    currency: string;
    customer_email: string;
    payment_method: PaymentMethod;
    reference: string;
    signature: string;
  }
  
class PaymentMethod {
    type : string;
    token : string;
    installments : Int32;
}
  