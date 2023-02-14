const baseURL = 'http://localhost:4000';

const request = {
    getData: async(route: string) => {
        let res = await fetch(`${baseURL}${route}`);
        let data = await res.json();
        return data;
    },
    postData: async(route: string, body: any) => {
    const res = await fetch(baseURL+route,  {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }});
            return res;
    },
    deleteData:async(route: string, body: any) => {
            const res = await fetch(`${baseURL}${route}`,  {
            method: "DELETE",
            body: JSON.stringify(body),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
                 }});
                 return res;
    },
    updateData:async () => {
        
    }
}


// Function to get and populate products
const getProducts = async() => {
try {
    const products = await request.getData('/products/5');
    console.log(products, 'pro');
    
} catch (error: any) {
    console.log(error.message);
    
}

}
// Run this on page load
// getProducts();
// Test post
const data =   {
                    Product_name: "Khaki trousers",
                    Product_price: "1900.00",
                    Category_name: "Clothes"};
const postProduct = async() => {
    const res = await request.postData('/products', data);
    console.log(res);
    
}                    
// postProduct()