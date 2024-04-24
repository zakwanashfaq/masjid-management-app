
using Microsoft.OpenApi.Models;


namespace aspdotnet_main_server.configurations
{
    public class SwaggerConfig
    {
        public static void ConfigureSwagger(IServiceCollection services)
        {
            // ref: https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Masjid Management Api", Version = "1.0" });

                // Add the JWT bearer authentication scheme to Swagger
                var securityScheme = new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Description = "JWT Authorization header using the Bearer scheme",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    Reference = new OpenApiReference
                    {
                        Type = ReferenceType.SecurityScheme,
                        Id = "Bearer"
                    }
                };

                c.AddSecurityDefinition("Bearer", securityScheme);

                var securityRequirement = new OpenApiSecurityRequirement
                {
                    { securityScheme, new string[] { } }
                };

                c.AddSecurityRequirement(securityRequirement);
            });
        }
    }
    
}