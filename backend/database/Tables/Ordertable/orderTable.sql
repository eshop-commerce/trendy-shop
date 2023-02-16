CREATE TABLE Orders (
 Id INT IDENTITY, 
 UserId  VARCHAR(100),
 productId VARCHAR(100),
 orderStatus VARCHAR(100) CHECK (orderStatus IN ('pending','fulfilled','cancelled')) DEFAULT 'pending',
 Quantity INT ,
 Amount INT
FOREIGN KEY (productId) REFERENCES productsTable(Id),
FOREIGN KEY (UserId) REFERENCES UserTable(Id))