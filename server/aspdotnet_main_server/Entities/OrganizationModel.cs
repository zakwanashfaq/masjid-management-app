using System.ComponentModel.DataAnnotations;

namespace aspdotnet_main_server.Entities;

public class OrganizationModel
{
    [Key]
    public required Guid Id { get; set; }
    public required string OrganizationName { get; set;}
    public required DateTime CreatedAt { get; set; }
    public required ICollection<UserModel> Users { get; set; }
    public ICollection<EventModel>? Events { get; set; }
    public ICollection<PrayerTimesModel>? PrayerTimes { get; set; }

}