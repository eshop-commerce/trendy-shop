
-- Create a new stored procedure called 'deleteCategory' in schema 'dbo'
-- Drop the stored procedure if it already exists
IF EXISTS (
SELECT *
    FROM INFORMATION_SCHEMA.ROUTINES
WHERE SPECIFIC_SCHEMA = N'dbo'
    AND SPECIFIC_NAME = N'deleteCategory'
)
DROP PROCEDURE dbo.deleteCategory
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.deleteCategory(@categoryId VARCHAR(300))
AS
BEGIN
UPDATE categories SET isDeleted = 1 WHERE categoryId=@categoryId
END
GO