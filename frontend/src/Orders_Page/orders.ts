interface Orders {
 Id: string,
 UserId:string,
 productId:string,
 orderStatus:string,
 Quantity:string,
 Amount:string
}


let Order: Orders[] = []

function getOrders() {
  fetch("http://localhost:4004/orders")
  .then((response) => response.json())
  .then((data: Orders[]) => {
   Order = data
   showOrders(Order)
  }).catch(error => console.error(error.message));
}
console.log("helo00")
getOrders()


function showOrders(Order: Orders[]) {
 console.log('Here====================================');
 console.log(Order);
 console.log('====================================');
 Order.forEach((a) => {

  let table = document.getElementById('myTable') as HTMLTableElement
  let row = `<tr>
    <td>${a.Id}</td>
    <td>${a.UserId}</td>
    <td>${a.orderStatus}</td>
    <td>${a.Quantity}</td>
     <td>${a.Amount}</td>
  </tr>`
   table.innerHTML += row
   console.log(Order);
   

})}

//   let table = document.getElementById('myTable') as HTMLTableElement
//   table.innerHTML = ''
//   for (let i = 0; i < Order.length; i++) {
//     let row = `<tr>
//   <td>${Order[i].UserId}</td>
//   <td>${Order[i].productId}</td>
//   <td>${Order[i].orderStatus}</td>
//   <td>${Order[i].Quantity}</td>
//   <td>${Order[i].Amount}</td>
//  </tr>`
//      table.innerHTML += row


  // let idColumn = document.querySelector('id') as HTMLTableColElement
  // idColumn.on('click', =>{

  // })
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



