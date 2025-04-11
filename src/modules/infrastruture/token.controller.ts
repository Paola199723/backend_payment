import { Body, Controller, Post } from '@nestjs/common';
import { TokenService } from '../application/token.service';
import { CardToken } from '../domain/token.entity';

@Controller('tokens')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('cards')
  async createToken(@Body() cardData: any): Promise<CardToken> {
    return this.tokenService.createCardToken(cardData);
  }
}
