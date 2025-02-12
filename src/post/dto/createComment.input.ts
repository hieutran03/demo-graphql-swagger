import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateCommentInput {
  @IsString()
  @Field()
  content: string;
}
