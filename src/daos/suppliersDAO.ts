import { getEntityManager, Repository } from "typeorm";
import {Supplier} from "./../models/entities/suppliers";
import{BaseDAO} from "../config/baseDAO";


export class SuppliersDAO extends BaseDAO<Supplier>{
    
public rep: Repository<Supplier>;

    constructor() {
    super(Supplier);
        this.rep = getEntityManager().getRepository(Supplier);
    }
    

}

    
    
    
    
    

Object.seal(SuppliersDAO);