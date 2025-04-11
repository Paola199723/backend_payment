// dto/create-product.dto.ts
import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

  export class CreateProductDto {
    @IsString()
    description: string;
  
    @IsNumber()
    @IsPositive()
    price: number;
  
    @IsNumber()
    @IsPositive()
    shippingCost: number;
  
    @IsString()
    category: string;
  
    @IsString()
    img: string;
  
    @IsNumber()
    @Min(0)
    stock: number;
  }
  
