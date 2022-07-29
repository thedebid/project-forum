module.exports = (sequelize, DataTypes) => {
  const Topics = sequelize.define("Topics", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    topicText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Topics.associate = (models) => {
    Topics.hasMany(models.Posts, {
      onDelete: "cascade",
    });
  };
  return Topics;
};
