
SELECT *
FROM roles
JOIN departments ON roles.department_id = departments.id AS department_id;



SELECT id, first_name, last_name, role_id, manager_id, department_id
FROM employees
JOIN roles ON employees.role_id = roles.id;
