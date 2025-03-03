<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">E-Shop Backend API</h1>

<p align="center">
  A professional <a href="http://nodejs.org" target="_blank">Node.js</a> e-commerce backend built with <a href="https://nestjs.com" target="_blank">NestJS</a> and <a href="https://www.mysql.com/" target="_blank">MySQL</a>, following best practices and clean architecture.
</p>

---

## 🛠️ Description

This project is a scalable, modular e-commerce backend built with **NestJS** and **MySQL** using **TypeORM**.  
It is designed to handle complex features with clean code, full validation, and powerful error handling.

---

## ✅ Current Features

### Users Module:
- Full CRUD operations.
- DTO-based data validation.
- Unique email check with `ConflictException`.
- Custom `UsersExceptionFilter`.
- Password protection ready for future hashing.
  
### Global Error Handling:
- Handles common exceptions like `BadRequest`, `NotFound`, `Unauthorized`, and `Forbidden`.
- Returns consistent and clean JSON error responses across the entire API.

### Tech Stack:
- NestJS
- MySQL (via TypeORM)
- class-validator / class-transformer
- Custom exception filters
- Modular architecture

---

## 📦 Project setup

```bash
$ npm install

🚀 Running the project
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

✅ Database setup
Update your database credentials in: src/config/typeorm.config.ts

{
  host: 'localhost',
  port: 3306,
  username: 'YOUR_DB_USERNAME',
  password: 'YOUR_DB_PASSWORD',
  database: 'eshop_db',
}

🛠️ Roadmap
✅ Users Module (complete)
✅ Global Error Handling (complete)
⏳ Products Module (next)
⏳ Orders Module
⏳ Payments Module
⏳ Authentication (JWT)
⏳ Admin Roles and Permissions
⏳ Swagger Documentation

🧑‍💻 Author
Developed by Mohamad Alaskari
Email: home@alaskaridesign.com

✅ License
Nest is MIT licensed.

