using aspdotnet_main_server.configurations;
using aspdotnet_main_server.db;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
ConfigureAuth.ConfigureJWT(builder.Services, builder.Configuration);
SwaggerConfig.ConfigureSwagger(builder.Services);
builder.Services.AddControllers();
builder.Services.AddAuthorization();
builder.Services.AddDbContext<DataContext>();

// Configure Kestrel server settings to allow host to listen on port 5131
builder.WebHost.ConfigureKestrel(options =>
{
    // Listen on port 5131 from any IP, exposes this port to the host machine
    options.ListenAnyIP(5131); 
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();