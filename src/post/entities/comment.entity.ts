import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.entity';
import { AbstractEntity } from 'src/database/abstractEntity';

@Entity({name: "comment"})
@ObjectType()
export class Comment extends AbstractEntity<Comment>{
  @Column()
  @Field({ nullable: false })
  content: string;
  @ManyToOne(() => Post, (post) => post.comments)
  @JoinColumn({ name: 'post_id' })
  @Field(()=>Post,{ nullable: true })
  post: Post;
}
