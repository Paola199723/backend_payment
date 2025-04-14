# Etapa 1: Construcción
FROM node:18-alpine AS builder

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Compilar la app NestJS
RUN npm run build

# Etapa 2: Ejecución
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar solo los archivos necesarios desde la etapa de construcción
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Exponer el puerto que usa Nest (por defecto 3000)
EXPOSE 3000

# Comando para correr la app
CMD ["node", "dist/main"]
