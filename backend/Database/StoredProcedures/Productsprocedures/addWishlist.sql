CREATE OR ALTER PROCEDURE addWishlist(@id VARCHAR(100))
AS
BEGIN
UPDATE productsTable SET addToWishlist = 1 WHERE Id=@id
END
GO

USE trendyShop
EXEC addWishlist '25jj7'
SELECT * FROM productsTable