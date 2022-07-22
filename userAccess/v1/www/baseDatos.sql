-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 15-07-2022 a las 23:28:00
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
-- Base de datos: `useraccess`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `addUserToGroup` (IN `uIdUser` INT, IN `uIdGroup` INT)   INSERT INTO `group_member` (`id_user`, `id_group`) VALUES (uIdUser, uIdGroup)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `createGroup` (IN `uName` VARCHAR(45) CHARSET utf8mb4, IN `uDesc` VARCHAR(45) CHARSET utf8mb4)   INSERT INTO `groups` (`name`, `description`) VALUES (uName, uDesc)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `createUser` (IN `uName` VARCHAR(45) CHARSET utf8mb4, IN `uPassword` VARCHAR(18) CHARSET utf8mb4)   INSERT into `user` (`name`, `password`) VALUES (uName, uPassword)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteGroup` (IN `uId` INT)   DELETE FROM `groups` WHERE `id` = uId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteUser` (IN `uId` INT)   DELETE FROM  `user` WHERE `id` = uId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editGroup` (IN `uId` INT, IN `uName` VARCHAR(45) CHARSET utf8mb4, IN `uDesc` VARCHAR(45) CHARSET utf8mb4)   UPDATE `groups`
SET `name` = uName, `description` = uDesc
WHERE `id` = uId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editUser` (IN `uId` INT, IN `uName` VARCHAR(45) CHARSET utf8mb4, IN `uPassword` VARCHAR(18) CHARSET utf8mb4)   UPDATE `user`
SET `name` = uName, `password` = uPassword
WHERE `id` = uId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroups` ()   SELECT `name`, `description` FROM `groups`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getMembersFromGroup` (IN `uIdGroup` INT)   SELECT u.name FROM `user` u
INNER JOIN `group_member` gm
WHERE gm.id_group = uIdGroup AND gm.id_user = u.id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getUsers` ()   SELECT `name` FROM `user`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `removeUserFromGroup` (IN `uIdUser` INT, IN `uIdGroup` INT)   DELETE FROM `group_member`
WHERE `id_user` = uIdUser AND `id_group` = uIdGroup$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `action`
--

CREATE TABLE `action` (
  `id` int NOT NULL,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `groups`
--

CREATE TABLE `groups` (
  `id` int NOT NULL,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `groups`
--

INSERT INTO `groups` (`id`, `name`, `description`) VALUES
(1, 'Nobody', 'Grupo que no otorga permisos.'),
(2, 'Admin', 'Grupo que habilita todos los permisos.'),
(3, 'Visitor', 'Grupo con permisos muy restringidos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `group_accesses`
--

CREATE TABLE `group_accesses` (
  `id_group` int NOT NULL,
  `id_action` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `group_member`
--

CREATE TABLE `group_member` (
  `id_user` int NOT NULL,
  `id_group` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `group_member`
--

INSERT INTO `group_member` (`id_user`, `id_group`) VALUES
(7, 2),
(75, 2),
(99, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(18) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `password`) VALUES
(7, 'Pupi', 'password_7'),
(75, 'Puxu', 'password_75'),
(99, 'Pepe', 'churro_manolo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `group_accesses`
--
ALTER TABLE `group_accesses`
  ADD KEY `id_group` (`id_group`),
  ADD KEY `id_action` (`id_action`);

--
-- Indices de la tabla `group_member`
--
ALTER TABLE `group_member`
  ADD KEY `id_group` (`id_group`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `action`
--
ALTER TABLE `action`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `group_accesses`
--
ALTER TABLE `group_accesses`
  ADD CONSTRAINT `group_accesses_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `group_accesses_ibfk_2` FOREIGN KEY (`id_action`) REFERENCES `action` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Filtros para la tabla `group_member`
--
ALTER TABLE `group_member`
  ADD CONSTRAINT `group_member_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `group_member_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;