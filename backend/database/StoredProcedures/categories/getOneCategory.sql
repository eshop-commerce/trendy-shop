-- Create a new stored procedure called 'getOneCategory' in schema 'dbo'
-- Drop the stored procedure if it already exists
IF EXISTS (
SELECT *
    FROM INFORMATION_SCHEMA.ROUTINES
WHERE SPECIFIC_SCHEMA = N'dbo'
    AND SPECIFIC_NAME = N'getOneCategory'
)
DROP PROCEDURE dbo.getOneCategory
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.getOneCategory(@categoryId VARCHAR(300))
AS
BEGIN
SELECT * FROM categories WHERE categoryId=@categoryId AND isDeleted = 0
END
    