import { CustomBaseEntity } from './_CustomBaseEntity';
import { Entity, Property, PrimaryKey, OneToMany, Collection } from '@mikro-orm/core';

@Entity()
export class Sprocket extends CustomBaseEntity {
  @PrimaryKey({ primary: true, autoincrement: true })
  id!: number;

  @Property({ type: 'int' })
  teeth: number;

  @Property({ type: 'int' })
  pitch_diameter: number;

  @Property({ type: 'int' })
  outside_diameter: number;

  @Property({ type: 'int' })
  pitch: number;

  constructor(teeth: number, pitch_diameter: number, outside_diameter: number, pitch: number) {
    super();
    this.teeth = teeth;
    this.pitch_diameter = pitch_diameter;
    this.outside_diameter = outside_diameter;
    this.pitch = pitch;
  }
}