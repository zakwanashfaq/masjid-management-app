// ref: https://jasonwatmore.com/post/2022/06/23/net-6-connect-to-postgresql-database-with-entity-framework-core
namespace aspdotnet_main_server.db;

using aspdotnet_main_server.Entities;
using Microsoft.EntityFrameworkCore;

public class DataContext : DbContext
{
    protected readonly IConfiguration Configuration;

    public DataContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // connect to postgres with connection string from app settings
        options.UseNpgsql(Configuration.GetConnectionString("PostgreSQLDatabase"));
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<OrganizationModel>()
            .HasMany(o => o.Users);

        modelBuilder.Entity<OrganizationModel>()
            .HasMany(o => o.Events);

        modelBuilder.Entity<OrganizationModel>()
            .HasMany(o => o.PrayerTimes);
        
        modelBuilder.Entity<UserModel>()
            .HasIndex(u => u.Username)
            .IsUnique();
    }

    public DbSet<EventModel> EventModels { get; set; }
    public DbSet<OrganizationModel> OrganizationModel { get; set; }
    public DbSet<PrayerTimesModel> PrayerTimeModel { get; set; }
    public DbSet<UserModel> UserModels { get; set; }

}