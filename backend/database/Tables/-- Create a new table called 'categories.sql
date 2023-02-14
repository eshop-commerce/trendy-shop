-- Create a new table called 'categories' in schema 'dbo'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.categories', 'U') IS NOT NULL
DROP TABLE dbo.categories
GO
-- Create the table in the specified schema
CREATE TABLE dbo.categories
(
    categoryId [VARCHAR](300), -- primary key column
    Category_name[VARCHAR](300),
     isDeleted BIT DEFAULT(0)
    
    -- specify more columns here
);
GO