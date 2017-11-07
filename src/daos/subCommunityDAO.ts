import { getEntityManager, Repository } from "typeorm";
import { SubCommunity } from "../models/entities/subCommunities";
import{BaseDAO} from "../config/baseDAO";

export class SubCommunityDAO extends BaseDAO<SubCommunity>{
    
public rep: Repository<SubCommunity>;

    constructor() {
    super(SubCommunity);
        this.rep = getEntityManager().getRepository(SubCommunity);
    }
    
  

    search(data : any){
        return this.rep.find(data, {
            alias: "subcommunity", 
            innerJoinAndSelect: { 
                "community": "subcommunity.community",
            }, 
        });
    }


    
 
    }

    
    
    
    
    

Object.seal(SubCommunityDAO);

