export class Order {
 constructor(public Id: number,
  public User_Id: string,
  public Product_Id: string,
  public orderStatus: string,
  public Quantity: number) { }
}



export interface DcodeData {
 Id: string,
 User_Id: string,
 Product_Id: string,
 orderStatus: string,
 Quantity: Number
}
