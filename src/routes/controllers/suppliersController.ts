import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { SuppliersService } from "../../services/suppliersService";

export class SuppliersController {
    
        private router: Router = Router();
        private suppliersService = new SuppliersService();

        getRouter():Router{
            
            this.router.post("/", async(request: Request, response: Response) => {
                let reqData= request.body ? request.body.data : {};
                const result = this.suppliersService.findAll(reqData);
                App.Send(request, response, result);
    
            });
    
            this.router.put('/',async(request: Request, response:Response)=> {
                let userItem = request.body.data;
                let result = this.suppliersService.save(userItem);
                App.Send(request, response, result);
                
            
            })
    
    
            this.router.get('/:id',async(request: Request, response:Response)=> {
                const id:any=request.params.id;
                let result = this.suppliersService.entity(id);
                App.Send(request, response, result);
                
            
            })
    
    
          
            this.router.delete("/:id", async(request:Request,response:Response)=>{
                const id:any=request.params.id;
                const result = this.suppliersService.delete(id);
                App.Send(request, response, result);
            });
    
    
    
            return this.router;
        }
    }