import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { ProductsService } from '../../services/productsService';

export class ProductsController {
    
        private router: Router = Router();
        private productsService = new ProductsService();

        getRouter():Router{
            
            this.router.post("/", async(request: Request, response: Response) => {
               let reqData=  request.body.data;
                const result = this.productsService.findAll();
                App.Send(request, response, result);
    
            });
    
            this.router.put('/',async(request: Request, response:Response)=> {
                let userItem = request.body.data;
                let result = this.productsService.save(userItem);
                App.Send(request, response, result);
                
            
            })
    
    
            this.router.get('/:id',async(request: Request, response:Response)=> {
                const id:any=request.params.id;
                let result = this.productsService.entity(id);
                App.Send(request, response, result);
                
            
            })
    
    
          
            this.router.delete("/:id", async(request:Request,response:Response)=>{
                const id:any=request.params.id;
                const result = this.productsService.delete(id);
                App.Send(request, response, result);
            });
    
    
    
            return this.router;
        }
    }