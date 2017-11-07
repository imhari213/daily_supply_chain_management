import { UserBilling } from './userBillings';
import { SpecialRequest } from './specialRequests';
import { HoldRequest } from './holdRequests';
//import { SupplierUserDwellingMapper } from './supplierUserDwellingMappers';
import { DeliverySchedule } from './deliverySchedules';
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {User} from './users';
import {Dwelling} from './dwellings';
import {RegularConsumption} from './regularConsumptions';

@Entity("user_dwelling")
export class UserDwelling{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"user"})
    @ManyToOne(type=>User)
    users:User;

    @JoinColumn({name:"dwelling"})
    @ManyToOne(type=>Dwelling)
    dwellings:Dwelling;
    
    
    @Column({name:"effective"})
    effective:Date;

    @OneToMany(type=>DeliverySchedule,delivery_schedules=>delivery_schedules.user_dwellings)
    delivery_schedules:DeliverySchedule[];

    @OneToMany(type=>HoldRequest,hold_requests=>hold_requests.user_dwellings)
    hold_requests:HoldRequest[];

    @OneToMany(type=>SpecialRequest,special_request=>special_request.user_dwellings)
    special_requests:SpecialRequest[];

    @OneToMany(type=>UserBilling,user_billings=>user_billings.user_dwellings)
    user_billings:UserBilling[];

    @OneToMany(type=>RegularConsumption,regular_consumptions=>regular_consumptions.user_dwelling_id)
    regular_consumptions:RegularConsumption[];

    // @JoinColumn({name:"regular_consumptions_id"})
    // @ManyToOne(type=>RegularConsumption)
    // regular_consumptions:RegularConsumption[];

}