import { FactorySprocket } from './FactorySprocket';
import { CustomBaseEntity } from './_CustomBaseEntity';
import { Entity, Property, PrimaryKey, OneToMany, Collection } from '@mikro-orm/core';

@Entity()
export class Sprocket extends CustomBaseEntity {
  @PrimaryKey({ primary: true, autoincrement: true })
  id!: number;

  @Property({ type: 'int' })
  teeth: number;

  @Property({ type: 'int' })
  pitchDiameter: number;

  @Property({ type: 'int' })
  outsideDiameter: number;

  @Property({ type: 'int' })
  pitch: number;

  @OneToMany(() => FactorySprocket, chartData => chartData.sprocket)
  chartData = new Collection<FactorySprocket>(this);

  constructor(teeth: number, pitchDiameter: number, outsideDiameter: number, pitch: number) {
    super();
    this.teeth = teeth;
    this.pitchDiameter = pitchDiameter;
    this.outsideDiameter = outsideDiameter;
    this.pitch = pitch;
  }
}