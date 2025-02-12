import { InputType, Field } from '@nestjs/graphql';
import { CreateCommentInput } from './createComment.input';

@InputType()
export class CreatePostInput {
  @Field()
  title: string;
  @Field(()=>[CreateCommentInput])
  comments: CreateCommentInput[];
}
