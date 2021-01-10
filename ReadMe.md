This project comes in two parts:
1. The ToDoList (NetCore WebApi) 
2. react-fronted (Front-end created in React)

The aim of this project was to create a ToDo list CRUD operation that could have potential to scale and also be able to handle different users.

The WebApi or backend contains and creates the information needed for the front-end to consume. 

To run the WebApi open the ToDoList.sln in ToDoList. When running the App will be available on:
    http://localhost:5000/api/Users/
    
    Initaially there will be no data in the product, however, this can be added by inputting the data in on the front-end or by post man.
    
    Post To: http://localhost:5000/api/Users/
    
    Data:
    
    {
        "id": "1",
        "firstName": "Ali",
        "secondName": "Imparta",
        "tasks": [
            {
                "id": "1",
                "userId": "1",
                "name": "get coffee",
                "status": 0,
                "createdDate": "2021-01-09T00:00:00",
                "dueByDate": "2021-01-10T00:00:00"
            },
            {
                "id": "2",
                "userId": "1",
                "name": "Turn Off Heating",
                "status": 1,
                "createdDate": "2021-01-09T00:00:00",
                "dueByDate": "2021-01-11T00:00:00"
            }
        ]
    }


The Front-End is built in react so the user will need to navigate in a terminal into react-frontend then:
    npm install
    npm start

This will start the front end web service which will be running on:
    http://localhost:3000/

NOTE:   
If you want to change the port of the front-end then in the ToDoList.sln you will need to change the Cors accept address to the port you wish to communicate from 

If you have any questions please feel free to contact me
