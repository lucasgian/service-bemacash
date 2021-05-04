"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrderDetailController = class OrderDetailController {
    constructor(orderDetailRepository) {
        this.orderDetailRepository = orderDetailRepository;
    }
    async create(orderDetail) {
        return this.orderDetailRepository.create(orderDetail);
    }
    async count(where) {
        return this.orderDetailRepository.count(where);
    }
    async find(filter) {
        return this.orderDetailRepository.find(filter);
    }
    async updateAll(orderDetail, where) {
        return this.orderDetailRepository.updateAll(orderDetail, where);
    }
    async findById(id, filter) {
        return this.orderDetailRepository.find({ where: { order_id: id } }).then(orders => orders[0]);
    }
    async updateById(id, orderDetail) {
        await this.orderDetailRepository.updateById(id, orderDetail);
    }
    async replaceById(id, orderDetail) {
        await this.orderDetailRepository.replaceById(id, orderDetail);
    }
    async deleteById(id) {
        await this.orderDetailRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/order-details'),
    rest_1.response(200, {
        description: 'OrderDetail model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.OrderDetail) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrderDetail, {
                    title: 'NewOrderDetail',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/order-details/count'),
    rest_1.response(200, {
        description: 'OrderDetail model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.OrderDetail)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/order-details'),
    rest_1.response(200, {
        description: 'Array of OrderDetail model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.OrderDetail, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.OrderDetail)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/order-details'),
    rest_1.response(200, {
        description: 'OrderDetail PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrderDetail, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.OrderDetail)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.OrderDetail, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/order-details/{id}'),
    rest_1.response(200, {
        description: 'OrderDetail model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrderDetail, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.OrderDetail)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/order-details/{id}'),
    rest_1.response(204, {
        description: 'OrderDetail PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrderDetail, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.OrderDetail]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/order-details/{id}'),
    rest_1.response(204, {
        description: 'OrderDetail PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.OrderDetail]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/order-details/{id}'),
    rest_1.response(204, {
        description: 'OrderDetail DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailController.prototype, "deleteById", null);
OrderDetailController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrderDetailRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrderDetailRepository])
], OrderDetailController);
exports.OrderDetailController = OrderDetailController;
//# sourceMappingURL=order-detail.controller.js.map