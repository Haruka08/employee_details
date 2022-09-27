const db = require('./connection')
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer')


function viewAllDepartments(action){
    db.query('SELECT * FROM departments', function (err, results) {
        console.table(results);
        action();
    });
  };
  
  function viewAllRoles(action){
    db.query('SELECT * FROM roles', function (err, results) {
      console.table(results);
      action();
  });
  };
  
  function viewAllEmployees(action){
    db.query('SELECT * FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id', function (err, results) {
      console.table(results);
      action();
  });
  };
  
  function addDepartment(newDept, action){
    db.query(`INSERT INTO departments (department) values ("${newDept.department}")`, function (err, results) {
      console.table(results);
      action();
  });
  };
  
  function addJob(newRole, action){
    db.query('SELECT * FROM departments', function(err, results){
      inquirer.prompt({
        type: "list",
        message: "Select the department",
        name: "department",
        choices: results.map(result => {
          return{
            name: result.department,
            value:  result.id
          }
        })
    }).then(answer =>{
      db.query(`INSERT INTO roles (title, salary, department_id) values ("${newRole.title}", ${newRole.salary}, ${answer.department})`, function (err, results) {
        if(err){
          console.log(err);
          return;
        }
        console.table(results);
        action();
      });
    })
    })
  };
  
  function addWorker(newEmployee, action){
    db.query('SELECT * FROM roles', function(err, results1){
      db.query('SELECT * FROM employees', function(err, results2){
      inquirer.prompt(
        [
          {
            type: "list",
            message: "Select the role",
            name: "role",
            choices: results1.map(result => {
              return{
                name: result.title,
                value:  result.id
            }})
          },
          {
            type: "list",
            message: "Select the manager",
            name: "manager",
            choices: results2.map(result => {
              return{
                name: result.first_name + " " + result.last_name,
                value:  result.id
            }})
          }
          ]).then(answer =>{
            db.query(`INSERT INTO employees(first_name, last_name, role_id, manager_id) values ("${newEmployee.first_name}", "${newEmployee.last_name}", ${answer.role}, ${answer.manager})`, function (err, results) {
              console.table(results);
              action();
            });
        });
      });
  });
};
  
  function updateWorker(updated, action){
    db.query('SELECT * FROM roles', function(err, results1){
      db.query('SELECT * FROM employees', function(err, results2){
      inquirer.prompt(
        [
          {
            type: "list",
            message: "Select the role",
            name: "role",
            choices: results1.map(result => {
              return{
                name: result.title,
                value:  result.id
            }})
          },
          {
            type: "list",
            message: "Select the manager",
            name: "manager",
            choices: results2.map(result => {
              return{
                name: result.first_name + " " + result.last_name,
                value:  result.id
            }})
          }
          ]).then(answer =>{
      db.query(`UPDATE employees SET role_id=${answer.role}, manager_id=${answer.manager} WHERE first_name="${updated.first_name}"AND last_name="${updated.last_name}"`, function (err, results) {
            console.table(results);
            action();
    });
    });
  })
})
};

  module.exports = {viewAllDepartments, updateWorker, addWorker, addJob, addDepartment, viewAllRoles, viewAllEmployees};