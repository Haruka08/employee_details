// Packages and files required for this application
const inquirer = require('inquirer');
const fs = require('fs');

const employees = [];

const Question = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "jobRole",
        choices:[
            "view all departments", 
            "view all roles", 
            "view all employees", 
            "add a department", 
            "add a role", 
            "add an employee",
            "update an employee role"
            ]
    }
];

function createManager(name, id, email, officeNum) {
    const newManager = new Manager(name, id, email, officeNum);
    employees.push(newManager);
    mainQuestion();
}

function createEngineer(name, id, email, gitHubUser) {
    const newEngineer = new Engineer(name, id, email, gitHubUser);
    employees.push(newEngineer);
    mainQuestion();
}

function createIntern(name, id, email, school) {
    const newIntern = new Intern(name, id, email, school);
    employees.push(newIntern);
    mainQuestion();
}