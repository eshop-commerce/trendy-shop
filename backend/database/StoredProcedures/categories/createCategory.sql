-- Create a new stored procedure called 'addCategory' in schema 'dbo'
-- Drop the stored procedure if it already exists
IF EXISTS (
SELECT *
    FROM INFORMATION_SCHEMA.ROUTINES
WHERE SPECIFIC_SCHEMA = N'dbo'
    AND SPECIFIC_NAME = N'addCategory'
)
DROP PROCEDURE dbo.addCategory
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.addCategory
     @categoryId [VARCHAR](300), -- primary key column
    
     @Category_name [VARCHAR](300)
   
AS
BEGIN


IF EXISTS(SELECT * FROM categories WHERE categoryId =@categoryId)
BEGIN
UPDATE catogories SET 
Category_name=@Category_name
WHERE categoryId = @CategoryId

END
ELSE
BEGIN
INSERT INTO categories(categoryId, Category_name)
VALUES( @categoryId, @Category_name)
END
END