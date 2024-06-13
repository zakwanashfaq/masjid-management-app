using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace aspdotnetmainserver.Migrations
{
    /// <inheritdoc />
    public partial class updatedUsersOrganizationsagain : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrganizationModel_PrayerTimesModel_PrayerTimesId",
                table: "OrganizationModel");

            migrationBuilder.DropForeignKey(
                name: "FK_PrayerTimeRecordModels_PrayerTimesModel_PrayerTimesModelId",
                table: "PrayerTimeRecordModels");

            migrationBuilder.DropIndex(
                name: "IX_OrganizationModel_PrayerTimesId",
                table: "OrganizationModel");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PrayerTimesModel",
                table: "PrayerTimesModel");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PrayerTimeRecordModels",
                table: "PrayerTimeRecordModels");

            migrationBuilder.DropColumn(
                name: "PrayerTimesId",
                table: "OrganizationModel");

            migrationBuilder.RenameTable(
                name: "PrayerTimesModel",
                newName: "PrayerTimeModel");

            migrationBuilder.RenameTable(
                name: "PrayerTimeRecordModels",
                newName: "SinglePrayerTimeRecordModel");

            migrationBuilder.RenameIndex(
                name: "IX_PrayerTimeRecordModels_PrayerTimesModelId",
                table: "SinglePrayerTimeRecordModel",
                newName: "IX_SinglePrayerTimeRecordModel_PrayerTimesModelId");

            migrationBuilder.Sql(
                "ALTER TABLE \"UserModels\" ALTER COLUMN \"OrganizationID\" TYPE uuid USING \"OrganizationID\"::uuid;");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PrayerTimeModel",
                table: "PrayerTimeModel",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SinglePrayerTimeRecordModel",
                table: "SinglePrayerTimeRecordModel",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_UserModels_OrganizationID",
                table: "UserModels",
                column: "OrganizationID");

            migrationBuilder.AddForeignKey(
                name: "FK_SinglePrayerTimeRecordModel_PrayerTimeModel_PrayerTimesMode~",
                table: "SinglePrayerTimeRecordModel",
                column: "PrayerTimesModelId",
                principalTable: "PrayerTimeModel",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_UserModels_OrganizationModel_OrganizationID",
                table: "UserModels",
                column: "OrganizationID",
                principalTable: "OrganizationModel",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SinglePrayerTimeRecordModel_PrayerTimeModel_PrayerTimesMode~",
                table: "SinglePrayerTimeRecordModel");

            migrationBuilder.DropForeignKey(
                name: "FK_UserModels_OrganizationModel_OrganizationID",
                table: "UserModels");

            migrationBuilder.DropIndex(
                name: "IX_UserModels_OrganizationID",
                table: "UserModels");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SinglePrayerTimeRecordModel",
                table: "SinglePrayerTimeRecordModel");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PrayerTimeModel",
                table: "PrayerTimeModel");

            migrationBuilder.RenameTable(
                name: "SinglePrayerTimeRecordModel",
                newName: "PrayerTimeRecordModels");

            migrationBuilder.RenameTable(
                name: "PrayerTimeModel",
                newName: "PrayerTimesModel");

            migrationBuilder.RenameIndex(
                name: "IX_SinglePrayerTimeRecordModel_PrayerTimesModelId",
                table: "PrayerTimeRecordModels",
                newName: "IX_PrayerTimeRecordModels_PrayerTimesModelId");

             migrationBuilder.Sql(
                "ALTER TABLE \"UserModels\" ALTER COLUMN \"OrganizationID\" TYPE text USING \"OrganizationID\"::text;");

            migrationBuilder.AddColumn<Guid>(
                name: "PrayerTimesId",
                table: "OrganizationModel",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_PrayerTimeRecordModels",
                table: "PrayerTimeRecordModels",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PrayerTimesModel",
                table: "PrayerTimesModel",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_OrganizationModel_PrayerTimesId",
                table: "OrganizationModel",
                column: "PrayerTimesId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrganizationModel_PrayerTimesModel_PrayerTimesId",
                table: "OrganizationModel",
                column: "PrayerTimesId",
                principalTable: "PrayerTimesModel",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_PrayerTimeRecordModels_PrayerTimesModel_PrayerTimesModelId",
                table: "PrayerTimeRecordModels",
                column: "PrayerTimesModelId",
                principalTable: "PrayerTimesModel",
                principalColumn: "Id");
        }
    }
}
