# Ejecutar en DEV

1. Clonar el repositorio
2. Instalar dependencias `npm install`
3. Clonar `.env.template` y renombrar a `.env`
4. Levantar la base de datos `docker compose up -d`
5. En caso tengamos un modelado de datos ya existente y aún las tablas no se encuentren en el archivo `prisma/schema.prisma` ejecutar `npx prisma db pull` sino continuar con la siguiente instrucción.
6. Generar el Prisma Client `npx prisma generate`
7. Ejecutar proyecto `npm run start:dev`
