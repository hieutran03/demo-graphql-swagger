import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundException extends HttpException{
  constructor() {
    super('Forbidden', HttpStatus.NOT_FOUND);
  }
}