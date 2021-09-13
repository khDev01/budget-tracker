// // Show localstorage values in console |
for (var i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)))
}
var currentDate = new Date()
var dd = String(currentDate.getDate()).padStart(2, "0")
var mm = String(currentDate.getMonth() + 1).padStart(2, "0") //January is 0!
var yyyy = currentDate.getFullYear()
currentDate = dd + "/" + mm + "/" + yyyy

function toggleIncomeExpense() {
  const target = document.getElementById("incomeExpense")
  target.value = target.value == "Income" ? "Expense" : "Income"
}

var arr = new Array()

function showData() {
  getData()
  var tbl = document.getElementById("productTable")
  var tblContent = document.getElementById("tableBody")
  var new_tbody = document.createElement("tbody")
  new_tbody.id = "tableBody"
  // populate_with_new_rows(new_tbody)

  if (arr == null) {
    return false
  }
  for (i = 0; i < arr.length; i++) {
    var r = new_tbody.insertRow()
    var cell1 = r.insertCell()
    var cell2 = r.insertCell()
    if (arr[i].income == "in" && arr[i].price > 0) {
      r.classList.add("income")
    } else {
      r.classList.add("expense")
    }

    cell1.innerHTML = arr[i].price
    cell2.innerHTML = arr[i].date
  }
  tblContent.parentNode.replaceChild(new_tbody, tblContent)
}

function formClear() {
  $("#productname").val("")
  $("#price").val("")
}

function addToLocalStorage() {
  getData()
  if (document.getElementById("incomeExpense").value == "Expense") {
    document.getElementById("price").value = -Math.abs(
      document.getElementById("price").value
    )
  }
  incomeValue =
    document.getElementById("incomeExpense").value == "Income" ? "in" : "out"
  arr.push({
    price: document.getElementById("price").value,
    income: incomeValue,
    date: currentDate,
  })

  localStorage.setItem("localData", JSON.stringify(arr))
  $("#productname").focus()

  updateTotals()
}

function getData() {
  var str = localStorage.getItem("localData")
  if (str != null) {
    return (arr = JSON.parse(str))
  }
  return (arr = new Array())
}

function deleteLocalStorage() {
  localStorage.clear()
  showData()
  updateTotals()
  showBudget()
}

function updateTotals() {
  var str = localStorage.getItem("localData")
  arr = JSON.parse(str)
  // console.log(arr[0].price)
  if (arr != null) {
    let total = 0
    arr.forEach((element) => (total = total + parseInt(element.price)))
    // console.log(total)
    document.getElementById("totalBalance").innerHTML = total
    mybudget = document.getElementById("budget-amount").value
    document.getElementById("budgetLeft").innerText = mybudget - total
    // console.log("Budget left " + mybudget + " - " + total)
  } else {
    document.getElementById("budgetLeft").innerText = 0
  }
}

function saveBudget() {
  budget = document.getElementById("budget-amount").value
  localStorage.setItem("budget", budget)
  updateTotals()
}

function showBudget() {
  var savedBudget = localStorage.getItem("budget")
  budget = document.getElementById("budget-amount")
  budget.value = savedBudget
}

$(document).ready(function () {
  updateTotals()
  showBudget()
  showData()
  $("#productname").focus()
})
