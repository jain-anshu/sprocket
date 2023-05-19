import { Factory } from './Factory';
import { Sprocket } from './Sprocket';
import { CustomBaseEntity } from './_CustomBaseEntity';
import { Entity, Property, ManyToOne } from '@mikro-orm/core';

@Entity()
export class FactorySprocket extends CustomBaseEntity {
  @ManyToOne({ primary: true, entity: () => Factory, onDelete: 'cascade' })
  factory!: Factory;

  @ManyToOne({ primary: true, entity: () => Sprocket, onDelete: 'cascade' })
  sprocket!: Sprocket;

  @Property({ type: 'int' })
  quantity!: number;

  @Property({ type: 'int' })
  quantityExpected!: number;

  constructor(factory: Factory, sprocket: Sprocket, quantity: number, quantityExpected: number) {
    super();
    this.factory = factory;
    this.sprocket = sprocket;
    this.quantity = quantity;
    this.quantityExpected = quantityExpected;
  }
}






