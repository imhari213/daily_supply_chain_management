import { ProductSku } from './productSku';
import { ProductAttribute } from './productAttributes';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity("product_sku_attributes")
export class ProductSkuAttribute{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;


    @JoinColumn({name:"product_sku_id"})
    @OneToOne(type=>ProductSku)
    product_sku_id:ProductSku;

    @JoinColumn({name:"product_attribute"})
    @OneToOne(type=>ProductAttribute)
    product_attributes:ProductAttribute;

    @Column({
        name:"attribute_value",
        length:45
    })
    attribute_value:string;

}