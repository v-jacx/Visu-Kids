'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.BLOB,
        allowNull: false
      },
      duration: {
        type: Sequelize.STRING
      },
      childId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'child_id',
        onDelete: 'CASCADE',
        references: {
          model: 'children',
          key: 'id'
        }
      },
      parentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'parent_id',
        onDelete: 'CASCADE',
        references: {
          model: 'parents',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};