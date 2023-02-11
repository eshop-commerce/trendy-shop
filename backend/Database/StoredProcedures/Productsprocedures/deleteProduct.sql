CREATE OR ALTER PROCEDURE deleteProduct(@id VARCHAR(100))
AS
BEGIN
DELETE FROM productsTable WHERE Id=@id
END
GO

USE trendyShop
EXEC deleteProduct '255'