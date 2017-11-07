import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { ProductCategoryService } from '../../services/productCategoryService';

export class ProductCategoryController{
    private router: Router = Router();
    private productCategoryService = new ProductCategoryService();
    

    getRouter():Router{

        this.router.put('/',async(request: Request, response:Response)=> {
          //  console.log("hey");
            let productCategoryItem = request.body.data;
            let result = this.productCategoryService.save(productCategoryItem);
            App.Send(request, response, result);
            
        
        })

        this.router.get('/consumableProductCategory/:id', async(request: Request,response:Response)=>{
            let consumableProductCategoryItem = request.params.id;
            console.log(consumableProductCategoryItem);
            let result = this.productCategoryService.search(consumableProductCategoryItem);
            App.Send(request,response,result);
        })
       
     this.router.post("/", async(request: Request, response: Response) => {
          //  let reqData= request.body ? request.body.data : {};
            const result = this.productCategoryService.findAll();
            App.Send(request, response, result);

        });
   

       this.router.get('/:id',async(request: Request, response:Response)=> {
            const id:any=request.params.id;
            let result = this.productCategoryService.entity(id);
            App.Send(request, response, result);
            
        
        })


      
         this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.productCategoryService.delete(id);
            App.Send(request, response, result);
        });



        return this.router;
    }
}