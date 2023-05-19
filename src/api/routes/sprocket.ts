import { Router, Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';
import Container from 'typedi';

const route = Router();

export default (app: Router) => {
  app.use('/v1/sprocket', route);

  const logger: Logger = Container.get('logger');

  route.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });

  route.put('/:sprocketId', async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });

  route.get('/:sprocketId', async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });
};
