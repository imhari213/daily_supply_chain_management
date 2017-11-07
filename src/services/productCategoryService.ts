

import { App } from "./../utils/App";

import { ProductCategoryDAO } from '../daos/productCategoriesDAO';
import { ProductCategory } from "../models/entities/productCategories";


export class ProductCategoryService {
    private productCategoryDAO: ProductCategoryDAO;
    
    constructor() {
        this.productCategoryDAO = new ProductCategoryDAO();
        
    }
    
    async save(item: ProductCategory) {
        try {
          //  console.log("In try" + item);
            let data = await this.productCategoryDAO.search({name: item.name});
                if(item.id!=null && data.length>0){
                    let productCategoryData : any = await this.productCategoryDAO.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "Product Category name Already Exits" });
                }else {
                    let updateProductCategory = await this.productCategoryDAO.save(item);
                        return Promise.resolve(updateProductCategory);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }

        async entity(id: any) {
            try {
                let data: any = await this.productCategoryDAO.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }


      async delete(id: any) {
            try {
                let data: ProductCategory = (await this.productCategoryDAO.entity(id))
                data.active = false;
                let result: any = await this.productCategoryDAO.save(data);
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
                let data: any = await this.productCategoryDAO.findAll();
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error);
            }
        }



        async search(item: any){
            try{
                let data = await this.productCategoryDAO.search({consumable_product_category: item});
                let returnData = {
                    productCategories : data
                }
                return Promise.resolve(returnData);
                
            }catch(error){
                return Promise.reject(error);
            }
        }





  
}