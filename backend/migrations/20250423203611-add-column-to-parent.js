'use strict';

const { toDefaultValue } = require("sequelize/lib/utils");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'parents',
      'passcode',
      {
        type: Sequelize.DataTypes.INTEGER
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn( 'parents', 'passcode' );
  }
};
