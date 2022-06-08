# Reimagined Systems

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  Reimagined Systems is a full-stack inventory management application being used by "Foston Pizza". <br>
  Our application can be used by the manager to Create, Read, Update and Delete ingredient data for their restaurant.<br>
  This allows them to have a track and maintain their stock levels of ingredients.

  ## Contribution
  The team at Reimagined Systems consists of:<br><br>
  [Ian Ackerman](https://github.com/ianaack) <br>
  [Matthew Pryor](https://github.com/Pryority) <br>
  [Deiondrae Small](https://github.com/Deiondrae) <br>
  [Swapna Menon](https://github.com/SwapnaMenon) <br>
  [Royden Semedo](https://github.com/Rsmdo) <br>
  [Jasmine Virk](https://github.com/jvirk10)    

  ## Table of Contents
  [Description](Description) <br>
  [Contribution](Contribution) <br>
  [Deployment](Deployment) <br>
  [Usage](Usage) <br>
  [Tests](Tests) <br>
  [License](License) <br>
  
  ## Deployment
  The application is deployed at a [live URL](https://reimagined-system.herokuapp.com/).

  Here are some screenshots of the deployed application:

  Homepage:
<img width="1920" alt="homepage" src="https://user-images.githubusercontent.com/47282257/172509801-d6562062-d9c1-46cb-b784-401d94f0f5a7.png">

  Administrator Dashboard:
<img width="1920" alt="administrator_dashboard" src="https://user-images.githubusercontent.com/47282257/172509810-aee19173-2273-4c27-b382-ef44ff232f00.png">

  Editing an Ingredient:
<img width="1920" alt="edit_ingredient" src="https://user-images.githubusercontent.com/47282257/172509819-b6775b08-99e3-4951-ac4b-3b3293857afa.png">

  ## Usage
  To use the application simply create an account, and you will be taken to an administator dashboard. <br>
  From here you can Create, Read, Update, and Delete your list of ingredients. <br>
  Mock data has been implemented as a starting point for your inventory.

  ## Tests
  Tests for the backend functionality were performed using Insomnia.

  ### If you would like to test out the various routes you can follow these instructions:
  
  git clone the repository with either HTTP or SSH
  ```bash
  git clone
  ```
  install the necessary dependencies
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
