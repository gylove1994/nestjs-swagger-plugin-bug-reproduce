import { UpdateResult } from 'typeorm';
import { TestDto } from './common/test.dto';
import { Injectable } from '@nestjs/common';
import { BaseCRUDService } from './common/services/baseCRUD.service';
import { BaseEntity } from './common/entities/base.entity';

@Injectable()
export class AppService
  implements BaseCRUDService<TestDto, TestDto, BaseEntity>
{
  create(createDTO: TestDto): BaseEntity | Promise<BaseEntity> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): BaseEntity | Promise<BaseEntity> {
    throw new Error('Method not implemented.');
  }
  findAll(): BaseEntity[] | Promise<BaseEntity[]> {
    throw new Error('Method not implemented.');
  }
  update(id: string, updateDTO: TestDto): UpdateResult | Promise<UpdateResult> {
    throw new Error('Method not implemented.');
  }
  remove(id: number): boolean | void | Promise<boolean | void> {
    throw new Error('Method not implemented.');
  }
}
