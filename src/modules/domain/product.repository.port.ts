import { Product } from './product.entity';

export interface ProductRepositoryPort {
  create(product: Product): Promise<Product>;
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product | null>;
  update(id: number, product: Product): Promise<Product>;
  delete(id: number): Promise<void>;
}
