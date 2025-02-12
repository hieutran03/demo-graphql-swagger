import { Column, Entity, OneToMany } from "typeorm";
import { Order } from "./order.entity";
import { AbstractEntity } from "src/database/abstractEntity";

@Entity({name: 'users'})
export class User extends AbstractEntity<User>{
  @Column()
  name: string;
  
  @OneToMany(()=>Order, (order)=>order.user, {cascade: true})
  orders: Order[];
}
