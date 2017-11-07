

import { App } from "./../utils/App";

import { ProductAttributeDAO } from '../daos/productAttributesDAO';
import { ProductAttribute } from "../models/entities/productAttributes";


export class ProductAttributesService {
    private productAttributeDAO: ProductAttributeDAO;
    
    constructor() {
        this.productAttributeDAO = new ProductAttributeDAO();
        
    }
    
    async save(item: ProductAttribute) {
        try {
            let data = await this.productAttributeDAO.search({name: item.name});
                if(item.id!=null && data.length>0){
                    let userData : any = await this.productAttributeDAO.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "name Already Exits" });
                }else {
                    let updateproduct = await this.productAttributeDAO.save(item);
                        return Promise.resolve(updateproduct);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }

        async entity(id: any) {
            try {
                let data: any = await this.productAttributeDAO.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }


        async delete(id: any) {
            try {
                let data: ProductAttribute = (await this.productAttributeDAO.entity(id))
                data.active = false;
                let result: any = await this.productAttributeDAO.save(data);
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
                let data: any = await this.productAttributeDAO.findAll();
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error);
            }
        }


 
}