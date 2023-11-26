-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: btrack
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `track`
--

DROP TABLE IF EXISTS `track`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `track` (
  `idtrack` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `owner` varchar(45) NOT NULL,
  `fro` varchar(45) NOT NULL,
  `des` varchar(45) NOT NULL,
  `time` varchar(45) NOT NULL,
  `busavail` varchar(45) NOT NULL DEFAULT 'yes',
  PRIMARY KEY (`idtrack`)
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `track`
--

LOCK TABLES `track` WRITE;
/*!40000 ALTER TABLE `track` DISABLE KEYS */;
INSERT INTO `track` VALUES (1,'Janaki','Kesu','Muhaama','Cms school','9:15','yes'),(2,'Janaki','Kesu','Cms school','Aryakkara','9:25','yes'),(3,'Janaki','Kesu','Aryakkara','Kayippuram','9:35','yes'),(4,'Janaki','Kesu','Kayippuram','Puthanangady','9:45','yes'),(5,'Janaki','Kesu','Puthanangady','Pottikavala','9:50','yes'),(6,'Janaki','Kesu','Pottikavala','Cherthala','10:00','yes'),(7,'Jaanu','Ms','Koryampally','Purushankavala','9:40','yes'),(8,'Jaanu','Ms','Purushankavala','Anjilipalam','9:45','yes'),(9,'Jaanu','Ms','Anjilipalam','Xray','10:00','yes'),(10,'Jaanu','Ms','Xray','Cherthala','10:10','yes'),(21,'Alanz','Appu','Karuva','Kulangara','09:00','yes'),(22,'Alanz','Appu','Kulangara','Kochupally','09:10','yes'),(23,'Alanz','Appu','Kochupally','Arthungalpally','09:15','yes'),(24,'Alanz','Appu','Arthungalpally','Mararikulam','09:25','yes'),(25,'Alanz','Appu','Mararikulam','Mararibeach','09:30','yes'),(26,'Alanz','Appu','Mararibeach','Mararikulam','10:00','yes'),(27,'Alanz','Appu','Mararikulam','Arthungalpally','10:10','yes'),(28,'Alanz','Appu','Arthungalpally','Kochupally','10:15','yes'),(29,'Alanz','Appu','Kochupally','Kulangara','10;25','yes'),(30,'Alanz','Appu','Kulangara','Karuva','10:30','yes'),(31,'Chikku','Aby','Cherthala','Thuravoor','8:30','yes'),(32,'Chikku','Aby','Thuravoor','Aroor','8:50','yes'),(33,'Chikku','Aby','Aroor','Kumbalam','9:40','yes'),(34,'Chikku','Aby','Kumbalam','Edapally','10:50','yes'),(35,'Chikku','Aby','Edapally','Ernakulam','11:15','yes'),(36,'Chikku','Aby','Ernakulam','Edapally','10:15','yes'),(37,'Chikku','Aby','Edapally','Kumbalam','9:50','yes'),(38,'Chikku','Aby','Kumbalam','Aroor','9:30','yes'),(39,'Chikku','Aby','Aroor','Thuravoor','8:50','yes'),(40,'Chikku','Aby','Thuravoor','Cherthala','8:30','yes'),(47,'Cct','Sony','Alappuzha','Thumpoly','11:00','yes'),(48,'Cct','Sony','Thumpoly','Poonkav','11:10','yes'),(49,'Cct','Sony','Poonkav','Pathirapally','11:20','yes'),(50,'Cct','Sony','Pathirapally','Kalavoor','11:30','yes'),(51,'Cct','Sony','Kalavoor','Kanjikuzhi','11:40','yes'),(52,'Cct','Sony','Kanjikuzhi','Cherthala','11:50','yes'),(53,'Cct','Sony','Cherthala','Kanjikuzhi','12:10','yes'),(54,'Cct','Sony','Kanjikuzhi','Kalavoor','12:20','yes'),(55,'Cct','Sony','Kalavoor','Pathirapally','12:30','yes'),(56,'Cct','Sony','Pathirapally','Poonkav','12:40','yes'),(57,'Cct','Sony','Poonkav','Thumpoly','12:50','yes'),(58,'Cct','Sony','Thumpoly','Alappuzha','01:00','yes'),(59,'Daivam','Ebin','Alappuzha','Malikamukku','05:30','yes'),(60,'Daivam','Ebin','Alappuzha','Mangalam','05:40','yes'),(61,'Daivam','Ebin','Alappuzha','Omanappuzha','05:50','yes'),(62,'Daivam','Ebin','Alappuzha','Marari','06:00','yes'),(63,'Daivam','Ebin','Alappuzha','Arthunkal','06:10','yes'),(64,'Daivam','Ebin','Alappuzha','Cherthala','06:20','yes'),(65,'Daivam','Ebin','Malikamukku','Mangalam','05:40','yes'),(66,'Daivam','Ebin','Malikamukku','Omanappuzha','05:50','yes'),(67,'Daivam','Ebin','Malikamukku','Marari','06:00','yes'),(68,'Daivam','Ebin','Malikamukku','Arthunkal','06:10','yes'),(69,'Daivam','Ebin','Malikamukku','Cherthala','06:20','yes'),(70,'Daivam','Ebin','Mangalam','Omanappuzha','05:50','yes'),(71,'Daivam','Ebin','Mangalam','Marari','06:00','yes'),(72,'Daivam','Ebin','Mangalam','Arthunkal','06:10','yes'),(73,'Daivam','Ebin','Mangalam','Cherthala','06:20','yes'),(74,'Daivam','Ebin','Omanappuzha','Marari','06:00','yes'),(75,'Daivam','Ebin','Omanappuzha','Arthunkal','06:10','yes'),(76,'Daivam','Ebin','Omanappuzha','Cherthala','06:20','yes'),(77,'Daivam','Ebin','Marari','Arthunkal','06:10','yes'),(78,'Daivam','Ebin','Marari','Cherthala','06:20','yes'),(79,'Daivam','Ebin','Arthunkal','Cherthala','06:20','yes'),(102,'Daivam','Ebin','Cherthala','Arthunkal','06:30','yes'),(103,'Daivam','Ebin','Cherthala','Marari','06:40','yes'),(104,'Daivam','Ebin','Cherthala','Omanappuzha','06:50','yes'),(105,'Daivam','Ebin','Cherthala','Mangalam','07:00','yes'),(106,'Daivam','Ebin','Cherthala','Malikamukku','07:10','yes'),(107,'Daivam','Ebin','Cherthala','Alappuzha','07:20','yes'),(108,'Daivam','Ebin','Arthunkal','Marari','06:40','yes'),(109,'Daivam','Ebin','Arthunkal','Omanappuzha','06:50','yes'),(110,'Daivam','Ebin','Arthunkal','Mangalam','07:00','yes'),(111,'Daivam','Ebin','Arthunkal','Malikamukku','07:10','yes'),(112,'Daivam','Ebin','Arthunkal','Alappuzha','07:20','yes'),(113,'Daivam','Ebin','Marari','Omanappuzha','06:50','yes'),(114,'Daivam','Ebin','Marari','Mangalam','07:00','yes'),(115,'Daivam','Ebin','Marari','Malikamukku','07:10','yes'),(116,'Daivam','Ebin','Marari','Alappuzha','07:20','yes'),(117,'Daivam','Ebin','Omanappuzha','Mangalam','07:00','yes'),(118,'Daivam','Ebin','Omanappuzha','Malikamukku','07:10','yes'),(119,'Daivam','Ebin','Omanappuzha','Alappuzha','07:20','yes'),(120,'Daivam','Ebin','Mangalam','Malikamukku','07:10','yes'),(121,'Daivam','Ebin','Mangalam','Alappuzha','07:20','yes'),(122,'Daivam','Ebin','Malikamukku','Alappuzha','07:20','yes'),(123,'Eagle','Raju','Alappuzha','Shavakotta','05:00','yes'),(124,'Eagle','Raju','Shavakotta','Malikamukku','05:10','yes'),(125,'Eagle','Raju','Malikamukku','Mangalam','05:20','yes'),(126,'Eagle','Raju','Mangalam','Kattor','05:30','yes'),(127,'Eagle','Raju','Kattor','Chethi','05:40','yes'),(128,'Eagle','Raju','Chethi','Cherthala','05:50','yes'),(129,'Eagle','Raju','Cherthala','Chethi','06:00','yes'),(130,'Eagle','Raju','Chethi','Kattor','06:10','yes'),(131,'Eagle','Raju','Kattor','Mangalam','06:20','yes'),(132,'Eagle','Raju','Mangalam','Malikamukku','06:30','yes'),(133,'Eagle','Raju','Malikamukku','Shavakotta','06:40','yes'),(134,'Eagle','Raju','Shavakotta','Alappuzha','06:50','yes'),(135,'Eagle','Raju','Alappuzha','Alappuzha','00:00','yes');
/*!40000 ALTER TABLE `track` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-26 12:05:58
