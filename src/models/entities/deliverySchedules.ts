import { UserBilling } from './userBillings';
import { ProductSku } from './productSku';
import { UserDwelling } from './userDwellings';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {SubCommunity} from './subCommunities';


@Entity("delivery_schedules")
export class DeliverySchedule{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"sub_community"})
    sub_communities:number;

    @JoinColumn({name:"user_dwelling"})
    @ManyToOne(type=>UserDwelling)
    user_dwellings:UserDwelling;

    @ManyToMany(type=>ProductSku,product_sku=>product_sku.delivery_schedules)
    @JoinTable({name:"delivery_schedules_product_skus_product_skus_id"})
    product_skus:ProductSku[];

    @Column({name:"quantity"})
    quantity:number;

    @JoinColumn({name:"user_billing"})
    @ManyToOne(type=>UserBilling)
    user_billing:UserBilling[];

    @Column({name:"supplier_id"})
    supplier_id:number;

    @Column({name:"delivery_date"})
    delivery_date:Date;

    @Column({name:"community_id"})
    community_id:number;

}