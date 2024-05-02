const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Course",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      serialNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      nameCourse: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      division: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      period: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      state: {
        type: DataTypes.ENUM("activo", "archivado"),
      },
      year: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      paranoid: true, // Habilita eliminación suave
    }
  );
};
