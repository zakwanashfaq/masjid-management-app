using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace aspdotnet_main_server.Entities;

public class PrayerTimesModel
{
    [Key]
    public Guid Id { get; set; }
    public List<SinglePrayerTimeRecordModel> PrayerTimes { get; set; } = new List<SinglePrayerTimeRecordModel>();
}

public class SinglePrayerTimeRecordModel
{
    [Key]
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime LastUpdatedAt { get; set; }
    public bool IsSpecific { get; set; }
    public bool IsDelayInMinutes { get; set; }
    public int DelayInMinutes { get; set; }
    public string SpecificPrayerTime { get; set; } = string.Empty;
}