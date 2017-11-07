import { getEntityManager, Repository } from "typeorm";
import { Manufacturer } from "../models/entities/manufacturers";
import{BaseDAO} from "../config/baseDAO";

export class ManufacturersDAO extends BaseDAO<Manufacturer> {

    public rep: Repository<Manufacturer>;
    constructor() {
        super(Manufacturer);
            this.rep = getEntityManager().getRepository(Manufacturer);
        }
 
    }

    
    
    
    
    

Object.seal(ManufacturersDAO);

