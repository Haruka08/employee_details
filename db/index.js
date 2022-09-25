const db = require('./connection')
const mysql = require('mysql2');
const cTable = require('console.table');


function viewAllDepartments(){
    db.query('SELECT * FROM departments', function (err, results) {
        console.table(results);
    });
  };
  
  function viewAllRoles(){
    db.query('SELECT * FROM roles', function (err, results) {
      console.table(results);
  });
  };
  
  function viewAllEmployees(){
    db.query('SELECT * FROM employees', function (err, results) {
      console.table(results);
  });
  };
  
  function addDept(newDept){
    db.query(`INSERT INTO departments (department) values (${newDept.department})`, function (err, results) {
      console.table(results);
  });
  };
  
  function addRole(newRole){
    db.query(`INSERT INTO roles (title, salary) values (${newRole.title}, ${newRole.salary})`, function (err, results) {
      console.table(results);
    });
    db.query(`SELECT id FROM employees WHERE first_name=(${newRole.manager_first} AND last_name=${newRole.manager_last})`, function (err, results) {
      db.query(`INSERT INTO employees (manager_id) values (${results})`, function (err, results) {
        console.table(results);
      });
      console.table(results);
  });
  };
  
  function addEmployees(newEmployee){
    db.query(`INSERT INTO employees(first_name, last_name) values (${newEmployee.first_name}, ${newEmployee.last_name})`, function (err, results) {
      console.table(results);
    });
    db.query(`INSERT INTO roles (title) values (${newEmployee.role})`, function (err, results) {
      console.table(results);
    });
    db.query(`SELECT id FROM employees WHERE first_name=(${newEmployee.manager_first} AND last_name=${newEmployee.manager_last})`, function (err, results) {
      db.query(`INSERT INTO employees (manager_id) values (${results})`, function (err, results) {
        console.table(results);
      });
      console.table(results);
  });
  };
  
  function updateEmployees(updated){
    db.query(`UPDATE first_name, last_name, role_id, manager_id FROM employees WHERE first_name=${newEmployee.first_name} AND last_name=${newEmployee.last_name}`, results.first_name, function (err, results) {
      console.table(results);
  });
  };

  module.exports = {viewAllDepartments};