let expenses = [];
let totalAmount = 0;
const categorySelect = document.getElementById("category_select");
const amountInput = document.getElementById("amount_input");
const InfoInput = document.getElementById("info");
const dateInput = document.getElementById("date_input");
const addBtn = document.getElementById("add-btn");
const expenseTableBody = document.getElementById("expense-table-body");
const totalAmountCell = document.getElementById("total-amount");

addBtn.addEventListener("click", function () {
  const category = categorySelect.value;
  console.log(category);
  const amount = Number(amountInput.value);
  console.log(amount);
  const info = InfoInput.value;
  const date = dateInput.value;

  if (category === " ") {
    alert("Please select Category");
  }
  if (isNaN(amount) === " " || amount <= 0) {
    alert("Please select Amount");
  }
  if (info === " ") {
    alert("Please enter Info");
  }
  if (date === " ") {
    alert("Please select Date");
  }
  expenses.push({ category, amount, info, date });
  if (category === "Income") {
    totalAmount += amount;
  }
  if (category === "Expense") {
    totalAmount -= amount;
  }
  totalAmountCell.textContent = totalAmount;
  const newRow = expenseTableBody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const infoCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expenses), 1);
    if (category === "Income") {
      totalAmount -= amount;
    }
    if (category === "Expense") {
      totalAmount += amount;
    }
    totalAmountCell.textContent = totalAmount;
    expenseTableBody.removeChild(new Row());
  });

  const expense = expenses(expenses.length - 1);
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  infoCell.textContent = expense.info;
  date.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
});

for (const expense of expenses) {
  if (category === "Income") {
    totalAmount += amount;
  }
  if (category === "Expense") {
    totalAmount -= amount;
  }
  totalAmountCell.textContent = totalAmount;
  const newRow = expenseTableBody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const infoCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expenses), 1);
    if (category === "Income") {
      totalAmount -= amount;
    }
    if (category === "Expense") {
      totalAmount += amount;
    }
    totalAmountCell.textContent = totalAmount;
    expenseTableBody.removeChild(new Row());
  });

  const expense = expenses(expenses.length - 1);
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  infoCell.textContent = expense.info;
  date.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
}
