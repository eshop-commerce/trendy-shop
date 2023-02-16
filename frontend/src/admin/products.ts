let productDiv = document.getElementById("items") as HTMLDivElement
let addorupdate = document.getElementById("add-update-product") as HTMLButtonElement
let addForm = document.querySelector('.add-new-product') as HTMLFormElement
let addProduct = document.querySelector(".add-product") as HTMLButtonElement
// input elements
let product_name = document.getElementById("product-name") as HTMLInputElement
let product_price = document.getElementById("product-price") as HTMLInputElement
let product_image = document.getElementById("product-image") as HTMLInputElement
let category = document.getElementById("product-category") as HTMLInputElement

let BaseURL ="http://localhost:4004/products"
interface Products{
    Id: string,
    Product_name:string,
    Product_price:string,
    Category_name: string,
    Image_URL: string
  }
let Product:Products[]=[]
 function getProducts(){
    fetch(BaseURL)
    .then((response) => response.json())
    .then((data :Products[]) => {
        Product = data
        showProduct(Product)
    }).catch(error => console.error(error.message));
}
// console.log("helo00")
getProducts()


function showProduct(Product: Products[]) {
    console.log('Here====================================');
    console.log(Product);
    console.log('====================================');
    Product.forEach((a)=>{
        // let html =`
        // <div class="todo" onclick="">
        //     <h1>${a.Product_name}</h1>
        //     <p>${a.Product_price}</p>
        //     <p>${a.Category_name}</p>
        // </div>
        // `
        let html=`
        <div class="product__item" id="product">
        <div class="product__item__pic ">
        <img src="../assets/shop/shop-7.jpg" alt="item">
            <div class="label new">New</div>
            <ul class="product__hover">

                <li>
                    <a class="image-popup">
                        <span class="arrow_expand">
                            <ion-icon name="resize-outline" style="text-align: center;"></ion-icon>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon_heart_alt">
                            <ion-icon name="heart-outline" style="text-align: center;"></ion-icon>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon_bag_alt">
                            <ion-icon name="bag-outline" style="text-align: center;"></ion-icon>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="product__item__text">
            <h6>
                <a href="#">${a.Product_name}</a>
            </h6>
            <div class="rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
            </div>
            <div class="product__price">$ ${a.Product_price}</div>
        </div>
    </div>
        `
    // console.log(Product)
        productDiv.innerHTML += html
    })
}
// showProduct()

addorupdate.addEventListener('click',()=>{
    addForm.style.display="block"
})
addProduct.addEventListener('click',updateProduct)
function updateProduct(event: any){
    event.preventDefault();

    console.log("hello", product_name.value);
    
    
    const p_name = product_name.value
    const p_image = product_image.value
    const p_category = category.value
    const p_price = product_price.value
    if(p_name==''|| p_image=='' ||p_category=='' || p_price==''){
        const p = document.createElement('p')
        p.textContent='Please fill in all Fields'
        p.style.color='orange'
        p.id='error-message'
        addForm.insertAdjacentElement('afterbegin', p)

        setTimeout(()=>{
            p.style.display='none'
        },2000)}
       else {
        let payload = {
            Product_name:p_name,
            Product_price:p_price,
            Category_name:p_category,
            Image_URL:p_image
        }
        
        postProduct(payload)
        event.preventDefault();
        addForm.style.display="none"
}
}
function postProduct(payload:any){
   
    let options ={
        method:'POST',
        body:JSON.stringify(payload),
        headers: {
                'Content-Type': 'application/json'
            }
    }
    fetch(BaseURL,options)
    .then(response=>console.log(response.status));
}

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

    









