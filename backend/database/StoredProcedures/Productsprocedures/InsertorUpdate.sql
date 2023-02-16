
CREATE OR ALTER PROCEDURE InsertOrUpdate (
    @id VARCHAR(100), @Product_name VARCHAR(100)=NULL , @Product_price VARCHAR(100)=NULL, @Category_name VARCHAR(100)=NULL, @Image_URL VARCHAR(100) = NULL)

AS
BEGIN



IF EXISTS(SELECT * FROM productsTable WHERE Id =@id)
BEGIN
UPDATE productsTable SET Product_name=@Product_name, Product_price=@Product_price,Category_name=@Category_name, Image_URL=@Image_URL
WHERE Id=@id

END
ELSE

BEGIN
INSERT INTO productsTable(Id, Product_name, Product_price,Category_name,Image_URL)
VALUES( @id, @Product_name , @Product_price, @Category_name, @Image_URL)
END
END


-- SELECT * FROM productsTable
-- EXEC InsertOrUpdate '25jj79000','Airforce3','777777','Uiiiiiiii','/assests/images/johndoe'

-- DROP PROCEDURE InsertOrUpdate