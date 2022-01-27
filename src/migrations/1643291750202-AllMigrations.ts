import { MigrationInterface, QueryRunner } from 'typeorm';

export class AllMigrations1643291750202 implements MigrationInterface {
  name = 'AllMigrations1643291750202';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "transfer" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "balance" integer NOT NULL, "amount" integer NOT NULL, "remarks" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "transfer" ADD CONSTRAINT "FK_79345be54b82de8207be305a9d3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transfer" DROP CONSTRAINT "FK_79345be54b82de8207be305a9d3"`,
    );
    await queryRunner.query(`DROP TABLE "transfer"`);
  }
}
