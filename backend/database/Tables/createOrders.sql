CREATE TABLE Orders (Id VARCHAR(100), 

UserId VARCHAR(100) ,
 productId VARCHAR(100),
 orderStatus VARCHAR(100) CHECK (orderStatus IN ('pending','fulfilled','cancelled')) DEFAULT 'pending',
 Quantity INT ,
 FOREIGN KEY (productId) REFERENCES productsTable(Id),
  FOREIGN KEY (UserId) REFERENCES UserTable(Id))
 