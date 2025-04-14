// src/modules/payments/product.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from '../application/product.service';
import { ProductOrmEntity } from '../domain/product.orm-entity';
import { ProductRepository } from '../domain/product.repository';
import { ProductController } from '../infrastruture/product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductOrmEntity])],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: 'ProductRepository',
      useClass: ProductRepository,
    },
  ],
})
export class ProductModule {}
