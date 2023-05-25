import { Container } from 'typedi';
import LoggerInstance from './logger_loader';
//import FactoryService from '@/services/factory_service';
import SprocketService from '@/services/sprocket_service';

const dependencyInjector = (orm) => {
  const log = LoggerInstance.info;
  const chalk = require('chalk');
  const yellow = chalk.yellow;
  const green = chalk.green;
  log(yellow('======================================================================='));
  log(yellow('========================INJECTING ORM AND SERVICES====================='));
  log(yellow('======================================================================='));
  try {
    Container.set('em', orm.em);
    Container.set('logger', LoggerInstance);
    //Container.set('factoryService', FactoryService);
    Container.set('sprocketService', SprocketService);
    log(green('======================================================================='));
    log(green('=====================ORM AND SERVICE INJECTION COMPLETE================'));
    log(green('======================================================================='));
  } catch (e) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
    throw e;
  }
};

export default dependencyInjector;