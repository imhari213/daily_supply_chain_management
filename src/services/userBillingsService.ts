import { App } from "./../utils/App";
import { UserBilling } from "./../models/entities/userBillings";
import { UserBillingsDAO } from "./../daos/userBillingsDAO";

export class UserBillingsService {
    private user_BillingsDao: UserBillingsDAO;


    constructor() {
        this.user_BillingsDao = new UserBillingsDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.user_BillingsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.user_BillingsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: UserBilling) {
        try {
            if (this.validate(item)) {
                let user_billingsData: any = await this.user_BillingsDao.save(item);
                let returnData = {
                    id: item.id,
                    message: "Saved Successfully"
                }
                return Promise.resolve(returnData);
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
            let data: UserBilling = (await this.user_BillingsDao.entity(id))
            let result: any = await this.user_BillingsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: UserBilling) {
        return true;
    }
}