CREATE OR ALTER PROCEDURE deleteProduct(@id VARCHAR(100))
AS
BEGIN
UPDATE productsTable SET isDeleted = 1 WHERE Id=@id
END
GO

