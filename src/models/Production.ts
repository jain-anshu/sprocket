import { CustomBaseEntity } from './_CustomBaseEntity';
import { Entity, Property, PrimaryKey, OneToMany, Collection } from '@mikro-orm/core';

@Entity()
export class Production extends CustomBaseEntity {
  @PrimaryKey({ primary: true, autoincrement: true })
  id!: number;

  @Property({ type: 'int' })
  actual_production: number;

  @Property({ type: 'int' })
  production_goal: number;

  @Property({ type: 'int' })
  time: number;

  @Property({ type: 'int' })
  factory_id: number;

  constructor(actual_production: number, production_goal: number,  factory_id: number, time: number ) {
    super();
    this.actual_production = actual_production;
    this.production_goal = production_goal;
    this.time = time;
    this.factory_id = factory_id;
  }
}