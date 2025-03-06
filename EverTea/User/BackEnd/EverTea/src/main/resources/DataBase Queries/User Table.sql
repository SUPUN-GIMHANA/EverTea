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

CREATE TABLE plantations (
    PlantationId INT PRIMARY KEY,
    UserId INT NOT NULL,
    Location VARCHAR(50) NOT NULL,
    CreatedDate DATE DEFAULT CURRENT_DATE
);

create TABLE TeaModels (
	teaId SERIAL PRIMARY KEY,
	teaName VARCHAR NOT NULL UNIQUE,
	mainDistrict INT NOT NULL,
	subDistricts VARCHAR NOT NULL,
	price INT NOT NULL,
	FOREIGN KEY (mainDistrict) REFERENCES district(districtid) ON DELETE CASCADE
);

create TABLE District (
	districtId SERIAL PRIMARY KEY,
	districtName VARCHAR NOT NULL UNIQUE,
	mainplant VARCHAR NOT NULL UNIQUE
);

create TABLE LandSlopes (
	slopeid SERIAL PRIMARY KEY,
	slope VARCHAR NOT NULL UNIQUE
);



INSERT INTO "teamodels" (teaId, teaName, districts) 
VALUES (1, 'nawodatea', 'gall, nuwaraeliya'),
(2, 'supuntea', 'matara, kurunagala, nuwaraeliya');

INSERT INTO "district" (districtId, districtName, mainplant) 
VALUES (1, 'gall', 'nawodatea'),
(2, 'nuwareliya', 'supuntea');

INSERT INTO "userlogin" (UserId, UserName, Password) 
VALUES (1, 'admin', 'password');

INSERT INTO "landslopes" (slopeid , slope)
VALUES (1, '25'),
(2, '50'),
(3, ' 75');




-- to update the database tables
ALTER TABLE teamodels
ADD COLUMN price INT DEFAULT 0 NOT NULL;



UPDATE teamodels
SET price = 100
WHERE teaid = 1;

UPDATE teamodels
SET price = 200
WHERE teaid = 2;
