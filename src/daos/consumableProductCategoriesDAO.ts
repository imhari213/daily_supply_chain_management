import { getEntityManager, Repository } from "typeorm";
import { ConsumableProductCategory } from "../models/entities/consumableProductCategories";
import{BaseDAO} from "../config/baseDAO";

export class ConsumableProductCategoriesDAO extends BaseDAO<ConsumableProductCategory>{
    public rep: Repository<ConsumableProductCategory>;
    constructor() {
        super(ConsumableProductCategory);
            this.rep = getEntityManager().getRepository(ConsumableProductCategory);
        }
 
    }

    
    
    
    
    

Object.seal(ConsumableProductCategoriesDAO);

