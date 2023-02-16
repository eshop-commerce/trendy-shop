"use strict";
let productDiv = document.getElementById("pro");
let Product = [];
// function allProducts(){
//     fetch('http://localhost:3002/api/cartitems/8fe3f01c-5d55-41ca-93ef-a84dcf27c2f8',{
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + token
//             }
//         }).then(res => res.json())
//         .then(data => {
//             this.items = data;
//         })
// }
function getProducts() {
    fetch("http://localhost:4004/products")
        .then((response) => response.json())
        .then((data) => {
        Product = data;
        showProduct(Product);
    }).catch(error => console.error(error.message));
}
console.log("helo00");
getProducts();
function showProduct(Product) {
    console.log('Here====================================');
    console.log(Product);
    console.log('====================================');
    Product.forEach((a) => {
        let html = `
        <div class="todo" onclick="">
            <h1>${a.Product_name}</h1>
            <p>${a.Product_price}</p>
            <p>${a.Category_name}</p>
        </div>
        `;
        console.log(Product);
        productDiv.innerHTML += html;
    });
}
// showProduct()
function updateProduct() {
}
function displayProducts() {
    Product.forEach((a) => {
        let html = `
        <div class="todo" onclick="">
            <h1>${a.Product_name}</h1>
            <p>${a.Product_price}</p>
            <p>${a.Category_name}</p>
        </div>
        `;
        console.log(Product);
        productDiv.innerHTML += html;
    });
}
displayProducts();
// function showProducts(){
//     Task.forEach((a) => {
//         let html = `
//                   <div class="task" style ="display:flex;flex-direction:column;gap:5px; margin-top:10px;" onclick="popTask(${a.id})" >                      
//                           <img src="${a.TaskImage}" style="width:98%;height:100px">
//                           <p>${a.dates}</p>  
//                           <p>${a.TaskName}</p>   
//                           <p>${Math.abs(a.Days)} Streaks</p>  
//                   </div>`;
//         activities.innerHTML += html;
//       });
// }
