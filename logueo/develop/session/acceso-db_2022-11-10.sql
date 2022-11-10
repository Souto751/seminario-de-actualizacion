-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-11-2022 a las 01:23:16
-- Versión del servidor: 8.0.29
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `acceso`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `auth` (IN `_username` VARCHAR(50), IN `_password` VARCHAR(256))   SELECT a.id, a.username, b.token
FROM users as a
LEFT JOIN token as b
ON a.id = b.id_user
WHERE a.username = _username AND a.pass = _password$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `createtoken` (IN `_id_user` INT(255), IN `_token` VARCHAR(256))   INSERT INTO token VALUES (_id_user, _token, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP+ INTERVAL 5 DAY)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `register` (IN `_user` VARCHAR(64) CHARSET utf8mb3, IN `_pass` VARCHAR(256) CHARSET utf8mb3)   INSERT INTO users(`username`, `pass`) VALUES(_user, _pass)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updatetoken` (IN `_id_user` INT(255), IN `_token` VARCHAR(256))   UPDATE token
SET token = _token, created = CURRENT_TIMESTAMP, expires = CURRENT_TIMESTAMP + INTERVAL 5 DAY
WHERE id_user = id_user$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `validatetoken` (IN `_token` VARCHAR(256))   select token from token where CURRENT_TIMESTAMP < expires and token = _token$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `token`
--

CREATE TABLE `token` (
  `id_user` int NOT NULL,
  `token` varchar(256) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `created` date NOT NULL,
  `expires` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `token`
--

INSERT INTO `token` (`id_user`, `token`, `created`, `expires`) VALUES
(28, '68b80a63282e38aae95af553cf7f8dada06d627f9eed3b59976b79401207b287', '2022-11-09', '2022-11-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `pass`) VALUES
(1, 'agus', 'souto'),
(2, 'agustin', 'password'),
(8, 'agustin2', 'password'),
(10, 'agus75', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'),
(26, 'agus777', 'd74ff0ee8da3b9806b18c877dbf29bbde50b5bd8e4dad7a3a725000feb82e8f1'),
(28, 'panda', 'a7cdf5d0586b392473dd0cd08c9ba833240006a8a7310bf9bc8bf1aefdfaeadb');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `token`
--
ALTER TABLE `token`
  ADD UNIQUE KEY `token` (`token`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
