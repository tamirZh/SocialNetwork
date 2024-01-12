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
        image: 'https://cs11.pikabu.ru/post_img/big/2019/01/15/8/1547557628116653450.jpg',
        description: 'super',
        dateOfBirth: '1960.03.13',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Tseren',
        secondName: 'Bogaev',
        sex: 'male',
        email: 'tseren@gmail.com',
        password: hashSync('1', 10),
        image: 'https://cs11.pikabu.ru/post_img/big/2019/01/15/8/1547557628116653450.jpg',
        description: 'super',
        dateOfBirth: '1980.03.13',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Evgenii',
        secondName: 'Pirozhenko',
        sex: 'male',
        email: 'evgen@gmail.com',
        password: hashSync('1', 10),
        image: 'https://cs11.pikabu.ru/post_img/big/2019/01/15/8/1547557628116653450.jpg',
        description: 'super',
        dateOfBirth: '1985.03.13',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
    await queryInterface.bulkInsert(
      'Images',
      [
        {
          name: 'Owl Pacino',
          img: 'https://i.natgeofe.com/n/d5863c64-a28c-4e30-9ee8-ecc4175e8439/NationalGeographic_2745282_square.jpg',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Owlbert Einstein',
          img: 'https://thumbs.dreamstime.com/b/barn-owl-church-owl-square-image-11534315.jpg',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dr. Whoo',
          img: 'https://images.fineartamerica.com/images-medium-large-5/snowy-owl-square-les-palenik.jpg',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hoo-Dini',
          img: 'https://i.natgeofe.com/k/50fe4ce2-3d74-4da8-984d-887b7fb75005/GreatHornedOwl1_square.jpg',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Owlivia Wild',
          img: 'https://vinsweb.org/wp-content/uploads/bb-plugin/cache/FT-Owls-square.jpg',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Owl Capone',
          img: 'https://static01.nyt.com/images/2022/01/28/science/28tb-owls-promo/28tb-owls-promo-mediumSquareAt3X.jpg',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Muhammad Owli',
          img: 'https://i.natgeofe.com/n/50be0610-cb76-4601-877b-f5b340caffb7/05owls_square.jpg',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Whoolio',
          img: 'https://www.bushheritage.org.au/getmedia/061a431d-acc9-4a4f-99bf-313c18964c0a/barking-owl-square?width=608&height=608&ext=.jpg',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Owlfred Hitchcock',
          img: 'https://cdn.prod.www.spiegel.de/images/089a194a-0001-0004-0000-000000165278_w1200_r1_fpx67.84_fpy49.98.jpg',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Simon C'Owl",
          img: 'https://d2f1dfnoetc03v.cloudfront.net/Images/siteNHI/2022/09/Staff/greathornedowl.jpeg',
          userId: 1,
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
