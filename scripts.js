// Show localstorage values in console |
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
  //   target.innerHTML = target.value == "Income" ? "Expense" : "Income"
  console.log(target)
  //   document.getElementById("count").value = 500 * value
  //   document.getElementById("totalValue").innerHTML =
  //     "Total price: $" + 500 * value
}
var arr = new Array()

function showData() {
  getData()
  var tbl = document.getElementById("productTable")

  if (arr == null) {
    return false
  }
  for (i = 0; i < arr.length; i++) {
    var r = tbl.insertRow()
    var cell1 = r.insertCell()
    var cell2 = r.insertCell()
    var cell3 = r.insertCell()
    // var cell4 = r.insertCell()
    // var cell5 = r.insertCell()
    if (arr[i].income == "in" && arr[i].price > 0) {
      //   console.log(r.innerHTML)
      //   var element = document.getElementById("myDIV")
      r.classList.add("income")
    } else {
      r.classList.add("expense")
    }

    // cell1.innerHTML = arr[i].type
    cell1.innerHTML = arr[i].productname
    cell2.innerHTML = arr[i].price
    // cell4.innerHTML = arr[i].quantity
    // cell5.innerHTML = arr[i].income
    cell3.innerHTML = arr[i].date
  }
}

function addToLocalStorage() {
  getData()
  if (document.getElementById("incomeExpense").value == "Expense") {
    document.getElementById("price").value = -Math.abs(
      document.getElementById("price").value
    )
  }
  // type: document.getElementById("type").value,
  // quantity: document.getElementById("quantity").value,
  // type:$("#type").value
  incomeValue =
    document.getElementById("incomeExpense").value == "Income" ? "in" : "out"
  arr.push({
    productname: document.getElementById("productname").value,
    price: document.getElementById("price").value,
    income: incomeValue,
    date: currentDate,
  })

  localStorage.setItem("localData", JSON.stringify(arr))
  $("#productname").focus()
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
}

// totalSum = () => {

//   return false
// }

var str = localStorage.getItem("localData")
arr = JSON.parse(str)

// console.log(arr[0].price)
if (arr != null) {
  let total = 0
  arr.forEach((element) => (total = total + parseInt(element.price)))
  console.log(total)
  document.getElementById("totalBalance").innerHTML = total
  mybudget = document.getElementById("budget-amount").innerHTML
  document.getElementById("budgetLeft").innerHTMl = mybudget - total
}
$(document).ready(function () {
  showData()
  $("#productname").focus()
})
