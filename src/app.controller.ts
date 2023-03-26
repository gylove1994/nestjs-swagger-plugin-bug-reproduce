import { TestDto } from './common/test.dto';
import { BaseController } from './common/controllers/base.controller';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController extends BaseController<
  AppService,
  TestDto,
  TestDto
> {
  constructor(private readonly appService: AppService) {
    super(appService);
  }
}
