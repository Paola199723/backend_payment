import { Merchant } from './merchant.entity';

export abstract class MerchantPort {
  abstract getMerchant(): Promise<Merchant>;
}
