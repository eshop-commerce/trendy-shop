CREATE TABLE dbo.WishList (
    WishListID INT PRIMARY KEY IDENTITY (1, 1),
	ProductID INT NOT NULL
	FOREIGN KEY (ProductID) REFERENCES [dbo].[productsTable] (ProductID),
    UserID INT NOT NULL,
    FOREIGN KEY (UserID) REFERENCES [dbo].[Users] (UserID)
);