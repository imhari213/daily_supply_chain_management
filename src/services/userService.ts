

import { App } from "./../utils/App";

import { UsersDAO } from '../daos/usersDAO';
import { User } from "../models/entities/users";
import { UserDwellingDAO } from '../daos/userDwellingsDAO';
import { UserDwelling } from "../models/entities/userDwellings";



export class UsersService {
    private userDAO: UsersDAO;
    private userDwellingDAO: UserDwellingDAO;
    
    constructor() {
        this.userDAO = new UsersDAO();
        this.userDwellingDAO = new UserDwellingDAO();
        
    }
    
    async save(item: User) {
        try {
            let data = await this.userDAO.search({name: item.name});
                if(item.id!=null && data.length>0){
                    let userData : any = await this.userDAO.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "user name Already Exits" });
                }else if(item.id == null){
                    console.log("hello");
                    let updateUser = await this.userDAO.save(item);
                    console.log(updateUser)
                    let use : any = {
                        id: null,
                        users:{id:updateUser.id}
                    };
                    let updateUserDwelling = await this.userDwellingDAO.save(use);
                    console.log(updateUserDwelling);
                        return Promise.resolve(updateUser);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }

        async entity(id: any) {
            try {
                let data: any = await this.userDAO.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }


        async delete(id: any) {
            try {
                let data: User = (await this.userDAO.entity(id))
                data.active = false;
                let result: any = await this.userDAO.save(data);
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
                let data: any = await this.userDAO.findAll();
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error);
            }
        }









  
}