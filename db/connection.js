// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

// function viewAllDepartments(){
  db.query('SELECT * FROM departments', function (err, results) {
      console.table(results);
  });
// };

// function viewAllRoles(){
  db.query('SELECT * FROM roles', function (err, results) {
    console.table(results);
});
// };

// function viewAllEmployees(){
  db.query('SELECT * FROM employees', function (err, results) {
    console.table(results);
});
// };

// function addDept(){
  db.query('INSERT INTO departments', function (err, results) {
    console.table(results);
});
// };

// function addRole(){
  db.query('INSERT INTO roles', function (err, results) {
    console.table(results);
});
// };

// function addEmployees(){
  db.query('INSERT INTO employees', function (err, results) {
    console.table(results);
});
// };

// function updateEmployees(){
  db.query(`UPDATE first_name, last_name FROM employees WHERE first_name=`${data.first_name}` last_name=`${data.last_name}, function (err, results) {
    console.table(results);
});
// };


// module.exports = { db };