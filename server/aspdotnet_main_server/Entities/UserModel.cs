using System.ComponentModel.DataAnnotations;

namespace aspdotnet_main_server.Entities;

public class UserModel
{
    [Key]
    public Guid Id { get; set; }    
    public required string Username { get; set; }
    public required string Email { get; set; }
    public required DateTime CreatedAt { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public string? PhoneNumber { get; set; }
    public required string HashedPassword { get; set; }
    public required string UserRole { get; set; }
    public required string UserType { get; set; }
}