import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { ProductAttributesService } from "../../services/productAttributesService";

export class ProductAttributesController{
    private router: Router = Router();
    private productAttributeService = new ProductAttributesService();
    

    getRouter():Router{
        
        this.router.post("/", async(request: Request, response: Response) => {
          //  let reqData= request.body ? request.body.data : {};
            const result = this.productAttributeService.findAll();
            App.Send(request, response, result);

        });

        this.router.put('/',async(request: Request, response:Response)=> {
            let productItem = request.body.data;
            let result = this.productAttributeService.save(productItem);
            App.Send(request, response, result);
        })


        this.router.get('/:id',async(request: Request, response:Response)=> {
            const id:any=request.params.id;
            let result = this.productAttributeService.entity(id);
            App.Send(request, response, result);
        })


      
        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.productAttributeService.delete(id);
            App.Send(request, response, result);
        });



        return this.router;
    }
}