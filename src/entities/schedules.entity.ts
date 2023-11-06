import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "./users.entity";
import RealEstate from "./realEstates.entity";

@Entity("schedules")
export default class Schedule{
  @PrimaryGeneratedColumn('increment')
  id: number
  @Column({ type: "date" })
  date: string

  @Column({ type: "time" })
  hour: string

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  realEstate: RealEstate

  @ManyToOne(() => User, (user) => user.schedule, {onDelete: 'CASCADE'})
  user: User;
}
    