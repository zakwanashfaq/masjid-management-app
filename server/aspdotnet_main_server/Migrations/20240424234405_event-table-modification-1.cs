using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace aspdotnetmainserver.Migrations
{
    /// <inheritdoc />
    public partial class eventtablemodification1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "eventDate",
                table: "EventModels",
                newName: "eventDateTime");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "eventDateTime",
                table: "EventModels",
                newName: "eventDate");
        }
    }
}
