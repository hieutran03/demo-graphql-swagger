import { ApiProperty } from "@nestjs/swagger";
import { Order } from "../entities/order.entity";
import { IsArray, IsObject, IsString } from "class-validator";

export class CreateUserDto {
  
  @ApiProperty({ example: 'Hieu Tran', description: 'Backend dev' })
  @IsString()
  name: string;

  @ApiProperty({
    example: [
      {
        name: 'Order 1',
      },
      {
        name: 'Order 2',
      },
    ],
  })
  @IsArray()
  orders: Order[];
}
