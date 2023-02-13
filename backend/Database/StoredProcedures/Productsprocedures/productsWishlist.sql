CREATE OR ALTER PROCEDURE productsWishlist
AS
BEGIN
SELECT Product_name, Product_price, Category_name FROM productsTable WHERE addToWishlist = '1' AND isDeleted = '0'
END
GO
EXEC productsWishlist
