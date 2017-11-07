import { Supplier } from './suppliers';
import { ProductCategory } from './productCategories';
import { Manufacturer } from './manufacturers';
import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,JoinColumn,OneToMany} from 'typeorm';
import {ProductSku} from './productSku';

@Entity("products")
export class Product{
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

    @JoinColumn({name:"manufacturer"})
    @ManyToOne(type=>Manufacturer)
    manufacturer:Manufacturer;


    @JoinColumn({name:"product_category_id"})
    @ManyToOne(type=>ProductCategory)
    product_category_id:ProductCategory;

    @Column({name:"active"})
    active:boolean;

    @JoinColumn({name:"supplier_id"})
    @ManyToOne(type=>Supplier)
    supplier_id:Supplier;

    @OneToMany(type=>ProductSku,product_skus=>product_skus.products)
    product_skus:ProductSku[];

}