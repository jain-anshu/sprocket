import type { EntityManager } from '@mikro-orm/core';
import { faker, Seeder } from '@mikro-orm/seeder';
import { Production } from '@/models/Production';

const factories =  [
      {
        "factory": {
          "chart_data": {
            "sprocket_production_actual": [
              32,
              29,
              31,
              30,
              32,
              32,
              29,
              31,
              30,
              32,
              32,
              29,
              31,
              30,
              32,
              32,
              29,
              31,
              30,
              32
            ],
            "sprocket_production_goal": [
              32,
              30,
              31,
              29,
              32,
              32,
              30,
              31,
              29,
              32,
              32,
              30,
              31,
              29,
              32,
              32,
              30,
              31,
              29,
              32
            ],
            "time": [
              1611194818,
              1611194878,
              1611194938,
              1611194998,
              1611195058,
              1611195118,
              1611195178,
              1611195238,
              1611195298,
              1611195358,
              1611195418,
              1611195478,
              1611195538,
              1611195598,
              1611195658,
              1611195718,
              1611195778,
              1611195838,
              1611195898,
              1611195958
            ]
          }
        }
      },
      {
        "factory": {
          "chart_data": {
            "sprocket_production_actual": [
              32,
              28,
              31,
              30,
              30,
              32,
              29,
              28,
              30,
              32,
              32,
              29,
              31,
              30,
              31,
              32,
              29,
              29,
              33,
              30
            ],
            "sprocket_production_goal": [
              31,
              33,
              29,
              29,
              32,
              30,
              30,
              31,
              29,
              31,
              31,
              30,
              28,
              29,
              32,
              29,
              30,
              31,
              28,
              32
            ],
            "time": [
              1611204818,
              1611204878,
              1611204938,
              1611204998,
              1611205058,
              1611205118,
              1611205178,
              1611205238,
              1611205298,
              1611205358,
              1611205418,
              1611205478,
              1611205538,
              1611205598,
              1611205658,
              1611205718,
              1611205778,
              1611205838,
              1611205898,
              1611205958
            ]
          }
        }
      },
      {
        "factory": {
          "chart_data": {
            "sprocket_production_actual": [
              32,
              29,
              31,
              30,
              30,
              32,
              29,
              29,
              30,
              32,
              32,
              29,
              31,
              30,
              30,
              32,
              29,
              29,
              33,
              31
            ],
            "sprocket_production_goal": [
              31,
              31,
              29,
              30,
              32,
              30,
              30,
              31,
              29,
              31,
              30,
              30,
              28,
              29,
              32,
              29,
              31,
              31,
              28,
              32
            ],
            "time": [
              1611304818,
              1611304878,
              1611304938,
              1611304998,
              1611305058,
              1611305118,
              1611305178,
              1611305238,
              1611305298,
              1611305358,
              1611305418,
              1611305478,
              1611305538,
              1611305598,
              1611305658,
              1611305718,
              1611305778,
              1611305838,
              1611305898,
              1611305958
            ]
          }
        }
      }
    ]
  

export class ProductionSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    for (let i = 0; i < factories.length; i++) {
      const chart = factories[i]["factory"]["chart_data"]
      const { sprocket_production_actual, sprocket_production_goal, time } = chart;
      for (let j = 0; j < sprocket_production_actual.length; j++) {
        const actual_production = sprocket_production_actual[j]
        const production_goal = sprocket_production_goal[j]
        const factory_id = i
        await em.create(Production, {actual_production, production_goal, factory_id, time: time[j] });
      }
    }
    await em.flush();
  }
}


