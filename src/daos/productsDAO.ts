import { getEntityManager, Repository } from "typeorm";
import { Product } from "../models/entities/products";
import{BaseDAO} from "../config/baseDAO";

export class ProductsDAO extends BaseDAO<Product>{
    
public rep: Repository<Product>;

    constructor() {
    super(Product);
        this.rep = getEntityManager().getRepository(Product);
    }
    
    entity(id){
        return this.rep.findOneById(id,{
            alias : "products",
            leftJoinAndSelect:{
                "manufacturer" : "products.manufacturer",
                "product_category_id":"products.product_category_id",
                "supplier_id":"products.supplier_id",
                "product_skus" : "products.product_skus",
                //"product_sku_prices":"product_skus.product_sku_prices"


            }
        });
    }

    findAll(){
        return this.rep.find({},{
            alias : "products",
            leftJoinAndSelect:{
                "manufacturer" : "products.manufacturer",
                "product_category_id":"products.product_category_id",
                "supplier_id":"products.supplier_id",
                "product_skus" : "products.product_skus",
                //"product_sku_prices":"product_skus.product_sku_prices"

            }
        });
    }

    // save(id){
    //     return this.rep.findOneById(id,{
    //         alias : "products",
    //         innerJoinAndSelect:{
    //             "manufacturers" : "products.manufacturers",
    //             "consumable_product_categories":"products.consumable_product_categories",
    //             "suppliers":"products.suppliers"
    //            // "product_skus" : "products.product_skus"
    //            // "product_sku_prices":"product_skus.product_sku_prices"

    //         }
    //     });
    // }


    // save(id){
    //     return this.rep.find({},{
    //         alias : "product",
    //         innerJoinAndSelect:{
    //             "manufacturers" : "product.manufacturers",
    //             "product_skus" : "userdwelling.product_skus"

    //         }
    //     });
    // }

 
    // }

    
    
    
}  
    

Object.seal(ProductsDAO);

