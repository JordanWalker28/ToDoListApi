import axios from 'axios';

const USER_API_BASE = "http://localhost:5000/api/Users";
const Tasks = "Tasks";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE + '/' + userId);
    }

    getTasks(userId){
        return axios.get(USER_API_BASE + '/' + userId + '/' + 'Tasks');
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE + '/' + userId, user);
    }

    addUser(user){
        return axios.post(USER_API_BASE, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE + '/' + userId);
    }

    getTaskById(userId, taskId){
        return axios.get(USER_API_BASE + '/' + userId + '/' + Tasks + '/' + taskId);
    }

    addTask(userId, task){
        return axios.post(USER_API_BASE + '/' + userId + '/' + Tasks, task);
    }

    deleteTask(userId, taskId){
        return axios.delete(USER_API_BASE + '/' + userId + '/' + Tasks + '/' + taskId);
    }

    updateTask(task, taskId, userId){
        return axios.put(USER_API_BASE + '/' + userId + '/'  + Tasks + '/' + taskId, task);
    }
}

export default new UserService()