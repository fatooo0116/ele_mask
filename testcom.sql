-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 27, 2022 at 02:06 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testcom`
--

-- --------------------------------------------------------

--
-- Table structure for table `wp_mask_setting`
--

CREATE TABLE `wp_mask_setting` (
  `id` int(50) NOT NULL,
  `json` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wp_mask_setting`
--

INSERT INTO `wp_mask_setting` (`id`, `json`) VALUES
(1, '[{\"k\": \"#elementor-panel-page-menu-content .elementor-panel-menu-group:nth-child(1)\", \"name\": \"設定\", \"show\": \"1\"}, {\"k\": \"#elementor-panel-page-menu-content .elementor-panel-menu-group:nth-child(2)\", \"name\": \"NAVIGATE FROM PAGE\", \"show\": \"1\"}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wp_mask_setting`
--
ALTER TABLE `wp_mask_setting`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wp_mask_setting`
--
ALTER TABLE `wp_mask_setting`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
