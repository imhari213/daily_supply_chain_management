import { getEntityManager, Repository } from "typeorm";
import {RegularConsumption} from "./../models/entities/regularConsumptions";
import {ProductSku} from './../models/entities/productSku';
import { UserDwelling } from "../models/entities/userDwellings";
import {Supplier} from "./../models/entities/suppliers";

export class RegularConsumptionsDAO {

    public dao: Repository<RegularConsumption>;
    public dao1: Repository<ProductSku>;
    public rep: Repository<UserDwelling>;
    public rep3: Repository<Supplier>;

    constructor() {
        this.dao = getEntityManager().getRepository(RegularConsumption);
        this.dao1 = getEntityManager().getRepository(ProductSku);
        this.rep = getEntityManager().getRepository(UserDwelling);
        this.rep3 = getEntityManager().getRepository(Supplier);

    }

    search(data: any) {
        return this.dao.find(data)
    }

    search1(data: any) {
        return this.dao1.find(data)
    }
    search3(data: any) {
        return this.rep3.find(data)
    }
    search2(id:any){
        console.log(id);
        console.log("its id from DAo")
        return this.dao.find({supplier_id:id.supplier_id,user_dwelling_id:id.user_dwelling_id},{
            alias : "regularconsumption",
            leftJoinAndSelect:{
                "userdwelling":"regularconsumption.user_dwelling_id",
                "supplier" : "regularconsumption.supplier_id",
                "product_skus":"regularconsumption.product_skus",
                "products":"product_skus.products"

            }
        });
    }

      findAll1(){
                 return this.dao.find({},{
                     alias : "regularconsumption",
                    leftJoinAndSelect:{
                        "userdwelling":"regularconsumption.user_dwelling_id",
                        "supplier" : "regularconsumption.supplier_id",
                        "product_skus":"regularconsumption.product_skus",
                        "products":"product_skus.products"

                    }
                 });
             }

    save(data: RegularConsumption) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: RegularConsumption) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(RegularConsumptionsDAO);