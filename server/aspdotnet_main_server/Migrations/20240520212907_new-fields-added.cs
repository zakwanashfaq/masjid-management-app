using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace aspdotnetmainserver.Migrations
{
    /// <inheritdoc />
    public partial class newfieldsadded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "OrganizationModelId",
                table: "EventModels",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "PrayerTimesModel",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PrayerTimesModel", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OrganizationModel",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    OrganizationName = table.Column<string>(type: "text", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    PrayerTimesId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrganizationModel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrganizationModel_PrayerTimesModel_PrayerTimesId",
                        column: x => x.PrayerTimesId,
                        principalTable: "PrayerTimesModel",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PrayerTimeRecordModels",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    LastUpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsSpecific = table.Column<bool>(type: "boolean", nullable: false),
                    IsDelayInMinutes = table.Column<bool>(type: "boolean", nullable: false),
                    DelayInMinutes = table.Column<int>(type: "integer", nullable: false),
                    SpecificPrayerTime = table.Column<string>(type: "text", nullable: false),
                    PrayerTimesModelId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PrayerTimeRecordModels", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PrayerTimeRecordModels_PrayerTimesModel_PrayerTimesModelId",
                        column: x => x.PrayerTimesModelId,
                        principalTable: "PrayerTimesModel",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "UserModels",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    OrganizationID = table.Column<string>(type: "text", nullable: false),
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    LastName = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    HashedPassword = table.Column<string>(type: "text", nullable: true),
                    UserRole = table.Column<string>(type: "text", nullable: false),
                    UserType = table.Column<string>(type: "text", nullable: false),
                    OrganizationModelId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserModels", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserModels_OrganizationModel_OrganizationModelId",
                        column: x => x.OrganizationModelId,
                        principalTable: "OrganizationModel",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_EventModels_OrganizationModelId",
                table: "EventModels",
                column: "OrganizationModelId");

            migrationBuilder.CreateIndex(
                name: "IX_OrganizationModel_PrayerTimesId",
                table: "OrganizationModel",
                column: "PrayerTimesId");

            migrationBuilder.CreateIndex(
                name: "IX_PrayerTimeRecordModels_PrayerTimesModelId",
                table: "PrayerTimeRecordModels",
                column: "PrayerTimesModelId");

            migrationBuilder.CreateIndex(
                name: "IX_UserModels_OrganizationModelId",
                table: "UserModels",
                column: "OrganizationModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_EventModels_OrganizationModel_OrganizationModelId",
                table: "EventModels",
                column: "OrganizationModelId",
                principalTable: "OrganizationModel",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EventModels_OrganizationModel_OrganizationModelId",
                table: "EventModels");

            migrationBuilder.DropTable(
                name: "PrayerTimeRecordModels");

            migrationBuilder.DropTable(
                name: "UserModels");

            migrationBuilder.DropTable(
                name: "OrganizationModel");

            migrationBuilder.DropTable(
                name: "PrayerTimesModel");

            migrationBuilder.DropIndex(
                name: "IX_EventModels_OrganizationModelId",
                table: "EventModels");

            migrationBuilder.DropColumn(
                name: "OrganizationModelId",
                table: "EventModels");
        }
    }
}
