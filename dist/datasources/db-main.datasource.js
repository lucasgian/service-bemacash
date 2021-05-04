"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbMainDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'db_main',
    connector: 'postgresql',
    url: '',
    host: 'backup-database.cz603of2soa9.us-east-2.rds.amazonaws.com',
    port: 5432,
    user: 'postgres',
    password: 'gian.fonseca',
    database: 'postgres'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let DbMainDataSource = class DbMainDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
DbMainDataSource.dataSourceName = 'db_main';
DbMainDataSource.defaultConfig = config;
DbMainDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.db_main', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], DbMainDataSource);
exports.DbMainDataSource = DbMainDataSource;
//# sourceMappingURL=db-main.datasource.js.map