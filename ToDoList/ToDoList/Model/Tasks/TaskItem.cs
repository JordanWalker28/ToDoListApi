using System;
namespace ToDoList.Model.Tasks
{
    /// <summary>
    /// Class to hold information on a Task Item
    ///
    /// For the purpose of this exercise id is a string but during production this could be changed for a Guid
    /// </summary>
    public class TaskItem
    {
        public string id { get; set; }
        public string userId { get; set; }
        public string name { get; set; }
        public TaskStatus status { get; set; }
        public DateTime createdDate { get; set; }
        public DateTime dueByDate { get; set; }
    }
}
