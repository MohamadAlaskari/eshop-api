import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dbConfig } from './db.config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  ...dbConfig,
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
};
