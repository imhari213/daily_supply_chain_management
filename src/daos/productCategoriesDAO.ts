import { getEntityManager, Repository } from "typeorm";
import { ProductCategory } from "../models/entities/productCategories";
import{BaseDAO} from "../config/baseDAO";

export class ProductCategoryDAO extends BaseDAO<ProductCategory>{
    public rep: Repository<ProductCategory>;
    
        constructor() {
        super(ProductCategory);
            this.rep = getEntityManager().getRepository(ProductCategory);
        }
        
        findAll(){
            return this.rep.find({},{
                alias : "productcategory",
                innerJoinAndSelect:{
                    "consumableproductcategory" : "productcategory.consumable_product_categories",
                    
    
    
                }
            });
        }


        search(data : any){
            return this.rep.find(data, {
                alias: "productcategory", 
                innerJoinAndSelect: { 
                    "consumableproductcategory": "productcategory.consumable_product_categories",
                }, 
            });
        }



        entity(id: any) {
            return this.rep.findOneById(id,{
                alias: "productcategory",
                innerJoinAndSelect: {
                    "consumableproductcategory": "productcategory.consumable_product_categories"
    
                   
                },  
            });
        } 
 
    }

    
    
    
    
    

Object.seal(ProductCategoryDAO);

