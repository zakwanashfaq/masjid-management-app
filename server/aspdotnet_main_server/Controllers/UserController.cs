
using aspdotnet_main_server.db;
using aspdotnet_main_server.DTOs;
using aspdotnet_main_server.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace aspdotnet_main_server.Controllers;

[Route("user/")]
public class UserController : ControllerBase
{
    private readonly DataContext _context;

    public UserController(DataContext context)
    {
        _context = context;
    }

    private string GenerateToken(UserModel user)
    {
        
        return "token";
    }


    [Authorize]
    [HttpGet]
    public async Task<ActionResult<UserModel>> GetUser()
    {
        // extract id from token
        // todo: complete the implementation
        var user = new UserModel
        {
            Email = "test@gmail.com",
            CreatedAt = DateTime.Now,
            FirstName = "Zakwan",
            LastName = "Zian",
            UserRole = "Admin",
            UserType = "Free",
            Username = "testuser",
            HashedPassword = "hash_password"
        };

        if (user == null)
        {
            return NotFound();
        }

        return Ok(user);
    }

    [Authorize]
    [HttpPut("updateUser/{id}")]
    public async Task<IActionResult> UpdateUser(Guid id, UserModel user)
    {
        // Todo: user can only update their profile unless its a root/admin user
        if (id != user.Id)
        {
            return BadRequest();
        }

        _context.Entry(user).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            // todo: remove the throw statement, log the error and return proper response to the user                                                                                       
            throw (new Exception("User with Id " + id + " failed to save"));
        }

        return NoContent();
    }

    [Route("createNewUser")]
    [HttpPost]
    public async Task<ActionResult<UserModel>> CreateNewUser(SignUpPayloadDTO payload)
    {
        Guid id = Guid.NewGuid();
        UserModel user = new()
        {
            Id = id,
            Email = payload.Email,
            PhoneNumber = payload.PhoneNumber,
            CreatedAt = DateTime.Now.ToUniversalTime(),
            FirstName = payload.FirstName,
            LastName = payload.LastName,
            UserRole = "root",
            UserType = "free",
            Username = payload.Username,
            HashedPassword = payload.HashedPassword
        };

        try
        {
            _context.UserModels.Add(user);
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateException ex)
        {
            if (ex.InnerException != null && ex.InnerException is Npgsql.PostgresException pgEx && pgEx.SqlState == "23505")
            {
                return Conflict("A user with this username already exists.");
            }
            return BadRequest("User creation was not successful.");
        }

        // todo: return a token as well
        return Ok(new { user });
    }

    [Route("createNewUserFromOrganization")]
    [Authorize]
    [HttpPost]
    public async Task<ActionResult<UserModel>> CreateNewUserFromOrganization(UserModel user)
    {
        _context.UserModels.Add(user);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetUser", new { id = user.Id }, user);
    }

    [Authorize]
    [HttpDelete("deleteUser/{id}")]
    public async Task<IActionResult> DeleteUser(Guid id)
    {
        // Todo: Normal or admin users should not be able to delete root or admin user
        var user = await _context.UserModels.FindAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        _context.UserModels.Remove(user);
        await _context.SaveChangesAsync();

        return Ok(new { message = ("User with Id " + id + " deleted successfully") });
    }
}