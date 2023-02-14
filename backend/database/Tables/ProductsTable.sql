-- CREATE DATABASE trendyShop USE trendyShop CREATE TABLE productsTable (
--     Id VARCHAR(100) PRIMARY KEY,
--     Product_name VARCHAR(100),
--     Product_price VARCHAR(100),
--     Category_name VARCHAR(100),
--     isDeleted BIT DEFAULT(0),
--     addToWishlist BIT DEFAULT(0)
-- )


-- Create a new table called 'productsTable' in schema 'dbo'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.productsTable', 'U') IS NOT NULL
DROP TABLE dbo.productsTable
GO
-- Create the table in the specified schema
CREATE TABLE dbo.productsTable
(
     Id VARCHAR(100) PRIMARY KEY,
    Product_name VARCHAR(100),
    Product_price VARCHAR(100),
    Category_name VARCHAR(100),
    isDeleted BIT DEFAULT(0),
    addToWishlist BIT DEFAULT(0)
    -- specify more columns here
);
GO

SELECT *
FROM productsTable