import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity({ name: 'categories', schema: 'public' })
export class Category{

    @PrimaryColumn()
    id: string,

    @Column({ unique: true })
    name: string,

    @Column()
    description: string,

    @CreateDateColumn({ default: () => "NOW()" })
    create_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}