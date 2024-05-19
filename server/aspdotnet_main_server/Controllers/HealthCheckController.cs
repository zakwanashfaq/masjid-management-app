using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace aspdotnet_main_server.Controllers;
[ApiController]
[Route("/")]
public class HealthCheckController : ControllerBase
{
    [HttpGet]
    [Route("")]
    public ActionResult GetHealthCheckStatus()
    {
        return Ok(new { message = "Server is healthy"});
    }
}

