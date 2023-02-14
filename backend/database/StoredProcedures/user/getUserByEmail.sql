CREATE PROCEDURE getUserByEmail(@email VARCHAR(300))
AS
BEGIN

	SELECT * FROM UserTable WHERE Email =@email
END
-- EXEC getUserByEmail 'Jcole2022@gmail.com'