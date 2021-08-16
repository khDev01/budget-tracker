function productUpdate() {
  console.log($("#price").val())
  if ($("#price").val() != null && $("#price").val() != "") {
    productAddToTable()
    formClear()

    // Focus to product name field
    $("#productname").focus()
  }
}
function productAddToTable() {
  // First check if a <tbody> tag exists, add one if not
  if ($("#productTable tbody").length == 0) {
    $("#productTable").append("<tbody></tbody>")
  }

  // Append product to the table
  $("#productTable tbody").append(
    "<tr>" +
      "<td>" +
      $("#type").val() +
      "</td>" +
      "<td>" +
      $("#productname").val() +
      "</td>" +
      "<td>" +
      $("#introdate").val() +
      "</td>" +
      "<td>" +
      $("#price").val() +
      "</td>" +
      "<td>" +
      $("#quantity").val() +
      "</td>" +
      "</tr>"
  )
}
function formClear() {
  $("#productname").val("")
  $("#introdate").val("")
  $("#price").val("")
}

// localStorage.setItem("lastname", "Smith")
// // Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname")
for (var i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)))
}

// // Add products to <table>
// function productsAdd() {
//   // First check if a <tbody> tag exists, add one if not
//   if ($("#productTable tbody").length == 0) {
//     $("#productTable").append("<tbody></tbody>")
//   }

//   // Append product to the table
//   $("#productTable tbody").append(
//     "<tr>" +
//       "<td>Extending Bootstrap with CSS, JavaScript and jQuery</td>" +
//       "<td>6/11/2015</td>" +
//       "<td>mmmmmmmmmm</td>" +
//       "</tr>"
//   )

//   $("#productTable tbody").append(
//     "<tr>" +
//       "<td>Build your own Bootstrap Business Application Template in MVC</td>" +
//       "<td>1/29/2015</td>" +
//       "<td>nnnnnnnnnn</td>" +
//       "</tr>"
//   )
// }
$(document).ready(function () {
  showData()
})
