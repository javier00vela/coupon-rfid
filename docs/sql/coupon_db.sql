-- MySQL Script generated by MySQL Workbench
-- Sat Jul 10 16:02:53 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema coupon_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema coupon_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `coupon_db` DEFAULT CHARACTER SET utf8 ;
USE `coupon_db` ;

-- -----------------------------------------------------
-- Table `coupon_db`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coupon_db`.`rol` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `coupon_db`.`person`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coupon_db`.`person` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `type_document` VARCHAR(2) NOT NULL,
  `document` INT NOT NULL,
  `email` VARCHAR(85) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `rol_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `coupon_db`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coupon_db`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) NOT NULL,
  `password` LONGTEXT NOT NULL,
  `person_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `coupon_db`.`cupon_kit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coupon_db`.`cupon_kit` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `coupon_avalaible` LONGTEXT NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `state` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `coupon_db`.`store`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coupon_db`.`store` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(60) NOT NULL,
  `phone` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `coupon_db`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coupon_db`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `amount` INT NOT NULL,
  `image` LONGTEXT NULL,
  `state` TINYINT NOT NULL,
  `store` VARCHAR(45) NOT NULL,
  `store_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `coupon_db`.`coupon_person`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coupon_db`.`coupon_person` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cupon_id` INT NOT NULL,
  `person_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `amount` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `coupon_db`.`history_coupons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coupon_db`.`history_coupons` (
  `id` INT NOT NULL,
  `coupon_person_id` INT NOT NULL,
  `created_at` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
