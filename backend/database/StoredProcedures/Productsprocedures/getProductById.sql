CREATE OR ALTER  PROCEDURE getProuctById(@id VARCHAR(100))
AS
BEGIN
SELECT * FROM productsTable WHERE Id=@id AND isDeleted = 0
END
 EXEC getProuctById '25'