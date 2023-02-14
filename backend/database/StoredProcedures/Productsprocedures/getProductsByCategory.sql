-- Create a new stored procedure called 'getProductByCategory' in schema 'dbo'
-- Drop the stored procedure if it already exists
IF EXISTS (
SELECT *
    FROM INFORMATION_SCHEMA.ROUTINES
WHERE SPECIFIC_SCHEMA = N'dbo'
    AND SPECIFIC_NAME = N'getProductByCategory'
)
DROP PROCEDURE dbo.getProductByCategory
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.getProductByCategory(@category_name VARCHAR(300))
AS
BEGIN

IF EXISTS (SELECT * FROM productsTable WHERE category_name = @category_name)

  SELECT * FROM productsTable

END


   