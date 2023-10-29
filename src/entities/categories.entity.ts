import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export default class Categorie{
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column({length: 45, unique: true, nullable: false})
    name: string    
}