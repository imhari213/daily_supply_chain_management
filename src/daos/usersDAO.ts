import { getEntityManager, Repository } from "typeorm";
import { User } from "../models/entities/users";
import{BaseDAO} from "../config/baseDAO";

export class UsersDAO extends BaseDAO<User>{
    
public rep: Repository<User>;

    constructor() {
    super(User);
        this.rep = getEntityManager().getRepository(User);
    }
    
    entity1(id){
        return this.rep.findOneById(id,{
            alias:"user",
                    leftJoinAndSelect:{
                        "user_dwelling":"user.user_dwellings",
                        "holdrequests":"user.holdrequests",
                        "dwellings" : "user_dwelling.dwellings",
                        "sub_communities" : "dwellings.subCommunity",
                        "community" : "sub_communities.community"
        
                        // "sub_communities" : "dwellings.subCommunity",
                        // "community" : "sub_communities.community"
                    }
        });
    }

    findAll1(){
        return this.rep.find({},{
            alias:"user",
            leftJoinAndSelect:{
                "user_dwelling":"user.user_dwellings",
                "holdrequests":"user.holdrequests",
                "dwellings" : "user_dwelling.dwellings",
                "sub_communities" : "dwellings.subCommunity",
                "community" : "sub_communities.community"

                // "sub_communities" : "dwellings.subCommunity",
                // "community" : "sub_communities.community"
            }
        });
    }

  /*  save(data:user){
        console.log("In user DAO");
    return this.rep.persist(data);
    }
    
*/

 
    }

    
    
    
    
    

Object.seal(UsersDAO);

