using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace aspdotnet_main_server.Controllers
{
    [ApiController]
    [Route("prayerTime/")]
    public class PrayerTimeController : ControllerBase
    {

        [HttpGet]
        [Route("getPrayerTime")]
        public ActionResult<string> GetPrayerTime()
        {
            return Ok("Prayer time is at 5:00 AM");
        }

        [Authorize]
        [HttpPost]
        [Route("setPrayerTime")]
        public ActionResult<string> SetPrayerTime([FromBody] SetPrayerTimeRequestDto request)
        {
            // Extract details from request body
            string prayerTime = request.PrayerTime;

            // Extract claims from the JWT token
            var usernameClaim = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name);
            var roleClaim = User.Claims.FirstOrDefault(c => c.Type == "ClaimTypes.Role");

            // You can now use the values of these claims
            var username = usernameClaim?.Value;
            var role = roleClaim?.Value;

            return Ok($"Prayer time set to {prayerTime} by user {username} with role {role}");
        }
    }
}

// Controller Specific DTO's
public class SetPrayerTimeRequestDto
{
    public string PrayerTime { get; set; }
}