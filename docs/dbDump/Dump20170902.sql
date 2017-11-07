-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: phase1
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `communites`
--

DROP TABLE IF EXISTS `communites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `communites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `address` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `locality` varchar(128) NOT NULL,
  `city` varchar(128) NOT NULL,
  `state` varchar(128) NOT NULL,
  `country` varchar(128) NOT NULL,
  `pincode` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `communites`
--

LOCK TABLES `communites` WRITE;
/*!40000 ALTER TABLE `communites` DISABLE KEYS */;
INSERT INTO `communites` VALUES (1,'Mahesh','street no 4, Lanco hills',1,'Gachibowli','hyderabad','Telangana','India',500061),(2,'Meegada','street no 4, Lanco hills',1,'Khajaguda','Banglore','Telangana','India',500061),(3,'Brother','street no 4, Lanco hills',1,'Prasad Rao Nagar','hyderabad','Telangana','India',500061);
/*!40000 ALTER TABLE `communites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `community_id`
--

DROP TABLE IF EXISTS `community_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `community_id` (
  `subCommunitiesId` int(11) NOT NULL,
  `communitesId` int(11) NOT NULL,
  PRIMARY KEY (`subCommunitiesId`,`communitesId`),
  KEY `ind_5fc233c0cddc7deccd591f6c10d` (`subCommunitiesId`),
  KEY `ind_3957711e69aeca2ac1760a55338` (`communitesId`),
  CONSTRAINT `fk_42542ec5a49898aa90a2728fce0` FOREIGN KEY (`communitesId`) REFERENCES `communites` (`id`),
  CONSTRAINT `fk_45fa208ad99202ba58dd8dded7c` FOREIGN KEY (`subCommunitiesId`) REFERENCES `sub_communities` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `community_id`
--

LOCK TABLES `community_id` WRITE;
/*!40000 ALTER TABLE `community_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `community_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumable_product_categories`
--

DROP TABLE IF EXISTS `consumable_product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consumable_product_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumable_product_categories`
--

LOCK TABLES `consumable_product_categories` WRITE;
/*!40000 ALTER TABLE `consumable_product_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `consumable_product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumable_product_categories_id`
--

DROP TABLE IF EXISTS `consumable_product_categories_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consumable_product_categories_id` (
  `consumableProductSuppliersConsumableProductCategoriesId` double NOT NULL,
  `consumableProductCategoriesId` int(11) NOT NULL,
  PRIMARY KEY (`consumableProductSuppliersConsumableProductCategoriesId`,`consumableProductCategoriesId`),
  KEY `fk_5b04ea2c826328250ed6e106bb4` (`consumableProductCategoriesId`),
  CONSTRAINT `fk_5b04ea2c826328250ed6e106bb4` FOREIGN KEY (`consumableProductCategoriesId`) REFERENCES `consumable_product_categories` (`id`),
  CONSTRAINT `fk_a19a023148c287d344a6f828aab` FOREIGN KEY (`consumableProductSuppliersConsumableProductCategoriesId`) REFERENCES `consumable_product_suppliers` (`consumable_product_categories_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumable_product_categories_id`
--

LOCK TABLES `consumable_product_categories_id` WRITE;
/*!40000 ALTER TABLE `consumable_product_categories_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `consumable_product_categories_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumable_product_suppliers`
--

DROP TABLE IF EXISTS `consumable_product_suppliers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consumable_product_suppliers` (
  `consumable_product_categories_id` double NOT NULL,
  PRIMARY KEY (`consumable_product_categories_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumable_product_suppliers`
--

LOCK TABLES `consumable_product_suppliers` WRITE;
/*!40000 ALTER TABLE `consumable_product_suppliers` DISABLE KEYS */;
/*!40000 ALTER TABLE `consumable_product_suppliers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_order_sheets`
--

DROP TABLE IF EXISTS `daily_order_sheets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daily_order_sheets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_date` datetime NOT NULL,
  `quantity` double NOT NULL,
  `manufacture_id` int(11) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_47c560a63b0c865cc926ab291b4` (`manufacture_id`),
  KEY `fk_5a1d92e6db08df2e73736ad0d44` (`supplier_id`),
  CONSTRAINT `fk_47c560a63b0c865cc926ab291b4` FOREIGN KEY (`manufacture_id`) REFERENCES `manufacturers` (`id`),
  CONSTRAINT `fk_5a1d92e6db08df2e73736ad0d44` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_order_sheets`
--

LOCK TABLES `daily_order_sheets` WRITE;
/*!40000 ALTER TABLE `daily_order_sheets` DISABLE KEYS */;
/*!40000 ALTER TABLE `daily_order_sheets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_schedules`
--

DROP TABLE IF EXISTS `delivery_schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `delivery_schedules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sub_community_id` double NOT NULL,
  `quantity` double NOT NULL,
  `supplier_id` double NOT NULL,
  `delivery_date` datetime NOT NULL,
  `community_id` double NOT NULL,
  `user_dwelling_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_b32df9836f87e25b90fe9aa1c54` (`user_dwelling_id`),
  CONSTRAINT `fk_b32df9836f87e25b90fe9aa1c54` FOREIGN KEY (`user_dwelling_id`) REFERENCES `user_dwellings` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_schedules`
--

LOCK TABLES `delivery_schedules` WRITE;
/*!40000 ALTER TABLE `delivery_schedules` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery_schedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dwelling_id`
--

DROP TABLE IF EXISTS `dwelling_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dwelling_id` (
  `userDwellingsId` int(11) NOT NULL,
  `dwellingsId` int(11) NOT NULL,
  PRIMARY KEY (`userDwellingsId`,`dwellingsId`),
  KEY `ind_fbf8118fd92ee145e86c51a0caa` (`userDwellingsId`),
  KEY `ind_7b52c69e11f136d80f2db66c41a` (`dwellingsId`),
  CONSTRAINT `fk_2bf06ee4a81144bd887ccf4d561` FOREIGN KEY (`userDwellingsId`) REFERENCES `user_dwellings` (`id`),
  CONSTRAINT `fk_3bffd01a231350285c2b512481e` FOREIGN KEY (`dwellingsId`) REFERENCES `dwellings` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dwelling_id`
--

LOCK TABLES `dwelling_id` WRITE;
/*!40000 ALTER TABLE `dwelling_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `dwelling_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dwellings`
--

DROP TABLE IF EXISTS `dwellings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dwellings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `sub_community_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ac6d67f2bdfd574640f2e4f8ab8` (`sub_community_id`),
  CONSTRAINT `fk_ac6d67f2bdfd574640f2e4f8ab8` FOREIGN KEY (`sub_community_id`) REFERENCES `sub_communities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dwellings`
--

LOCK TABLES `dwellings` WRITE;
/*!40000 ALTER TABLE `dwellings` DISABLE KEYS */;
INSERT INTO `dwellings` VALUES (1,'c4567',1,NULL),(2,'c5567',1,NULL),(3,'c23567',1,NULL);
/*!40000 ALTER TABLE `dwellings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hold_requests`
--

DROP TABLE IF EXISTS `hold_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hold_requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `raised_on` datetime NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `user_dwelling_id` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_76181972316c6736c8b840c658b` (`supplier_id`),
  KEY `fk_f33b7afd9c6dbce72cd51adf521` (`user_dwelling_id`),
  KEY `fk_1e9ec64d0dce1a138945d6b77b5` (`users_id`),
  CONSTRAINT `fk_1e9ec64d0dce1a138945d6b77b5` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_76181972316c6736c8b840c658b` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`),
  CONSTRAINT `fk_f33b7afd9c6dbce72cd51adf521` FOREIGN KEY (`user_dwelling_id`) REFERENCES `user_dwellings` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hold_requests`
--

LOCK TABLES `hold_requests` WRITE;
/*!40000 ALTER TABLE `hold_requests` DISABLE KEYS */;
/*!40000 ALTER TABLE `hold_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturers`
--

DROP TABLE IF EXISTS `manufacturers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manufacturers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `comments` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturers`
--

LOCK TABLES `manufacturers` WRITE;
/*!40000 ALTER TABLE `manufacturers` DISABLE KEYS */;
/*!40000 ALTER TABLE `manufacturers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_attributes`
--

DROP TABLE IF EXISTS `product_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_attributes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `description` varchar(255) NOT NULL,
  `data_type` varchar(45) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_attributes`
--

LOCK TABLES `product_attributes` WRITE;
/*!40000 ALTER TABLE `product_attributes` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `consumable_product_categories` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_78331220c9151b01516461b5179` (`consumable_product_categories`),
  CONSTRAINT `fk_78331220c9151b01516461b5179` FOREIGN KEY (`consumable_product_categories`) REFERENCES `consumable_product_categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_categories`
--

LOCK TABLES `product_categories` WRITE;
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_sku_attributes`
--

DROP TABLE IF EXISTS `product_sku_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_sku_attributes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_sku_id` double NOT NULL,
  `attribute_value` varchar(45) NOT NULL,
  `product_attribute_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_04dcb43c3b4aa90cf81c52e3b93` (`product_attribute_id`),
  CONSTRAINT `fk_04dcb43c3b4aa90cf81c52e3b93` FOREIGN KEY (`product_attribute_id`) REFERENCES `product_attributes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_sku_attributes`
--

LOCK TABLES `product_sku_attributes` WRITE;
/*!40000 ALTER TABLE `product_sku_attributes` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_sku_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_sku_id`
--

DROP TABLE IF EXISTS `product_sku_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_sku_id` (
  `productSkuesId` int(11) NOT NULL,
  `regularConsumptionsId` int(11) NOT NULL,
  `specialRequestDetailsId` int(11) NOT NULL,
  `deliverySchedulesId` int(11) NOT NULL,
  PRIMARY KEY (`productSkuesId`,`regularConsumptionsId`,`specialRequestDetailsId`,`deliverySchedulesId`),
  KEY `ind_925b2f2be8da29a7e334fa6f09e` (`productSkuesId`),
  KEY `fk_464a4f4c013273a73301aa18c49` (`deliverySchedulesId`),
  KEY `ind_8578f40b1a7e4750ff0a3cee8e2` (`regularConsumptionsId`),
  KEY `ind_e374d3d1919641622fd507ff9a6` (`specialRequestDetailsId`),
  CONSTRAINT `fk_464a4f4c013273a73301aa18c49` FOREIGN KEY (`deliverySchedulesId`) REFERENCES `delivery_schedules` (`id`),
  CONSTRAINT `fk_5c2f113f9414d0cc7a609a05baa` FOREIGN KEY (`regularConsumptionsId`) REFERENCES `regular_consumptions` (`id`),
  CONSTRAINT `fk_e6328481d0e5f1320b0fa3c3690` FOREIGN KEY (`specialRequestDetailsId`) REFERENCES `special_request_details` (`id`),
  CONSTRAINT `fk_f7892de259c751d119c3fa57ed9` FOREIGN KEY (`productSkuesId`) REFERENCES `product_skues` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_sku_id`
--

LOCK TABLES `product_sku_id` WRITE;
/*!40000 ALTER TABLE `product_sku_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_sku_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_sku_prices`
--

DROP TABLE IF EXISTS `product_sku_prices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_sku_prices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_sku_id` double NOT NULL,
  `price` double NOT NULL,
  `effective` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_sku_prices`
--

LOCK TABLES `product_sku_prices` WRITE;
/*!40000 ALTER TABLE `product_sku_prices` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_sku_prices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_skues`
--

DROP TABLE IF EXISTS `product_skues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_skues` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` tinyint(1) NOT NULL,
  `name` varchar(128) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_573253e179fdc19d9f8b674ed9a` (`product_id`),
  CONSTRAINT `fk_573253e179fdc19d9f8b674ed9a` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_skues`
--

LOCK TABLES `product_skues` WRITE;
/*!40000 ALTER TABLE `product_skues` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_skues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_skues_id`
--

DROP TABLE IF EXISTS `product_skues_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_skues_id` (
  `dailyOrderSheetsId` int(11) NOT NULL,
  `productSkuesId` int(11) NOT NULL,
  PRIMARY KEY (`dailyOrderSheetsId`,`productSkuesId`),
  KEY `fk_c166fbe42f620f2b8ae31357331` (`productSkuesId`),
  CONSTRAINT `fk_1380ae5807744b45502ed76eb27` FOREIGN KEY (`dailyOrderSheetsId`) REFERENCES `daily_order_sheets` (`id`),
  CONSTRAINT `fk_c166fbe42f620f2b8ae31357331` FOREIGN KEY (`productSkuesId`) REFERENCES `product_skues` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_skues_id`
--

LOCK TABLES `product_skues_id` WRITE;
/*!40000 ALTER TABLE `product_skues_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_skues_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `description` varchar(255) NOT NULL,
  `product_category_id` double NOT NULL,
  `active` tinyint(1) NOT NULL,
  `supplier_id` double NOT NULL,
  `manufacturers_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_a37627bdf4cffd6ec06bf0641ce` (`manufacturers_id`),
  CONSTRAINT `fk_a37627bdf4cffd6ec06bf0641ce` FOREIGN KEY (`manufacturers_id`) REFERENCES `manufacturers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regular_consumptions`
--

DROP TABLE IF EXISTS `regular_consumptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `regular_consumptions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_dwelling_id` double NOT NULL,
  `quantity` double NOT NULL,
  `suppiler_id` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regular_consumptions`
--

LOCK TABLES `regular_consumptions` WRITE;
/*!40000 ALTER TABLE `regular_consumptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `regular_consumptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `special_Requests`
--

DROP TABLE IF EXISTS `special_Requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `special_Requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `raised_on` datetime NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `override` tinyint(1) NOT NULL,
  `user_dwelling_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_a1ea8b515f7d1598f30055a235b` (`user_dwelling_id`),
  CONSTRAINT `fk_a1ea8b515f7d1598f30055a235b` FOREIGN KEY (`user_dwelling_id`) REFERENCES `user_dwellings` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `special_Requests`
--

LOCK TABLES `special_Requests` WRITE;
/*!40000 ALTER TABLE `special_Requests` DISABLE KEYS */;
/*!40000 ALTER TABLE `special_Requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `special_request_details`
--

DROP TABLE IF EXISTS `special_request_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `special_request_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` double NOT NULL,
  `special_request_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_aec01f636d00b795e82d4b88dc4` (`special_request_id`),
  CONSTRAINT `fk_aec01f636d00b795e82d4b88dc4` FOREIGN KEY (`special_request_id`) REFERENCES `special_Requests` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `special_request_details`
--

LOCK TABLES `special_request_details` WRITE;
/*!40000 ALTER TABLE `special_request_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `special_request_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_communities`
--

DROP TABLE IF EXISTS `sub_communities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sub_communities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_communities`
--

LOCK TABLES `sub_communities` WRITE;
/*!40000 ALTER TABLE `sub_communities` DISABLE KEYS */;
INSERT INTO `sub_communities` VALUES (1,'Ramki-tower1',1),(2,'Ramki-tower2',1);
/*!40000 ALTER TABLE `sub_communities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier_id`
--

DROP TABLE IF EXISTS `supplier_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `supplier_id` (
  `suppliersId` int(11) NOT NULL,
  `specialRequestsId` int(11) NOT NULL,
  `supplierUserDwellingMappersSupplierId` double NOT NULL,
  PRIMARY KEY (`suppliersId`,`specialRequestsId`,`supplierUserDwellingMappersSupplierId`),
  KEY `ind_767ee48daf8a3663b04ccaa4893` (`suppliersId`),
  KEY `fk_bc3f6f840895a12fb9711c04000` (`supplierUserDwellingMappersSupplierId`),
  KEY `ind_b7a90001803a28531d5313781f9` (`specialRequestsId`),
  CONSTRAINT `fk_156651650992be3136ee8541a52` FOREIGN KEY (`specialRequestsId`) REFERENCES `special_Requests` (`id`),
  CONSTRAINT `fk_bc3f6f840895a12fb9711c04000` FOREIGN KEY (`supplierUserDwellingMappersSupplierId`) REFERENCES `supplier_user_dwelling_mappers` (`supplier_id`),
  CONSTRAINT `fk_c0e5d8e9cf8f00cf31d65857e91` FOREIGN KEY (`suppliersId`) REFERENCES `suppliers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier_id`
--

LOCK TABLES `supplier_id` WRITE;
/*!40000 ALTER TABLE `supplier_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `supplier_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier_user_dwelling_mappers`
--

DROP TABLE IF EXISTS `supplier_user_dwelling_mappers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `supplier_user_dwelling_mappers` (
  `supplier_id` double NOT NULL,
  PRIMARY KEY (`supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier_user_dwelling_mappers`
--

LOCK TABLES `supplier_user_dwelling_mappers` WRITE;
/*!40000 ALTER TABLE `supplier_user_dwelling_mappers` DISABLE KEYS */;
/*!40000 ALTER TABLE `supplier_user_dwelling_mappers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suppliers`
--

DROP TABLE IF EXISTS `suppliers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `suppliers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `comments` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suppliers`
--

LOCK TABLES `suppliers` WRITE;
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suppliers_id`
--

DROP TABLE IF EXISTS `suppliers_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `suppliers_id` (
  `consumableProductSuppliersConsumableProductCategoriesId` double NOT NULL,
  `suppliersId` int(11) NOT NULL,
  PRIMARY KEY (`consumableProductSuppliersConsumableProductCategoriesId`,`suppliersId`),
  KEY `fk_58e4406595074a64d6ff1995128` (`suppliersId`),
  CONSTRAINT `fk_58e4406595074a64d6ff1995128` FOREIGN KEY (`suppliersId`) REFERENCES `suppliers` (`id`),
  CONSTRAINT `fk_78b6aedd6b5f281470c507c2749` FOREIGN KEY (`consumableProductSuppliersConsumableProductCategoriesId`) REFERENCES `consumable_product_suppliers` (`consumable_product_categories_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suppliers_id`
--

LOCK TABLES `suppliers_id` WRITE;
/*!40000 ALTER TABLE `suppliers_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `suppliers_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_billings`
--

DROP TABLE IF EXISTS `user_billings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_billings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `billing_date` datetime NOT NULL,
  `day_price` double NOT NULL,
  `hold_requests_id` int(11) DEFAULT NULL,
  `special_requests_id` int(11) DEFAULT NULL,
  `suppliers_id` int(11) DEFAULT NULL,
  `total_price` int(11) DEFAULT NULL,
  `user_dwellings_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_33d32b094aa2f892b39441a6022` (`hold_requests_id`),
  KEY `fk_2088e5bb01e6532c7b016cc6a00` (`special_requests_id`),
  KEY `fk_5862eea2e43a00068717484eae9` (`suppliers_id`),
  KEY `fk_5dfc3a7ecc2ae5852ab55c76be5` (`total_price`),
  KEY `fk_d8b5ebee1c3628d22aa8412ca73` (`user_dwellings_id`),
  CONSTRAINT `fk_2088e5bb01e6532c7b016cc6a00` FOREIGN KEY (`special_requests_id`) REFERENCES `special_Requests` (`id`),
  CONSTRAINT `fk_33d32b094aa2f892b39441a6022` FOREIGN KEY (`hold_requests_id`) REFERENCES `hold_requests` (`id`),
  CONSTRAINT `fk_5862eea2e43a00068717484eae9` FOREIGN KEY (`suppliers_id`) REFERENCES `suppliers` (`id`),
  CONSTRAINT `fk_5dfc3a7ecc2ae5852ab55c76be5` FOREIGN KEY (`total_price`) REFERENCES `suppliers` (`id`),
  CONSTRAINT `fk_d8b5ebee1c3628d22aa8412ca73` FOREIGN KEY (`user_dwellings_id`) REFERENCES `user_dwellings` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_billings`
--

LOCK TABLES `user_billings` WRITE;
/*!40000 ALTER TABLE `user_billings` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_billings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_dwelling_id`
--

DROP TABLE IF EXISTS `user_dwelling_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_dwelling_id` (
  `supplierUserDwellingMappersSupplierId` double NOT NULL,
  `userDwellingsId` int(11) NOT NULL,
  PRIMARY KEY (`supplierUserDwellingMappersSupplierId`,`userDwellingsId`),
  KEY `fk_d73e8629d54f667a4de7ffba5c0` (`userDwellingsId`),
  CONSTRAINT `fk_30e820fdf8f216359b0a3f36a63` FOREIGN KEY (`supplierUserDwellingMappersSupplierId`) REFERENCES `supplier_user_dwelling_mappers` (`supplier_id`),
  CONSTRAINT `fk_d73e8629d54f667a4de7ffba5c0` FOREIGN KEY (`userDwellingsId`) REFERENCES `user_dwellings` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_dwelling_id`
--

LOCK TABLES `user_dwelling_id` WRITE;
/*!40000 ALTER TABLE `user_dwelling_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_dwelling_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_dwellings`
--

DROP TABLE IF EXISTS `user_dwellings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_dwellings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `effective` tinyint(1) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_a8fa2e027f7923efcb2cbe1b787` (`user_id`),
  CONSTRAINT `fk_a8fa2e027f7923efcb2cbe1b787` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_dwellings`
--

LOCK TABLES `user_dwellings` WRITE;
/*!40000 ALTER TABLE `user_dwellings` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_dwellings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `salt` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'sanjeevini','sanju@gmail.com','9876567890','yududubs','kfakff'),(2,'MaheshMee','mee@gmail.com','9876527890','yududubs','kfakff');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-02 16:58:46
