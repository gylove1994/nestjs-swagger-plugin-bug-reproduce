import { BaseEntity } from './../entities/base.entity';
import { BaseDto } from './../dtos/base.dto';
import { UpdateResult } from 'typeorm';
export abstract class BaseCRUDService<
  CreateDTO = BaseDto,
  UpdateDTO = BaseDto,
  Entity = BaseEntity,
> {
  abstract create(createDTO: CreateDTO): Entity | Promise<Entity>;
  abstract findOne(
    id: string,
  ): Entity | Promise<Entity | undefined> | undefined;
  abstract findAll(): Entity[] | Promise<Entity[]>;
  abstract update(
    id: string,
    updateDTO: UpdateDTO,
  ): UpdateResult | Promise<UpdateResult>;
  abstract remove(id: number): void | boolean | Promise<void | boolean>;
}
