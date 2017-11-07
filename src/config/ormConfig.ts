import "reflect-metadata";

import{createConnection,ConnectionOptions} from "typeorm";
/*import { User } from "../models/entities/users";
import {Community} from "../models/entities/communities";
import {SubCommunity} from "../models/entities/subCommunities";   */


export class  OrmConfig{
 
    public connectionOptions: ConnectionOptions = {
    driver: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "varaprasad",
        database: "milkman",
        usePool: true
    },
    entities: ["dist/models/entities/*.js"],
    autoSchemaSync: true
};
    
    constructor(){

        this.getConnection();
        
    }
    
    
    public  getConnection(){

        
        createConnection(this.connectionOptions).then(connection => {
if(connection){
    console.log("Database connection successfull");
}

    

});
        
        
        
        
    }
    
}
