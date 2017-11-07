

import { App } from "./../utils/App";

import { ProductSkuAttributeDAO } from '../daos/productSkuAttributesDAO';
import { ProductSkuAttribute } from "../models/entities/productSkuAttributes";


export class ProductSkuAttributesService {
    private productSkuAttributeDAO: ProductSkuAttributeDAO;
    
    constructor() {
        this.productSkuAttributeDAO = new ProductSkuAttributeDAO();
        
    }
    
    async save(item: ProductSkuAttribute) {
        try {
            let data = await this.productSkuAttributeDAO.search({id: item.id});
                if(item.id!=null && data.length>0){
                    let userData : any = await this.productSkuAttributeDAO.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "name Already Exits" });
                }else {
                    let updateproduct = await this.productSkuAttributeDAO.save(item);
                        return Promise.resolve(updateproduct);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }

        async entity(id: any) {
            try {
                let data: any = await this.productSkuAttributeDAO.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }


        async delete(id: any) {
            try {
                let data: ProductSkuAttribute = (await this.productSkuAttributeDAO.entity(id))
               // data.active = false;
                let result: any = await this.productSkuAttributeDAO.save(data);
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
                let data: any = await this.productSkuAttributeDAO.findAll();
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error);
            }
        }


 
}