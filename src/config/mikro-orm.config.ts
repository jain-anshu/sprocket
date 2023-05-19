import path from 'path';
import { TSMigrationGenerator } from '@mikro-orm/migrations';
import { Options, UnderscoreNamingStrategy } from '@mikro-orm/core';
import {Factory} from '../models/Factory';
import {Sprocket} from '../models/Sprocket';
import {FactorySprocket} from '../models/FactorySprocket';


const dotenv = require('dotenv');
// Set the NODE_ENV to 'development' by default

const envFound = dotenv.config();
// import { User } from "./entities/User";
const mikroOrmConfig: Options = {
  entities: [Factory, Sprocket, FactorySprocket],
  migrations: {
    // path: path.join(__dirname, "./migrations"), // path to the folder with migrations,
    path: path.join(__dirname, '../migrations'), // path to the folder with migrations,
    glob: '!(*.d).{js,ts}',
    // glob: /^[\w-]+\d+\.[ts]s$/,
    pathTs: path.join(__dirname, '../migrations'), // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)
    snapshot: true, // save snapshot when creating new migrations
    // emit: "ts", // migration generation mode
    generator: TSMigrationGenerator,
  },
  seeder: {
    path: path.join(__dirname, '../seeders'), // path to the folder with migrations,
    pathTs: path.join(__dirname, '../seeders'), // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)

    defaultSeeder: 'DevSeeder',
    glob: '!(*.d).{js,ts}', // how to match seeder files (all .js and .ts files, but not .d.ts)
    emit: 'ts', // seeder generation mode
    fileName: (className: string) => className, // seeder file naming convention
  },

  cache: { enabled: false },
  flushMode: 2,
  type: 'postgresql',
  dbName: process.env.PSQL_DB_NAME,
  port: parseInt(process.env.PSQL_DB_PORT),
  host: process.env.PSQL_DB_ENDPOINT,
  user: process.env.PSQL_DB_USERNAME,
  password: process.env.PSQL_DB_USER_PW,
  // dbName: process.env.LOCAL_DEV_PSQL_DB_NAME,
  // port: parseInt(process.env.LOCAL_DEV_PSQL_DB_PORT),
  // host: process.env.LOCAL_DEV_PSQL_DB_ENDPOINT,
  // user: process.env.LOCAL_DEV_PSQL_DB_USERNAME,
  // password: process.env.LOCAL_DEV_PSQL_DB_USER_PW,
  allowGlobalContext: true,
  debug: process.env.NODE_ENV !== 'production',
  namingStrategy: UnderscoreNamingStrategy,
};

export default mikroOrmConfig;






