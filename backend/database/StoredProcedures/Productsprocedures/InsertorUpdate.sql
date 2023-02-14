
CREATE OR ALTER PROCEDURE InsertOrUpdate (
    @id VARCHAR(100), @Product_name VARCHAR(100)=NULL , @Product_price VARCHAR(100)=NULL, @Category_name VARCHAR(100)=NULL)

AS
BEGIN


IF EXISTS(SELECT * FROM productsTable WHERE Id =@id)
BEGIN
UPDATE productsTable SET 
Product_name=@Product_name, Product_price=@Product_price,Category_name=@Category_name
WHERE Id=@id

END
ELSE
BEGIN
INSERT INTO productsTable(Id, Product_name, Product_price,Category_name)
VALUES( @id, @Product_name , @Product_price, @Category_name)
END
END

