import "reflect-metadata";

import * as express from "express";
//import{createConnection,ConnectionOptions} from "typeorm";
//import { user } from "./models/entites/user";

import { json, urlencoded } from "body-parser";
import * as http from "http";


import {OrmConfig} from "./config/ormConfig";


//process.env.NODE_ENV = "testing";

const app: express.Application = express();

//new ormConfig();
/*createConnection({
    driver: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "root",
        database: "milkman"
    },
    entities: [
        user
    ],
    autoSchemaSync: true
}).then(connection => {

if(connection){
    console.log("connected");
}
});
     */   


app.use(json());

var parsePost = function (req:any, callback:any) {
    var data = '';
    req.on('data', function (chunk:any) {
        data += chunk;
    });
    req.on('end', function () {
        if (data != '') {
            data = JSON.parse(data);
        }
        callback(data);
    });
}



app.all('*', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'accept, Content-Type, Authorization');

    if (req.headers['content-type'] && req.headers['content-type'].indexOf('application/x-www-form-urlencoded') > -1) {
        parsePost(req, function (data:any) {
            if (data && data != '') {
                req.body = data;
            }
            next();
        });
    } else {
        next();
    }

});



app.get("/", (request: express.Request, response: express.Response) => {
    response.json({
        name: "Milkman Under Development...:|"
    })
});

app.use((err:Error & {status:number},request:express.Request,response:express.Response,next:express.NextFunction):void=>{
    response.status(err.status || 500);
    response.json({
        error:"Server error"
    })
});

var appRestRouter = express.Router();
import { AppController } from './routes/AppController';

var appRestRouter = express.Router();
import { APIDocs } from './swagger/ApiDocs';

import { createConnection } from "typeorm";
createConnection().then(async connection => {


    let appController = new AppController();
    app.use('/api', appController.getRouter());


     let apiDocs = new APIDocs();
     app.use('/swagger', apiDocs.getRouter());

    app.listen(5000);
    console.log("Listen port: 5000");
}).catch(error => console.log("TypeORM connection error: ", error));

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});
//export { server };
