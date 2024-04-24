using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace aspdotnet_main_server.Controllers
{
    [ApiController]
    [Route("prayerTime/")]
    public class PrayerTimeController: ControllerBase {
    
        [HttpGet]
        [Route("getPrayerTime")]
        public ActionResult<string> GetPrayerTime() {
            return Ok("Prayer time is at 5:00 AM");
        }

        [Authorize]
        [HttpPost]
        [Route("setPrayerTime")]
        public ActionResult<string> SetPrayerTime([FromBody] SetPrayerTimeRequestDto request) {
            // Extract details from request body
            string prayerTime = request.PrayerTime;
            return Ok("Prayer time set to " + prayerTime);
        }
    }
}

// Controller Specific DTO's
public class SetPrayerTimeRequestDto {
    public string PrayerTime { get; set; }
}