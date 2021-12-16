import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JoiValidationPipe } from './pipe/joi.validation.pipe';
import { TestUserSchema } from './schema/user.joi';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('number_pipe_in_param/:n')
  getNumberPipeInParam(@Param('n', ParseIntPipe) n: number): number {
    return n;
  }

  @Post('test_user')
  @UsePipes(new JoiValidationPipe(TestUserSchema))
  testUser(@Body() testUser) {
    return testUser;
  }
}
