import React, { Component } from 'react'
import UserService from '../services/UserService'


class AddTaskComponent extends Component {
    constructor(props) {
        super(props)


        this.state = {
            id: this.props.match.params.id,
            userId: '',
            name: '',
            status: 0,
            createdDate: '',
            dueByDate: '',
        }

    }

    cancel(){
        this.props.history.push('/Users');
    }

    getCurrentDate(){
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        return year +"-"+month+"-"+date;
    }

    changeIdNameHandler= (event) => {
        this.setState({id: event.target.value});
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeUserIdNameHandler= (event) => {
        this.setState({userId: event.target.value});
    }

    changeDateHandler= (event) => {
        this.setState({dueByDate: event.target.value});
    }

    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let task = {id: this.state.id, userId: this.state.userId, name: this.state.name, status: this.state.status, createdDate: this.getCurrentDate(), dueByDate: this.state.dueByDate};
        console.log('task => ' + JSON.stringify(task));


        UserService.addTask(this.state.userId, task).then( res => {
            this.props.history.push('/view-user/' + this.state.userId);
        });
        
    }   
  
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Task ID: </label>
                                            <input placeholder="Id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Task Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> User ID: </label>
                                            <input placeholder="userId" name="userId" className="form-control" 
                                                value={this.state.userId} onChange={this.changeUserIdNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Due By Date: </label>
                                            <input type="date" name="bday" value={this.state.dueByDate} onChange={this.changeDateHandler}/>

                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddTaskComponent