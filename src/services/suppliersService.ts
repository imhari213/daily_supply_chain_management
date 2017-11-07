import { App } from "./../utils/App";
import { Supplier } from "./../models/entities/suppliers";
import { SuppliersDAO } from "./../daos/suppliersDAO";

export class SuppliersService {
    private suppliersDao: SuppliersDAO;


    constructor() {
        this.suppliersDao = new SuppliersDAO();

    }

    async save(item: Supplier) {
        try {
            let data = await this.suppliersDao.search({mobile: item.mobile});
                if(item.id!=null && data.length>0){
                    let userData : any = await this.suppliersDao.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "supplier Already Exits" });
                }else {
                    let updateUser = await this.suppliersDao.save(item);
                        return Promise.resolve(updateUser);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }

        async entity(id: any) {
            try {
                let data: any = await this.suppliersDao.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }


        async delete(id: any) {
            try {
                let data: Supplier = (await this.suppliersDao.entity(id))
                data.active = false;
                let result: any = await this.suppliersDao.save(data);
                let returnData = {
                    id: id,
                    message: "Removed Successfully"
                }
                return Promise.resolve(returnData);
            } catch (error) {
                return Promise.reject(error);
            }
        }


        async findAll(id:any) {
            try {
                let data: any = await this.suppliersDao.search(id);
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error);
            }
        }









  
}