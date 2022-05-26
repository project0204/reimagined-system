const express = require('express');
const router = require('express').Router();
const exphbs = require('express-handlebars');
const sequelize = require("./config/connection");
const path = require('path');
const routes = require('./routes')

const PORT = process.env.PORT || 3001;

const app = express();
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});