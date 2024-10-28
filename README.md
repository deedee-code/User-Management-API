# NestJs User Management API

## Description

A RESTful API built with NestJS, TypeScript, and PostgreSQL for managing user data. The features includes:

- Authentication and Authorization
- User Profile Management
- User Roles and Permissions

## Getting Started
- Technology Stack
- Installation

### Technology Stack
- NestJS - A progressive Node.js framework for building efficient, scalable server-side applications. [NestJS Documentation](https://docs.nestjs.com/)
- TypeScript - Programming language
- PostgreSQL - Database
- TypeORM - Object Relational Mapper


### Installation
- Clone this repository:
```bash
$ git clone https://github.com/deedee-code/User-Management-API.git
$ cd User-Management-API
```

- Install dependencies:
```bash
$ npm install
```

- Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Documentation
The API will be available at http://localhost:3000

### Endpoints

#### Auth
```http
POST /auth/register
POST /auth/login
```

<!-- Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
``` -->

#### Users
```http
GET /users/:id
PUT /users/:id
```


### API Documentation
The Swagger documentation is available at: http://localhost:3000/api/docs

Thank you!