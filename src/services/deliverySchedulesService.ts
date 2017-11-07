import { App } from "./../utils/App";
import { DeliverySchedule } from "./../models/entities/deliverySchedules";
import { DeliverySchedulesDAO } from "./../daos/deliverySchedulesDAO";

export class DeliverySchedulesService {
    private delivery_SchedulesDao: DeliverySchedulesDAO;


    constructor() {
        this.delivery_SchedulesDao = new DeliverySchedulesDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.delivery_SchedulesDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.delivery_SchedulesDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: DeliverySchedule) {
        try {
            if (this.validate(item)) {
                let itemid = item.product_skus;
                console.log(itemid);
                let res = await this.delivery_SchedulesDao.search1(item.product_skus);
                console.log(res);
                if(res.length>0){
                let item2={
                    id:item.id,
                    community_id:item.community_id,
                    delivery_date:item.delivery_date,
                    quantity:item.quantity,
                    sub_communities:item.sub_communities,
                    supplier_id:item.supplier_id,
                    user_billing:item.user_billing,
                    user_dwellings:item.user_dwellings,
                    product_skus:res
                }
                let delivery_SchedulesData: any = await this.delivery_SchedulesDao.save(item2);
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
            let data: DeliverySchedule = (await this.delivery_SchedulesDao.entity(id))
            let result: any = await this.delivery_SchedulesDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: DeliverySchedule) {
        return true;
    }
}