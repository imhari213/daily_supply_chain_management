

import { App } from "./../utils/App";

import { ProductSkuesDAO } from '../daos/productSkuesDAO';
import { ProductSku } from "../models/entities/productSku";


export class ProductSkuService {
    private productSkuesDAO: ProductSkuesDAO;
    
    constructor() {
        this.productSkuesDAO = new ProductSkuesDAO();
        
    }
    
    async save(item: ProductSku) {
        try {
           console.log("In try" + item);
            let data = await this.productSkuesDAO.search({id: item.id});
                if(item.id!=null && data.length>0){
                    let productSkuesData : any = await this.productSkuesDAO.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "Product Sku Already Exits" });
                }else {
                    let updateProductSKues = await this.productSkuesDAO.save(item);
                        return Promise.resolve(updateProductSKues);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }

       async entity(id: any) {
            try {
                let data: any = await this.productSkuesDAO.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }


      async delete(id: any) {
            try {
                let data: ProductSku = (await this.productSkuesDAO.entity(id))
                data.active = false;
                let result: any = await this.productSkuesDAO.save(data);
                let returnData = {
                    id: id,
                    message: "Removed Successfully"
                }
                return Promise.resolve(returnData);
            } catch (error) {
                return Promise.reject(error);
            }
        }


        async findAll() {
            try {
                let data: any = await this.productSkuesDAO.findAll();
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error);
            }
        }



   /*     async search(item: any){
            try{
                let data = await this.productSkuesDAO.search({consumable_product_category: item});
                let returnData = {
                    productCategories : data
                }
                return Promise.resolve(returnData);
                
            }catch(error){
                return Promise.reject(error);
            }
        }
*/




  
}