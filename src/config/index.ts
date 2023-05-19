const dotenv = require('dotenv');
// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
import mikroOrmConfig from './mikro-orm.config';
import { __prod__ } from '@/constants';
const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  console.log('process.env.PORT', process.env.PORT);
  throw new Error(`⚠️  Couldn't find .env  ⚠️ port: ${process.env.PORT}`);
}
const authVarKey = `${__prod__ ? 'DEV_' : ''}AUTH0_`;
export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
  /**
   * @description: configuration for mikroOrm, the config file connects to db,
   *  and registers all the db entities
   *
   */
  mikroOrmConfig,
};