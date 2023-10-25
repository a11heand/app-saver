/* 
   Filename: ComplexJSCode.js
   Description: This complex JavaScript code demonstrates an advanced financial calculator that performs various calculations and generates detailed reports.
*/

// Utility function to format numbers with commas
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Financial Calculator class
class FinancialCalculator {
  constructor(interestRate, loanAmount, loanTerm) {
    this.interestRate = interestRate;
    this.loanAmount = loanAmount;
    this.loanTerm = loanTerm;
  }

  calculateMonthlyPayment() {
    const monthlyInterestRate = (this.interestRate / 100) / 12;
    const totalPayments = Math.pow(1 + monthlyInterestRate, this.loanTerm);
    const monthlyPayment = (this.loanAmount * monthlyInterestRate * totalPayments) / (totalPayments - 1);
    return monthlyPayment.toFixed(2);
  }

  calculateTotalPayment() {
    return (this.calculateMonthlyPayment() * this.loanTerm).toFixed(2);
  }

  calculateTotalInterest() {
    return (this.calculateTotalPayment() - this.loanAmount).toFixed(2);
  }

  generateAmortizationSchedule() {
    let remainingBalance = this.loanAmount;
    const monthlyPayment = this.calculateMonthlyPayment();
    let schedule = [];

    for (let i = 1; i <= this.loanTerm; i++) {
      const interestPayment = (remainingBalance * (this.interestRate / 100)) / 12;
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;

      schedule.push({
        month: i,
        interestPayment: numberWithCommas(interestPayment.toFixed(2)),
        principalPayment: numberWithCommas(principalPayment.toFixed(2)),
        remainingBalance: numberWithCommas(remainingBalance.toFixed(2))
      });
    }

    return schedule;
  }
}

// Create an instance of FinancialCalculator
const calculator = new FinancialCalculator(6.5, 250000, 30);

// Print the monthly payment
console.log("Monthly Payment: $" + calculator.calculateMonthlyPayment());

// Print the total payment
console.log("Total Payment: $" + calculator.calculateTotalPayment());

// Print the total interest
console.log("Total Interest: $" + calculator.calculateTotalInterest());

// Print the amortization schedule
const schedule = calculator.generateAmortizationSchedule();
console.log("Amortization Schedule:\n");
console.log("Month\tInterest\tPrincipal\tBalance");
for (let { month, interestPayment, principalPayment, remainingBalance } of schedule) {
  console.log(month + "\t$" + interestPayment + "\t\t$" + principalPayment + "\t\t$" + remainingBalance);
}

// ... More complex code and calculations here ...

// End of ComplexJSCode.js