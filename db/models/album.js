const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate(models) {
      this.hasMany(models.Image, { foreignKey: 'albumId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Album.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};
