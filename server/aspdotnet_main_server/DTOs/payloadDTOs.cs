namespace aspdotnet_main_server.DTOs;

public class SignUpPayloadDTO
{
    public string Username { get; set; }
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string PhoneNumber { get; set; }
    public string HashedPassword { get; set; }
}