import { ProductSku } from './productSku';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,OneToOne,JoinColumn} from 'typeorm';


@Entity("product_sku_prices")
export class ProductSkuPrice{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"product_sku_id"})
    @OneToOne(type=>ProductSku)
    product_sku_id:ProductSku;

    @Column({name:"price"})
    price:number;

    @Column({name:"effective"})
    effective:Date;

}