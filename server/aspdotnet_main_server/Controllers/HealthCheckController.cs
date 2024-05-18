using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace aspdotnet_main_server.Controllers;

[ApiController]
[Route("healthCheck/")]
public class HealthCheckController : ControllerBase
{

    [HttpGet]
    [Route("/health")]
    public ActionResult GetHealthCheckStatus()
    {
        return Ok(new { message = "Server is healthy"});
    }

    
}

