const { hashSync } = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Tamir',
        secondName: 'Zhamsaranov',
        sex: 'male',
        email: 'tamirlan1729@gmail.com',
        password: hashSync('1', 10),
        familyStatus: 'женат',
        image: 'https://cs11.pikabu.ru/post_img/big/2019/01/15/8/1547557628116653450.jpg',
        description: 'красавчег',
        dateOfBirth: '1990.08.19',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Andrey',
        secondName: 'Burlyaev',
        sex: 'male',
        email: 'andrey@gmail.com',
        password: hashSync('1', 10),
        familyStatus: 'холост',
        image: 'https://cs11.pikabu.ru/post_img/big/2019/01/15/8/1547557628116653450.jpg',
        description: 'super',
        dateOfBirth: '1978.08.15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Tseren',
        secondName: 'Bogaev',
        sex: 'male',
        email: 'tseren@gmail.com',
        password: hashSync('1', 10),
        familyStatus: 'холост',
        image: 'https://cs11.pikabu.ru/post_img/big/2019/01/15/8/1547557628116653450.jpg',
        description: 'super',
        dateOfBirth: '1985.03.13',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Evgenii',
        secondName: 'Pirozhenko',
        sex: 'male',
        email: 'evgen@gmail.com',
        password: hashSync('1', 10),
        familyStatus: 'женат',
        image: 'https://cs11.pikabu.ru/post_img/big/2019/01/15/8/1547557628116653450.jpg',
        description: 'super',
        dateOfBirth: '1985.02.28',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
    await queryInterface.bulkInsert('Albums', [
      {
        name: 'Baikal',
        img: 'https://www.advantour.com/img/russia/images/baikal.jpg',
        description: 'Super Puper',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'About myself',
        img: 'https://cs11.pikabu.ru/post_img/big/2019/01/15/8/1547557628116653450.jpg',
        description: 'красавчег',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    await queryInterface.bulkInsert(
      'Images',
      [
        {
          name: 'Baikal',
          img: 'https://mf.b37mrtl.ru/rbthmedia/images/2020.10/original/5f76ed9285600a0b94441c95.jpg',
          albumId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Baikal',
          img: 'https://mf.b37mrtl.ru/rbthmedia/images/2020.10/original/5f76ed9285600a0b94441c95.jpg',
          albumId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Baikal',
          img: 'https://mf.b37mrtl.ru/rbthmedia/images/2020.10/original/5f76ed9285600a0b94441c95.jpg',
          albumId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Baikal',
          img: 'https://mf.b37mrtl.ru/rbthmedia/images/2020.10/original/5f76ed9285600a0b94441c95.jpg',
          albumId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Baikal',
          img: 'https://mf.b37mrtl.ru/rbthmedia/images/2020.10/original/5f76ed9285600a0b94441c95.jpg',
          albumId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Baikal',
          img: 'https://mf.b37mrtl.ru/rbthmedia/images/2020.10/original/5f76ed9285600a0b94441c95.jpg',
          albumId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Baikal',
          img: 'https://mf.b37mrtl.ru/rbthmedia/images/2020.10/original/5f76ed9285600a0b94441c95.jpg',
          albumId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Baikal',
          img: 'https://mf.b37mrtl.ru/rbthmedia/images/2020.10/original/5f76ed9285600a0b94441c95.jpg',
          albumId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Baikal',
          img: 'https://mf.b37mrtl.ru/rbthmedia/images/2020.10/original/5f76ed9285600a0b94441c95.jpg',
          albumId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Baikal',
          img: 'https://mf.b37mrtl.ru/rbthmedia/images/2020.10/original/5f76ed9285600a0b94441c95.jpg',
          albumId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
