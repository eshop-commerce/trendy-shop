CREATE OR ALTER PROCEDURE getAllUsers
    AS 
    BEGIN
    SELECT * FROM UserTable
    END

EXEC getAllUsers