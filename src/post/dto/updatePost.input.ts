import { InputType, Field } from '@nestjs/graphql';
import { CreateCommentInput } from './createComment.input';

@InputType()
export class UpdatePostInput {
  @Field()
  title: string;
  @Field(()=>[CreateCommentInput])
  comments: CreateCommentInput[];
}
