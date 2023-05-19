import { Property } from '@mikro-orm/core';

export class CustomBaseEntity {
  @Property({ type: 'timestamptz' })
  created_at: Date = new Date();

  @Property({ type: 'timestamptz', nullable: true, onUpdate: () => new Date() })
  updated_at?: Date | null;
}