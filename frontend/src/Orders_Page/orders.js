"use strict";
let Order = [];
function getOrders() {
    fetch("localhost:4004/userCart")
        .then((response) => response.json())
        .then((data) => {
        Order = data;
        showOrders(Order);
    }).catch(error => console.error(error.message));
}
console.log("helo00");
getOrders();
function showOrders(Order) {
    console.log('Here====================================');
    console.log(Order);
    console.log('====================================');
    Order.forEach((a) => {
        let html = `
        <div class="todo" onclick="">
            <h1>${a.UserId}</h1>
            <p>${a.productId}</p>
            <p>${a.orderStatus}</p>
            <p>${a.Quantity}</p>
            <p>${a.Amount}</p>

        </div>
        `;
        console.log(Order);
        productDiv.innerHTML += html;
    });
}
// let idColumn = document.querySelector
// $('th').on('click', function () {
//  let column = $(this).data('column')
//  let order = $(this).data('order')
//  let text = $(this).html()
//  text = text.substring(0, text.length - 1)
//  if (order === 'desc') {
//   $(this).data('order', "asc")
//   myArray = myArray.sort((a, b) => a[column.price] > b[column.price] ? 1 : -1)
//   text += '&#9650'
//  } else {
//   $(this).data('order', "desc")
//   myArray = myArray.sort((a, b) => a[column.price] < b[columnprice] ? 1 : -1)
//   text += '&#9660'
//  }
//  $(this).html(text)
//  buildTable(myArray)
// })
// buildTable(myArray)
// function buildTable(data) {
//  let table = document.getElementById('myTable')
//  table.innerHTML = ''
//  for (let i = 0; i < data.length; i++) {
//   let row = `<tr>
//   <td>${data[i].id}</td>
//   <td>${data[i].name}</td>
//   <td>${data[i].address}</td>
//   <td>${data[i].date}</td>
//   <td>${data[i].price}</td>
//   <td>${data[i].status}</td>
//   <td>${data[i].action}</td>
//  </tr>`
//   table.innerHTML += row
//  }
// }
