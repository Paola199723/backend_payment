import { CardToken } from "../entity/token.entity";

export abstract class TokenPort {
    abstract createToken(cardData: any): Promise<CardToken>;
  }
  