const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      notNull: true
    }
  },
  description: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      notNull: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://celiac.org/main/wp-content/uploads/2015/12/candy-lists.jpg'
  }
});
