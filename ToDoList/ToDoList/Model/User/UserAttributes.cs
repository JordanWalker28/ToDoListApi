using System.Collections.Generic;
using ToDoList.Model.Tasks;

namespace ToDoList.Model.User
{
    /// <summary>
    /// Class to hold attributes of the user.
    /// This also holds a list of all the tasks that are associated with the given user.
    /// </summary>
    public class UserAttributes
    {
        public string id { get; set; }
        public string firstName { get; set; }
        public string secondName { get; set; }
        public List<TaskItem> tasks { get; set; }
    }
}
