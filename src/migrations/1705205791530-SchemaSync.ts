import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaSync1705205791530 implements MigrationInterface {
    name = 'SchemaSync1705205791530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "basic" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "basic" DROP COLUMN "description"`);
    }

}
