const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      this.belongsTo(models.Album, { foreignKey: 'albumId' });
      this.hasMany(models.Like, { foreignKey: 'imageId' });
      this.hasMany(models.Comment, { foreignKey: 'imageId' });
    }
  }
  Image.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
