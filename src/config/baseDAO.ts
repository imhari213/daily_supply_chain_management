import "reflect-metadata";
import {getEntityManager, Repository} from "typeorm";
import {ObjectType} from "./ObjectType";


export class BaseDAO<T>{

    private dao:Repository<T>;
    private type: ObjectType<T>;
    
    constructor(type:ObjectType<T>){
        this.type=type;
        this.dao=getEntityManager().getRepository(type);
    }



    search(data:any){
        return this.dao.find(data);
        }  

        save(data:T){
            return this.dao.persist(data);
            } 
            
            
            delete(data: any) {
                
             //return this.dao.remove([data]);
             return this.dao.remove(data);
             }
             
             
         
             findRecord(data: any){
             return this.dao.findOne(data);
             }
           
             findAll(){
                 return this.dao.find();
             }
             
             findOneById(data:T){
                 return this.dao.findOneById(data);
             }

             entity(id: any) {
                return this.dao.findOneById(id);
            }

}