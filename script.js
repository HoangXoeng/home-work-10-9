var id = 0;
const sell = () => {
  id++;
  var productName = document.querySelector("#name").value;
  var quantity = document.querySelector("#quantity").value;
  var unitPrice = document.querySelector("#unitPrice").value;
  var discount = document.querySelector("#discount").value;
  var sub = quantity * unitPrice * (1 - discount / 100);
  var row = "<tr>";
  row += "<td>" + id + "</td>";
  row += "<td>" + productName + "</td>";
  row += "<td>" + quantity + "</td>";
  row += "<td>" + unitPrice + "</td>";
  row += "<td>" + discount + "%</td>";
  row += "<td>" + sub.toFixed(2) + "</td>";
  row += "</tr>";
  document.querySelector("#tbl").innerHTML += row;
};
