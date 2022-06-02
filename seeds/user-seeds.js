const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
	{
		email: "ianaack@gmail.com",
		password: "password123",
	},
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
