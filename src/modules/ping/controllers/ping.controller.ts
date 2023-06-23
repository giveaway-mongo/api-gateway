import { Controller, Get } from '@nestjs/common';

@Controller()
export class PingController {
  @Get('/')
  pong() {
    return { result: 'pong' };
  }
}
