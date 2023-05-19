import { MikroORM, EntityManager } from '@mikro-orm/core';
import config from '@/config';
import LoggerInstance from './logger_loader';

export default async () => {
  const log = LoggerInstance.info;
  const chalk = require('chalk');
  const yellow = chalk.yellow;
  const green = chalk.green;

  try {
    log(yellow('======================================================================='));
    log(yellow('==========================STARTING DB CONNECTION======================='));
    log(yellow('======================================================================='));
    const orm: any = await MikroORM.init(config.mikroOrmConfig); // connecting to db
    const em: EntityManager = orm.em;

    if (process.env.NODE_ENV !== 'production') {
      log(yellow('=========================STARTING DB CONNECTION======================'));
      await orm.getMigrator().up(); //runing migrations to be current
    }
    log(yellow('=========================GETTING ALL EXTENSIONS======================'));

    log(green('======================================================================='));
    log(green('==========================DB SUCCESSFULLY CONNECTED!==================='));
    log(green('======================================================================='));
    return orm;
  } catch (err) {
    log('Error connecting to database');
    log(err);
  }
};