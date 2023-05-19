import { Service, Inject } from 'typedi';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Factory } from '@/models/Factory';

@Service()
export default class FactoryService {
  factoryRepo: EntityRepository<Factory>;
  constructor(@Inject('logger') private logger, @Inject('em') private em: EntityManager) {
    this.factoryRepo = em.getRepository(Factory);
  }

  async getAll(): Promise<Factory[]> {
    try {
      const allFactories = await this.factoryRepo.findAll({ populate: ['sprockets', 'sprockets.chartData'] });
      return allFactories;
    } catch (e) {
      this.logger.error(`error $o`, e);
      throw new Error(e);
    }
  }

  async getById(id: number): Promise<Factory> {
    try {
      const factory = await this.factoryRepo.findOne({ id }, { populate: ['sprockets', 'sprockets.chartData'] });
      return factory;
    } catch (e) {
      this.logger.error(`error $o`, e);
      throw new Error(e);
    }
  }
}