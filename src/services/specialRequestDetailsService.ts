import { App } from "./../utils/App";
import { SpecialRequestDetail } from "./../models/entities/specialRequestDetails";
import { SpecialRequestDetailsDAO } from "./../daos/specialRequestDetailsDAO";
import {ProductSku} from './../models/entities/productSku';
import {ProductSkuesDAO} from './../daos/productSkuesDAO';

export class SpecialRequestDetailsService {
    private special_Requests_DetailsDao: SpecialRequestDetailsDAO;


    constructor() {
        this.special_Requests_DetailsDao = new SpecialRequestDetailsDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.special_Requests_DetailsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.special_Requests_DetailsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: SpecialRequestDetail) {
        try {
            if (this.validate(item)) {
                let psq = item.product_skus;
                let psq1 = new ProductSku();
                console.log(psq);
                let res = await this.special_Requests_DetailsDao.search1(item.product_skus);
                console.log(res);
                if(res.length>0){
                    let item1 = {
                        id:item.id,
                        quantity:item.quantity,
                        special_requests:item.special_requests,
                        product_skus:res
                    }
                
                let regular_consumptionsData: any = await this.special_Requests_DetailsDao.save(item1);
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
            let data: SpecialRequestDetail = (await this.special_Requests_DetailsDao.entity(id))
            let result: any = await this.special_Requests_DetailsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: SpecialRequestDetail) {
        return true;
    }
}