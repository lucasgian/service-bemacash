import { Entity } from '@loopback/repository';
export declare class Order extends Entity {
    id?: number;
    status: string;
    description: string;
    category: string;
    price: string;
    client_id?: string;
    img_thumbnail: string;
    constructor(data?: Partial<Order>);
}
export interface OrderRelations {
}
export declare type OrderWithRelations = Order & OrderRelations;
