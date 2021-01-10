import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {},
            tasks: []
        }

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        
    }


    deleteTask(val){
        UserService.deleteTask(this.state.user.id, val).then( res => {
            this.setState({tasks: this.state.tasks.filter(task => task.id !== val)});
        });
    }

    addTask(){
        this.props.history.push('/add-task/');
    }

    refreshPage(){ 
        window.location.reload(); 
    }

    slice(value){
        var res = value.slice(0, 10);
        return res;
    }

    updateTask(id){

        const task = {id: id.id, userId: id.userId, name: id.name, status: 1, createdDate: id.createdDate, dueByDate:id.dueByDate};
        UserService.updateTask(task, id.id, id.userId,).then( res => {
            this.props.history.push('/view-user/' + id.userId);
        });
    }
    
    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
            console.log(res.data)
        })

        UserService.getTasks(this.state.id).then( res => {
            this.setState({tasks: res.data});

            console.log(res.data)
        })
    }

    getValue(val){
        if(val == "0"){
            return <p>Not Done</p>
        }else{
            return <p>Done</p>
        }
    }

    render() {

        return (
            

            <div>

                
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Name: </label>
                            <div> { this.state.user.firstName } { this.state.user.secondName }</div>
                        </div>
                    </div>
                    
                </div>

                <br></br>

                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTask}> Add Task</button>
                 </div>

                 <br></br>

                <div className = "row">
                <div class="table-responsive">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Created Date</th>
                                    <th> Due Date</th>
                                    <th> Status</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                        
                        <tbody>
                                {
                                    this.state.tasks.map(
                                        task => 
                                        <tr key = {task.id}>
                                             <td> {task.name} </td> 
                                             <td> {this.slice(task.createdDate)} </td> 
                                             <td> {this.slice(task.dueByDate)} </td> 
                                             <td>

                                              <p>{this.getValue(task.status)}</p>
                                              
                                              
                                              </td>      
                                             <td>
                                                 <button onClick={ () => this.refreshPage(this.updateTask(task))} className="btn btn-info">Complete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTask(task.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            </table>
                    </div>
                    </div>
                

                            
            </div>

                        
            
        )
    }
}

export default ViewUserComponent