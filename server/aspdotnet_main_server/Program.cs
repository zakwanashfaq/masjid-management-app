using aspdotnet_main_server.configurations;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
ConfigureAuth.ConfigureJWT(builder.Services, builder.Configuration);
SwaggerConfig.ConfigureSwagger(builder.Services);
builder.Services.AddControllers();
builder.Services.AddAuthorization();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
