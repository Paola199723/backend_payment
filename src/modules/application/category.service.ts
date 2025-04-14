// src/category/service/category.service.ts
import { Injectable } from '@nestjs/common';
import { Category } from '../domain/entity/category.entity';
import { CategoryPort } from '../domain/port/category.port';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryPort: CategoryPort) {}

  async getAll(): Promise<Category[]> {
    return this.categoryPort.findAll();
  }

  async getById(id: number): Promise<Category> {
    return this.categoryPort.findOne(id);
  }

  async create(category: Category): Promise<Category> {
    return this.categoryPort.create(category);
  }

  async update(id: number, data: Category): Promise<Category> {
    return this.categoryPort.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.categoryPort.delete(id);
  }
}
