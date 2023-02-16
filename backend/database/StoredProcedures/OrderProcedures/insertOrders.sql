CREATE PROCEDURE insertOrder(@id VARCHAR(100), @userId VARCHAR(100) 
,@productId VARCHAR(100) , @orderStatus VARCHAR(100),@quantity INT )
AS
BEGIN
INSERT INTO Orders (Id, UserId, productId, orderStatus, Quantity)
VALUES(@id,@userId,@productId,@orderStatus ,@quantity)
END

DROP PROCEDURE insertOrder



CREATE OR ALTER PROCEDURE insertOrders (@userId VARCHAR(100))

AS

BEGIN


INSERT INTo Orders(UserId, productId, Amount, Quantity)
SELECT User_Id,product_Id, Amount , Quantity from userCart 
Where User_Id=@userId

END

EXEC insertorders '37dd33e4-a783-4372-83c3-570d6eb1e634'

