// src/category/port/category.port.ts
import { Category } from "../entity/category.entity";

export interface CategoryPort {
  findAll(): Promise<Category[]>;
  findOne(id: number): Promise<Category>;
  create(category: Category): Promise<Category>;
  update(id: number, category: Category): Promise<Category>;
  delete(id: number): Promise<void>;
}
