import { getEntityManager, Repository } from "typeorm";
import { ProductSkuPrice } from "../models/entities/productSkuPrices";
import{BaseDAO} from "../config/baseDAO";


export class ProductSkuePricesDAO extends BaseDAO<ProductSkuPrice>{
    
public rep: Repository<ProductSkuPrice>;

    constructor() {
    super(ProductSkuPrice);
        this.rep = getEntityManager().getRepository(ProductSkuPrice);
    }
    
 

 
    }

    
    
    
    
    

Object.seal(ProductSkuePricesDAO);

