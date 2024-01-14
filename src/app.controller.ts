import { Controller, Get, Query } from '@nestjs/common';
import { GetHelloDto } from './dtos/get-hello.dto';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(@Query() query: GetHelloDto): string {
    return `Hello ${query.name}! You are ${query.age} years old! your password is ${query.password}`;
  }
}
