const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // this.hasMany(models.Friend, { foreignKey: 'userId' });
      this.hasMany(models.Image, { foreignKey: 'userId' });
      this.hasMany(models.Like, { foreignKey: 'userId' });
      this.hasMany(models.Comment, { foreignKey: 'userId' });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    secondName: DataTypes.STRING,
    sex: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
