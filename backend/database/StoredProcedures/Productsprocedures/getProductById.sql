CREATE OR ALTER  PROCEDURE getProductById(@id VARCHAR(100))
AS
BEGIN
SELECT * FROM productsTable WHERE Id=@id AND isDeleted = 0
END
 -- EXEC getProuctById '25'
 DROP PROCEDURE getProuctById