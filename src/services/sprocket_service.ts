import { Service, Inject } from 'typedi';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Sprocket } from '@/models/Sprocket';

@Service()
export default class SprocketService {
  sprocketRepo: EntityRepository<Sprocket>;
  constructor(@Inject('logger') private logger, @Inject('em') private em: EntityManager) {
    this.sprocketRepo = em.getRepository(Sprocket);
  }

  async create(sprocketData): Promise<Sprocket> {
    try {
      const sprocket = await this.sprocketRepo.create({ ...sprocketData });
      await this.em.flush();
      await this.em.clear();
      return sprocket;
    } catch (e) {
      this.logger.error(`error $o`, e);
      throw new Error(e);
    }
  }

  async getById(id: number): Promise<Sprocket> {
    try {
      const sprocket = await this.sprocketRepo.findOne({ id });
      await this.em.flush();
      await this.em.clear();
      return sprocket;
    } catch (e) {
      this.logger.error(`error $o`, e);
      throw new Error(e);
    }
  }

  async updateById(id: number, sprocketData): Promise<void> {
    try {
      await this.sprocketRepo.nativeUpdate({ id }, { ...sprocketData });
      await this.em.flush();
      await this.em.clear();
    } catch (e) {
      this.logger.error(`error $o`, e);
      throw new Error(e);
    }
  }
}




