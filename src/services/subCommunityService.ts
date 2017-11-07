import { SubCommunityDAO } from '../daos/subCommunityDAO';
import { SubCommunity } from "../models/entities/subCommunities";


export class SubCommunityService {
    private subCommunityDAO: SubCommunityDAO;
    
    constructor() {
        this.subCommunityDAO = new SubCommunityDAO();
        
    }

    async save(item: SubCommunity) {
        try {
            let data = await this.subCommunityDAO.search({name: item.name});
                if(item.id!=null && data.length>0){
                    let subCommunityData : any = await this.subCommunityDAO.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "SubCommunity name Already Exits" });
                }else {
                    let updateSubCommunity = await this.subCommunityDAO.save(item);
                        return Promise.resolve(updateSubCommunity);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }

        async search(item: any){
            try{
                let data = await this.subCommunityDAO.search({community_id: item});
                let returnData = {
                    subCommunities : data
                }
                return Promise.resolve(data);
                
            }catch(error){
                return Promise.reject(error);
            }
        }


        async entity(id: any) {
            try {
                let data: any = await this.subCommunityDAO.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }


        async delete(id: any) {
            try {
                let data: SubCommunity = (await this.subCommunityDAO.entity(id))
                data.active = false;
                let result: any = await this.subCommunityDAO.save(data);
                let returnData = {
                    id: id,
                    message: "Removed Successfully"
                }
                return Promise.resolve(returnData);
            } catch (error) {
                return Promise.reject(error);
            }
        }

        async findAll() {
            try {
                let data: any = await this.subCommunityDAO.findAll();
                return Promise.resolve(data)
            } catch (error) {
                return Promise.reject(error);
            }
        }







    
   



}