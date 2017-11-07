import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { SubCommunityService } from '../../services/subCommunityService';

export class SubCommunityController{
    private router: Router = Router();
    private subCommunityService = new SubCommunityService();
    
    getRouter():Router{

        this.router.post("/", async(request: Request, response: Response) => {
            //  let reqData= request.body ? request.body.data : {};
              const result = this.subCommunityService.findAll();
              App.Send(request, response, result);
  
          });
        
        this.router.put('/',async(request: Request, response:Response)=> {
            let subCommunityItem = request.body.data;
            let result = this.subCommunityService.save(subCommunityItem);
            App.Send(request, response, result);
            
        
        })
      

        this.router.get('/CommunityId/:id', async(request: Request,response:Response)=>{
            let subCommunityItem = request.params.id;
            console.log(subCommunityItem);
            let result = this.subCommunityService.search(subCommunityItem);
            App.Send(request,response,result);
        })

        this.router.get('/:id',async(request: Request, response:Response)=> {
            const id:any=request.params.id;
            let result = this.subCommunityService.entity(id);
            App.Send(request, response, result);
            
        
        })


      
        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.subCommunityService.delete(id);
            App.Send(request, response, result);
        });


        return this.router;
    }
}