import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantModule } from './modules/merchant.module';
import { PaymentstModule } from './modules/payments.module';
import { ProductModule } from './modules/product.module';
import { TokenModule } from './modules/token.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TokenModule,
    ProductModule,
    MerchantModule,
    PaymentstModule,
    ConfigModule.forRoot({
      isGlobal: true, // Así no necesitas importar en cada módulo
    }),
  ],
})
export class AppModule {}

