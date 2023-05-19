import { Router } from 'express';
import factory from './routes/factory';
import sprocket from './routes/sprocket';
// guaranteed to get dependencies
export default () => {
  const app = Router();
  factory(app);
  sprocket(app);
  return app;
};