import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { DwellingService } from '../../services/dwellingService';

export class DwellingController{
    private router: Router = Router();
    private dwellingService = new DwellingService();
    

    getRouter():Router{

        this.router.put('/',async(request: Request, response:Response)=> {
            let dwellingItem = request.body.data;
            let result = this.dwellingService.save(dwellingItem);
            App.Send(request, response, result);
            
        
        })


        this.router.get('/subCommunityId/:id', async(request: Request,response:Response)=>{
            let dwellingItem = request.params.id;
            console.log(dwellingItem);
            let result = this.dwellingService.search(dwellingItem);
            App.Send(request,response,result);
        })
       
        this.router.post("/", async(request: Request, response: Response) => {
            //  let reqData= request.body ? request.body.data : {};
              const result = this.dwellingService.findAll();
              App.Send(request, response, result);
  
          });
        
          this.router.get('/:id',async(request: Request, response:Response)=> {
            const id:any=request.params.id;
            let result = this.dwellingService.entity(id);
            App.Send(request, response, result);
            
        
        })


      
        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.dwellingService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}