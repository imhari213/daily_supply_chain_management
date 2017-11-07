/*import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne} from 'typeorm';
import {SubCommunity} from './subCommunities';
import {User} from './users'

@Entity("communities")
export class Community{
    @PrimaryGeneratedColumn({name:"id"})
    id:string;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({
        name:"address",
        length:255
    })
    address:string;

    @Column({name:"active"})
    active:boolean;

    @Column({
        name:"locality",
        length:128
    })
    locality:string;

    @Column({
        name:"city",
        length:128
    })
    city:string;

    @Column({
        name:"state",
        length:128
    })
    state:string;

    @Column({
        name:"country",
        length:128
    })
    country:string;

    @Column({name:"pincode"})
    pincode:number;


}

*/


import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne} from 'typeorm';
import {SubCommunity} from './subCommunities';
import {User} from './users'
@Entity("communities")
export class Community{
    @PrimaryGeneratedColumn({name:"id"})
    id:string;
    @Column({
        name:"name",
        length:128
    })
    name:string;
    @Column({
        name:"address",
        length:255
    })
    address:string;
    @Column({name:"active"})
    active:boolean;
    @Column({
        name:"locality",
        length:128
    })
    locality:string;
    @Column({
        name:"city",
        length:128
    })
    city:string;
    @Column({
        name:"state",
        length:128
    })
    state:string;
    @Column({
        name:"country",
        length:128
    })
    country:string;
    @Column({name:"pincode"})
    pincode:number;
    
    @OneToMany(type=>SubCommunity,sub_communities=>sub_communities.community)
    subcommunities:SubCommunity[];
}