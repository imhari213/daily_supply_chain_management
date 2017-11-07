import { App } from "./../utils/App";
import { HoldRequest } from "./../models/entities/holdRequests";
import { HoldRequestsDAO } from "./../daos/holdRequestsDAO";

export class HoldRequestsService {
    private hold_RequestsDao:HoldRequestsDAO;


    constructor() {
        this.hold_RequestsDao = new HoldRequestsDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.hold_RequestsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.hold_RequestsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item:HoldRequest) {
        try {
            if (this.validate(item)) {
                
                let hold_requestsData: any = await this.hold_RequestsDao.save(item);
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
            let data: HoldRequest = (await this.hold_RequestsDao.entity(id))
            let result: any = await this.hold_RequestsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: HoldRequest) {
        return true;
    }
}