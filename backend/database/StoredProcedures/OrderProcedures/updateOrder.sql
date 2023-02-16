CREATE PROCEDURE updateOrders(@id VARCHAR(100))
AS

BEGIN
UPDATE Orders SET  orderStatus ='fulfilled' WHERE Id =@id
END
