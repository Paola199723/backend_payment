import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductRepositoryPort } from '../domain/port/product.repository.port';
import { Product } from './entity/product.entity';
import { ProductOrmEntity } from './entity/product.orm-entity';

@Injectable()
export class ProductRepository implements ProductRepositoryPort {
  constructor(
    @InjectRepository(ProductOrmEntity)
    private readonly ormRepo: Repository<ProductOrmEntity>,
  ) {}

  async create(product: Product): Promise<Product> {
    const entity = this.ormRepo.create({
      description: product.description,
      price: product.price,
      shippingCost: product.shippingCost,
      category : product.category,
      img : product.img,
      stock : product.stock,
    });
    const saved = await this.ormRepo.save(entity);
    return new Product(saved.id, saved.description, +saved.price, +saved.shippingCost, saved.category,saved.img,saved.stock);
  }

  async findAll(): Promise<Product[]> {
    const products = await this.ormRepo.find();
    return products.map(p => new Product(p.id, p.description, +p.price, +p.shippingCost ,p.category,p.img,p.stock));
  }

  async findById(id: number): Promise<Product | null> {
    const p = await this.ormRepo.findOneBy({ id });
    if (!p) return null;
    return new Product(p.id, p.description, +p.price, +p.shippingCost,p.category,p.img,p.stock);
  }

  async update(id: number, product: Product): Promise<Product> {
    await this.ormRepo.update(id, {
      description: product.description,
      price: product.price,
      shippingCost: product.shippingCost,
      category: product.category,
      img: product.img,
      stock: product.stock,
    });
    
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.ormRepo.delete(id);
  }
}
