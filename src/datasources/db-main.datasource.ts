import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

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
@lifeCycleObserver('datasource')
export class DbMainDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db_main';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db_main', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
