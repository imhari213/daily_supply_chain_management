import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne} from 'typeorm';


@Entity("product_attributes")
export class ProductAttribute{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({
        name:"description",
        length:255
    })
    description:string;

    @Column({
        name:"data_type",
        length:45
    })
    data_type:string;

    @Column({name:"active"})
    active:boolean;

}