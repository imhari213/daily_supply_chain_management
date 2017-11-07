import * as console from 'console';
import { log } from 'util';
import { App } from "./../utils/App";
import { DailyOrderSheet } from "./../models/entities/dailyOrderSheets";
import { DailyOrderSheetsDAO } from "./../daos/dailyOrderSheetsDAO";
import {ProductSku} from './../models/entities/productSku';
import {ProductSkuesDAO} from './../daos/productSkuesDAO';

export class DailyOrderSheetsService {
    private dailyOrderSheetsDao: DailyOrderSheetsDAO;
    private productskuesDao : ProductSkuesDAO;

    constructor() {
        this.dailyOrderSheetsDao = new DailyOrderSheetsDAO();
        this.productskuesDao = new ProductSkuesDAO();
    }

    async entity(id: string) {
        try {
            let data: any = await this.dailyOrderSheetsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.dailyOrderSheetsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: DailyOrderSheet) {
        try {
            if (this.validate(item)) {
              
                 console.log(item.product_skus);
                 
               
                let result = await this.dailyOrderSheetsDao.search1(item.product_skus);

                console.log(result);
                if(result.length>0){
                    let item1 = {
                        id:item.id,
                        manufacturers:item.manufacturers,
                        order_date:item.order_date,
                        quantity:item.quantity,
                        suppliers:item.suppliers,
                        product_skus:result
                    }
                
                    let regular_ConsumptionsData: any = await this.dailyOrderSheetsDao.save(item1);
                    let returnData = {
                        id: item.id,
                        message: "Saved Successfully"
                    }
                    return Promise.resolve(returnData);
                }
                } else {
                let returnData = {
                    message: "Please enter proper values."
                }
                return Promise.reject(returnData);
            }

        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: DailyOrderSheet = (await this.dailyOrderSheetsDao.entity(id))
            let result: any = await this.dailyOrderSheetsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: DailyOrderSheet) {
        return true;
    }
}
