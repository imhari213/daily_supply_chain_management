import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { UserDwellingService } from '../../services/userDwellingService';

export class UserDwellingController{
    private router: Router = Router();
    private userDwellingService = new UserDwellingService();
    
    getRouter():Router{


        this.router.put('/',async(request: Request, response:Response)=> {
            let userDwellingItem = request.body.data;
           // console.log(userDwellingItem);
            let result = this.userDwellingService.save(userDwellingItem);
            App.Send(request, response, result);
            
        
        })

        this.router.get('/:id',async(request: Request, response:Response)=> {
            const id:any=request.params.id;
            let result = this.userDwellingService.entity(id);
            App.Send(request, response, result);
            
        
        })


        // this.router.put('/',async(request: Request, response:Response)=> {
        //     let userDwellingItem = request.body.data;
        //    // console.log(userDwellingItem);
        //     let result = this.userDwellingService.save(userDwellingItem);
        //     App.Send(request, response, result);
            
        
        // })



        this.router.post("/", async(request: Request, response: Response) => {
              let reqData= request.body.data ? request.body.data : {};
              const result = this.userDwellingService.reverse(reqData);
              App.Send(request, response, result);
  
          });

        this.router.post("/user", async(request: Request, response: Response) => {
            let reqData= request.body.data ? request.body.data : {};
            const result = this.userDwellingService.findOneAndAll(reqData);
            App.Send(request, response, result);

        });  


        return this.router;
    }
}