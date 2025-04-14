// product.entity.ts
export class Product {
    constructor(
      public id: number,
      public description: string,
      public price: number,
      public shippingCost: number,
      public category: string,
      public img: string,
      public stock: number
    ) {}
  
    get total(): number {
      return this.price + this.shippingCost;
    }
  }
  