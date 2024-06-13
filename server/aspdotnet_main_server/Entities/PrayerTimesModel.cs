using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace aspdotnet_main_server.Entities;

public class PrayerTimesModel
{
    [Key]
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime LastUpdatedAt { get; set; }
    public int DelayInMinutes { get; set; }
    public TimeOnly SpecificPrayerTime { get; set; }
}