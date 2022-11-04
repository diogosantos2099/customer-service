<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
  <a href="https://www.postgresql.org/" target="blank"><img src="https://www.postgresql.org/media/img/about/press/elephant.png" width="90" alt="PostgreSQL Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript microservice for handling **customer** information, with a [PostgreSQL](https://www.postgresql.org/) DB, managed through [Prisma](https://www.prisma.io/). 

Dependencies:
- [@nestjs/platform-fastify](https://docs.nestjs.com/techniques/performance)
- [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction)
- [dotenv](https://www.dotenv.org/)

### Swagger

http://localhost:8080/swagger (port is defined on `.env` file)

### Dockerfile

Open a terminal in the root directory, where the `Dockerfile` is:

```bash
# Build docker image
$ docker build . -t customer-service

# Start container (host port : container port)
$ docker run -d -p 8080:8080 -t customer-service
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Useful commands

```bash
# Transpile the TypeScript files
$ npm run build

# Prettier
$ npm run format

# Lint
$ npm run lint
```
## Test

```bash
# unit tests
$ npm run test

# unit tests coverage
$ npm run test:cov

# e2e tests
$ npm run test:e2e
```
