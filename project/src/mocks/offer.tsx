import { OfferType } from '../types/Offer';

export default function getMockOfferData () {
  const dataArray: OfferType[] = [
    {
      id: 1,
      city: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
      },
      photo: [ // max 6
        'img/apartment-02.jpg',
        'img/apartment-03.jpg',
        'img/apartment-01.jpg',
        'img/amsterdam.jpg',
        'img/apartment-small-03.jpg',
        'img/apartment-small-04.jpg',
      ],
      title: 'Big house in Stockholm',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      premium: true, //
      type: 'apartment', // apartment / room / house / hotel
      rating: 4.5, // float 0-5
      bedroomCount : '3 Bedrooms',
      maxGuests: 'Max 4 adults',
      price: 1234, // in euro
      options: [
        'утюг',
        'фен',
        'wi-fi'
      ],
      ownerInfo: {
        avatar: 'img/avatar-angelina.jpg',
        name: 'Thomas',
        pro: true
      },
    },

    {
      id: 2,
      city: 'Amsterdam',
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198
      },
      photo: [ // max 6
        'img/apartment-02.jpg',
        'img/apartment-03.jpg',
        'img/apartment-01.jpg',
        'img/amsterdam.jpg',
        'img/apartment-small-03.jpg',
        'img/apartment-small-04.jpg',
      ],
      title: 'Little room in hotel',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      premium: false, //
      type: 'hotel', // apartment / room / house / hotel
      rating: 2.2, // float 0-5
      bedroomCount : '1 Bedroom',
      maxGuests: 'Max 1 adult',
      price: 12, // in euro

      options: [
        'Коврик при входе',
      ],
      ownerInfo: {
        avatar: 'img/avatar-angelina.jpg',
        name: 'Rick',
        pro: false
      },
    },

    {
      id: 3,
      city: 'Kazan',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198
      },
      photo: [ // max 6
        'img/apartment-03.jpg',
        'img_path_1',
        'img_path_1',
        'img_path_1',
        'img_path_1',
        'img_path_1',
      ],
      title: 'Apartments in front of the ocean',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      premium: true, //
      type: 'apartment', // apartment / room / house / hotel
      rating: 4.9, // float 0-5
      bedroomCount : '2 Bedroom',
      maxGuests: 'Max 3 adult',
      price: 370, // in euro
      options: [
        'Коврик при входе',
        'Душ',
        'Раковина',
        'Посуда'
      ],
      ownerInfo: {
        avatar: 'image',
        name: 'Morty',
        pro: true
      },
    },

    {
      id: 4,
      city: 'Moscow',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198
      },
      photo: [ // max 6
        'img/apartment-small-03.jpg',
        'img_path_1',
        'img_path_1',
        'img_path_1',
        'img_path_1',
        'img_path_1',
      ],
      title: 'Moscow city tower',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      premium: true, //
      type: 'apartment', // apartment / room / house / hotel
      rating: 4.9, // float 0-5
      bedroomCount : '201 Bedroom',
      maxGuests: 'Max 3079 adult',
      price: 9999999999, // in euro
      options: [
        'Коврик при входе',
        'Душ',
        'Раковина',
        'Посуда',
        'Ресторан',
        'Парковка',
        'Собственный лифт',
      ],
      ownerInfo: {
        avatar: 'image',
        name: 'Agent 007',
        pro: true
      },
    },

    {
      id: 5,
      city: 'Moscow',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
      },
      photo: [ // max 6
        'img/apartment-small-04.jpg',
        'img_path_1',
        'img_path_1',
        'img_path_1',
        'img_path_1',
        'img_path_1',
      ],
      title: 'Catsburg room',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      premium: false, //
      type: 'room', // apartment / room / house / hotel
      rating: 0.4, // float 0-5
      bedroomCount : '0 Bedroom',
      maxGuests: 'Max 1 adult',
      price: 15, // in euro
      options: [
        'Коврик при входе',
        '12 кошек'
      ],
      ownerInfo: {
        avatar: 'image',
        name: 'Cate',
        pro: false
      },
    },

    {
      id: 6,
      city: 'Kazan',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
      },
      photo: [ // max 6
        'img/avatar-angelina.jpg',
        'img_path_1',
        'img_path_1',
        'img_path_1',
        'img_path_1',
        'img_path_1',
      ],
      title: 'Zoo hotel',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      premium: true, //
      type: 'hotel', // apartment / room / house / hotel
      rating: 0.4, // float 0-5
      bedroomCount : '2 Bedroom',
      maxGuests: 'Max 3 adult',
      price: 70, // in euro
      options: [
        'Коврик при входе',
        '10 кошек',
        '2 тигра',
        '1 носорог'
      ],
      ownerInfo: {
        avatar: 'image',
        name: 'Sam',
        pro: true
      },
    },
  ];

  return dataArray;
}
