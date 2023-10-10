import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableVideos1696864967133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "videos",
                schema: "public",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "duration",
                        type: "numeric",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "category_id",
                        type: "uuid",
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_videos_category",
                        columnNames: ["category_id"],
                        referencedTableName: "categories",
                        referencedColumnNames: ["id"]
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("videos")
    }

}
