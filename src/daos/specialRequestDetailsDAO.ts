import { getEntityManager, Repository } from "typeorm";
import {SpecialRequestDetail} from "./../models/entities/specialRequestDetails";
import {ProductSku} from './../models/entities/productSku';

export class SpecialRequestDetailsDAO {

    public dao: Repository<SpecialRequestDetail>;
    public dao1: Repository<ProductSku>;

    constructor() {
        this.dao = getEntityManager().getRepository(SpecialRequestDetail);
        this.dao1 = getEntityManager().getRepository(ProductSku);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    search1(data: any) {
        return this.dao1.find(data)
    }

    save(data: SpecialRequestDetail) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: SpecialRequestDetail) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(SpecialRequestDetailsDAO);