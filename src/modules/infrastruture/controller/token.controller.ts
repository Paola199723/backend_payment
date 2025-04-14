import { Body, Controller, Post } from '@nestjs/common';
import { CardToken } from 'src/modules/domain/entity/token.entity';
import { TokenService } from '../../application/token.service';

@Controller('tokens')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('cards')
  async createToken(@Body() cardData: any): Promise<CardToken> {
    return this.tokenService.createCardToken(cardData);
  }
}
