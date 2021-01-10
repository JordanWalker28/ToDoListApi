import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import AddUserComponent from './components/AddUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import AddTaskComponent from './components/AddTaskComponent';



function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListUserComponent}></Route>
                          <Route path = "/Users" component = {ListUserComponent}></Route>
                          <Route path = "/update-user/:id" component = {UpdateUserComponent}></Route>
                          <Route path = "/view-user/:id" component = {ViewUserComponent}></Route>
                          <Route path = "/add-user/" component = {AddUserComponent}></Route>
                          <Route path = "/add-task/" component = {AddTaskComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;