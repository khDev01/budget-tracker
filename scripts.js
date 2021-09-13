// var form = document.getElementById("myForm")
// function handleForm(event) {
//   event.preventDefault()
// }
// form.addEventListener("submit", handleForm)

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
  //   target.innerHTML = target.value == "Income" ? "Expense" : "Income"
  //   document.getElementById("count").value = 500 * value
  //   document.getElementById("totalValue").innerHTML =
  //     "Total price: $" + 500 * value
}

function toggleType() {
  const target = document.getElementById("type")
  target.value = target.value == "Food" ? " Bill" : "Food"
}

function toggleBuySell() {
  const target = document.getElementById("buySell")
  target.value = target.value == "Buy" ? " Sell" : "Buy"
}

var arr = new Array()
var arrc = new Array()

function showData() {
  getData()
  var tbl = document.getElementById("productTable")
  var tblContent = document.getElementById("tableBody")

  //  needed as page refresh is turned off for the form
  // var x = tbl.rows.length
  // while (--x) {
  //   tbl.deleteRow(x)
  //   tbl.tbl
  // }
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
    var cell3 = r.insertCell()
    // cell2.classList.add("center-align")
    // cell3.classList.add("center-align")
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
  tblContent.parentNode.replaceChild(new_tbody, tblContent)
}

function showDataCrypto() {
  getDataCrypto()
  var tbl = document.getElementById("cryptTable")
  var tblContentCrypto = document.getElementById("cryptTableBody")

  var new_tbody_crpto = document.createElement("tbody")
  new_tbody_crpto.id = "cryptTableBody"

  if (arrc == null) {
    return false
  }
  for (i = 0; i < arrc.length; i++) {
    var r = new_tbody_crpto.insertRow()
    var cell1 = r.insertCell()
    var cell2 = r.insertCell()
    var cell3 = r.insertCell()
    var cell4 = r.insertCell()
    var cell5 = r.insertCell()
    cell1.innerHTML = arrc[i].type
    cell2.innerHTML = arrc[i].buy
    cell3.innerHTML = arrc[i].amount
    cell4.innerHTML = arrc[i].price
    cell5.innerHTML = arrc[i].date
  }
  tblContentCrypto.parentNode.replaceChild(new_tbody_crpto, tblContentCrypto)
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
  // type: document.getElementById("type").value,
  // quantity: document.getElementById("quantity").value,
  // type:$("#type").value
  incomeValue =
    document.getElementById("incomeExpense").value == "Income" ? "in" : "out"
  type = document.getElementById("type").value == "Food" ? "food" : "bill"
  arr.push({
    type: type,
    productname: document.getElementById("productname").value,
    price: document.getElementById("price").value,
    income: incomeValue,
    date: currentDate,
  })

  localStorage.setItem("localData", JSON.stringify(arr))
  $("#productname").focus()

  updateTotals()
}

function addToLocalStorageCrypt() {
  getDataCrypto()
  type = document.getElementById("crypto").value
  buy = document.getElementById("buySell").value
  amount = document.getElementById("amount").value
  price = document.getElementById("priceCrypto").value
  fee = ""
  rate = ""
  arrc.push({
    type: type,
    buy: buy,
    price: price,
    amount: amount,
    date: currentDate,
  })
  // console.log(localStorage.getItem("crpto"))

  localStorage.setItem("crypto", JSON.stringify(arrc))
}

function getData() {
  var str = localStorage.getItem("localData")
  if (str != null) {
    return (arr = JSON.parse(str))
  }
  return (arr = new Array())
}

function getDataCrypto() {
  var str = localStorage.getItem("crypto")
  // console.log(str)
  if (str != null) {
    return (arrc = JSON.parse(str))
  }
  return (arrc = new Array())
}

function deleteLocalStorage() {
  localStorage.clear()
}

// totalSum = () => {

//   return false
// }

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

function calculate() {
  low = parseFloat(document.getElementById("lowerNumber").value)
  high = parseFloat(document.getElementById("higherNumber").value)
  multiplier = parseFloat(document.getElementById("multiplier").value)
  lower = low * 0.0016
  higher = high * 0.0016

  lower = lower + low
  higher = high - higher

  // console.log(low)

  calculation = high - high * 0.0026 - (low * 0.0016 + low)
  // difference = higher - lower
  // console.log(typeof calculation)
  calculation = calculation * multiplier
  document.getElementById("calcResult").innerHTML = calculation
  document.getElementById("roundedDownCalc").innerHTML =
    Math.floor(calculation * 100) / 100
  document.getElementById("lowValue").innerHTML = lower
  document.getElementById("highValue").innerHTML = higher

  // document.getElementById("diffcalc").innerHTML = difference
}

function calculatePax() {
  low = parseFloat(document.getElementById("lowerNumberPax").value)
  high = parseFloat(document.getElementById("higherNumberPax").value)
  multiplier = parseFloat(document.getElementById("multiplierPax").value)
  calculation = high - low
  lower = low * multiplier
  higher = high - multiplier
  fee = multiplier * 0.005
  fee = fee + multiplier
  // console.log(typeof calculation)
  calculation = calculation * multiplier
  feeMultiplier = calculation * fee
  document.getElementById("resultPax").innerHTML =
    Math.floor(feeMultiplier * 100) / 100
  document.getElementById("roundedDownPax").innerHTML =
    Math.floor(calculation * 100) / 100
  document.getElementById("feePax").innerHTML = fee

  // document.getElementById("diffcalc").innerHTML = difference
}

$(document).ready(function () {
  updateTotals()
  showBudget()
  showData()
  showDataCrypto()
  $("#productname").focus()
})
