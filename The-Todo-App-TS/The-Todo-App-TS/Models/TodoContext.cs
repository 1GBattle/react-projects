using Microsoft.EntityFrameworkCore;

namespace The_Todo_App_TS.Models;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options) : base(options)
    {
    }

    public DbSet<TodoModel> TodoItems { get; set; } = null;
}