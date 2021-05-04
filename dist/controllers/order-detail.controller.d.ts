import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { OrderDetail } from '../models';
import { OrderDetailRepository } from '../repositories';
export declare class OrderDetailController {
    orderDetailRepository: OrderDetailRepository;
    constructor(orderDetailRepository: OrderDetailRepository);
    create(orderDetail: Omit<OrderDetail, 'id'>): Promise<OrderDetail>;
    count(where?: Where<OrderDetail>): Promise<Count>;
    find(filter?: Filter<OrderDetail>): Promise<OrderDetail[]>;
    updateAll(orderDetail: OrderDetail, where?: Where<OrderDetail>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<OrderDetail>): Promise<OrderDetail>;
    updateById(id: number, orderDetail: OrderDetail): Promise<void>;
    replaceById(id: number, orderDetail: OrderDetail): Promise<void>;
    deleteById(id: number): Promise<void>;
}
