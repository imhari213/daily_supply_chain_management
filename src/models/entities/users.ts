import { HoldRequest } from './holdRequests';
import {Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn,OneToMany} from 'typeorm';
import {UserDwelling} from './userDwellings';

@Entity("user")
export class User{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({
        name:"email",
        length:100
    })
    email:string;

    @Column({
        name:"phone",
        length:20
    })
    phone:string;

    @Column({
        name:"password",
        length:100
    })
    password:string;

    @Column({
        name:"salt",
        length:100
    })
    salt:string;
    @OneToMany(type=>HoldRequest,hold_requests=>hold_requests.users)
    holdrequests:HoldRequest[];

    @OneToMany(type=>UserDwelling,user_dwelling=>user_dwelling.users)
    user_dwellings:UserDwelling[];

    @Column({
        name:"active",
        length:100
    })
    active:boolean;

}