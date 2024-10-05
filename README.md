# NestJs User Management API

## Description

A RESTful API built with NestJS, TypeScript, and PostgreSQL for managing user data. The features includes:

- User creation with password hashing
- User retrieval by ID
- User information updates
- Input validation using class-validator

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

#### Create User
```http
POST /users
```

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get User by ID
```http
GET /users/:id
```

#### Update User
```http
PUT /users/:id
```

Request body:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
}
```


Thank you!