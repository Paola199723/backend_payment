import { Injectable } from '@nestjs/common';
import { CardToken } from '../domain/token.entity';
import { TokenPort } from '../domain/token.port';

@Injectable()
export class TokenService {
  constructor(private readonly tokenPort: TokenPort) {}

  async createCardToken(cardData: any): Promise<CardToken> {
    return this.tokenPort.createToken(cardData);
  }
}
