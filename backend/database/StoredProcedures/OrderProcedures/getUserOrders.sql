-- CREATE OR ALTER PROCEDURE  getUserOrders (@userid VARCHAR(100))
-- AS
-- BEGIN
-- SELECT * FROM Orders WHERE UserId =@userid
-- END

CREATE OR ALTER PROCEDURE  getAllOrders
AS
BEGIN
SELECT * FROM Orders
END