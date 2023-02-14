CREATE OR ALTER PROCEDURE deleteUser(@id VARCHAR(50))
AS
BEGIN
UPDATE UserTable SET isDeleted='1' WHERE Id=@id
END

-- USE Client
-- EXEC deleteUser 'ugeb9ajke'