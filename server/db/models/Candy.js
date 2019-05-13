const Sequelize = require('sequelize');
const db = require('../database');

export const Candy = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false
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
