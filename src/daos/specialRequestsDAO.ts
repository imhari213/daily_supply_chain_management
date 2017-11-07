import { getEntityManager, Repository } from "typeorm";
import {SpecialRequest} from "./../models/entities/specialRequests";


export class SpecialRequestsDAO {

    public dao: Repository<SpecialRequest>;
  

    constructor() {
        this.dao = getEntityManager().getRepository(SpecialRequest);
      
    }

    search(data: any) {
        return this.dao.find(data)
    }

  

    save(data: SpecialRequest) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: SpecialRequest) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(SpecialRequestsDAO);