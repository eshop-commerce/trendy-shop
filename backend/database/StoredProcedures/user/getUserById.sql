CREATE OR ALTER  PROCEDURE getUserById(@id VARCHAR(100))
AS
BEGIN
SELECT * FROM UserTable WHERE Id=@id AND isDelete = 0
END