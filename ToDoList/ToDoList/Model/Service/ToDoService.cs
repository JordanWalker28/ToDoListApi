using System.Collections.Generic;
using ToDoList.Model.Tasks;
using ToDoList.Model.User;

namespace ToDoList.Model.Service
{
    /// <summary>
    /// Implementation of To Do Service that exposes an interface of the class.
    ///
    /// There is a large amount of code repetition here that could be simplified into tidier functions, in
    /// the exercise however I felt it was more important to get a working implementation
    ///
    /// In here we are modyfying aspects of the List database. However the functions in here could be altered
    /// so that the operation is completed in a database.
    ///
    /// An option here would be to get a context of the database the user would be using if this was deployed
    /// and then that could utilise these functions however push the correct operation we want to the desired
    /// database. 
    /// 
    /// </summary>
    public class ToDoService : IToDoService
    {

        private List<TaskItem> _tasks;
        private List<UserAttributes> _userItems;
        private UserAttributes userItem;
        private TaskItem taskItem;

        public ToDoService()
        {
            _userItems = new List<UserAttributes>();
        }

        public UserAttributes GetUser(string id)
        {
            for (var index = _userItems.Count - 1; index >= 0; index--)
            {
                if (_userItems[index].id == id)
                {
                    userItem = _userItems[index];
                }
            }
            return userItem;
        }

        public List<UserAttributes> GetUsers()
        {
            return _userItems;
        }

        public UserAttributes AddUser(UserAttributes userItem)
        {
            _userItems.Add(userItem);
            return userItem;
        }

        public UserAttributes UpdateUser(string id, UserAttributes userItem)
        {
            for (var index = _userItems.Count - 1; index >= 0; index--)
            {
                if (_userItems[index].id == id)
                {
                    _userItems[index] = userItem;
                }
            }
            return userItem;
        }

        public string DeleteUser(string id)
        {
            for (var index = _userItems.Count - 1; index >= 0; index--)
            {
                if (_userItems[index].id == id)
                {
                    _userItems.RemoveAt(index);
                }
            }
            return id;
        }

        public List<TaskItem> GetUserTaskItems(string id)
        {
            for (var index = _userItems.Count - 1; index >= 0; index--)
            {
                if (_userItems[index].id == id)
                {
                    _tasks = _userItems[index].tasks;
                }
            }
            return _tasks;
        }

        public TaskItem AddUserTask(string id, TaskItem task)
        {
            for (var index = _userItems.Count - 1; index >= 0; index--)
            {
                if (_userItems[index].id == id)
                {
                    _tasks.Add(task);
                }
            }

            return task;
        }

        public string DeleteUserTask(string userId, string taskId)
        {
            List<TaskItem> taskItems = null;

            for (var index = _userItems.Count - 1; index >= 0; index--)
            {
                if (_userItems[index].id == userId)
                {
                    taskItems = _userItems[index].tasks;
                }
            }

            for (var index = taskItems.Count - 1; index >= 0; index--)
            {
                if (taskItems[index].id == taskId)
                {
                    taskItems.RemoveAt(index);
                }
            }

            return userId;
        }

        public TaskItem UpdateTask(string userId, TaskItem task, string taskId)
        {
            for (var index = _userItems.Count - 1; index >= 0; index--)
            {
                if (_userItems[index].id == userId)
                {
                    _tasks[index] = task;
                }
            }
            return task;
        }

        public TaskItem GetTask(string userId, string taskId)
        {
            List<TaskItem> taskItems = null;

            for (var index = _userItems.Count - 1; index >= 0; index--)
            {
                if (_userItems[index].id == userId)
                {
                    taskItems = _userItems[index].tasks;
                }
            }


            for (var index = taskItems.Count - 1; index >= 0; index--)
            {
                if (taskItems[index].id == taskId)
                {
                    taskItem = taskItems[index];
                }
            }

            return taskItem;
        }


    }
}
