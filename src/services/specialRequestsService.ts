import { App } from "./../utils/App";
import { SpecialRequest } from "./../models/entities/specialRequests";
import { SpecialRequestsDAO } from "./../daos/specialRequestsDAO";
import { Supplier } from "./../models/entities/suppliers";
import { SuppliersDAO } from "./../daos/suppliersDAO";

export class SpecialRequestsService {
    private special_RequestsDao: SpecialRequestsDAO;
    private suppliersDAO: SuppliersDAO;
    


    constructor() {
        this.special_RequestsDao = new SpecialRequestsDAO();
        this.suppliersDAO = new SuppliersDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.special_RequestsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.special_RequestsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: SpecialRequest) {
        try {
            if (this.validate(item)) {
                let special_RequestsData: any = await this.special_RequestsDao.save(item);
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
            let data: SpecialRequest = (await this.special_RequestsDao.entity(id))
            let result: any = await this.special_RequestsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: SpecialRequest) {
        return true;
    }
}