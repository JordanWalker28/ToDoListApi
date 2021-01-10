namespace ToDoList.Model.Tasks
{
    /// <summary>
    /// An Enum for TaskItem. The idea here instead of using a boolean value the expansion of this product could
    /// allow for different levels of Task Completeness which gives the pottential for a more informed task list
    /// i.e. "InProgress", "CompleteToday" etc. 
    /// </summary>
    public enum TaskStatus
    {
        NotDone,
        Done
    }
}
