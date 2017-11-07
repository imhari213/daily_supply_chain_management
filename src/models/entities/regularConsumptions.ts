import { Supplier } from './suppliers';
import { UserDwelling } from './userDwellings';
import { ProductSku } from './productSku';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn,OneToMany,ManyToOne } from 'typeorm';


@Entity("regular_consumptions")
export class RegularConsumption{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"user_dwelling_id"})
    @ManyToOne(type=>UserDwelling)
    user_dwelling_id:UserDwelling[];

    @ManyToMany(type=>ProductSku,product_sku=>product_sku.regular_consumptions,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    @JoinTable({name:"regular_productsku_mapper"})
    product_skus:ProductSku[];

    @Column({name:"quantity"})
    quantity:number;

    @ManyToOne(type=>Supplier)
    @JoinColumn({name:"suppiler_id"})
    supplier_id:Supplier[];
}