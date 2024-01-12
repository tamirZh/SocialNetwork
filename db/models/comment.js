const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Image, { foreignKey: 'imageId' });
    }
  }
  Comment.init({
    text: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
