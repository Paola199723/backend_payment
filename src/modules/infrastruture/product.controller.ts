import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from '../application/product.service';
import { CreateProductDto } from '../domain/create-product.dto';
import { Product } from '../domain/product.entity';


@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() dto: CreateProductDto) {
    const product = await this.productService.create({
      description: dto.description,
      price: dto.price,
      shippingCost: dto.shippingCost,
      category: dto.category,
      img: dto.img,
      stock: 0, // O cámbialo si lo vas a recibir también
  });
  return {
    ...product,
    total: product.total,
  };
}

  @Get()
  async findAll() {
    const products = await this.productService.findAll();
    return products.map(p => ({
      ...p,
      total: p.total
    }));
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const product = await this.productService.findById(Number(id));
    return {
      ...product,
      total: product.total
    };
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: Product) {
    const updated = await this.productService.update(Number(id), dto);
    return {
      ...updated,
      total: updated.total
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.productService.delete(Number(id));
    return { message: 'Producto eliminado correctamente' };
  }
}
