CREATE OR ALTER  PROCEDURE getItemById(@id VARCHAR(100))
AS
BEGIN
SELECT * FROM userCart WHERE user_Id=@user_Id
END