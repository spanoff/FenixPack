'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('crates', [
      {
        name: 'Серия CityLine',
        description: 'Передовые конструктивные решения и материалы.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Серия Монолит',
        description: 'Прочные и надежные. Спокойствие и защита.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Серия Z',
        description: 'Классика и модерн. Красиво и практично.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Серия X',
        description: 'Идеальный баланс. Надежная конструкция.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Двери входные',
        description: 'Прочные и красивые. Надежные и долговечные.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Арки межкомнатные',
        description: 'Красивое решение для объединения пространств.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('crates', null, {});
  }
}