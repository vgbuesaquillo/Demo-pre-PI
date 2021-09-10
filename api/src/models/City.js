const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('city', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    max: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  });
};
