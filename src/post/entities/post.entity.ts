import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './comment.entity';
import { AbstractEntity } from 'src/database/abstractEntity';
@Entity({name: "post"})
@ObjectType()
export class Post extends AbstractEntity<Post>
{
  @Column()
  @Field({ nullable: false })
  title: string;
  @OneToMany(() => Comment, (comment) => comment.post, {cascade: true})
  @Field(()=>[Comment],{ nullable: true })
  comments: Comment[];
}
