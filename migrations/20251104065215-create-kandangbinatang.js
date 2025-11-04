'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kandangbinatangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_hewan: {
        type: Sequelize.STRING
      },
      nama_petugasg: {
        type: Sequelize.STRING
      },
      usia_hewan: {
        type: Sequelize.INTEGER
      },
      jenis_hewan: {
        type: Sequelize.STRING
      },
      tahun_lahir: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kandangbinatangs');
  }
};