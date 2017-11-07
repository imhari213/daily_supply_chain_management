import { Router, Response } from "express";
import swaggerJSDoc = require('swagger-jsdoc');
import swaggerUi = require('swagger-ui-express');
import { readdirSync, statSync } from "fs";
import path = require('path');

export class APIDocs {

    private router: Router = Router();
    getRouter(): Router {

        const docsJsonPath = '/api-docs.json';

        this.router.get(docsJsonPath, (req, res) => {
            
           // console.log("In docs");
          let config = this.getConfig(this.getHost(req, false));
           const swaggerUiHandler = swaggerUi.setup(config);
          res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
          res.send(config);
        });

        this.router.use('/docs', swaggerUi.serve, (req, res, next) => {
           // console.log("In docs");
          let config = this.getConfig(this.getHost(req, false));
           const swaggerUiHandler = swaggerUi.setup(this.getConfig(config));
          if (!req.query.url) {
            res.redirect(`/swagger/docs?url=${this.getHost(req, true)}/swagger${docsJsonPath}`);
          } else {
            swaggerUiHandler(req, res, next);
          }
        });

        return this.router;
    }

    private getHost(req: any, needProtype: boolean) {
       //  console.log("In docs");
        return `${needProtype ? 'http://': ''}${req.headers.host}`;
    }

    private getConfig(host: string): any {
      //  console.log("In docs");
        const apiList: Array<string> = APIDocs.getAllRoutes(path.join(__dirname,'./../../docs/api-docs'), null);
        const spec = swaggerJSDoc({

              swaggerDefinition: {
                info: {
                  title: 'Milkmen',
                  version: '1.0.0'
                },
                host: host,
                basePath:'/api/',
                produces: ['application/json'],
                consumes: ['application/x-www-form-urlencoded', 'application/json'],
                securityDefinitions: {
                  jwt: {
                    type: 'apiKey',
                    name: 'Authorization',
                    in: 'header'
                  }
                },
                security: [
                  { jwt: [] }
                ]
              },
              apis: apiList
            });

      return spec;
    }

    private static getAllRoutes(dir: string, filelist: Array<string>): Array<string> {

        // console.log("In docs");
        const _files = readdirSync(dir);
        filelist = filelist || [];

        _files
            .map(function(file) {

                // filter out .map and hidden files
                if (file.search(".map") < 0 && file.search(/^\./) < 0) {

                    if (statSync(path.join(dir, file)).isDirectory()) {
                        filelist = APIDocs.getAllRoutes(path.join(dir, file), filelist);
                    }
                    else {

                        if (file.search(".yaml") > 0) {

                            filelist.push(path.join(dir, file));
                        }
                    }
                }
            });

        return filelist;
    }
}