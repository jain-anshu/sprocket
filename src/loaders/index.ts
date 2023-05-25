import expressLoader from './express_loader';
import dbLoader from './db_loader';
import dependencyInjectorLoader from './dependency_injector';

export default async ({ expressApp }) => {
  try {
    const orm = await dbLoader();

    dependencyInjectorLoader(orm);

    const app = await expressLoader({ app: expressApp });

    return { server: app };
  } catch (error) {
    console.error(error);
    throw error;
  }
};