// src/modules/payments/infrastructure/product.orm-entity.ts

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  description: string;

  @Column('decimal')
  price: number;

  @Column('decimal', { name: 'shipping_cost' })
  shippingCost: number;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  img: string;

  @Column('int')
  stock: number;
}
