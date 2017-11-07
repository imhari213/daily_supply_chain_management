import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { SpecialRequestDetailsService } from "../../services/specialRequestDetailsService";

export class SpecialRequestDetailsController {
    
        private router: Router = Router();
        private special_Request_DetailsService = new SpecialRequestDetailsService();

        getRouter():Router{
    
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.special_Request_DetailsService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.special_Request_DetailsService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.special_Request_DetailsService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.special_Request_DetailsService.delete(id);
            App.Send(request, response, result);
        });

            return this.router;
    }
}