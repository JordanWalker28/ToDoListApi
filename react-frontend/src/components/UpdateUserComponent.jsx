import React, { Component } from 'react'
import UserService from '../services/UserService'

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            secondName: '',
            tasks: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    componentDidMount(){
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({firstName: user.firstName,
                    secondName: user.secondName,
                    emailId : user.emailId,
                    tasks: user.tasks
                });
            });          
    }

    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, firstName: this.state.firstName, secondName: this.state.secondName, tasks: this.state.tasks};
        console.log('user => ' + JSON.stringify(user));


        UserService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/Users');
        });
        
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({secondName: event.target.value});
    }

    cancel(){
        this.props.history.push('/Users');
    }

    getTitle(){
            return <h3 className="text-center">Update User</h3>
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="secondName" className="form-control" 
                                                value={this.state.secondName} onChange={this.changeLastNameHandler}/>
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

export default UpdateUserComponent