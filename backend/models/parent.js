'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Parent.hasMany(models.Child, {
        foreignKey: 'parent_id',
        as: 'children',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Parent.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      passcode: {
        type: DataTypes.STRING,
        validate: { is: /^\d{4}$/ }
      }
    },
    {
      sequelize,
      modelName: 'Parent',
      tableName: 'parents'
    }
  )
  return Parent
}