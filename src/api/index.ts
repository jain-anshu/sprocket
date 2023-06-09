import { Router } from 'express';
//import factory from './routes/factory';
import sprocket from './routes/sprocket';
import production from './routes/production';
import factory from './routes/factory';
// guaranteed to get dependencies
export default () => {
  const app = Router();
  sprocket(app);
  production(app);
  factory(app);
  return app;
};