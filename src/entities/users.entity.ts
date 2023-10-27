import { Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";

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
    @CreateDateColumn({type: "date", nullable: false})
    createdAt: string
    @UpdateDateColumn({type: "date", nullable: false})
    updatedAt: string
    @DeleteDateColumn({type: "date"})
    deletedAt: string | null
}