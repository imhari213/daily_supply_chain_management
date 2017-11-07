import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { ProductSkuAttributesService } from "../../services/productSkuAttributesService";

export class ProductSkuAttributesController{
    private router: Router = Router();
    private productSkuAttributeService = new ProductSkuAttributesService();
    

    getRouter():Router{
        
        this.router.post("/", async(request: Request, response: Response) => {
          //  let reqData= request.body ? request.body.data : {};
            const result = this.productSkuAttributeService.findAll();
            App.Send(request, response, result);

        });

        this.router.put('/',async(request: Request, response:Response)=> {
            let productItem = request.body.data;
            let result = this.productSkuAttributeService.save(productItem);
            App.Send(request, response, result);
        })


        this.router.get('/:id',async(request: Request, response:Response)=> {
            const id:any=request.params.id;
            let result = this.productSkuAttributeService.entity(id);
            App.Send(request, response, result);
        })


      
        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.productSkuAttributeService.delete(id);
            App.Send(request, response, result);
        });



        return this.router;
    }
}