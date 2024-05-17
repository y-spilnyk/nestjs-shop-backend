<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

Docker: docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres 2

// .env.stage.dev
DATABASE_HOST="localhost"
DATABASE_PORT=5433
USERNAME="postgres"
PASSWORD="postgres"
DATABASE_NAME="shop"
JWT_SECRET="asdksdfjsdfj3i492040wf9!@3edfgdf"

## License
Nest is [MIT licensed](LICENSE).
