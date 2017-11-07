/*import { JunctionInsert } from 'typeorm/persistence/Subject';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {Community} from './communities';
import {Dwelling} from './dwellings';
import {DeliverySchedule} from './deliverySchedules';

@Entity("sub_communities")
export class SubCommunity{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @JoinTable({name:"community"})
    @ManyToMany(type=>Community)
    community:Community;

    @Column({name:"active"})
    active:boolean;

    @OneToMany(type=>Dwelling,dwellings=>dwellings.sub_communities,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    dwellings:Dwelling[];


}  */


import { JunctionInsert } from 'typeorm/persistence/Subject';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {Community} from './communities';
import {Dwelling} from './dwellings';
import {DeliverySchedule} from './deliverySchedules';
@Entity("sub_communities")
export class SubCommunity{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;
    @Column({
        name:"name",
        length:128
    })
    name:string;

    @JoinColumn({name:"community_id"})
    @ManyToOne(type=>Community)
    community:Community;

    @Column({name:"active"})
    active:boolean;
    
    @OneToMany(type=>Dwelling,dwellings=>dwellings.subCommunity)
    dwellings:Dwelling[];
}