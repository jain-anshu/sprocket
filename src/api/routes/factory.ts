import { Router, Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';
import Container from 'typedi';
import ProductionService from '@/services/production_service';

const route = Router();

export default (app: Router) => {
  app.use('/v1/factory', route);

  const logger: Logger = Container.get('logger');
  const productionService: ProductionService = Container.get(ProductionService);

  route.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productions = await productionService.getAll();
      res.status(200).json({ productions });
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });

  route.get('/:factoryId', async (req: Request, res: Response, next: NextFunction) => {
    try {
     // const factory = await factoryService.getById(parseInt(req.params.factoryId) as number);
     const productions = await productionService.getAll();
     const factory_productions = productions.filter(p => p.factory_id == (parseInt(req.params.factoryId) - 1))
     console.log(factory_productions)
      
     res.status(200).json(factory_productions);
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });
};









