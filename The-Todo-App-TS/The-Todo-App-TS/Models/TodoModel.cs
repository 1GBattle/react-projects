namespace The_Todo_App_TS.Models;

public class TodoModel
{
    public string? Id { get; set; }
    public string? Title { get; set; }
    public string? Urgency { get; set; }
    public DateTime CreatedAt { get; set; }
    public bool IsComplete { get; set; }
}