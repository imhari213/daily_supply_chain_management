import { getEntityManager, Repository } from "typeorm";
import {DailyOrderSheet} from "./../models/entities/dailyOrderSheets";
import {ProductSku} from './../models/entities/productSku';

export class DailyOrderSheetsDAO {

    public dao: Repository<DailyOrderSheet>;
    public dao1: Repository<ProductSku>;
   // public data: Repository<DailyOrderSheet>;

    constructor() {
        this.dao = getEntityManager().getRepository(DailyOrderSheet);
        this.dao1 = getEntityManager().getRepository(ProductSku);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    search1(data: any) {
        return this.dao1.find(data)
    }

    save(data: DailyOrderSheet) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: DailyOrderSheet) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(DailyOrderSheet)