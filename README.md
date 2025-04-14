
<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
</p>

<h1 align="center">Backend - Payment API 🚀</h1>

<p align="center">
  API REST construida con <strong>NestJS</strong>, <strong>TypeORM</strong> y <strong>PostgreSQL</strong>, que permite gestionar productos, generar tokens de tarjetas y procesar pagos de forma segura. <br/>
  El proyecto sigue una arquitectura modular y hexagonal, y está desplegado completamente en la nube.
</p>

---

## 📦 Tecnologías principales

- **NestJS** – Framework backend progresivo para Node.js.
- **PostgreSQL** – Base de datos relacional.
- **TypeORM** – ORM para manejar entidades y repositorios.
- **Axios + HttpService** – Para consumir servicios externos de pago.
- **Render** – Plataforma de despliegue de aplicaciones.
- **Arquitectura Hexagonal** – Separación clara entre dominio, controladores, servicios y adaptadores.
- **DTOs y Validaciones** – Con `ValidationPipe` para entradas robustas y seguras.

---

## 🧩 Módulos implementados

- `Product`: Gestión de productos (crear, listar, editar).
- `Token`: Generación de tokens de pago con tarjeta.
- `Payment`: Procesamiento de transacciones.
- `Merchant`: Obtención de parámetros necesarios para pagos.

---

## 🚀 Configuración del proyecto

### 1. Clonar repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo-backend.git
cd tu-repo-backend


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test 

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Método	Ruta	Descripción
- GET	`/products`	Lista todos los productos
- POST	`/tokens/cards`	Genera token para tarjeta
- GET	`/merchant`	Obtiene los parámetros de autorización
- POST	`/payment`	Procesa una transacción de pago