import { ConsumableProductCategoriesController } from '../routes/controllers/consumableProductCategoriesControllers';


import { App } from "./../utils/App";

import { ConsumableProductCategoriesDAO } from '../daos/consumableProductCategoriesDAO';
import { ConsumableProductCategory } from "../models/entities/consumableProductCategories";


export class ConsumableProductCategoriesService {
    private consumableProductCategoriesDAO: ConsumableProductCategoriesDAO;
    
    constructor() {
        this.consumableProductCategoriesDAO = new ConsumableProductCategoriesDAO();
        
    }
    
    async save(item: ConsumableProductCategory) {
        try {
            let data = await this.consumableProductCategoriesDAO.search({name: item.name});
                if(item.id!=null && data.length>0){
                    let consumableProductCategoriesData : any = await this.consumableProductCategoriesDAO.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "Consumable Product Category item Already Exits" });
                }else {
                    let updateUser = await this.consumableProductCategoriesDAO.save(item);
                        return Promise.resolve(updateUser);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }

        async entity(id: any) {
            try {
                let data: any = await this.consumableProductCategoriesDAO.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }


        async delete(id: any) {
            try {
                let data: ConsumableProductCategory = (await this.consumableProductCategoriesDAO.entity(id))
                data.active = false;
                let result: any = await this.consumableProductCategoriesDAO.save(data);
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
                let data: any = await this.consumableProductCategoriesDAO.findAll();
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error);
            }
        }









  
}