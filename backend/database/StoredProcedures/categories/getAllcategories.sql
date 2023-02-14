-- Create a new stored procedure called 'getAllCategories' in schema 'dbo'
-- Drop the stored procedure if it already exists
IF EXISTS (
SELECT *
    FROM INFORMATION_SCHEMA.ROUTINES
WHERE SPECIFIC_SCHEMA = N'dbo'
    AND SPECIFIC_NAME = N'getAllCategories'
)
DROP PROCEDURE dbo.getAllCategories
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.getAllCategories
   AS BEGIN
SELECT Category_name,
categoryId
FROM categories
WHERE isDeleted = 0
END 