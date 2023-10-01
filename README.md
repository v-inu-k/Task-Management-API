## Task Management API
By Vinuk Atukorala
# READ ME

- To start the server, enter the following command in the terminal:

    ```node index.js```
- To populate random 1000 tasks into the DB, enter the following command in the terminal:
  
    ```node populate.js```
---
- Next, open Postman API

- In the URL Bar, add the following content to carry out the operations:
    ```http://localhost:3000/tasks```

The following Operations can be carried out:
1. POST
2. GET
3. PUT
4. DELETE

Below is a sample JSON that can be used for testing the above operations:
```{
    "id": "2",
    "title": "Sample Task",
    "description": "This is a sample task for the testing purpose of the Velaris Assignment",
    "assignees": [
        "Assignee 1",
        "Assignee 2"
    ]
}
```
---
To make a POST Request:
- In Postman API, 
1. Select The ```POST``` function in the dropdown
2. Enter the URL as ```http://localhost:3000/tasks```
3. Add the content in JSON Format in the body Section
3. Click ```Send```

It would show in the browser

---
To make a GET Request:
- In Postman API,
1. Enter the URL as ```http://localhost:3000/tasks```
2. Add the task number you want to retrieve to the end of the URL
Ex: ```http://localhost:3000/tasks/2```
3. Click ```Send```
---
To make a PUT Request:
- In Postman API:
1. Enter the URL as ```http://localhost:3000/tasks```
2. Add the task number you want to update to the end of the URL
Ex: ```http://localhost:3000/tasks/4```
3. Add the content in JSON Format in the body Section
4. Click ```Send```
---
To make a DELETE Request:
- In Postman API,
1. Enter the URL as ```http://localhost:3000/tasks```
2. Add the task number you want to delete to the end of the URL
Ex: ```http://localhost:3000/tasks/3```
3. Click ```Send```



