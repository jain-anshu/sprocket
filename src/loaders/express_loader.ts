import express from 'express';
import routes from '@/api';
import config from '@/config';
import LoggerInstance from './logger_loader';

import { __prod__ } from '@/constants';

const bodyParser = require('body-parser');

export default ({ app }: { app: express.Application }) => {
  const log = LoggerInstance.info;
  const chalk = require('chalk');
  const yellow = chalk.yellow;
  const green = chalk.green;
  log(yellow('======================================================================='));
  log(yellow('==========================SETTING UP EXPRESS APP======================='));
  log(yellow('======================================================================='));

  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // Transforms the raw string of req.body into json
  app.use(bodyParser.json());
  // Support encoded bodies for security
  app.use(bodyParser.urlencoded({ extended: true }));

  // Load API routes
  app.use(config.api.prefix, routes());

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  /// error handlers
  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });

  log(green('======================================================================='));
  log(green('========================EXPRESS APP SETUP COMPLETE====================='));
  log(green('======================================================================='));
  return app;
};