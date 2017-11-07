import { getEntityManager, Repository } from "typeorm";
import { Community } from "../models/entities/communities";
import {BaseDAO} from "../config/baseDAO";

export class CommunityDAO extends BaseDAO<Community>{
    
public rep: Repository<Community>;

    constructor() {
        super(Community);
    this.rep = getEntityManager().getRepository(Community);

    }
    
  
 
    }

    
    
    
    
    

Object.seal(CommunityDAO);

