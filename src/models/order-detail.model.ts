import {Entity, model, property} from '@loopback/repository';

@model()
export class OrderDetail extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  order_id: number;

  @property({
    type: 'object',
    required: true,
  })
  itens: object;

  @property({
    type: 'string',
    required: true,
  })
  price: string;

  @property({
    type: 'string',
    required: true,
  })
  img: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;


  constructor(data?: Partial<OrderDetail>) {
    super(data);
  }
}

export interface OrderDetailRelations {
  // describe navigational properties here
}

export type OrderDetailWithRelations = OrderDetail & OrderDetailRelations;
