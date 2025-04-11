import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/product.module';
import { TokenModule } from './modules/token.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',  // Usuario de PostgreSQL
      password: 'Paola123',  // Contraseña de PostgreSQL
      database: 'database_venta',  // Nombre de la base de datos (se creará automáticamente si no existe)
      autoLoadEntities: true, // Carga las entidades automáticamente
      synchronize: true, // Crea las tablas automáticamente (NO usar en producción)
    }),
    TokenModule,
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true, // Así no necesitas importar en cada módulo
    }),
  ],
})
export class AppModule {}

