CREATE DATABASE trendyShop; 
USE trendyShop;

DROP DATABASE trendyShop;

DROP TABLE userCart

CREATE TABLE userCart (
Id VARCHAR(100) PRIMARY KEY,
User_Id VARCHAR(100),
Product_Id VARCHAR(100),
Product_name VARCHAR(200),
Amount VARCHAR(200),
Quantity VARCHAR(200) 
FOREIGN KEY (Product_Id) REFERENCES productsTable(ID),
FOREIGN KEY (User_Id) REFERENCES dbo.UserTable(Id)
);


SELECT * FROM dbo.userCart;

