-- USE Client

CREATE OR ALTER PROCEDURE deleteUser(@id VARCHAR(50))
AS
BEGIN
UPDATE FlightsBookings SET isDeleted='1' WHERE Id=@id
END
GO