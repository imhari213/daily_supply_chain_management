import { UsersDAO } from '../daos/usersDAO';
import { log } from 'util';
import { UserDwellingDAO } from '../daos/userDwellingsDAO';
import { UserDwelling } from "../models/entities/userDwellings";
import {User} from '../models/entities/users';


export class UserDwellingService {
    private userDwellingDAO: UserDwellingDAO;
    private userDAO: UsersDAO;
    private conn :UserDwelling;
    
    constructor() {
        this.userDwellingDAO = new UserDwellingDAO();
        this.userDAO = new UsersDAO();
        this.conn = new UserDwelling();
    }
    
    async save(item: UserDwelling) {
        try {
          //  console.log("in try");
            //console.log(item.users.id);
            let data = await this.userDwellingDAO.search({user: item.users.id});
                if(item.id!=null && data.length>0){
                    let userDwellingData : any = await this.userDwellingDAO.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    let insertUserDwelling = await this.userDwellingDAO.save(item);
                    return Promise.resolve(insertUserDwelling);
                    //return Promise.resolve({ message: "user Already Exits" });
                }else if(item.id==null){
                    
                    let updateUserDwelling = await this.userDwellingDAO.save(item);
                        return Promise.resolve(updateUserDwelling);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }  




    async findOneAndAll(item:UserDwelling) {
            try {
                let users = item.users.id;
                let main = item.id;
                console.log("User id is: ",users);
                let data = await this.userDwellingDAO.search({users: item.users.id});
                console.log(data);

                if(users != null && data.length>0){
                    console.log("I am just a tester");
                    let findoneuserdwelling = await this.userDAO.entity1(users);
                    console.log(findoneuserdwelling)
                    return Promise.resolve(findoneuserdwelling)
                
                }else if(users !=null && data.length == 0){
                    console.log("I am stumped")
                    let findempty = await this.userDAO.entity1(users);
                    console.log(findempty);
                    return Promise.resolve(findempty)
                }else if(users == null) {
                    
                        //return Promise.reject({ message: "user Already Exits" });
                        let findalluserdwellings = await this.userDAO.findAll1();
                        return Promise.resolve(findalluserdwellings);
                }
            }
             catch (error) {
                return Promise.reject(error);
            }
        }

        async entity(id: any) {
            try {
                let data: any = await this.userDwellingDAO.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }

        async reverse(item:User){
            try{
                let user = item.id;
                let dwellingd = item.user_dwellings;
                let address = item.user_dwellings;
               // let dweid = item.user_dwellings;

                console.log("User id is: ",user);
                let data = await this.userDwellingDAO.search({user: item.id});
                //let data1 = await this.userDAO.search({user:item.id});
               // let findoneuserdwelling = await this.userDwellingDAO.right(user);
                console.log(data);
                // console.log("findoneuserdwelling is ",findoneuserdwelling);
                // console.log("findoneuserdwelling dwelling is ",findoneuserdwelling);

                if(user != null && data.length>0){
                    console.log("I am just a tester");
                    let findoneuserdwelling = await this.userDwellingDAO.entity(user);
                    console.log(findoneuserdwelling)
                    return Promise.resolve(findoneuserdwelling)
                }

                else if(user != null && data.length == 0){
                    //console.log(findoneuserdwelling);
                    console.log("I am just a stumper");
                    let findoneuserdwelling = await this.userDwellingDAO.search({user:item.id});
                    console.log(findoneuserdwelling)
                    return Promise.resolve(findoneuserdwelling)
                }
                else if(user == null) {
                    
                        //return Promise.reject({ message: "user Already Exits" });
                        let findalluserdwellings = await this.userDwellingDAO.findAll();
                        console.log(findalluserdwellings)
                        return Promise.resolve(findalluserdwellings);
                }

            }catch(error){
                return Promise.reject(error);
            }
        }

        

        // async findAll() {
        //     try {
        //         let data: any = await this.userDwellingDAO.findAll();
        //         return Promise.resolve(data)
        //     } catch (error) {
        //         return Promise.reject(error);
        //     }
        // }


}