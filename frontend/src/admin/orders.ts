interface Orders {
 Id: string,
 UserId:string,
 productId:string,
 orderStatus:string,
 Quantity:string,
 Amount:string
}


let orderAdmin: Orders[] = []

function getOrdersAdmin() {
  fetch("http://localhost:4004/orders")
  .then((response) => response.json())
  .then((data: Orders[]) => {
   orderAdmin = data
   showOrdersAdmin(orderAdmin)
  }).catch(error => console.error(error.message));
}
console.log("helo00")
getOrdersAdmin()


function showOrdersAdmin(orderAdmin: Orders[]) {
 console.log('Here====================================');
 console.log(orderAdmin);
 console.log('====================================');
 orderAdmin.forEach((a) => {

  let table = document.getElementById('myTable') as HTMLTableElement
  let row = `<tr>
    <td>${a.Id}</td>
    <td>${a.UserId}</td>
    <td><select name="Status" id="">
                     <option value="${a.orderStatus}">Pending</option>
                    <option value="Fulfilled">Fulfilled</option>                   
                </select></td>
    <td>${a.Quantity}</td>
     <td>${a.Amount}</td>
  </tr>`
   table.innerHTML += row
  console.log(orderAdmin);
   

})}
