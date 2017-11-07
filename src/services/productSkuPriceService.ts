

import { App } from "./../utils/App";

import { ProductSkuePricesDAO } from '../daos/productSkuPricesDAO';
import { ProductSkuPrice } from "../models/entities/productSkuPrices";


export class ProductSkuPriceService {
    private productSkuePricesDAO: ProductSkuePricesDAO;
    
    constructor() {
        this.productSkuePricesDAO = new ProductSkuePricesDAO();
        
    }
    
    async save(item: ProductSkuPrice) {
        try {
            let data = await this.productSkuePricesDAO.search({effective: item.effective});
                if(item.id!=null && data.length>0){
                    let userData : any = await this.productSkuePricesDAO.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "user name Already Exits" });
                }else {
                    let updateUser = await this.productSkuePricesDAO.save(item);
                        return Promise.resolve(updateUser);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }

        async entity(id: any) {
            try {
                let data: any = await this.productSkuePricesDAO.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }


        // async delete(id: any) {
        //     try {
        //         let data: ProductSkuPrice = (await this.productSkuePricesDAO.entity(id))
        //         data.active = false;
        //         let result: any = await this.productSkuePricesDAO.save(data);
        //         let returnData = {
        //             id: id,
        //             message: "Removed Successfully"
        //         }
        //         return Promise.resolve(returnData);
        //     } catch (error) {
        //         return Promise.reject(error);
        //     }
        // }


        async findAll() {
            try {
                let data: any = await this.productSkuePricesDAO.findAll();
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error);
            }
        }









  
}
