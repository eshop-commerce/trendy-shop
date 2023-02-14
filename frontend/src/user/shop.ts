let prodName = document.getElementById("prodName")as HTMLLinkElement
let testing = document.getElementById("testing") as HTMLDivElement
interface Products{
    Id: string,
    Product_name:string,
    Product_price:string,
    Category_name: string
    Product_image: string
  }
let ProductUser:Products[]=[]

function getUserProducts(){
    fetch("http://localhost:4004/products")
    .then((response) => response.json())
    .then((data :Products[]) => {
        ProductUser = data
        showUserProduct(ProductUser)
    }).catch(error => console.error(error.message));
}
console.log("helo00")
getUserProducts()


function showUserProduct(ProductUser: Products[]) {
    console.log('Here====================================');
    console.log(ProductUser);
    console.log('====================================');
    ProductUser.forEach((a)=>{
        let html =`
        <div class="product__item__pic set-bg">
        <img src="../assets/shop/shop-8.jpg" alt="item">
        <div class="label stockout stockblue">Out Of Stock</div>
        <ul class="product__hover">
            <li>
                <a href="../assets/shop/hop-8.jpg" class="image-popup">
                    <span class="arrow_expand">
                        <ion-icon name="resize-outline"></ion-icon>
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon_heart_alt">
                        <ion-icon name="heart-outline"></ion-icon>
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon_bag_alt">
                        <ion-icon name="bag-outline"></ion-icon>
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
        <h6>
            <a href="#"><h6><b>Category:</b></h6> ${a.Category_name}</a>
        </h6>
    </div>
</div>
        `
        testing.style.display = "flex"
        testing.innerHTML += html
    // console.log(ProductUser)
    //    console.log( prodName.innerText = a.Product_name)
    //    prodName.innerText = a.Product_name
    })
}