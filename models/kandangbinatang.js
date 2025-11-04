'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kandangbinatang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kandangbinatang.init({
    nama_hewan: DataTypes.STRING,
    nama_petugasg: DataTypes.STRING,
    usia_hewan: DataTypes.INTEGER,
    jenis_hewan: DataTypes.STRING,
    tahun_lahir: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kandangbinatang',
  });
  return kandangbinatang;
};