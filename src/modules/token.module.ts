
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TokenService } from './application/token.service';
import { TokenPort } from './domain/token.port';
import { TokenAdapter } from './infrastruture/token.adapter';
import { TokenController } from './infrastruture/token.controller';

@Module({
  imports: [HttpModule],
  controllers: [TokenController],
  providers: [
    TokenService,
    TokenAdapter,
    {
      provide: TokenPort, // Aquí enlazas la abstracción con la implementación
      useClass: TokenAdapter,
    },
  ],
})
export class TokenModule {}
