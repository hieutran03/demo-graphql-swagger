import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { AbstractEntity } from "src/database/abstractEntity";

@Entity({name: 'orders'})
export class Order extends AbstractEntity<Order>{
  @Column()
  name: string;
  @ManyToOne(()=>User, (user)=>user.orders)
  @JoinColumn({name: "user_id"})
  user: User;
}
