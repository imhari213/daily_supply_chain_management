

import { App } from "./../utils/App";

import { ManufacturersDAO } from '../daos/manufacturersDAO';
import { Manufacturer } from "../models/entities/manufacturers";


export class ManufacturersService {
    private manufacturersDAO: ManufacturersDAO;
    
    constructor() {
        this.manufacturersDAO = new ManufacturersDAO();
        
    }
    
    async save(item: Manufacturer) {
        try {
            let data = await this.manufacturersDAO.search({name: item.name});
                if(item.id!=null && data.length>0){
                    let userData : any = await this.manufacturersDAO.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "name Already Exits" });
                }else {
                    let updateUser = await this.manufacturersDAO.save(item);
                        return Promise.resolve(updateUser);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }



        }

        async entity(id: any) {
            try {
                let data: any = await this.manufacturersDAO.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }


        async delete(id: any) {
            try {
                let data: Manufacturer = (await this.manufacturersDAO.entity(id))
                data.active = false;
                let result: any = await this.manufacturersDAO.save(data);
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
                let data: any = await this.manufacturersDAO.findAll();
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error);
            }
        }
  
}