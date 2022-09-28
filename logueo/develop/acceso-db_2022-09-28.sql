-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 28, 2022 at 01:59 AM
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
-- Database: `acceso`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `authencrypted` (IN `_username` VARCHAR(50), IN `_password` VARCHAR(16))   SELECT username FROM users_encrypt WHERE username = _username AND pass = MD5(_password)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `authnormal` (IN `_username` VARCHAR(50), IN `_password` VARCHAR(16))   SELECT username FROM users_normal 
WHERE username = _username AND pass = _password$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `users_encrypt`
--

CREATE TABLE `users_encrypt` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users_encrypt`
--

INSERT INTO `users_encrypt` (`id`, `username`, `pass`) VALUES
(1, 'example1', 'c1285a470f0fc8f14f54851c5d8eb32f');

-- --------------------------------------------------------

--
-- Table structure for table `users_normal`
--

CREATE TABLE `users_normal` (
  `id` int NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `pass` varchar(16) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users_normal`
--

INSERT INTO `users_normal` (`id`, `username`, `pass`) VALUES
(1, 'example1', 'example1'),
(2, 'example2', 'example2'),
(3, 'example3', 'example3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users_encrypt`
--
ALTER TABLE `users_encrypt`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `users_normal`
--
ALTER TABLE `users_normal`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
