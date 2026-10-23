
let expenses = [];

function addExpense() {
    let name = document.getElementById("name").value.trim();
    let amountInput = document.getElementById("amount");
    let amount = Number(amountInput.value);
    let category = document.getElementById("category").value;
    let message = document.getElementById("message");

    if (name === "" || amountInput.value === "") {
        message.textContent = "Please enter a name and amount.";
        return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        message.textContent = "Enter an amount greater than zero.";
        return;
    }

    let expense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    document.getElementById("name").value = "";
    amountInput.value = "";
    message.textContent = "";

    displayExpenses();
}

function displayExpenses() {
    let list = document.getElementById("expenseList");
    let total = 0;

    list.innerHTML = "";

    expenses.forEach(function(expense) {
        total += expense.amount;

        let item = document.createElement("li");
        let details = document.createElement("div");

        details.textContent =
            expense.name + " - " +
            expense.category + " - " +
            expense.amount.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN"
            });

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function() {
            deleteExpense(expense.id);
        };

        item.appendChild(details);
        item.appendChild(deleteButton);
        list.appendChild(item);
    });

    document.getElementById("total").textContent =
        total.toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN"
        });
}

function deleteExpense(id) {
    expenses = expenses.filter(function(expense) {
        return expense.id !== id;
    });

    displayExpenses();
}
