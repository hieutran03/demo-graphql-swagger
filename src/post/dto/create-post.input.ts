import { InputType, Field } from '@nestjs/graphql';
import { CreateCommentInput } from './create-comment.input';
import { IsArray, IsObject, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
  @IsString()
  @Field()
  title: string;
  
  @IsArray()
  @Field(()=>[CreateCommentInput])
  comments: CreateCommentInput[];
}
