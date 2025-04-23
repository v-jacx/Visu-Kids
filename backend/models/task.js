'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.Parent, {
        foreignKey: 'parent_id',
        as: 'parent',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Task.belongsTo(models.Child, {
        foreignKey: 'child_id',
        as: 'tasks',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Task.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.BLOB('long'),
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING
      },
      childId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'child_id',
        onDelete: 'CASCADE',
        references: {
          model: 'children',
          key: 'id'
        }
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'parent_id',
        onDelete: 'CASCADE',
        references: {
          model: 'parents',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks'
    }
  )
  return Task
}
