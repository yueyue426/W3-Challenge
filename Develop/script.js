// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];
  let CONTINUE = true; // will check if employer want to add more employee info
  while (CONTINUE) {
    const employeeData = {
      firstName: window.prompt("Enter the first name."), 
      lastName: window.prompt("Enter the last name."),
      salary: parseInt(window.prompt("Enter your salary."), 10), // parseInt convert string to a number in base 10
    };
    employeesArray.push(employeeData);
    CONTINUE = window.confirm("Do you want to add another employee information?");
  }

  for (let i = 0; i < employeesArray.length; i++) {
    if (isNaN(employeesArray[i].salary)) {
      employeesArray[i].salary = 0;
    }
  }
  employeesArray.sort(employeesArray.lastName); // sort the array by last name in alphabeta
  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sumSalary = 0;
  const len = employeesArray.length;

  for (let i = 0; i < len; i++) {
    sumSalary += employeesArray[i].salary;
  }
  const aveSalary = sumSalary / len;
  console.log(`The average employee salary between out ${len} employee(s) is: ${aveSalary}`);
  return;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`Congratulations to ${randEmployee.firstName} ${randEmployee.lastName}, our random drawing winner!`);
  return;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
