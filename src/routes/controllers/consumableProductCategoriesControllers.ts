import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { ConsumableProductCategoriesService } from '../../services/consumableProductCategoriesService';

export class ConsumableProductCategoriesController{
    private router: Router = Router();
    private consumableProductCategoriesService = new ConsumableProductCategoriesService();

    getRouter():Router{
         
        this.router.put('/',async(request: Request, response:Response)=> {
            let consumableProductCategoriesItem = request.body.data;
            let result = this.consumableProductCategoriesService.save(consumableProductCategoriesItem);
            App.Send(request, response, result);
            
        
        })

      
        this.router.post("/", async(request: Request, response: Response) => {
            //  let reqData= request.body ? request.body.data : {};
              const result = this.consumableProductCategoriesService.findAll();
              App.Send(request, response, result);
  
          });

          this.router.get('/:id',async(request: Request, response:Response)=> {
            const id:any=request.params.id;
            let result = this.consumableProductCategoriesService.entity(id);
            App.Send(request, response, result);
            
        
        })


      
        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.consumableProductCategoriesService.delete(id);
            App.Send(request, response, result);
        });  




        return this.router;
    }
}