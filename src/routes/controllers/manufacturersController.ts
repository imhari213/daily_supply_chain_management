import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { ManufacturersService } from '../../services/manufacturersService';

export class ManufacturersController{
    private router: Router = Router();
    private manufacturersService = new ManufacturersService();
    

    getRouter():Router{
        
        this.router.post("/", async(request: Request, response: Response) => {
          //  let reqData= request.body ? request.body.data : {};
            const result = this.manufacturersService.findAll();
            App.Send(request, response, result);

        });

        this.router.put('/',async(request: Request, response:Response)=> {
            let manuItem = request.body.data;
            let result = this.manufacturersService.save(manuItem);
            App.Send(request, response, result);   
            
        })


        this.router.get('/:id',async(request: Request, response:Response)=> {
            const id:any=request.params.id;
            let result = this.manufacturersService.entity(id);
            App.Send(request, response, result);    
        })


      
        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.manufacturersService.delete(id);
            App.Send(request, response, result);
        });



        return this.router;
    }
}