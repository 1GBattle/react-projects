using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using The_Todo_App_TS.Models;

var policyName = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policyName,
        builder =>
        {
            builder
                .WithOrigins("http://localhost:3000") // specifying the allowed origin
                .WithMethods("GET", "POST", "DELETE", "PUT") // defining the allowed HTTP method
                .AllowAnyHeader(); // allowing any header to be sent
        });
});

// Add services to the container.

builder.Services.AddControllers();

//Adds database context to the dependency injection
builder.Services.AddDbContext<TodoContext>(opt =>
{
    opt.UseInMemoryDatabase("TodoList");
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // app.UseSwagger();
    // app.UseSwaggerUI();
}

app.UseCors(policyName);
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();