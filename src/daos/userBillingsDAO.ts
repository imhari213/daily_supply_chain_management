import { getEntityManager, Repository } from "typeorm";
import {UserBilling} from "./../models/entities/userBillings";


export class UserBillingsDAO {

    public dao: Repository<UserBilling>;

    constructor() {
        this.dao = getEntityManager().getRepository(UserBilling);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: UserBilling) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: UserBilling) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(UserBillingsDAO);