'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('bookings',[{
        name: 'Fatima Ali Saidi',
        email: 'juancamilocb96@gmail.com',
        user_id: '627a3ae6d574e7006980bf20',
        services: '["GROUP OF 10","HOURLY","MIX HENNA","BRIDAL PACKAGE 1","ARMS"]',
        booking_date: '22-07-12 14:00:00',
        phone: '3014920301',
        adress: '["FLAT 05","82 CAMBRIDGE ROAD","LONDON","NW6 5FN"]',
        total: '80',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      name: 'Fatima Ali Saidi',
      email: 'juancamilocb96@gmail.com',
      user_id: '627a3ae6d574e7006980bf20',
      services: '["GROUP OF 10","HOURLY","MIX HENNA","BRIDAL PACKAGE 1","ARMS"]',
      booking_date: '22-07-12 14:00:00',
      phone: '3014920301',
      adress: '["FLAT 05","82 CAMBRIDGE ROAD","LONDON","NW6 5FN"]',
      total: '100',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
  }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('bookings', null, {});
  }
};
