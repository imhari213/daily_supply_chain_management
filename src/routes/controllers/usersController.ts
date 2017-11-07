import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { UsersService } from '../../services/userService';

export class UsersController{
    private router: Router = Router();
    private userService = new UsersService();
    

    getRouter():Router{
        
        this.router.post("/", async(request: Request, response: Response) => {
          //  let reqData= request.body ? request.body.data : {};
            const result = this.userService.findAll();
            App.Send(request, response, result);

        });

        this.router.put('/',async(request: Request, response:Response)=> {
            let userItem = request.body.data;
            let result = this.userService.save(userItem);
            App.Send(request, response, result);
            
        
        })


        this.router.get('/:id',async(request: Request, response:Response)=> {
            const id:any=request.params.id;
            let result = this.userService.entity(id);
            App.Send(request, response, result);
            
        
        })


      
        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.userService.delete(id);
            App.Send(request, response, result);
        });



        return this.router;
    }
}