using System.ComponentModel.DataAnnotations;

namespace aspdotnet_main_server.Entities;

public class EventModel
{
    [Key]
    public int Id { get; set; }
    public DateTime eventDateTime { get; set; }
    public string eventName { get; set; }
    public string eventDescription { get; set; }
    public string createdBy { get; set; }
    public DateTime createdOn { get; set; }
}