import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
/**
 * Controllers are responsible for handling incoming requests and returning responses to the client.
 * Contain handlers which handle endpoints and request methods(GET,POST,DELETE)
 * Can take advantage of dependency injection to consume providers within the same module
 * Handlers are simply methods within the controllers class, decorated with decorators such as @Get, @Post etc
 */
