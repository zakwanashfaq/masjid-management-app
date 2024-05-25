using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace aspdotnet_main_server.Entities;

public class UserModel
{
    [Key]
    public Guid Id { get; set; }
    public required string Email { get; set; }
    public required DateTime CreatedAt { get; set; }
    public Guid? OrganizationID { get; set; }
    public OrganizationModel? Organization { get; set; } 
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public string? PhoneNumber { get; set; }
    public string? HashedPassword { get; set; }
    public required string UserRole { get; set; }
    public required string UserType { get; set; }
}