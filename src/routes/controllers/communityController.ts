import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { CommunityService } from '../../services/communityService';

export class CommunityController{
    private router: Router = Router();
    private communityService = new CommunityService();

    getRouter():Router{
         
        this.router.put('/',async(request: Request, response:Response)=> {
            let communityItem = request.body.data;
            let result = this.communityService.save(communityItem);
            App.Send(request, response, result);
            
        
        })

      
        this.router.post("/", async(request: Request, response: Response) => {
            //  let reqData= request.body ? request.body.data : {};
              const result = this.communityService.findAll();
              App.Send(request, response, result);
  
          });

          this.router.get('/:id',async(request: Request, response:Response)=> {
            const id:any=request.params.id;
            let result = this.communityService.entity(id);
            App.Send(request, response, result);
            
        
        })


      
        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.communityService.delete(id);
            App.Send(request, response, result);
        });  




        return this.router;
    }
}