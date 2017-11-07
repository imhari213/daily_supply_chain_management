import { getEntityManager, Repository } from "typeorm";
import { ProductAttribute } from "../models/entities/productAttributes";
import{BaseDAO} from "../config/baseDAO";

export class ProductAttributeDAO extends BaseDAO<ProductAttribute>{
    public rep: Repository<ProductAttribute>;
    
    
    constructor() {
        super(ProductAttribute);
            this.rep = getEntityManager().getRepository(ProductAttribute);
        }
        
 
    }
        

Object.seal(ProductAttributeDAO);

