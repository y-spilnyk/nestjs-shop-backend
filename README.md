
## Docker
docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres 2

## Postman Collection
[https://elements.getpostman.com/redirect?entityId=13579474-da3d551d-b147-4cbc-90d3-c6e710609fb8&entityType=collection](https://www.postman.com/material-astronomer-88313843/workspace/nestjs-shop)

## .env.stage.dev
- DATABASE_HOST="localhost"
- DATABASE_PORT=5433
- USERNAME="postgres"
- PASSWORD="postgres"
- DATABASE_NAME="shop"
