#Product Microservice

##Dev

1.- Clonar repositorio
2.- Instalar dependencias
3.- Crear archivo `.env` basado en `.env.template`
4.- Ejecutar migracion de prisma `npx prisma migrate dev`
5.- Ejecutar `npm run start dev`
6.- Nats docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
