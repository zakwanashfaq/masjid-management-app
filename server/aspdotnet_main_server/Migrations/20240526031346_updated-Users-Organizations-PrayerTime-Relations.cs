using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace aspdotnetmainserver.Migrations
{
    /// <inheritdoc />
    public partial class updatedUsersOrganizationsPrayerTimeRelations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserModels_OrganizationModel_OrganizationID",
                table: "UserModels");

            migrationBuilder.DropTable(
                name: "SinglePrayerTimeRecordModel");

            migrationBuilder.DropIndex(
                name: "IX_UserModels_OrganizationID",
                table: "UserModels");

            migrationBuilder.DropColumn(
                name: "OrganizationID",
                table: "UserModels");

            migrationBuilder.AlterColumn<string>(
                name: "HashedPassword",
                table: "UserModels",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "UserModels",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "PrayerTimeModel",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "DelayInMinutes",
                table: "PrayerTimeModel",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "LastUpdatedAt",
                table: "PrayerTimeModel",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<Guid>(
                name: "OrganizationModelId",
                table: "PrayerTimeModel",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<TimeOnly>(
                name: "SpecificPrayerTime",
                table: "PrayerTimeModel",
                type: "time without time zone",
                nullable: false,
                defaultValue: new TimeOnly(0, 0, 0));

            migrationBuilder.CreateIndex(
                name: "IX_UserModels_Username",
                table: "UserModels",
                column: "Username",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PrayerTimeModel_OrganizationModelId",
                table: "PrayerTimeModel",
                column: "OrganizationModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_PrayerTimeModel_OrganizationModel_OrganizationModelId",
                table: "PrayerTimeModel",
                column: "OrganizationModelId",
                principalTable: "OrganizationModel",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PrayerTimeModel_OrganizationModel_OrganizationModelId",
                table: "PrayerTimeModel");

            migrationBuilder.DropIndex(
                name: "IX_UserModels_Username",
                table: "UserModels");

            migrationBuilder.DropIndex(
                name: "IX_PrayerTimeModel_OrganizationModelId",
                table: "PrayerTimeModel");

            migrationBuilder.DropColumn(
                name: "Username",
                table: "UserModels");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "PrayerTimeModel");

            migrationBuilder.DropColumn(
                name: "DelayInMinutes",
                table: "PrayerTimeModel");

            migrationBuilder.DropColumn(
                name: "LastUpdatedAt",
                table: "PrayerTimeModel");

            migrationBuilder.DropColumn(
                name: "OrganizationModelId",
                table: "PrayerTimeModel");

            migrationBuilder.DropColumn(
                name: "SpecificPrayerTime",
                table: "PrayerTimeModel");

            migrationBuilder.AlterColumn<string>(
                name: "HashedPassword",
                table: "UserModels",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AddColumn<Guid>(
                name: "OrganizationID",
                table: "UserModels",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "SinglePrayerTimeRecordModel",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DelayInMinutes = table.Column<int>(type: "integer", nullable: false),
                    IsDelayInMinutes = table.Column<bool>(type: "boolean", nullable: false),
                    IsSpecific = table.Column<bool>(type: "boolean", nullable: false),
                    LastUpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    PrayerTimesModelId = table.Column<Guid>(type: "uuid", nullable: true),
                    SpecificPrayerTime = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SinglePrayerTimeRecordModel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SinglePrayerTimeRecordModel_PrayerTimeModel_PrayerTimesMode~",
                        column: x => x.PrayerTimesModelId,
                        principalTable: "PrayerTimeModel",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserModels_OrganizationID",
                table: "UserModels",
                column: "OrganizationID");

            migrationBuilder.CreateIndex(
                name: "IX_SinglePrayerTimeRecordModel_PrayerTimesModelId",
                table: "SinglePrayerTimeRecordModel",
                column: "PrayerTimesModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserModels_OrganizationModel_OrganizationID",
                table: "UserModels",
                column: "OrganizationID",
                principalTable: "OrganizationModel",
                principalColumn: "Id");
        }
    }
}
