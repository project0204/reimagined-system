# Reimagined Systems

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  Reimagined Systems is a full-stack inventory management application being used by "Foston Pizza". 
  Our application can be used by the manager to Create, Read, Update and Delete ingredient data for their restaurant.
  This allows them to have a track and maintain their stock levels of ingredients.

  ## Contribution
  The team at Reimagined Systems consists of:
  * [Ian Ackerman](#https://github.com/ianaack)
  * [Matthew Pryor](#https://github.com/Pryority)
  * [Deiondrae Small](#https://github.com/Deiondrae)
  * [Swapna Menon](#https://github.com/SwapnaMenon)
  * [Royden Semedo](#https://github.com/Rsmdo)
  * [Jasmine Virk](#https://github.com/jvirk10)   

  ## Table of Contents
  * [Description](#Description)
  * [Contribution](#Contribution)
  * [Deployment](#Deployment)
  * [Usage](#Usage)
  * [Tests](#Tests)
  * [License](#License)
  
  ## Deployment
  The application is deployed at a [live URL](#https://reimagined-system.herokuapp.com/).

  Here are some screenshots of the deployed application:

  Homepage:

  Administrator Dashboard:

  Editing an Ingredient:

   
  ## Usage
  To use the application simply create an account, and you will be taken to an administator dashboard. 
  From here you can Create, Read, Update, and Delete your list of ingredients.
  Mock data has been implemented as a starting point for your inventory.

  ## Tests
  Tests for the backend functionality was performed using Insomnia.

  If you would like to test out the various routes you can follow these instructions:

  - git clone the repository with either HTTP or SSH
  ```bash
  git clone
  ```
  - install the necessary dependencies
  ```bash
  npm install
  ```
  - open a MySQL terminal and create a database called 
  ```bash
  foston_pizza_db
  ```
  - once the database is created seed the database with the mock data
  ```bash
  npm run seed
  ```
  - once the database is seeded with data, start the server
  ```bash
  node server
  ```
  - within insomnia make calls to access the different models and routes
  GET all ingredients.
  ```bash
  http://localhost:3001/api/ingredients
  ```
  GET all pizzas.
  ```bash
  http://localhost:3001/api/pizzas
  ```
  GET an individual ingredient
  ```bash
  http://localhost:3001/api/ingredients/2
  ```
  GET an individual pizza
  ```bash
  http://localhost:3001/api/pizzas/2
  ```
  From these routes you can POST, PUT, and DELETE data as well.

  ## License
  This project is covered under the MIT License.