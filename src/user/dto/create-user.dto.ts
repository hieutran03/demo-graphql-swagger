import { ApiProperty } from "@nestjs/swagger";
import { Order } from "../entities/order.entity";

export class CreateUserDto {
  @ApiProperty({ example: 'Hieu Tran', description: 'Backend dev' })
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
  orders: Order[];
}
