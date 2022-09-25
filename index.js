// Packages and files required for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = require('./db/connection.js')
const viewAllDept = require('./db/index.js')

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
    },  
    {
        type: "list",
        message: "Enter new row salary",
        name: "department",
        choice: [
            "Sales",
            "Engineering",
            "Finance",
            "Legal"
        ]
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
    {
        type: "list",
        message: "Enter new employee's role",
        name: "role",
        choice: [
            "Sales Lead",
            "Sales Person",
            "Lead Engineer",
            "Software Engineer",
            "Account Manager",
            "Accountant",
            "Legal Team Lead",
            "Lawyer"
        ]
    },
    {
        type: "list",
        message: "Select new employee's manager",
        name: "Manager",
        choices:[
            "Mike Chan",
            "Ashley Rodriguez",
            "kunal Singnh",
            "Sarah Lourd"
        ]
    }  
];

const updateEmployee = [
    {
        type: "list",
        message: "Which employee's data would you like to update",
        name: "update_employee",
        choice: [
            "John Doe",
            "Mike Chan",
            "Ashley Rodriguez",
            "Kevin Tupik",
            "Kunal Signh",
            "Malia Brown",
            "Sarah Lourd",
            "Tom Allen",
            "Sam Kash"
        ]
    },
    {
        type: "list",
        message: "What is the new role of the employee?",
        name: "update_role",
        choice: [
            "Sales Lead",
            "Sales Person",
            "Lead Engineer",
            "Software Engineer",
            "Account Manager",
            "Accountant",
            "Legal Team Lead",
            "Lawyer"
        ]
    },
    {
        type: "list",
        message: "Select new employee's manager",
        name: "update_manager",
        choices:[
            "Mike Chan",
            "Ashley Rodriguez",
            "Kunal Singnh",
            "Sarah Lourd"
        ]
    }  
];

function action() {
    inquirer.prompt(
        selectAction
    ).then ((res) => {
        if (JSON.stringify(res.action) === JSON.stringify("view all departments")){
            console.log("worked");
            viewAllDepartments();
        } else if (JSON.stringify(res.action) === JSON.stringify("view all roles")){
            viewAllRoles();
        } else if (JSON.stringify(res.action) === JSON.stringify("view all employees")){
            viewAllEmployees();
        } else if (JSON.stringify(res.action) === JSON.stringify("add a department")){
            inquirer.prompt(
                addDept
            ).then((data)=>{
            addDepartment(data)
            })
        } else if (JSON.stringify(res.action) === JSON.stringify("add a role")){
            inquirer.prompt(
                addRole
            ).then((data)=>{
            addRole(data)
            })
        } else if (JSON.stringify(res.action) === JSON.stringify("add a employee")){
            inquirer.prompt(
                addEmployee
            ).then((data)=>{
            addEmployee(data)
            })
        } else if (JSON.stringify(res.action) === JSON.stringify("update an employee role")){
            inquirer.prompt(
                updateEmployee
            ).then((data)=>{
            updateEmployee(data)
            })
        } else {
            console.log("didn't work")
            return;
        }
    })
};

action();