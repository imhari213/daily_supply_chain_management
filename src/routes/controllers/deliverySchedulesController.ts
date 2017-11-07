import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { DeliverySchedulesService } from "../../services/deliverySchedulesService";

export class DeliverySchedulesController {
    
        private router: Router = Router();
        private delivery_SchedulesService = new DeliverySchedulesService();

        getRouter():Router{
    
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.delivery_SchedulesService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.delivery_SchedulesService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.delivery_SchedulesService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.delivery_SchedulesService.delete(id);
            App.Send(request, response, result);
        });

            return this.router;
    }
}