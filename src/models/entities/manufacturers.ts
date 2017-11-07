import { Product } from './products';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne} from 'typeorm';
import {DailyOrderSheet} from './dailyOrderSheets';


@Entity("manufacturers")
export class Manufacturer{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({name:"active"})
    active:boolean;

    @Column({
        name:"comments",
        length:255
    })
    comments:string;
    
    @OneToMany(type=>DailyOrderSheet,daily_order_sheets=>daily_order_sheets.manufacturers,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    daily_order_sheets:DailyOrderSheet[];

    @OneToMany(type=>Product,products=>products.manufacturer)
    products:Product[];

}
