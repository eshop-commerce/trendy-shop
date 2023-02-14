CREATE DATABASE trendyShop 
USE trendyShop
CREATE TABLE productsTable (
    Id VARCHAR(100) PRIMARY KEY,
    Product_name VARCHAR(100),
    Product_price VARCHAR(100),
    Category_name VARCHAR(100),
    Image_URL VARCHAR (100),
    isDeleted BIT DEFAULT(0),
    addToWishlist BIT DEFAULT(0)
)
-- DROP TABLE productsTable
SELECT * FROM  productsTable
