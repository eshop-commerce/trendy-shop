-- USE trendyShop
CREATE OR ALTER PROCEDURE getProducts
AS
BEGIN
SELECT Product_name,Product_name,Category_name FROM productsTable

END


-- 
EXEC getProducts