import { RegularConsumption } from './regularConsumptions';
import { SpecialRequest } from './specialRequests';
import { Product } from './products';
import { UserBilling } from './userBillings';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,ManyToMany} from 'typeorm';
import {DailyOrderSheet} from './dailyOrderSheets';

@Entity("suppliers")
export class Supplier{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({
        name:"mobile",
        length:20
    })
    mobile:string;

    @Column({
        name:"comments",
        length:255
    })
    comments:string;

    @Column({name:"active"})
    active:boolean;

    @OneToMany(type=>DailyOrderSheet,daily_order_sheets=>daily_order_sheets.suppliers)
    dailyordersheets:DailyOrderSheet[];

    @OneToMany(type=>UserBilling,user_billings=>user_billings.suppliers)
    userbilling:UserBilling[];

    @OneToMany(type=>Product,products_id=>products_id.supplier_id)
    products_id:Product[];

    @ManyToMany(type=>SpecialRequest,special_request=>special_request.suppliers)
    special_requests:SpecialRequest[];

    @OneToMany(type=>RegularConsumption,regular_consumptions=>regular_consumptions.supplier_id)
    regular_consumptions:RegularConsumption[];

}