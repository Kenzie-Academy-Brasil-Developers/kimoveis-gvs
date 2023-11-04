import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Address from "./addresses.entity";
import Schedule from "./schedules.entity";
import Categorie from "./categories.entity";

@Entity('realEstates')
export default class RealEstate{
    @PrimaryGeneratedColumn('increment')
    id:number 

    @Column({nullable: false, default : false})
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2, nullable: false, default: 0 })
    value: number | string

    @Column({nullable:false})
    size: number

    @CreateDateColumn({type: 'date', nullable: false})
    createdAt: string
    
    @UpdateDateColumn({type: 'date',unique: true, nullable: false})
    updatedAt: string

    @OneToMany(()=> Schedule , (shedule) => shedule.realEstate)
    shedule: Array<Schedule>

    @OneToOne(() => Address , (address) => address.realEstate )
    @JoinColumn()
    address: Address
    
    @ManyToOne(() => Categorie , (categorie) => categorie.realEstate)
    category: Categorie
}   