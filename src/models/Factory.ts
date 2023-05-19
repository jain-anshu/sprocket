import { FactorySprocket } from './FactorySprocket';
import { Sprocket } from './Sprocket';
import { CustomBaseEntity } from './_CustomBaseEntity';
import { Entity, PrimaryKey, ManyToMany, Collection } from '@mikro-orm/core';

@Entity()
export class Factory extends CustomBaseEntity {
  @PrimaryKey({ autoincrement: true, primary: true })
  id!: number;

  @ManyToMany({
    entity: () => Sprocket,
    pivotEntity: () => FactorySprocket,
    owner: true,
  })
  sprockets = new Collection<Sprocket>(this);

  constructor() {
    super();
  }
}






