import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('addresses')
export default class Address{
    @PrimaryGeneratedColumn('increment')
    id:number
    @Column({length: 45, nullable: false})
    street:string
    @Column({length: 8, nullable: false})
    zipCode:string
    @Column({nullable: false})
    number: number
    @Column({length: 20, nullable: false})
    city:string
    @Column({length: 2,nullable: false})
    sate: string
}