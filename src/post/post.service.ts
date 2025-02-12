import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/createPost.input';
import { UpdatePostInput } from './dto/updatePost.input';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post)private readonly postRepository: Repository<Post>){}
  async create(createPostInput: CreatePostInput) {
    const comments = createPostInput.comments.map(
      (createCommentDto)=> new Comment(createCommentDto)
    );
    const post = new Post({
      ...createPostInput,
      comments
    });
    const res = await this.postRepository.save(post);
    return res;
  }

  async findAll() {
    const res = await this.postRepository.find({
      relations: {comments: true}
    });
    return res
  }

  async findOne(id: number) {
    return await this.postRepository.find({where:{id}})
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
