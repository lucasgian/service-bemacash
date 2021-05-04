import { Entity } from '@loopback/repository';
export declare class OrderDetail extends Entity {
    id?: number;
    order_id: number;
    itens: object;
    price: string;
    img: string;
    status: string;
    constructor(data?: Partial<OrderDetail>);
}
export interface OrderDetailRelations {
}
export declare type OrderDetailWithRelations = OrderDetail & OrderDetailRelations;
