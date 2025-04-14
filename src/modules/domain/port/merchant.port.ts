import { Merchant } from "../entity/merchant.entity";

export abstract class MerchantPort {
  abstract getMerchant(): Promise<Merchant>;
}
