CREATE TABLE "users" (
    UserId INT PRIMARY KEY,
    UserName VARCHAR(50) NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DateOfBirth DATE,
    Email VARCHAR(100) UNIQUE,
    Password VARCHAR(100) NOT NULL,
    CreatedDate DATE DEFAULT CURRENT_DATE
);


CREATE TABLE "plantations" (
    PlantationId INT PRIMARY KEY,
    UserId INT NOT NULL,
    Location VARCHAR(50) NOT NULL,
    CreatedDate DATE DEFAULT CURRENT_DATE
);





CREATE TABLE "userlogin" (
    UserId INT PRIMARY KEY,
    UserName VARCHAR(50) NOT NULL,
    Password VARCHAR(100) NOT NULL
);

INSERT INTO "userlogin" (UserId, UserName, Password) 
VALUES (1, 'admin', 'password');