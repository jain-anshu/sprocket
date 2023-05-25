import { Router, Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';
import Container from 'typedi';
//import FactoryService from '@/services/factory_service';

const route = Router();

export default (app: Router) => {
  app.use('/v1/factory', route);

  const logger: Logger = Container.get('logger');
  //const factoryService: FactoryService = Container.get(FactoryService);

  route.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
    //  const factories = await factoryService.getAll();
    //  res.status(200).json({ factories });
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });

  route.get('/:factoryId', async (req: Request, res: Response, next: NextFunction) => {
    try {
     // const factory = await factoryService.getById(parseInt(req.params.factoryId) as number);
     // res.status(200).json({ factory });
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });
};









