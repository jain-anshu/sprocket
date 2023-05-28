import type { EntityManager } from '@mikro-orm/core';
import { faker, Seeder } from '@mikro-orm/seeder';
import { Sprocket } from '@/models/Sprocket';

const sprockets = [
  {
    teeth: 5,
    pitch_diameter: 5,
    outside_diameter: 6,
    pitch: 1,
  },
  {
    teeth: 5,
    pitch_diameter: 5,
    outside_diameter: 6,
    pitch: 1,
  },
  {
    teeth: 5,
    pitch_diameter: 5,
    outside_diameter: 6,
    pitch: 1,
  },
];

export class SprocketSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    for (let i = 0; i < sprockets.length; i++) {
      const { teeth, pitch_diameter, outside_diameter, pitch } = sprockets[i];
      await em.create(Sprocket, {teeth, pitch_diameter, outside_diameter, pitch});
    }

    await em.flush();
  }
}


