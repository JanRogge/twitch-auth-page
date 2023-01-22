require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize;
if (process.env.NODE_ENV === 'development') {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		logging: false,
	});
}
else {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		logging: false,
		dialectOptions: {
			ssl: {
				rejectUnauthorized: false,
			},
		},
	});
}

const TwitchAuth = require('./models/TwitchAuth')(sequelize, Sequelize.DataTypes);

module.exports = { TwitchAuth };