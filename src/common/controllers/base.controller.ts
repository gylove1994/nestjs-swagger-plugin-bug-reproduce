import { Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { BaseDto } from '../dtos/base.dto';
import { BaseCRUDService } from '../services/baseCRUD.service';

export class BaseController<
  BaseService extends BaseCRUDService,
  CreateDTO extends BaseDto,
  UpdateDTO extends BaseDto,
> {
  constructor(private readonly baseService: BaseService) {}
  @Post()
  create(@Body() createDto: CreateDTO) {
    return this.baseService.create(createDto);
  }
  @Get()
  findAll() {
    return this.baseService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateDTO) {
    return this.baseService.update(id, updateUserDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseService.remove(+id);
  }
}
