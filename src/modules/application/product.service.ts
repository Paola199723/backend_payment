import { Inject, NotFoundException } from '@nestjs/common';
import { Product } from '../domain/product.entity';
import { ProductRepositoryPort } from '../domain/product.repository.port';


export class ProductService {
    constructor(
        @Inject('ProductRepository')
        private readonly productRepository: ProductRepositoryPort,
      ) {}
    
  async create(data: Omit<Product, 'id' | 'total'>): Promise<Product> {
    const product = new Product(0, data.description, data.price, data.shippingCost,data.category,data.img,data.stock);
    return await this.productRepository.create(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async findById(id: number): Promise<Product> {
    const product = await this.productRepository.findById(id);
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }

  async update(id: number, data: Omit<Product, 'id' | 'total'>): Promise<Product> {
    const product = await this.findById(id);
    product.description = data.description;
    product.price = data.price;
    product.shippingCost = data.shippingCost;
    product.category = data.category;
    product.img = data.img;
    product.stock = data.stock;
    return await this.productRepository.update(id, product);
  }
  

  async delete(id: number): Promise<void> {
    const product = await this.findById(id);
    await this.productRepository.delete(id);
  }
}
