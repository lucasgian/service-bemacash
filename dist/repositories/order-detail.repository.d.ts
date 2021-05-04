import { DefaultCrudRepository } from '@loopback/repository';
import { DbMainDataSource } from '../datasources';
import { OrderDetail, OrderDetailRelations } from '../models';
export declare class OrderDetailRepository extends DefaultCrudRepository<OrderDetail, typeof OrderDetail.prototype.id, OrderDetailRelations> {
    constructor(dataSource: DbMainDataSource);
}
