'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Child.belongsTo(models.Parent, {
        foreignKey: 'parent_id',
        as: 'parent',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Child.hasMany(models.Task, {
        foreignKey: 'child_id',
        as: 'tasks',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Child.init({
    name: DataTypes.STRING,
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
  }, {
    sequelize,
    modelName: 'Child',
    tableName: 'children'
  });
  return Child;
};