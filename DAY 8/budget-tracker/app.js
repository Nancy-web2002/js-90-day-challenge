let description = document.getElementById("description");
let amount = document.getElementById("amount");
let category = document.getElementById("category");
let sum = document.getElementById("addBtn");
let list = document.getElementById("transactionList");
let body = document.getElementById("transactionBody");
let balance = document.getElementById("balanceDisplay");
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
sum.addEventListener("click", function() {
    let newTransaction = {
        description: description.value,
        amount: Number(amount.value),
        category: category.value
      };
  transactions.push(newTransaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  renderTransactions();
  description.value = "";
amount.value = "";
category.value = "";
});
function renderTransactions() {
    body.innerHTML = "";
    let currentBalance = 0;
let totalIncome = 0;
let totalExpense = 0;
  
    for (let i = 0; i < transactions.length; i++) {
        let row = document.createElement("tr");
        let{description,amount,category} = transactions[i]
        row.innerHTML = "<td>" + description + "</td><td>" + amount + "</td><td>" + category + "</td>";
        body.appendChild(row);
          
          if (category === "Income") {
            currentBalance = currentBalance + amount;
            totalIncome = totalIncome + amount;
        } else {
            currentBalance = currentBalance - amount;
            totalExpense = totalExpense + amount;
        }

    }
  
    balance.innerHTML = `Income: ${totalIncome} | Expenses: ${totalExpense} | Balance: ${currentBalance}`;
  }

  renderTransactions();