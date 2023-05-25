import { Router, Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';
import Container from 'typedi';
import SprocketService from '@/services/sprocket_service';

const route = Router();

export default (app: Router) => {
  app.use('/v1/sprocket', route);
 
  const logger: Logger = Container.get('logger');
  const sprocketService: SprocketService = Container.get(SprocketService);
  route.post('/', async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params)
    try {
      const sprocket = await sprocketService.create(req.body['sprocket'])
      
      res.status(200).json({sprocket})
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });

  route.put('/:sprocketId', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sprocket = await sprocketService.updateById(parseInt(req.params.sprocketId), req.body['sprocket'])
      
      res.status(200).json({sprocket})
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });

  route.get('/:sprocketId', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sprocket = await sprocketService.getById(parseInt(req.params.sprocketId))
      res.status(200).json({sprocket})
    } catch (e) {
      logger.error('🔥 error %o', e);
      return next(e);
    }
  });
};
