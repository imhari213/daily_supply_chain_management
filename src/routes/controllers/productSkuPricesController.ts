import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { ProductSkuPriceService } from '../../services/productSkuPriceService';

export class ProductSkuPriceController{
    private router: Router = Router();
    private productSkuPrice = new ProductSkuPriceService();
    

    getRouter():Router{
        
        this.router.post("/", async(request: Request, response: Response) => {
          //  let reqData= request.body ? request.body.data : {};
            const result = this.productSkuPrice.findAll();
            App.Send(request, response, result);

        });

        this.router.put('/',async(request: Request, response:Response)=> {
            let userItem = request.body.data;
            let result = this.productSkuPrice.save(userItem);
            App.Send(request, response, result);
            
        
        })


        this.router.get('/:id',async(request: Request, response:Response)=> {
            const id:any=request.params.id;
            let result = this.productSkuPrice.entity(id);
            App.Send(request, response, result);
            
        
        })


      
        // this.router.delete("/:id", async(request:Request,response:Response)=>{
        //     const id:any=request.params.id;
        //     const result = this.productSkuPrice.delete(id);
        //     App.Send(request, response, result);
        // });



        return this.router;
    }
}