import { ProductCategory } from './productCategories';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne} from 'typeorm';
import {Product} from './products';


@Entity("consumable_product_categories")
export class ConsumableProductCategory{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({name:"active"})
    active:boolean;

    @OneToMany(type=>ProductCategory,product_categories=>product_categories.consumable_product_categories)
    products:Product[];

}