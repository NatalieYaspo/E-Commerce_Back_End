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

Open the .env.EXAMPLE file.  Enter the correct database name, MySQL username, and MySQL password, then remove the ".EXAMPLE" from the file name.

Connect to a database using Sequelize:
- mysql -u root -p
- source schema.sql

## Usage

Video Tutorial:

User will use the Command Link to invoke the application (node server.js) and the server will be started and the Sequelize models are synced to the MySQL database.

When the user opens API GET routes in Insomnia for categories, products, or tags, the data for each of these routes is displayed in a formatted JSON.

When the user tests API POST, PUT, and DELETE routes in Insomnia, they are able to successfully create, update, and delete data in my database.

## Credits

Developer: Natalie Yaspo

Collaborators:
- 

Tutorials:
- 

## License

MIT

