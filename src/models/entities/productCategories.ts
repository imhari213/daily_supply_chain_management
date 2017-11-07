import { Product } from './products';
import { ConsumableProductCategory } from './consumableProductCategories';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn} from 'typeorm';


@Entity("product_categories")
export class ProductCategory{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"consumable_product_category"})
    @ManyToOne(type=>ConsumableProductCategory)
    consumable_product_categories:ConsumableProductCategory;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({name:"active"})
    active:boolean;

    @OneToMany(type=>Product,product_id=>product_id.product_category_id)
    products_id : Product[];

}