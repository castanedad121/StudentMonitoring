const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Qualification",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      feedbackParticipacion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      feedbackTrabajos: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      feedbackAsistencias: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      feedbackCarpeta: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      noteParticipacion: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      noteTrabajos: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      noteAsistencias: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      noteCarpeta: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      promedio: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      unit: {
        type: DataTypes.ENUM(
          "I Unidad",
          "II Unidad",
          "III Unidad",
          "IV Unidad"
        ),
      },
    },
    {
      paranoid: true, // Habilita eliminación suave
    }
  );
};
