import { Service, Inject } from 'typedi';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Production } from '@/models/Production';

@Service()
export default class ProductionService {
  productionRepo: EntityRepository<Production>;
  constructor(@Inject('logger') private logger, @Inject('em') private em: EntityManager) {
    this.productionRepo = em.getRepository(Production);
  }

  async create(productionData): Promise<Production> {
    try {
      const production = await this.productionRepo.create({ ...productionData });
      await this.em.flush();
      await this.em.clear();
      return production;
    } catch (e) {
      this.logger.log(`${productionData}`)
      this.logger.error(`error eon $o`, e);
      throw new Error(e);
    }
  }

  async getById(id: number): Promise<Production> {
    try {
        
      const production = await this.productionRepo.findOne({ id });
      await this.em.flush();
      await this.em.clear();
      return production;
    } catch (e) {
      this.logger.error(`error $o`, e);
      throw new Error(e);
    }
  }

  async getAll(): Promise<Production[]> {
    try {
        
      const allProductions = await this.productionRepo.findAll();
      await this.em.flush();
      await this.em.clear();
      return allProductions;
    } catch (e) {
      this.logger.error(`error $o`, e);
      throw new Error(e);
    }
  }

  async updateById(id: number, productionData): Promise<void> {
    try {
      await this.productionRepo.nativeUpdate({ id }, { ...productionData });
      await this.em.flush();
      await this.em.clear();
    } catch (e) {
      this.logger.error(`error $o`, e);
      throw new Error(e);
    }
  }
}