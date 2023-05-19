import 'reflect-metadata'; // We need this in order to use @Decorators
import config from './config';
import express from 'express';
import Logger from './loaders/logger_loader';

async function startServer() {
  const expressApp = express();
  const { server } = await require('./loaders').default({ expressApp });
  server.listen(config.port, () => {
    Logger.info(`Server listening on port: ${config.port}`);
  });
}

startServer();







