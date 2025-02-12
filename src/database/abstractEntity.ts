import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class AbstractEntity<T> {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { nullable: false })
  id: number;

  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}