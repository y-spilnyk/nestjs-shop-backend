
## Docker

docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres 2

## .env.stage.dev
- DATABASE_HOST="localhost"
- DATABASE_PORT=5433
- USERNAME="postgres"
- PASSWORD="postgres"
- DATABASE_NAME="shop"
