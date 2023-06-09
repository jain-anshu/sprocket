import { Router, Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';
import Container from 'typedi';
import ProductionService from '@/services/production_service';

const route = Router();

export default (app: Router) => {
  app.use('/v1/production', route);
 
  const logger: Logger = Container.get('logger');
  const productionService: ProductionService = Container.get(ProductionService);
  route.post('/', async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params)
    try {
      const production = await productionService.create(req.body['production'])
      
      res.status(200).json({production})
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });

  route.put('/:productionId', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const production = await productionService.updateById(parseInt(req.params.productionId), req.body['production'])
      
      res.status(200).json({production})
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });

  route.get('/:productionId', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const production = await productionService.getById(parseInt(req.params.productionId))
      res.status(200).json({production})
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });

  route.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productions = await productionService.getAll();
      res.status(200).json({ productions });
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });
};
