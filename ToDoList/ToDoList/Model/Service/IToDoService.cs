using System.Collections.Generic;
using ToDoList.Model.Tasks;
using ToDoList.Model.User;

namespace ToDoList.Model.Service
{
    /// <summary>
    /// Interface of to doService which allows use to maintain the api calls but behind the interface
    /// swaps could be made so in this instance we could expell the "fake" list database with an actual one
    /// whilst the logic here would remain unchanged
    /// </summary>
    public interface IToDoService
    {
        public List<UserAttributes> GetUsers();

        public UserAttributes GetUser(string id);

        public UserAttributes AddUser(UserAttributes productItem);

        public UserAttributes UpdateUser(string id, UserAttributes productItem);

        public string DeleteUser(string id);

        public List<TaskItem> GetUserTaskItems(string id);

        public TaskItem GetTask(string userId, string taskId);

        public TaskItem AddUserTask(string id, TaskItem task);

        public string DeleteUserTask(string userID, string taskId);

        public TaskItem UpdateTask(string userId, TaskItem task, string taskId);

    }
}