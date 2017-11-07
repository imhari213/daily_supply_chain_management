import { App } from "./../utils/App";
import { Product } from "./../models/entities/products";
import { ProductsDAO } from "./../daos/productsDAO";

export class ProductsService {
    private productsDao: ProductsDAO;


    constructor() {
        this.productsDao = new ProductsDAO();

    }

    async save(item: Product) {
        try {
            let data = await this.productsDao.search({id: item.id});
                if(item.id!=null && data.length>0){
                    let userData : any = await this.productsDao.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "product Already Exits" });
                }else {
                    let updateUser = await this.productsDao.save(item);
                        return Promise.resolve(updateUser);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }

        async entity(id: any) {
            try {
                let data: any = await this.productsDao.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }


        async delete(id: any) {
            try {
                let data: Product = (await this.productsDao.entity(id))
                data.active = false;
                let result: any = await this.productsDao.save(data);
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
                let data: any = await this.productsDao.findAll();
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error);
            }
        }









  
}
