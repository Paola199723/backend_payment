
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TokenService } from './application/token.service';
import { TokenPort } from './domain/port/token.port';
import { TokenAdapter } from './infrastruture/adapter/token.adapter';
import { TokenController } from './infrastruture/controller/token.controller';

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
