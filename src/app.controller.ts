import { Controller, Get, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  welcome() {
    return {
      message: '🚀 WELCOME TO ALASKARI E-SHOP API 🚀',
    };
  }
}
