namespace aspdotnet_main_server.Controllers;

using aspdotnet_main_server.db;
using aspdotnet_main_server.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("event/")]
public class EventController : ControllerBase
{
    private readonly DataContext _context;

    public EventController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("getRecentEvents")]
    public async Task<ActionResult<IEnumerable<EventModel>>> GetRecentEvent()
    {
        var events = await _context.EventModels.Take(5).ToListAsync();
        return Ok(events);
    }

    // Gets 25 events starting from the given id
    [HttpPost]
    [Route("get25Events")]
    public async Task<ActionResult<IEnumerable<EventModel>>> Get25EventRequest([FromBody] Get25EventRequestDto request)
    {
        var events = await _context.EventModels
            .Where(e => e.Id >= request.startId)
            .Take(25)
            .ToListAsync();
        return Ok(events);
    }



    [Authorize]
    [HttpPost]
    [Route("addEvent")]
    public async Task<ActionResult<string>> SetEvent([FromBody] AddEventRequestDto request)
    {
        // Create a new event
        var newEvent = new EventModel
        {
            // Set the properties of the event here
            eventDate = request.eventDate.ToUniversalTime(), // convert eventDate to UTC
            eventName = request.eventName,
            eventDescription = request.eventDescription,
            createdBy = "User", // replace with actual user
            createdOn = DateTime.UtcNow // set current date and time in UTC
        };

        // Add the new event to the EventModels DbSet
        _context.EventModels.Add(newEvent);

        // Save the changes to the database
        await _context.SaveChangesAsync();

        return Ok($"Event date set to {newEvent.eventDate.ToString()}.");
    }
}


// controller specific DTO's
public class AddEventRequestDto
{
    public DateTime eventDate { get; set; }
    public string eventName { get; set; }
    public string eventDescription { get; set; }

}

public class Get25EventRequestDto
{
    public int startId { get; set; }
}