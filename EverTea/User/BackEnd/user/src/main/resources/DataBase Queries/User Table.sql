create TABLE Users (
	userId SERIAL PRIMARY KEY,
	userName VARCHAR NOT NULL UNIQUE,
	email VARCHAR NOT NULL UNIQUE,
	FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
	NIC VARCHAR NOT NULL,
    DateOfBirth DATE,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create TABLE UserLogin (
	userId SERIAL PRIMARY KEY,
	userName VARCHAR NOT NULL UNIQUE,
	email VARCHAR NOT NULL UNIQUE,
	password VARCHAR NOT NULL
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