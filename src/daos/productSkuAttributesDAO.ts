import { ProductSkuAttribute } from '../models/entities/productSkuAttributes';
//import { ProductSkuAttributeDAO } from './productSkuAttributesDAO';
import { ProductSkuAttributesController } from '../routes/controllers/productSkuAttributesController';
import { getEntityManager, Repository } from "typeorm";
import {  } from "../models/entities/userDwellings";
import {User} from '../models/entities/users';
import{BaseDAO} from "../config/baseDAO";



export class ProductSkuAttributeDAO extends BaseDAO<ProductSkuAttribute>{
    
public rep: Repository<ProductSkuAttribute>;
//public rep1: Repository<User>;

    constructor() {
    super(ProductSkuAttribute);
        this.rep = getEntityManager().getRepository(ProductSkuAttribute);
       // this.rep1 = getEntityManager().getRepository(User);
    }
    
    
    findAll(){
        return this.rep.find({},{
            alias : "userdwelling",
            leftJoinAndSelect:{
                "users" : "userdwelling.users",
                "dwellings" : "userdwelling.dwellings",
                "subcommunities" : "dwellings.subCommunity",
                "community" : "subcommunities.community"


            }
        });
    }

    entity(id){
        return this.rep.findOneById(id,{
            alias : "userdwelling",
            leftJoinAndSelect:{
                "users" : "userdwelling.users",
                "dwellings" : "userdwelling.dwellings",
                "subcommunities" : "dwellings.subCommunity",
                "community" : "subcommunities.community"


            }
        });
    }

    right(id){
        return this.rep.findOneById(id,{
            alias:"userdwelling",
            innerJoinAndSelect:{
               "dwellings":"userdwelling.dwellings" 
            }
        })
    }


    // findEmpty(id){
    //     return this.rep.findOneById(id,{
    //         alias:"user",
    //         innerJoinAndSelect:{
    //             "user_dwelling":"user.user_dwellings",
    //             "holdrequests":"user.holdrequests",
    //             "dwellings" : "userdwelling.dwellings",
    //             "sub_communities" : "dwellings.subCommunity",
    //             "community" : "sub_communities.community"

    //             // "sub_communities" : "dwellings.subCommunity",
    //             // "community" : "sub_communities.community"
    //         }
    //     });
    // }
   
}

    
    
    
    
    

Object.seal(ProductSkuAttributeDAO);
