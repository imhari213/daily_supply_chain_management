import { User } from './users';
import { Supplier } from './suppliers';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import {UserDwelling} from './userDwellings';

@Entity("hold_requests")
export class HoldRequest{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"user_dwelling"})
    @ManyToOne(type=>UserDwelling)
    user_dwellings:UserDwelling;

    @Column({name:"raised_on"})
    raised_on:Date;

    @Column({name:"start_date"})
    start_date:Date;

    @Column({name:"end_date"})
    end_date:Date;

    @JoinColumn({name:"user"})
    @ManyToOne(type=>User)
    users:User;

    @JoinColumn({name:"supplier"})
    @OneToOne(type=>Supplier)
    suppliers:Supplier;


}