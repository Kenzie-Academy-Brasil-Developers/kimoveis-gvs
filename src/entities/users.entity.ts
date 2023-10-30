import { Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany} from "typeorm";
import Schedule from "./schedules.entity";

@Entity('users')
export default class User{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({length: 45, nullable: false})
    name: string

    @Column({length: 45, nullable: false, unique: true})
    email: string

    @Column({nullable: false, default: false})
    admin: boolean

    @Column({nullable: false, length: 120})
    password: string
    
    @CreateDateColumn({type: "date"})
    createdAt: string
    @UpdateDateColumn({type: "date"})
    updatedAt: string
    @DeleteDateColumn({type: "date", nullable: true})
    deletedAt: string | null
    @OneToMany(() => Schedule, (schedules) => schedules.user)
    shedule: Array<Schedule>
}