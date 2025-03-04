import 'dotenv/config';
import { DataSource } from 'typeorm';
import { dbConfig } from '../config/db.config';
import { User } from 'src/users/entities/user.entity';

export const AppDataSource = new DataSource({
  ...dbConfig,
  entities: [User],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
});
