export class Item {
  constructor(public Id: number,
    public User_Id: string,
    public Product_Id: string,
    public Product_name: string,
    public Amount: string,
    public Quantity: number) { }
}



export interface DcodeData {
  Id: string,
  User_Id: string,
  Product_Id: string,
  Product_name: string,
  Amount: string,
  Quantity: Number
}