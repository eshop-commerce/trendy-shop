CREATE TABLE Orders (Id VARCHAR(100), 

UserId VARCHAR(100) ,
 productId VARCHAR(100),
 orderStatus VARCHAR(100) CHECK (orderStatus IN ('pending','fulfilled','cancelled')) DEFAULT 'pending',
 Quantity INT ,
FOREIGN KEY (productId) REFERENCES productsTable(Id),
FOREIGN KEY (UserId) REFERENCES UserTable(Id))



CREATE PROCEDURE insertOrder(@id VARCHAR(100), @userId VARCHAR(100) 
,@productId VARCHAR(100) , @orderStatus VARCHAR(100),@quantity INT )
AS
BEGIN
INSERT INTO Orders (Id, UserId, productId, orderStatus, Quantity)
VALUES(@id,@userId,@productId,@orderStatus ,@quantity)
END


CREATE OR ALTER PROCEDURE  getUserOrders (@userid VARCHAR(100))
AS
BEGIN
SELECT * FROM Orders WHERE UserId =@userid
END


CREATE PROCEDURE updateOrders(@id VARCHAR(100))
AS

BEGIN
UPDATE Orders SET  orderStatus ='fulfilled' WHERE Id =@id
END

CREATE PROCEDURE deleteOrder(@orderId VARCHAR(100))
AS

BEGIN

DELETE FROM Orders WHERE Id= @orderId

END