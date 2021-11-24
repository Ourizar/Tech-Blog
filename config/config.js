const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER_NAME,
    process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'Mysql',
        port: 3306
    }
); 

module.exports = sequelize;