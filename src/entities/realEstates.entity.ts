import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Address from "./addresses.entity";
import Category from "./categories.entity";

@Entity('realEstates')
export default class RealEstate{
    @PrimaryGeneratedColumn('increment')
    id:number 
    @Column({nullable: false, default : false})
    sold: boolean
    @Column({ type: 'decimal', precision: 12, scale: 2, nullable: false, default: 0 })
    value: number
    @Column({nullable:false})
    size: number
    @CreateDateColumn({type: 'date', nullable: false})
    createdAt: string
    @UpdateDateColumn({type: 'date',unique: true, nullable: false})
    updatedAt: string
    @OneToOne(() => Address , (a) => a.id )
    address: Address
    @ManyToOne(() => Category , (c) => c.id)
    category: Category
}   