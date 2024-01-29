# E-Commerce_Back_End

## Description

A back-end e-commerce site to interact with a MySQL database.

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Clone this GitHub repo to their local computer.

Open the .env.EXAMPLE file.  Enter the correct database name (should already be listed), MySQL username, and MySQL password, then remove the ".EXAMPLE" from the file name.

Create the database in MySQL Workbench from the terminal:
- mysql -u root -p
- source ./db/schema.sql

Install all dependencies in VS Code
- npm install

Insert the seeds into the database using the terminal:
- npm run seed

## Usage

Video Tutorial: https://drive.google.com/file/d/1Te3fN8tm8GCMPOlaaUUAl8Z7GdqHGVhQ/view

User will use the Command Link to invoke the application (node server.js) and the server will be started and the Sequelize models are synced to the MySQL database.

When the user opens API GET routes in Insomnia for categories, products, or tags, the data for each of these routes is displayed in a formatted JSON.

When the user tests API POST, PUT, and DELETE routes in Insomnia, they are able to successfully create, update, and delete data in my database.

## Credits

Starter Code: https://git.bootcampcontent.com/UNC-Charlotte/UNCC-VIRT-FSF-FT-12-2023-U-LOLC 

Developer: Natalie Yaspo

## License

MIT

