


import { DwellingDAO } from '../daos/dwellingDAO';
import { Dwelling } from "../models/entities/dwellings";


export class DwellingService {
    private dwellingDAO: DwellingDAO;
    
    constructor() {
        this.dwellingDAO = new DwellingDAO();
        
    }


    async save(item: Dwelling) {
        try {
            let data = await this.dwellingDAO.search({name: item.name});
                if(item.id!=null && data.length>0){
                    let dwellingData : any = await this.dwellingDAO.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "Dwelling name Already Exits" });
                }else {
                    let updateDwelling = await this.dwellingDAO.save(item);
                        return Promise.resolve(updateDwelling);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }
    
        async search(item: any){
            try{
                let data = await this.dwellingDAO.search({sub_community: item});
                let returnData = {
                    dwellings : data
                }
                return Promise.resolve(data);
                
            }catch(error){
                return Promise.reject(error);
            }
        }

        async entity(id: any) {
            try {
                let data: any = await this.dwellingDAO.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }


        async delete(id: any) {
            try {
                let data: Dwelling = (await this.dwellingDAO.entity(id))
                data.active = false;
                let result: any = await this.dwellingDAO.save(data);
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
                let data: any = await this.dwellingDAO.findAll();
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error);
            }
        }


}