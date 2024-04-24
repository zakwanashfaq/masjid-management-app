using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace aspdotnet_main_server.Controllers;

[ApiController]
[Route("auth/")]
public class AuthController: ControllerBase {
    private IConfiguration _config;
    public AuthController(IConfiguration configuration) {
        this._config = configuration;
    }

    [HttpPost]
    [Route("loginWithUsernameAndPassword")]
    public ActionResult<string> Login([FromBody] LoginRequestDto request) {
        // Extract details from request body
        string username = request.Username;
        string password = request.Password;
        
        // Todo: Implement actual authentication logic
        // Check if username and password are correct
        if (username == "admin" || password == "admin") {
            // jwt implementation: https://medium.com/@vndpal/how-to-implement-jwt-token-authentication-in-net-core-6-ab7f48470f5c
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            Claim claim = new Claim(ClaimTypes.Name, username);
            Claim roleClaim = new Claim("ClaimTypes.Role", "Admin");
            
            List<Claim> claims = new List<Claim> { 
                claim, 
                roleClaim 
            };

            var Sectoken = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              claims: claims,
              expires: DateTime.Now.AddMinutes(1),
              signingCredentials: credentials);

            var token =  new JwtSecurityTokenHandler().WriteToken(Sectoken);
            return Ok(new {
                token= token
            });
        }

        return Unauthorized(new {messgae= "Invalid Credentials"});
    }

}

// Controller Specific DTO's
public class LoginRequestDto {
    public string Username { get; set; }
    public string Password { get; set; }
}
