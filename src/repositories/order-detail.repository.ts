import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMainDataSource} from '../datasources';
import {OrderDetail, OrderDetailRelations} from '../models';

export class OrderDetailRepository extends DefaultCrudRepository<
  OrderDetail,
  typeof OrderDetail.prototype.id,
  OrderDetailRelations
> {
  constructor(
    @inject('datasources.db_main') dataSource: DbMainDataSource,
  ) {
    super(OrderDetail, dataSource);
  }
}
