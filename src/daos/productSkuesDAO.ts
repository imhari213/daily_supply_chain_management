import { getEntityManager, Repository } from "typeorm";
import { ProductSku } from "../models/entities/productSku";
import{BaseDAO} from "../config/baseDAO";

export class ProductSkuesDAO extends BaseDAO<ProductSku>{
    public rep: Repository<ProductSku>;
    
        constructor() {
        super(ProductSku);
            this.rep = getEntityManager().getRepository(ProductSku);
        }
        findAll(){
            return this.rep.find({},{
                alias : "product_skus",
                leftJoinAndSelect:{
                    "products" : "product_skus.products"
                   // "product_sku_prices":"product_skus.product_sku_prices"
                    
                }
    
                });
        }
        
        entity(id: any) {
            return this.rep.findOneById(id,{
                alias: "product_skus",
                leftJoinAndSelect: {
                    "products" : "productskus.products"
                   // "product_sku_prices":"product_skus.product_sku_prices"
    
                   
                },  
            });
        } 
    }

    
    
    
    
    

Object.seal(ProductSkuesDAO);

