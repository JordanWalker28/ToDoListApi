using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Model.Service;
using ToDoList.Model.Tasks;
using ToDoList.Model.User;

namespace ToDoList.Controllers
{
    /// <summary>
    /// Api functions that can be called
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class ToDoListController : ControllerBase
    {

        private IToDoService _service;

        public ToDoListController(IToDoService service)
        {
            _service = service;
        }

        [HttpGet("/api/Users")]
        public ActionResult<IEnumerable<UserAttributes>> GetUsers()
        {
            return _service.GetUsers();
        }

        [HttpGet("/api/Users/{id}")]
        public ActionResult<UserAttributes> GetUser(string id)
        {
            return _service.GetUser(id);
        }

        [HttpPost("/api/Users")]
        public ActionResult<UserAttributes> AddUser(UserAttributes user)
        {
            _service.AddUser(user);
            return user;
        }

        [HttpPut("/api/Users/{id}")]
        public ActionResult<UserAttributes> UpdateUser(string id, UserAttributes user)
        {
            _service.UpdateUser(id, user);
            return user;
        }

        [HttpDelete("/api/Users/{id}")]
        public ActionResult<string> DeleteUser(string id)
        {
            _service.DeleteUser(id);
            return id;
        }

        [HttpGet("/api/Users/{id}/Tasks")]
        public ActionResult<IEnumerable<TaskItem>> GetUserTaskItems(string id)
        {
            return _service.GetUserTaskItems(id);
        }

        [HttpGet("/api/Users/{userId}/Tasks/{taskId}")]
        public ActionResult<TaskItem> GetTask(string userId, string taskId)
        {
            return _service.GetTask(userId, taskId);
        }

        [HttpPost("/api/Users/{id}/Tasks")]
        public ActionResult<TaskItem> AddUserTask(string id, TaskItem task)
        {
            return _service.AddUserTask(id, task);
        }

        [HttpDelete("/api/Users/{userId}/Tasks/{taskId}")]
        public ActionResult<string> DeleteUserTask(string userId, string taskId)
        {
            _service.DeleteUserTask(userId, taskId);
            return userId;
        }

        [HttpPut("/api/Users/{userId}/Tasks/{taskId}")]
        public ActionResult<TaskItem> UpdateTask(string userId, TaskItem task, string taskId)
        {
            _service.UpdateTask(userId, task, taskId);
            return task;
        }

    }
}
