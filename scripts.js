// Show localstorage values in console
for (var i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)))
}

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

  for (i = 0; i < arr.length; i++) {
    var r = tbl.insertRow()
    var cell1 = r.insertCell()
    var cell2 = r.insertCell()
    var cell3 = r.insertCell()
    var cell4 = r.insertCell()
    // var cell5 = r.insertCell()
    if (arr[i].income == "Income") {
      //   console.log(r.innerHTML)
      //   var element = document.getElementById("myDIV")
      r.classList.add("income")
    } else {
      r.classList.add("expense")
    }

    cell1.innerHTML = arr[i].type
    cell2.innerHTML = arr[i].productname
    cell3.innerHTML = arr[i].price
    cell4.innerHTML = arr[i].quantity
    // cell5.innerHTML = arr[i].income
  }
}

function addToLocalStorage() {
  getData()
  arr.push({
    type: document.getElementById("type").value,
    productname: document.getElementById("productname").value,
    price: document.getElementById("price").value,
    quantity: document.getElementById("quantity").value,
    income: document.getElementById("incomeExpense").value,
    // type:$("#type").value
  })

  localStorage.setItem("localData", JSON.stringify(arr))
  $("#productname").focus()
}

function getData() {
  var str = localStorage.getItem("localData")
  if (str != null) {
    arr = JSON.parse(str)
  }
}

function deleteLocalStorage() {
  localStorage.clear()
}

$(document).ready(function () {
  showData()
  $("#productname").focus()
})
