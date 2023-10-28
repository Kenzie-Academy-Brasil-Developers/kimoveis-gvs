import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "./users.entity";
import RealEstate from "./realEstates.entity";

@Entity("schedules")
export default class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: string;

  @Column("int")
  userId: number;

  @ManyToOne(() => RealEstate, (re) => re.id)
  realEstate: RealEstate;

  @ManyToOne(() => User, (u) => u.id)
  user: User;
}
