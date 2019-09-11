# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.ProductName, c.CategoryName
FROM Products AS p
JOIN Categories AS c ON p.categoryID = c.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.OrderID, s.ShipperName
FROM Orders AS o
JOIN Shippers AS s ON o.ShipperID = s.ShipperID
WHERE o.OrderDate < "1997-01-09"

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT p.ProductName, od.Quantity
FROM Products AS p
JOIN OrderDetails AS od ON p.ProductID = od.ProductID
WHERE od.OrderID = 10251
ORDER BY p.ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.OrderID, c.CustomerName, e.LastName AS Employee_LastName
FROM Orders AS o
LEFT JOIN Customers AS c ON c.CustomerID = o.CustomerID
LEFT JOIN Employees AS e ON e.EmployeeID = o.EmployeeID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
