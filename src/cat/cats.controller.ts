import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cat.service';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}
  @Post('/create')
  createCat() {
    return this.catService.create();
  }

  @Get('/all')
  getAl() {
    return this.catService.findAll();
  }
}
