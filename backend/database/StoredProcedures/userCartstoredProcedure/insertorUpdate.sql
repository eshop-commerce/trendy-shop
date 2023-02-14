CREATE OR ALTER PROCEDURE InsertOrUpdate (
    @id VARCHAR(100), @Product_Id VARCHAR(100)=NULL, @Product_name VARCHAR(100)=NULL , @Amount VARCHAR(100)=NULL, @Quantity VARCHAR(100)=NULL)

AS
BEGIN

IF EXISTS(SELECT * FROM userCart WHERE Id =@id)
BEGIN
UPDATE userCart SET 
Product_Id=@Product_Id,
Product_name=@Product_name, Amount=@Amount,Quantity=@Quantity
WHERE Id=@id

END
ELSE
BEGIN
INSERT INTO userCart(Id, Product_Id, Product_name, Amount, Quantity)
VALUES( @id,@Product_Id, @Product_name ,  @Amount, @Quantity)
END
END