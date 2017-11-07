import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { RegularConsumptionsService } from "../../services/regularConsumptionsService";

export class RegularConsumptionsController {
    
        private router: Router = Router();
        private regular_ConsumptionsService = new RegularConsumptionsService();

        getRouter():Router{
    
        // this.router.post("/", async(request: Request, response: Response) => {
        //     let reqData= request.body ? request.body.data : {};
        //     const result = this.regular_ConsumptionsService.search(reqData);
        //     App.Send(request, response, result);

        // });
        //to find one and all reg consumptions
         this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body.data ? request.body.data : {};
            const result = this.regular_ConsumptionsService.findOneAndAll(reqData);
            App.Send(request, response, result);

        });  
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.regular_ConsumptionsService.save(reqData);
            App.Send(request, response, result);
        });

        // this.router.get("/:id", async(request: Request,response:Response)=>{
        //     const id:any=request.params.id;
        //     const result = this.regular_ConsumptionsService.entity(id);
        //     App.Send(request, response, result);
        // });
        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.regular_ConsumptionsService.search2(id);
            App.Send(request, response, result);
        });
        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.regular_ConsumptionsService.delete(id);
            App.Send(request, response, result);
        });

            return this.router;
        }
    }
    