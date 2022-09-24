// Packages and files required for this application
const inquirer = require('inquirer');
const fs = require('fs');
let db = require('./db/connection.js')

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

function action() {
    inquirer.prompt(
        selectAction
    ).then ((data) => {
        if (data == "view all departments"){
            viewAllDepartments()
        } else if (data == "view all roles"){
            viewAllRoles()
        } else if (data == "view all employees"){
            viewAllEmployees()
        } else if (data == "add a department"){
            addDepartment()
        } else if (data == "add a role"){
            addRole()
        } else if (data == "add a employee"){
            addEmployee()
        } else if (data == "update an employee role"){
            updateEmployeeRole()
        } else {
            return;
        }
    })
};

function viewAllDepartments() {
    db.query('SELECT * FROM roles JOIN departments ON roles.department_id = departments.id; SELECT * FROM employees JOIN roles ON employees.role_id = roles.id;', function (err, results) {
        console.log(results);
    })
};

// function viewAllRoles(name, id, email, gitHubUser) {
//     const newEngineer = new Engineer(name, id, email, gitHubUser);
//     employees.push(newEngineer);
//     Question();
// }

// function viewAllEmployees(name, id, email, school) {
//     const newIntern = new Intern(name, id, email, school);
//     employees.push(newIntern);
//     Question();
// }

// function addDepartment(name, id, email, school) {
//     const newIntern = new Intern(name, id, email, school);
//     employees.push(newIntern);
//     Question();
// }

// function addRole(name, id, email, school) {
//     const newIntern = new Intern(name, id, email, school);
//     employees.push(newIntern);
//     Question();
// }

// function allEmployee(name, id, email, school) {
//     const newIntern = new Intern(name, id, email, school);
//     employees.push(newIntern);
//     Question();
// }

// function updateEmployeeRole(name, id, email, school) {
//     const newIntern = new Intern(name, id, email, school);
//     employees.push(newIntern);
//     Question();
// }



action();