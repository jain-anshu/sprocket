import { Migration } from '@mikro-orm/migrations';

export class Migration20230524004742 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "sprocket" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) null, "teeth" int not null, "pitch_diameter" int not null, "outside_diameter" int not null, "pitch" int not null);');
    this.addSql('create table "production" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) null, "actual_production" int not null, "pitch_diameter" int not null, "production_goal" int not null, "time" int not null, "factory_id" int not null);'); 
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "sprocket" cascade;');
    this.addSql('drop table if exists "production" cascade;'); 
  }

}
