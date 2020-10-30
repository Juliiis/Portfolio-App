require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "recipeideas",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE IF EXISTS `favourites`; DROP TABLE IF EXISTS `categories`; DROP TABLE IF EXISTS `users`; CREATE TABLE `users` (   `id` int NOT NULL AUTO_INCREMENT,   `username` varchar(45) DEFAULT NULL,   `password` varchar(255) DEFAULT NULL,   PRIMARY KEY (`id`),   UNIQUE KEY `username_UNIQUE` (`username`) ); CREATE TABLE `categories` (   `id` int NOT NULL AUTO_INCREMENT,   `title` varchar(255) DEFAULT NULL,   `userId` int DEFAULT NULL,   PRIMARY KEY (`id`),   KEY `fk_categories_userId_idx` (`userId`),   CONSTRAINT `fk_categories_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ); CREATE TABLE `favourites` (   `id` int NOT NULL AUTO_INCREMENT,   `userId` int DEFAULT NULL,   `recipeId` int DEFAULT NULL,   `title` varchar(255) DEFAULT NULL,   `image` varchar(255) DEFAULT NULL,   `categoryId` int DEFAULT NULL,   PRIMARY KEY (`id`),   KEY `fk_users_id_idx` (`userId`),   CONSTRAINT `fk_users_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) );  ";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation was successful!");

    console.log("Closing...");
  });

  con.end();
});
