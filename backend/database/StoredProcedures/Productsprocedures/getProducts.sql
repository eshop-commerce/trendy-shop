-- USE trendyShop
CREATE
OR ALTER PROCEDURE getProducts AS BEGIN
SELECT Product_name,
    Product_price,
    Category_name,
    Image_URL
FROM productsTable
WHERE isDeleted = 0
END --EXEC getProducts