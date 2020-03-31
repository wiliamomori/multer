const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {

  }
}

module.exports = User;