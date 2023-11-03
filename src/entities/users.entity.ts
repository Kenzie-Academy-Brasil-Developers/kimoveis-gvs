import { Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, BeforeInsert, BeforeUpdate} from "typeorm";
import Schedule from "./schedules.entity";
import { getRounds, hashSync } from "bcryptjs";

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

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const hasRounds : number = getRounds(this.password);

        if(!hasRounds){
            this.password = hashSync(this.password, 10);
        }
    }
}