// Packages and files required for this application
const inquirer = require('inquirer');
// const mysql = require('mysql2');
// const cTable = require('console.table');

// const db = require('./db/connection.js')
const {viewAllDepartments, updateWorker, addWorker, addJob, addDepartment, viewAllRoles, viewAllEmployees} = require('./db/index.js')

const selectAction = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices:[
            "view all departments", 
            "view all roles", 
            "view all employees", 
            "add a department", 
            "add a role", 
            "add an employee",
            "update an employee role",
            "Exit"
            ]
    }
];

const addDept = [
    {
        type: "input",
        message: "Enter new department name",
        name: "department",
    }  
];

const addRole = [
    {
        type: "input",
        message: "Enter new role name",
        name: "title",
    },  
    {
        type: "input",
        message: "Enter new row salary",
        name: "salary",
    }
];

const addEmployee = [
    {
        type: "input",
        message: "Enter new employee's first name",
        name: "first_name",
    },
    {
        type: "input",
        message: "Enter new employee's last name",
        name: "last_name",
    },
];

const updateEmployee = [
    {
        type: "list",
        message: "Which employee's data would you like to update",
        name: "first_name",
        choices: [
            "John",
            "Mike",
            "Ashley",
            "Kevin",
            "Kunal",
            "Malia",
            "Sarah",
            "Tom",
            "Sam"
        ]
    },
    {
        type: "list",
        message: "Which employee's data would you like to update",
        name: "last_name",
        choices: [
            "Doe",
            "Chan",
            "Rodriguez",
            "Tupik",
            "Signh",
            "Brown",
            "Lourd",
            "Allen",
            "Kash"
        ]
    },

];

function action() {
    inquirer.prompt(
        selectAction
    ).then ((res) => {
        if (JSON.stringify(res.action) === JSON.stringify("view all departments")){
            viewAllDepartments(action);
        } else if (JSON.stringify(res.action) === JSON.stringify("view all roles")){
            viewAllRoles(action);
        } else if (JSON.stringify(res.action) === JSON.stringify("view all employees")){
            viewAllEmployees(action);
        } else if (JSON.stringify(res.action) === JSON.stringify("add a department")){
            inquirer.prompt(
                addDept
            ).then((data)=>{
            addDepartment(data, action)
            })
        } else if (JSON.stringify(res.action) === JSON.stringify("add a role")){
            inquirer.prompt(
                addRole
            ).then((data)=>{
            addJob(data, action)
            })
        } else if (JSON.stringify(res.action) === JSON.stringify("add an employee")){
            inquirer.prompt(
                addEmployee
            ).then((data)=>{
            addWorker(data, action)
            })
        } else if (JSON.stringify(res.action) === JSON.stringify("update an employee role")){
            inquirer.prompt(
                updateEmployee
            ).then((data)=>{
            updateWorker(data,action)
            })
        } else {
            process.exit()
        }
    })
};

action();