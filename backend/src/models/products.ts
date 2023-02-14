export class Product{
    constructor(public Id:string, public Product_name:string , 
        public Product_price:string, public Category_name:string, public Image_URL:string){}
}



export interface DecodedData{
  Id: string,
  Product_name:string,
  Product_price:string,
  Category_name: string,
  iat: number
  exp: number
}