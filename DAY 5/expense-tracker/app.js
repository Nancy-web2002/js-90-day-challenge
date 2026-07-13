let description = document.getElementById("description");
let amount = document.getElementById("amount");
let category = document.getElementById("category");
let addExpense = document.getElementById("addBtn");
let expenseTable = document.getElementById("expenseTable");
let total = document.getElementById("total");
let expenseBody = document.getElementById("expenseBody");
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
addExpense.addEventListener("click", function() {
    let newExpense = {
        description: description.value,
        amount: Number(amount.value),
        category: category.value
      };
  expenses.push(newExpense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
  description.value = "";
amount.value = "";
category.value = "Bills";
});
function renderExpenses() {
    expenseBody.innerHTML = "";
    let totalAmount = 0;
  
    for (let i = 0; i < expenses.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = "<td>" + expenses[i].description + "</td><td>" + expenses[i].amount + "</td><td>" + expenses[i].category + "</td>";
        expenseBody.appendChild(row);
        
        totalAmount = totalAmount + expenses[i].amount;
    }
  
    total.innerHTML = "Total Spent: " + totalAmount;
  }
  renderExpenses();