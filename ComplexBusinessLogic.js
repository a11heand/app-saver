/* 
   Code Filename: ComplexBusinessLogic.js
   This code implements a complex business logic for a fictional company. 
   It involves multiple modules and advanced algorithms to solve a complex problem.
   Please note that this code is for demonstration purposes only and may not reflect
   the actual practices followed by real companies.
*/

// Module 1: Employee Management

class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  calcYearlySalary() {
    return this.salary * 12;
  }
}

const employees = [
  new Employee("John Doe", 30, 5000),
  new Employee("Jane Smith", 35, 6000),
  new Employee("Mike Johnson", 40, 7000),
  // ... More employees
];

function calculateTotalSalary() {
  let totalSalary = 0;
  employees.forEach((employee) => {
    totalSalary += employee.calcYearlySalary();
  });
  return totalSalary;
}

// Module 2: Product Management

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calcTotalValue() {
    return this.price * this.quantity;
  }
}

const products = [
  new Product("Widget A", 10, 100),
  new Product("Gadget B", 20, 50),
  new Product("Thingamajig C", 15, 75),
  // ... More products
];

function calculateInventoryValue() {
  let inventoryValue = 0;
  products.forEach((product) => {
    inventoryValue += product.calcTotalValue();
  });
  return inventoryValue;
}

// Module 3: Sales Analytics

const salesData = {
  January: 5000,
  February: 8000,
  March: 6000,
  // ... More months
};

function calculateTotalSales() {
  let totalSales = 0;
  Object.values(salesData).forEach((sales) => {
    totalSales += sales;
  });
  return totalSales;
}

// Module 4: Financial Analysis

function calculateProfit() {
  const totalSales = calculateTotalSales();
  const totalCosts = calculateTotalSalary() + calculateInventoryValue();
  return totalSales - totalCosts;
}

function generateFinancialReport() {
  const profit = calculateProfit();
  console.log("Financial Report");
  console.log("----------------");
  console.log("Profit: $" + profit);
}

// Module 5: User Interface

function displayMainMenu() {
  console.log("Main Menu");
  console.log("---------");
  console.log("1. Calculate Financial Report");
  console.log("2. Quit");
}

function handleUserInput(choice) {
  switch (choice) {
    case 1:
      generateFinancialReport();
      break;
    case 2:
      console.log("\nGoodbye!");
      process.exit(0);
    default:
      console.log("Invalid choice. Please try again.");
  }
}

function startApplication() {
  console.log("Welcome to Our Company!");
  displayMainMenu();
  process.stdin.on("data", (data) => {
    handleUserInput(Number(data.toString().trim()));
    displayMainMenu();
  });
}

startApplication();
