import { SpecialRequest } from './specialRequests';
import { ProductSku } from './productSku';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity("special_request_details")
export class SpecialRequestDetail{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"special_request"})
    @ManyToOne(type=>SpecialRequest)
    special_requests:SpecialRequest;

    @ManyToMany(type=>ProductSku,product_sku=>product_sku.special_request_details)
    @JoinTable({name:"special_request_details_product_skus_product_skus_id"})
    product_skus:ProductSku[];

    @Column({name:"quantity"})
    quantity:number;

}