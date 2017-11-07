import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { DailyOrderSheetsService } from "../../services/dailyOrderSheetsService";

export class DailyOrderSheetsController {
    
        private router: Router = Router();
        private daily_Order_SheetsService = new DailyOrderSheetsService();

        getRouter():Router{
    
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.daily_Order_SheetsService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.daily_Order_SheetsService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.daily_Order_SheetsService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.daily_Order_SheetsService.delete(id);
            App.Send(request, response, result);
        });

            return this.router;
        }
    }
    