CREATE PROCEDURE deleteOrder(@orderId VARCHAR(100))
AS

BEGIN

DELETE FROM Orders WHERE Id= @orderId

END