import { InputType, Field } from '@nestjs/graphql';
import { CreateCommentInput } from './createComment.input';
import { IsArray, IsObject, IsString } from 'class-validator';

@InputType()
export class UpdatePostInput {
  @IsString()
  @Field()
  title: string;

  @IsArray()
  @Field(()=>[CreateCommentInput])
  comments: CreateCommentInput[];
}
