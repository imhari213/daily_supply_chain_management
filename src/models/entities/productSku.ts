import { SpecialRequestDetail } from './specialRequestDetails';
import { RegularConsumption } from './regularConsumptions';
import { DeliverySchedule } from './deliverySchedules';
import { DailyOrderSheet } from './dailyOrderSheets';
import { ProductSkuPrice } from './productSkuPrices';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn ,OneToMany,OneToOne,ManyToMany} from 'typeorm';
import {UserBilling} from './userBillings';
import {Product} from './products';

@Entity("product_skus")
export class ProductSku{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"name"})
    name:string;

    @Column({name:"active"})
    active:boolean;

    @JoinColumn({name:"products"})
    @ManyToOne(type=>Product)
    products:Product;

    @Column({name:"price"})
    price:number;

    // @Column({name:"effective"})
    // effective:Date;

    //@Column({name:"user_billings"})
    @OneToMany(type=>UserBilling,user_billings=>user_billings.product_skus)
    user_billings:UserBilling;

    @ManyToMany(type=>DailyOrderSheet,daily_order_sheet=>daily_order_sheet.product_skus,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    daily_order_sheets:DailyOrderSheet[];

    @ManyToMany(type=>DeliverySchedule,delivery_schedule=>delivery_schedule.product_skus)
    delivery_schedules:DeliverySchedule[];

    @ManyToMany(type=>RegularConsumption,regular_consumption=>regular_consumption.product_skus,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    regular_consumptions:RegularConsumption[];

    @ManyToMany(type=>SpecialRequestDetail,special_request_detail=>special_request_detail.product_skus,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    special_request_details:SpecialRequestDetail[];

  
    // @OneToOne(type=>ProductSkuPrice,product_sku_prices=>product_sku_prices.product_sku_id)
    // product_sku_prices:ProductSkuPrice;

}