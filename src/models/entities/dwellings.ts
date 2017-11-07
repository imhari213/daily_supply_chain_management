/*import {Entity,Column,PrimaryGeneratedColumn,JoinTable,OneToMany,ManyToOne,ManyToMany,JoinColumn} from 'typeorm';
import {SubCommunity} from './subCommunities';
import {UserDwelling} from './userDwellings';


@Entity("dwellings")
export class Dwelling{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @JoinColumn({name:"sub_community"})
    @ManyToOne(type=>SubCommunity)
    sub_communities:SubCommunity;

    @Column({name:"active"})
    active:boolean;

}

 */



import {Entity,Column,PrimaryGeneratedColumn,JoinTable,OneToMany,ManyToOne,ManyToMany,JoinColumn} from 'typeorm';
import {SubCommunity} from './subCommunities';
import {UserDwelling} from './userDwellings';
@Entity("dwellings")
export class Dwelling{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;
    @Column({
        name:"name",
        length:128
    })
    name:string;

    @OneToMany(type=>UserDwelling,user_dwelling=>user_dwelling.dwellings)
    userDwellings:UserDwelling[];

    @JoinColumn({name:"sub_community"})
    @ManyToOne(type=>SubCommunity)
    subCommunity:SubCommunity;
    
    @Column({name:"active"})
    active:boolean;
}