import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'srv972.hstgr.io',
  port: 3306,
  username: 'u252525807_alaskari',
  password: '96E-Shop_db96+eshop_db.',
  database: 'u252525807_eshop_db',
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
};
