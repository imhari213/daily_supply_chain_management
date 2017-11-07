import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { ProductSkuService } from '../../services/productSkuService';

export class ProductSkuController {
    
        private router: Router = Router();
        private ProductSkuService = new ProductSkuService();

        getRouter():Router{

            this.router.put("/", async(request: Request, response: Response) => {
               // console.log("hey");
                let reqData= request.body ? request.body.data : null;
                let result = this.ProductSkuService.save(reqData);
                App.Send(request, response, result);
            });
    
            this.router.post("/", async(request: Request, response: Response) => {
                //  let reqData= request.body ? request.body.data : {};
                  const result = this.ProductSkuService.findAll();
                  App.Send(request, response, result);
      
              });
       

              this.router.get('/:id',async(request: Request, response:Response)=> {
                const id:any=request.params.id;
                let result = this.ProductSkuService.entity(id);
                App.Send(request, response, result);
                
            
            })
    

           this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.ProductSkuService.delete(id);
            App.Send(request, response, result);
        });

        

            return this.router;
    }
}