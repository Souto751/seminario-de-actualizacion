-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 23, 2022 at 12:46 AM
-- Server version: 8.0.29
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `useraccess`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `addUserToGroup` (IN `uIdUser` INT, IN `uIdGroup` INT)   INSERT INTO `group_member` (`id_user`, `id_group`) VALUES (uIdUser, uIdGroup)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `createGroup` (IN `uName` VARCHAR(45) CHARSET utf8mb4, IN `uDesc` VARCHAR(45) CHARSET utf8mb4)   INSERT INTO `groups` (`name`, `description`) VALUES (uName, uDesc)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `createUser` (IN `uName` VARCHAR(45) CHARSET utf8mb4, IN `uPassword` VARCHAR(255) CHARSET utf8mb4)   INSERT into `user` (`name`, `password`) VALUES (uName, uPassword)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteGroup` (IN `uId` INT)   DELETE FROM `groups` WHERE `id` = uId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteUser` (IN `uId` INT)   DELETE FROM  `user` WHERE `id` = uId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editGroup` (IN `uId` INT, IN `uName` VARCHAR(45) CHARSET utf8mb4, IN `uDesc` VARCHAR(45) CHARSET utf8mb4)   UPDATE `groups`
SET `name` = uName, `description` = uDesc
WHERE `id` = uId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editUser` (IN `uId` INT, IN `uName` VARCHAR(45) CHARSET utf8mb4, IN `uPassword` VARCHAR(255) CHARSET utf8mb4)   UPDATE `user`
SET `name` = uName, `password` = uPassword
WHERE `id` = uId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroups` ()   SELECT `id`, `name`, `description` FROM `groups`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getMembersFromGroup` (IN `uIdGroup` INT)   SELECT u.name, u.id FROM `user` u
INNER JOIN `group_member` gm
WHERE gm.id_group = uIdGroup AND gm.id_user = u.id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getUsers` ()   SELECT `id`, `name`, `password` FROM `user`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `removeUserFromGroup` (IN `uIdUser` INT, IN `uIdGroup` INT)   DELETE FROM `group_member`
WHERE `id_user` = uIdUser AND `id_group` = uIdGroup$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int NOT NULL,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `description`) VALUES
(21, 'Grupo de prueba 22/09/22', 'testing'),
(23, 'Grupo de prueba', 'asdasd'),
(24, 'w', 'qweqweqw');

-- --------------------------------------------------------

--
-- Table structure for table `group_member`
--

CREATE TABLE `group_member` (
  `id_user` int NOT NULL,
  `id_group` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `group_member`
--

INSERT INTO `group_member` (`id_user`, `id_group`) VALUES
(111, 24);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`) VALUES
(109, 'BetaTester', '$2y$10$NH3M8belfR1cHtJJxBmahOBhy.9Pebt13kccrUIfSuzTxNhL738sy'),
(111, 'BetaTester2', '$2y$10$2oyXStbkr37yo04djffnve2HQ6Wh4hG/j9MKy3fOUwPWVvepUs7QG'),
(112, 'BetaTester0', '$2y$10$.8Cu5OmkZ8UkxEkStMICrO.kIJVzo1Sh.m3fJlI5eCLuhsi/L9sXy'),
(115, 'username', '$2y$10$sCaJCS939aw6qpOhykheS.uPi8YfNiuXcsZ65bqs6WRfxZYLKMphC'),
(117, 'q', '$2y$10$oGkZNmIJdm5AsS0GayAj0eXSLXT6vwqtGS0bht86SgHvSHp0rNTN.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `group_member`
--
ALTER TABLE `group_member`
  ADD UNIQUE KEY `id_user_2` (`id_user`,`id_group`),
  ADD KEY `id_group` (`id_group`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `group_member`
--
ALTER TABLE `group_member`
  ADD CONSTRAINT `group_member_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `group_member_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
