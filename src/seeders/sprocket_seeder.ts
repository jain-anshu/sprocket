import type { EntityManager } from '@mikro-orm/core';
import { faker, Seeder } from '@mikro-orm/seeder';
import { Sprocket } from '@/models/Sprocket';

const sprockets = [
  {
    teeth: 5,
    pitchDiameter: 5,
    outsideDiameter: 6,
    pitch: 1,
  },
  {
    teeth: 5,
    pitchDiameter: 5,
    outsideDiameter: 6,
    pitch: 1,
  },
  {
    teeth: 5,
    pitchDiameter: 5,
    outsideDiameter: 6,
    pitch: 1,
  },
];

export class SprocketSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    for (let i = 0; i < sprockets.length; i++) {
      const { teeth, pitchDiameter, outsideDiameter, pitch } = sprockets[i];
      await em.create(Sprocket, { teeth, pitchDiameter, outsideDiameter, pitch });
    }

    await em.flush();
  }
}


