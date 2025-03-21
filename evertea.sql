-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: ever_tea
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `confirmation`
--

DROP TABLE IF EXISTS `confirmation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `confirmation` (
  `confirmation_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `confirmation_time` datetime(6) NOT NULL,
  `plantation_instruction_id` bigint(20) NOT NULL,
  PRIMARY KEY (`confirmation_id`),
  KEY `FKrmjjkxsj40cl1edpv4036idvn` (`plantation_instruction_id`),
  CONSTRAINT `FKrmjjkxsj40cl1edpv4036idvn` FOREIGN KEY (`plantation_instruction_id`) REFERENCES `instruction_execution` (`instruction_execution_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `confirmation`
--

LOCK TABLES `confirmation` WRITE;
/*!40000 ALTER TABLE `confirmation` DISABLE KEYS */;
/*!40000 ALTER TABLE `confirmation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instruction`
--

DROP TABLE IF EXISTS `instruction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instruction` (
  `instruction_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `action` varchar(255) NOT NULL,
  `details` varchar(255) NOT NULL,
  `end_day` int(11) DEFAULT NULL,
  `recurring_frequency_week` int(11) DEFAULT NULL,
  `start_day` int(11) NOT NULL,
  `trigger_day` int(11) NOT NULL,
  `tea_type_id` bigint(20) NOT NULL,
  PRIMARY KEY (`instruction_id`),
  KEY `FK5ukp0koyvv02mny89kks2wmjw` (`tea_type_id`),
  CONSTRAINT `FK5ukp0koyvv02mny89kks2wmjw` FOREIGN KEY (`tea_type_id`) REFERENCES `tea_type` (`tea_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instruction`
--

LOCK TABLES `instruction` WRITE;
/*!40000 ALTER TABLE `instruction` DISABLE KEYS */;
INSERT INTO `instruction` VALUES (1,'Watering','Water plantation',630,1,1,1,1),(2,'Fertilizing','Fertilize with T200',87,20,56,21,1),(3,'Watering','Water plantation',242,1,87,1,2),(4,'Fertilizing','Fertilize with T300',56,15,21,21,1);
/*!40000 ALTER TABLE `instruction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instruction_execution`
--

DROP TABLE IF EXISTS `instruction_execution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instruction_execution` (
  `instruction_execution_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `execution_date` datetime(6) NOT NULL,
  `instruction_id` bigint(20) NOT NULL,
  `plantation_id` bigint(20) NOT NULL,
  PRIMARY KEY (`instruction_execution_id`),
  KEY `FKq1pduwsf6f2ee7vlp2bubumgy` (`instruction_id`),
  KEY `FKjeyuiqhkjg76h8br61lqoc5ic` (`plantation_id`),
  CONSTRAINT `FKjeyuiqhkjg76h8br61lqoc5ic` FOREIGN KEY (`plantation_id`) REFERENCES `plantation` (`plantation_id`),
  CONSTRAINT `FKq1pduwsf6f2ee7vlp2bubumgy` FOREIGN KEY (`instruction_id`) REFERENCES `instruction` (`instruction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instruction_execution`
--

LOCK TABLES `instruction_execution` WRITE;
/*!40000 ALTER TABLE `instruction_execution` DISABLE KEYS */;
INSERT INTO `instruction_execution` VALUES (1,'2025-02-27 11:03:01.000000',1,1),(3,'2025-02-27 11:03:01.000000',1,2),(4,'2025-02-26 11:03:01.000000',1,4),(6,'2025-02-06 11:08:13.000000',2,4),(7,'2025-02-27 11:09:55.000000',2,4),(8,'2025-02-27 11:10:43.000000',1,4),(9,'2025-02-28 23:19:21.000000',1,1),(10,'2025-02-28 23:19:21.000000',1,2),(11,'2025-02-28 23:19:21.000000',1,4),(12,'2025-03-07 10:58:20.000000',1,1),(13,'2025-03-07 10:58:20.000000',1,2),(14,'2025-03-07 10:58:20.000000',1,4);
/*!40000 ALTER TABLE `instruction_execution` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instruction_seq`
--

DROP TABLE IF EXISTS `instruction_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instruction_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instruction_seq`
--

LOCK TABLES `instruction_seq` WRITE;
/*!40000 ALTER TABLE `instruction_seq` DISABLE KEYS */;
INSERT INTO `instruction_seq` VALUES (1);
/*!40000 ALTER TABLE `instruction_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plantation`
--

DROP TABLE IF EXISTS `plantation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plantation` (
  `plantation_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `location` varchar(100) NOT NULL,
  `obstacle_area` varchar(20) NOT NULL,
  `plantas_count` int(11) NOT NULL,
  `plantation_age` double NOT NULL,
  `plantation_angle` double NOT NULL,
  `plantation_name` varchar(100) NOT NULL,
  `plantation_size` double NOT NULL,
  `plantation_start_date_time` datetime(6) NOT NULL,
  `tea_type_id` bigint(20) NOT NULL,
  PRIMARY KEY (`plantation_id`),
  KEY `FKtjrariablik32bwdvn4xf9ybg` (`tea_type_id`),
  CONSTRAINT `FKtjrariablik32bwdvn4xf9ybg` FOREIGN KEY (`tea_type_id`) REFERENCES `tea_type` (`tea_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plantation`
--

LOCK TABLES `plantation` WRITE;
/*!40000 ALTER TABLE `plantation` DISABLE KEYS */;
INSERT INTO `plantation` VALUES (1,'Kakandura','5%',1000,14,30,'Navod P1',1,'2024-11-01 08:00:00.000000',1),(2,'Kaburupitiya','3%',1500,10,45,'Nethum P2',15,'2025-02-15 08:00:00.000000',1),(3,'Middeniya','7%',2000,12,60,'Navod P2',20,'2025-03-01 08:00:00.000000',3),(4,'Walsamulla','5%',1000,14,30,'Gerald P1',10,'2025-01-01 08:00:00.000000',1),(5,'Kotapola','3%',1500,10,45,'Supun P2',15,'2025-02-15 08:00:00.000000',2),(6,'Makandura','7%',2000,12,60,'Sithum P3',20,'2025-03-01 08:00:00.000000',2);
/*!40000 ALTER TABLE `plantation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tea_type`
--

DROP TABLE IF EXISTS `tea_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tea_type` (
  `tea_type_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fertilizer_schedule` text NOT NULL,
  `lifecycle_weeks` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `watering_interval_days` int(11) NOT NULL,
  PRIMARY KEY (`tea_type_id`),
  UNIQUE KEY `UKrr14xom1nehk9la1bsjjvg8na` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tea_type`
--

LOCK TABLES `tea_type` WRITE;
/*!40000 ALTER TABLE `tea_type` DISABLE KEYS */;
INSERT INTO `tea_type` VALUES (1,'{\"week_3\": {\"fertilizer_type\": \"T200\", \"frequency_weeks\": 2}, \"week_8\": {\"fertilizer_type\": \"T400\", \"frequency_weeks\": 3}}',48,'2026',7),(2,'{\"week_5\": {\"fertilizer_type\": \"T300\", \"frequency_weeks\": 3}, \"week_9\": {\"fertilizer_type\": \"T500\", \"frequency_weeks\": 4}}',60,'2032',10),(3,'{\"week_2\": {\"fertilizer_type\": \"T150\", \"frequency_weeks\": 2}, \"week_7\": {\"fertilizer_type\": \"T350\", \"frequency_weeks\": 3}}',50,'2048',5);
/*!40000 ALTER TABLE `tea_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_information`
--

DROP TABLE IF EXISTS `user_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_information` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UKiy2cs6vst0axi8h3d45ys49nm` (`email`),
  UNIQUE KEY `UKm6x6fuarq5dfouy9l3tlpxlm2` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_information`
--

LOCK TABLES `user_information` WRITE;
/*!40000 ALTER TABLE `user_information` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weather`
--

DROP TABLE IF EXISTS `weather`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weather` (
  `weather_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `weather_condition` int(11) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(255) NOT NULL,
  `location` varchar(100) NOT NULL,
  PRIMARY KEY (`weather_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weather`
--

LOCK TABLES `weather` WRITE;
/*!40000 ALTER TABLE `weather` DISABLE KEYS */;
/*!40000 ALTER TABLE `weather` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-10  1:26:57
