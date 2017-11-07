import { getEntityManager, Repository } from "typeorm";
import {HoldRequest} from "./../models/entities/holdRequests";


export class HoldRequestsDAO {

    public dao: Repository<HoldRequest>;

    constructor() {
        this.dao = getEntityManager().getRepository(HoldRequest);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: HoldRequest) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: HoldRequest) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(HoldRequestsDAO);