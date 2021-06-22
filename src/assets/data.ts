export interface Card {
  city: string;
  coord: {
    lat: number;
    lng: number;
  };
  displayBack: boolean;
  images: {
    back: string;
    front: string;
  };
  insta: string | null;
}

export interface Country {
  capital: string;
  cards: Card[];
  code: string;
  name: string;
  path: string;
  population: string;
}

export const data: Country[] = [
  {
    // Algeria
    name: 'Algeria',
    code: 'dz',
    capital: 'Algiers',
    population: '40,400,000',
    path: '/algeria',
    cards: [
      {
        city: 'Algier',
        coord: {lat: 36.74, lng: 3.094},
        insta: null,
        displayBack: true,
        images: {
          front: 'algeria_front002.jpg',
          back: 'algeria_back002.jpg'
        }
      },
      {
        city: 'Annaba',
        coord: {lat: 36.926, lng: 7.753},
        insta: 'https://www.instagram.com/p/BL7_yaPhlrZ/',
        displayBack: true,
        images: {
          front: 'algeria_front001.jpg',
          back: 'algeria_back001.jpg'
        }
      }
    ]
  },

  {
    // Australia
    name: 'Australia',
    code: 'au',
    capital: 'Canberra',
    population: '24,646,700',
    path: '/australia',
    cards: [
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front034.jpg',
          back: 'australia_back034.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front033.jpg',
          back: 'australia_back033.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front032.jpg',
          back: 'australia_back032.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front031.jpg',
          back: 'australia_back031.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: false,
        images: {
          front: 'australia_front030.jpg',
          back: 'australia_back030.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: false,
        images: {
          front: 'australia_front029.jpg',
          back: 'australia_back029.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front028.jpg',
          back: 'australia_back028.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: false,
        images: {
          front: 'australia_front027.jpg',
          back: 'australia_back027.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: false,
        images: {
          front: 'australia_front026.jpg',
          back: 'australia_back026.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: false,
        images: {
          front: 'australia_front025.jpg',
          back: 'australia_back025.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: false,
        images: {
          front: 'australia_front024.jpg',
          back: 'australia_back024.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: false,
        images: {
          front: 'australia_front023.jpg',
          back: 'australia_back023.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front022.jpg',
          back: 'australia_back022.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: false,
        images: {
          front: 'australia_front021.jpg',
          back: 'australia_back021.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front020.jpg',
          back: 'australia_back020.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: false,
        images: {
          front: 'australia_front019.jpg',
          back: 'australia_back019.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front018.jpg',
          back: 'australia_back018.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front017.jpg',
          back: 'australia_back017.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front016.jpg',
          back: 'australia_back016.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front015.jpg',
          back: 'australia_back015.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front014.jpg',
          back: 'australia_back014.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: false,
        images: {
          front: 'australia_front013.jpg',
          back: 'australia_back013.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front012.jpg',
          back: 'australia_back012.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: false,
        images: {
          front: 'australia_front011.jpg',
          back: 'australia_back011.jpg'
        }
      },
      {
        city: 'Forbes',
        coord: {lat: -33.38, lng: 148.007},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front010.jpg',
          back: 'australia_back010.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: false,
        images: {
          front: 'australia_front009.jpg',
          back: 'australia_back009.jpg'
        }
      },
      {
        city: 'Hobart',
        coord: {lat: -42.882, lng: 147.327},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front008.jpg',
          back: 'australia_back008.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front007.jpg',
          back: 'australia_back007.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front006.jpg',
          back: 'australia_back006.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front005.jpg',
          back: 'australia_back005.jpg'
        }
      },
      {
        city: 'Melbourne',
        coord: {lat: -37.814, lng: 144.963},
        insta: 'https://www.instagram.com/p/BX3yqTEjMPn/',
        displayBack: true,
        images: {
          front: 'australia_front004.jpg',
          back: 'australia_back004.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front003.jpg',
          back: 'australia_back003.jpg'
        }
      },
      {
        city: 'Pakenham',
        coord: {lat: -38.074, lng: 145.485},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front002.jpg',
          back: 'australia_back002.jpg'
        }
      },
      {
        city: 'Shellharbour',
        coord: {lat: -34.583, lng: 150.867},
        insta: null,
        displayBack: true,
        images: {
          front: 'australia_front001.jpg',
          back: 'australia_back001.jpg'
        }
      }
    ]
  },

  {
    // Belarus
    name: 'Belarus',
    code: 'by',
    capital: 'Minsk',
    population: '9,498,700',
    path: '/belarus',
    cards: [
      {
        city: 'Masty',
        coord: {lat: 53.407, lng: 24.536},
        insta: null,
        displayBack: true,
        images: {
          front: 'belarus_front008.jpg',
          back: 'belarus_back008.jpg'
        }
      },
      {
        city: 'Asipovichy',
        coord: {lat: 53.305, lng: 28.636},
        insta: null,
        displayBack: true,
        images: {
          front: 'belarus_front007.jpg',
          back: 'belarus_back007.jpg'
        }
      },
      {
        city: 'Minsk',
        coord: {lat: 53.905, lng: 27.562},
        insta: null,
        displayBack: true,
        images: {
          front: 'belarus_front006.jpg',
          back: 'belarus_back006.jpg'
        }
      },
      {
        city: 'Gomel',
        coord: {lat: 52.441, lng: 30.988},
        insta: null,
        displayBack: true,
        images: {
          front: 'belarus_front005.jpg',
          back: 'belarus_back005.jpg'
        }
      },
      {
        city: 'Čonki',
        coord: {lat: 52.352, lng: 30.976},
        insta: null,
        displayBack: true,
        images: {
          front: 'belarus_front004.jpg',
          back: 'belarus_back004.jpg'
        }
      },
      {
        city: 'Gomel',
        coord: {lat: 52.441, lng: 30.988},
        insta: null,
        displayBack: true,
        images: {
          front: 'belarus_front003.jpg',
          back: 'belarus_back003.jpg'
        }
      },
      {
        city: 'Minsk',
        coord: {lat: 53.905, lng: 27.562},
        insta: null,
        displayBack: true,
        images: {
          front: 'belarus_front002.jpg',
          back: 'belarus_back002.jpg'
        }
      },
      {
        city: 'Babruysk',
        coord: {lat: 53.145, lng: 29.221},
        insta: null,
        displayBack: true,
        images: {
          front: 'belarus_front001.jpg',
          back: 'belarus_back001.jpg'
        }
      }
    ]
  },

  {
    // Belgium
    name: 'Belgium',
    code: 'be',
    capital: 'Brussels',
    population: '11,492,641',
    path: '/belgium',
    cards: [
      {
        city: 'Veldegem',
        coord: {lat: 51.104, lng: 3.16},
        insta: null,
        displayBack: true,
        images: {
          front: 'belgium_front001.jpg',
          back: 'belgium_back001.jpg'
        }
      }
    ]
  },

  {
    // Brazil
    name: 'Brazil',
    code: 'br',
    capital: 'Brasília',
    population: '207,350,000',
    path: '/brazil',
    cards: [
      {
        city: 'Salvador',
        coord: {lat: -12.973, lng: -38.502},
        insta: null,
        displayBack: true,
        images: {
          front: 'brazil_front001.jpg',
          back: 'brazil_back001.jpg'
        }
      }
    ]
  },

  {
    // Canada
    name: 'Canada',
    code: 'ca',
    capital: 'Ottawa',
    population: '35,151,728',
    path: '/canada',
    cards: [
      {
        city: 'Montreal, QC',
        coord: {lat: 45.502, lng: -73.567},
        insta: null,
        displayBack: true,
        images: {
          front: 'canada_front007.jpg',
          back: 'canada_back007.jpg'
        }
      },
      {
        city: 'Ottawa, ON',
        coord: {lat: 45.422, lng: -75.697},
        insta: null,
        displayBack: false,
        images: {
          front: 'canada_front006.jpg',
          back: 'canada_back006.jpg'
        }
      },
      {
        city: 'Belleville, ON',
        coord: {lat: 44.163, lng: -77.383},
        insta: null,
        displayBack: true,
        images: {
          front: 'canada_front005.jpg',
          back: 'canada_back005.jpg'
        }
      },
      {
        city: 'Belleville, ON',
        coord: {lat: 44.163, lng: -77.383},
        insta: null,
        displayBack: true,
        images: {
          front: 'canada_front004.jpg',
          back: 'canada_back004.jpg'
        }
      },
      {
        city: 'Belleville, ON',
        coord: {lat: 44.163, lng: -77.383},
        insta: null,
        displayBack: true,
        images: {
          front: 'canada_front003.jpg',
          back: 'canada_back003.jpg'
        }
      },
      {
        city: 'Saint-Laurent, QC',
        coord: {lat: 45.499, lng: -73.75},
        insta: null,
        displayBack: true,
        images: {
          front: 'canada_front002.jpg',
          back: 'canada_back002.jpg'
        }
      },
      {
        city: 'Grand Falls, NB',
        coord: {lat: 47.048, lng: -67.74},
        insta: 'https://www.instagram.com/p/BL7dRUBhxej/',
        displayBack: true,
        images: {
          front: 'canada_front001.jpg',
          back: 'canada_back001.jpg'
        }
      }
    ]
  },

  {
    // China
    name: 'China',
    code: 'cn',
    capital: 'Beijing',
    population: '1,373,541,278',
    path: '/china',
    cards: [
      {
        city: 'Shanghai',
        coord: {lat: 31.23, lng: 121.474},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front015.jpg',
          back: 'china_back015.jpg'
        }
      },
      {
        city: 'Changping',
        coord: {lat: 40.221, lng: 116.231},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front014.jpg',
          back: 'china_back014.jpg'
        }
      },
      {
        city: 'Beijing',
        coord: {lat: 39.904, lng: 116.407},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front013.jpg',
          back: 'china_back013.jpg'
        }
      },
      {
        city: 'Shanghai',
        coord: {lat: 31.23, lng: 121.474},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front012.jpg',
          back: 'china_back012.jpg'
        }
      },
      {
        city: 'Shijiazhuang',
        coord: {lat: 38.042, lng: 114.515},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front011.jpg',
          back: 'china_back011.jpg'
        }
      },
      {
        city: 'Guangzhou',
        coord: {lat: 23.129, lng: 113.264},
        insta: 'https://www.instagram.com/p/BVD43xmj7cx/',
        displayBack: true,
        images: {
          front: 'china_front010.jpg',
          back: 'china_back010.jpg'
        }
      },
      {
        city: 'Wuhan',
        coord: {lat: 30.593, lng: 114.305},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front009.jpg',
          back: 'china_back009.jpg'
        }
      },
      {
        city: 'Nanjing',
        coord: {lat: 32.06, lng: 118.797},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front008.jpg',
          back: 'china_back008.jpg'
        }
      },
      {
        city: 'Shijiazhuang',
        coord: {lat: 38.042, lng: 114.515},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front007.jpg',
          back: 'china_back007.jpg'
        }
      },
      {
        city: 'Shanghai',
        coord: {lat: 31.23, lng: 121.474},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front006.jpg',
          back: 'china_back006.jpg'
        }
      },
      {
        city: 'Wuhan',
        coord: {lat: 30.593, lng: 114.305},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front005.jpg',
          back: 'china_back005.jpg'
        }
      },
      {
        city: 'Beijing',
        coord: {lat: 39.904, lng: 116.407},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front004.jpg',
          back: 'china_back004.jpg'
        }
      },
      {
        city: 'Beijing',
        coord: {lat: 39.904, lng: 116.407},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front003.jpg',
          back: 'china_back003.jpg'
        }
      },
      {
        city: 'Beijing',
        coord: {lat: 39.904, lng: 116.407},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front002.jpg',
          back: 'china_back002.jpg'
        }
      },
      {
        city: 'Yuzhong',
        coord: {lat: 29.563, lng: 106.552},
        insta: null,
        displayBack: true,
        images: {
          front: 'china_front001.jpg',
          back: 'china_back001.jpg'
        }
      }
    ]
  },

  {
    // Costa Rica
    name: 'Costa Rica',
    code: 'cr',
    capital: 'San José',
    population: '4,857,000',
    path: '/costarica',
    cards: [
      {
        city: 'San José',
        coord: {lat: 9.928, lng: -84.099},
        insta: null,
        displayBack: false,
        images: {
          front: 'costarica_front001.jpg',
          back: 'costarica_back001.jpg'
        }
      }
    ]
  },

  {
    // Croatia
    name: 'Croatia',
    code: 'hr',
    capital: 'Zagreb',
    population: '4,190,700',
    path: '/croatia',
    cards: [
      {
        city: 'Rovinj',
        coord: {lat: 45.081, lng: 13.639},
        insta: 'https://www.instagram.com/p/BL-SFeEhrSj/',
        displayBack: true,
        images: {
          front: 'croatia_front001.jpg',
          back: 'croatia_back001.jpg'
        }
      },
      {
        city: 'Zagreb',
        coord: {lat: 45.815, lng: 15.982},
        insta: 'https://www.instagram.com/p/BL-SFeEhrSj/',
        displayBack: true,
        images: {
          front: 'croatia_front002.jpg',
          back: 'croatia_back002.jpg'
        }
      }
    ]
  },

  {
    // Czech Republic
    name: 'Czech Republic',
    code: 'cz',
    capital: 'Prague',
    population: '10,553,948',
    path: '/czechrepublic',
    cards: [
      {
        city: 'Týnec nad Labem',
        coord: {lat: 50.042, lng: 15.358},
        insta: null,
        displayBack: true,
        images: {
          front: 'czechrepublic_front002.jpg',
          back: 'czechrepublic_back002.jpg'
        }
      },
      {
        city: 'Karlovy Vary',
        coord: {lat: 50.232, lng: 12.872},
        insta: null,
        displayBack: true,
        images: {
          front: 'czechrepublic_front001.jpg',
          back: 'czechrepublic_back001.jpg'
        }
      }
    ]
  },

  {
    // England
    name: 'England',
    code: 'gb-eng',
    capital: 'London',
    population: '54,786,300',
    path: '/england',
    cards: [
      {
        city: 'Welwyn Garden City',
        coord: {lat: 51.802, lng: -0.207},
        insta: null,
        displayBack: true,
        images: {
          front: 'england_front007.jpg',
          back: 'england_back007.jpg'
        }
      },
      {
        city: 'Swindon',
        coord: {lat: 51.556, lng: -1.778},
        insta: null,
        displayBack: true,
        images: {
          front: 'england_front006.jpg',
          back: 'england_back006.jpg'
        }
      },
      {
        city: 'Chesterfield',
        coord: {lat: 53.235, lng: -1.422},
        insta: null,
        displayBack: true,
        images: {
          front: 'england_front005.jpg',
          back: 'england_back005.jpg'
        }
      },
      {
        city: 'Chesterfield',
        coord: {lat: 53.235, lng: -1.422},
        insta: null,
        displayBack: false,
        images: {
          front: 'england_front004.jpg',
          back: 'england_back004.jpg'
        }
      },
      {
        city: 'Chesterfield',
        coord: {lat: 53.235, lng: -1.422},
        insta: null,
        displayBack: false,
        images: {
          front: 'england_front003.jpg',
          back: 'england_back003.jpg'
        }
      },
      {
        city: 'Chesterfield',
        coord: {lat: 53.235, lng: -1.422},
        insta: null,
        displayBack: false,
        images: {
          front: 'england_front002.jpg',
          back: 'england_back002.jpg'
        }
      },
      {
        city: 'Skegness',
        coord: {lat: 53.146, lng: 0.338},
        insta: 'https://www.instagram.com/p/BXTf71pDLMn/',
        displayBack: true,
        images: {
          front: 'england_front001.jpg',
          back: 'england_back001.jpg'
        }
      }
    ]
  },

  {
    // Estonia
    name: 'Estonia',
    code: 'ee',
    capital: 'Tallinn',
    population: '1,315,635',
    path: '/estonia',
    cards: [
      {
        city: 'Tallinn',
        coord: {lat: 59.437, lng: 24.754},
        insta: null,
        displayBack: true,
        images: {
          front: 'estonia_front005.jpg',
          back: 'estonia_back005.jpg'
        }
      },
      {
        city: 'Rakvere',
        coord: {lat: 59.347, lng: 26.365},
        insta: null,
        displayBack: true,
        images: {
          front: 'estonia_front004.jpg',
          back: 'estonia_back004.jpg'
        }
      },
      {
        city: 'Tallinn',
        coord: {lat: 59.437, lng: 24.754},
        insta: null,
        displayBack: true,
        images: {
          front: 'estonia_front003.jpg',
          back: 'estonia_back003.jpg'
        }
      },
      {
        city: 'Rapla',
        coord: {lat: 59.006, lng: 24.794},
        insta: 'https://www.instagram.com/p/BYAzKvZjPhV/',
        displayBack: true,
        images: {
          front: 'estonia_front002.jpg',
          back: 'estonia_back002.jpg'
        }
      },
      {
        city: 'Tallinn',
        coord: {lat: 59.437, lng: 24.754},
        insta: null,
        displayBack: true,
        images: {
          front: 'estonia_front001.jpg',
          back: 'estonia_back001.jpg'
        }
      }
    ]
  },

  {
    // Finland
    name: 'Finland',
    code: 'fi',
    capital: 'Helsinki',
    population: '5,506,312',
    path: '/finland',
    cards: [
      {
        city: 'Huittinen',
        coord: {lat: 61.176, lng: 22.698},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front016.jpg',
          back: 'finland_back016.jpg'
        }
      },
      {
        city: 'Kalajoki',
        coord: {lat: 64.258, lng: 23.948},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front015.jpg',
          back: 'finland_back015.jpg'
        }
      },
      {
        city: 'Seinäjoki',
        coord: {lat: 62.788, lng: 22.85},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front014.jpg',
          back: 'finland_back014.jpg'
        }
      },
      {
        city: 'Pihtipudas',
        coord: {lat: 63.371, lng: 25.576},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front013.jpg',
          back: 'finland_back013.jpg'
        }
      },
      {
        city: 'Jyväskylä',
        coord: {lat: 62.243, lng: 25.747},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front012.jpg',
          back: 'finland_back012.jpg'
        }
      },
      {
        city: 'Helsinki',
        coord: {lat: 60.17, lng: 24.938},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front011.jpg',
          back: 'finland_back011.jpg'
        }
      },
      {
        city: 'Helsinki',
        coord: {lat: 60.17, lng: 24.938},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front010.jpg',
          back: 'finland_back010.jpg'
        }
      },
      {
        city: 'Helsinki',
        coord: {lat: 60.17, lng: 24.938},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front009.jpg',
          back: 'finland_back009.jpg'
        }
      },
      {
        city: 'Helsinki',
        coord: {lat: 60.17, lng: 24.938},
        insta: null,
        displayBack: false,
        images: {
          front: 'finland_front008.jpg',
          back: 'finland_back008.jpg'
        }
      },
      {
        city: 'Helsinki',
        coord: {lat: 60.17, lng: 24.938},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front007.jpg',
          back: 'finland_back007.jpg'
        }
      },
      {
        city: 'Kuopio',
        coord: {lat: 62.898, lng: 27.678},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front006.jpg',
          back: 'finland_back006.jpg'
        }
      },
      {
        city: 'Helsinki',
        coord: {lat: 60.17, lng: 24.938},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front005.jpg',
          back: 'finland_back005.jpg'
        }
      },
      {
        city: 'Helsinki',
        coord: {lat: 60.17, lng: 24.938},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front004.jpg',
          back: 'finland_back004.jpg'
        }
      },
      {
        city: 'Espoo',
        coord: {lat: 60.205, lng: 24.656},
        insta: null,
        displayBack: true,
        images: {
          front: 'finland_front003.jpg',
          back: 'finland_back003.jpg'
        }
      },
      {
        city: 'Helsinki',
        coord: {lat: 60.17, lng: 24.938},
        insta: 'https://www.instagram.com/p/BOdPUt-htDd/',
        displayBack: true,
        images: {
          front: 'finland_front002.jpg',
          back: 'finland_back002.jpg'
        }
      },
      {
        city: 'Kuopio',
        coord: {lat: 62.898, lng: 27.678},
        insta: 'https://www.instagram.com/p/BL7s6q7BiSN/',
        displayBack: true,
        images: {
          front: 'finland_front001.jpg',
          back: 'finland_back001.jpg'
        }
      }
    ]
  },

  {
    // France
    name: 'France',
    code: 'fr',
    capital: 'Paris',
    population: '66,991,000',
    path: '/france',
    cards: [
      {
        city: 'Ternay',
        coord: {lat: 45.602, lng: 4.807},
        insta: null,
        displayBack: true,
        images: {
          front: 'france_front005.jpg',
          back: 'france_back005.jpg'
        }
      },
      {
        city: 'Rouen',
        coord: {lat: 49.443, lng: 1.1},
        insta: null,
        displayBack: true,
        images: {
          front: 'france_front004.jpg',
          back: 'france_back004.jpg'
        }
      },
      {
        city: 'Rouen',
        coord: {lat: 49.443, lng: 1.1},
        insta: null,
        displayBack: true,
        images: {
          front: 'france_front003.jpg',
          back: 'france_back003.jpg'
        }
      },
      {
        city: 'Rouen',
        coord: {lat: 49.443, lng: 1.1},
        insta: null,
        displayBack: true,
        images: {
          front: 'france_front002.jpg',
          back: 'france_back002.jpg'
        }
      },
      {
        city: 'Paris',
        coord: {lat: 48.857, lng: 2.352},
        insta: null,
        displayBack: true,
        images: {
          front: 'france_front001.jpg',
          back: 'france_back001.jpg'
        }
      }
    ]
  },

  {
    // Germany
    name: 'Germany',
    code: 'de',
    capital: 'Berlin',
    population: '82,175,700',
    path: '/germany',
    cards: [
      {
        city: 'Lörrach',
        coord: {lat: 47.617, lng: 7.671},
        insta: null,
        displayBack: true,
        images: {
          front: 'germany_front013.jpg',
          back: 'germany_back013.jpg'
        }
      },
      {
        city: 'Berlin',
        coord: {lat: 52.52, lng: 13.405},
        insta: null,
        displayBack: false,
        images: {
          front: 'germany_front012.jpg',
          back: 'germany_back012.jpg'
        }
      },
      {
        city: 'Berlin',
        coord: {lat: 52.52, lng: 13.405},
        insta: null,
        displayBack: false,
        images: {
          front: 'germany_front011.jpg',
          back: 'germany_back011.jpg'
        }
      },
      {
        city: 'Berlin',
        coord: {lat: 52.52, lng: 13.405},
        insta: null,
        displayBack: false,
        images: {
          front: 'germany_front010.jpg',
          back: 'germany_back010.jpg'
        }
      },
      {
        city: 'Bielefeld',
        coord: {lat: 52.03, lng: 8.532},
        insta: null,
        displayBack: true,
        images: {
          front: 'germany_front009.jpg',
          back: 'germany_back009.jpg'
        }
      },
      {
        city: 'Greifswald',
        coord: {lat: 54.087, lng: 13.392},
        insta: null,
        displayBack: true,
        images: {
          front: 'germany_front008.jpg',
          back: 'germany_back008.jpg'
        }
      },
      {
        city: 'Höxter',
        coord: {lat: 51.777, lng: 9.377},
        insta: null,
        displayBack: true,
        images: {
          front: 'germany_front007.jpg',
          back: 'germany_back007.jpg'
        }
      },
      {
        city: 'Berlin',
        coord: {lat: 52.52, lng: 13.405},
        insta: null,
        displayBack: true,
        images: {
          front: 'germany_front006.jpg',
          back: 'germany_back006.jpg'
        }
      },
      {
        city: 'Kaiserslautern',
        coord: {lat: 49.44, lng: 7.749},
        insta: null,
        displayBack: true,
        images: {
          front: 'germany_front005.jpg',
          back: 'germany_back005.jpg'
        }
      },
      {
        city: 'Duisburg',
        coord: {lat: 51.434, lng: 6.762},
        insta: null,
        displayBack: true,
        images: {
          front: 'germany_front004.jpg',
          back: 'germany_back004.jpg'
        }
      },
      {
        city: 'Berlin',
        coord: {lat: 52.52, lng: 13.405},
        insta: 'https://www.instagram.com/p/BXtJnbNDWVd/',
        displayBack: true,
        images: {
          front: 'germany_front003.jpg',
          back: 'germany_back003.jpg'
        }
      },
      {
        city: 'Gerlingen',
        coord: {lat: 48.799, lng: 9.066},
        insta: null,
        displayBack: true,
        images: {
          front: 'germany_front002.jpg',
          back: 'germany_back002.jpg'
        }
      },
      {
        city: 'Geilenkirchen',
        coord: {lat: 50.967, lng: 6.117},
        insta: null,
        displayBack: true,
        images: {
          front: 'germany_front001.jpg',
          back: 'germany_back001.jpg'
        }
      }
    ]
  },

  {
    // Greece
    name: 'Greece',
    code: 'gr',
    capital: 'Athens',
    population: '10,955,000',
    path: '/greece',
    cards: [
      {
        city: 'Polygyros',
        coord: {lat: 40.382, lng: 23.443},
        insta: 'https://www.instagram.com/p/BXwIRSWD1fp/',
        displayBack: true,
        images: {
          front: 'greece_front001.jpg',
          back: 'greece_back001.jpg'
        }
      }
    ]
  },

  {
    // Hong Kong
    name: 'Hong Kong',
    code: 'hk',
    capital: 'Hong Kong',
    population: '7,374,900',
    path: '/hongkong',
    cards: [
      {
        city: 'Hong Kong',
        coord: {lat: 22.28, lng: 114.159},
        insta: null,
        displayBack: true,
        images: {
          front: 'hongkong_front003.jpg',
          back: 'hongkong_back003.jpg'
        }
      },
      {
        city: 'Hong Kong',
        coord: {lat: 22.28, lng: 114.159},
        insta: null,
        displayBack: true,
        images: {
          front: 'hongkong_front002.jpg',
          back: 'hongkong_back002.jpg'
        }
      },
      {
        city: 'Hong Kong',
        coord: {lat: 22.28, lng: 114.159},
        insta: null,
        displayBack: true,
        images: {
          front: 'hongkong_front001.jpg',
          back: 'hongkong_back001.jpg'
        }
      }
    ]
  },

  {
    // Hungary
    name: 'Hungary',
    code: 'hu',
    capital: 'Budapest',
    population: '9,797,561',
    path: '/hungary',
    cards: [
      {
        city: 'Tárnok',
        coord: {lat: 47.368, lng: 18.861},
        insta: null,
        displayBack: true,
        images: {
          front: 'hungary_front001.jpg',
          back: 'hungary_back001.jpg'
        }
      }
    ]
  },

  {
    // Iceland
    name: 'Iceland',
    code: 'is',
    capital: 'Reykjavík',
    population: '332,529',
    path: '/iceland',
    cards: [
      {
        city: 'Keflavík',
        coord: {lat: 64, lng: -22.558},
        insta: null,
        displayBack: false,
        images: {
          front: 'iceland_front003.jpg',
          back: 'iceland_back003.jpg'
        }
      },
      {
        city: 'Keflavík',
        coord: {lat: 64, lng: -22.558},
        insta: null,
        displayBack: false,
        images: {
          front: 'iceland_front002.jpg',
          back: 'iceland_back002.jpg'
        }
      },
      {
        city: 'Keflavík',
        coord: {lat: 64, lng: -22.558},
        insta: null,
        displayBack: false,
        images: {
          front: 'iceland_front001.jpg',
          back: 'iceland_back001.jpg'
        }
      }
    ]
  },

  {
    // India
    name: 'India',
    code: 'in',
    capital: 'New Delhi',
    population: '1,326,572,000',
    path: '/india',
    cards: [
      {
        city: 'Bangalore',
        coord: {lat: 12.972, lng: 77.595},
        insta: null,
        displayBack: true,
        images: {
          front: 'india_front001.jpg',
          back: 'india_back001.jpg'
        }
      }
    ]
  },

  {
    // Indonesia
    name: 'Indonesia',
    code: 'id',
    capital: 'Jakarta',
    population: '263,510,000',
    path: '/indonesia',
    cards: [
      {
        city: 'Jakarta',
        coord: {lat: -6.174, lng: 106.823},
        insta: null,
        displayBack: true,
        images: {
          front: 'indonesia_front002.jpg',
          back: 'indonesia_back002.jpg'
        }
      },
      {
        city: 'Jakarta',
        coord: {lat: -6.174, lng: 106.823},
        insta: null,
        displayBack: true,
        images: {
          front: 'indonesia_front001.jpg',
          back: 'indonesia_back001.jpg'
        }
      }
    ]
  },

  {
    // Ireland
    name: 'Ireland',
    code: 'ie',
    capital: 'Dublin',
    population: '6,378,000',
    path: '/ireland',
    cards: [
      {
        city: 'Navan',
        coord: {lat: 53.647, lng: -6.697},
        insta: null,
        displayBack: true,
        images: {
          front: 'ireland_front001.jpg',
          back: 'ireland_back001.jpg'
        }
      }
    ]
  },

  {
    // Israel
    name: 'Israel',
    code: 'il',
    capital: 'Jerusalem',
    population: '8,738,340',
    path: '/israel',
    cards: [
      {
        city: 'Jerusalem',
        coord: {lat: 31.768, lng: 35.214},
        insta: null,
        displayBack: true,
        images: {
          front: 'israel_front001.jpg',
          back: 'israel_back001.jpg'
        }
      }
    ]
  },

  {
    // Italy
    name: 'Italy',
    code: 'it',
    capital: 'Rome',
    population: '60,599,936',
    path: '/italy',
    cards: [
      {
        city: 'Rome',
        coord: {lat: 41.903, lng: 12.496},
        insta: null,
        displayBack: false,
        images: {
          front: 'italy_front003.jpg',
          back: 'italy_back003.jpg'
        }
      },
      {
        city: 'Rome',
        coord: {lat: 41.903, lng: 12.496},
        insta: null,
        displayBack: false,
        images: {
          front: 'italy_front002.jpg',
          back: 'italy_back002.jpg'
        }
      },
      {
        city: 'Bergamo',
        coord: {lat: 45.698, lng: 9.677},
        insta: null,
        displayBack: true,
        images: {
          front: 'italy_front001.jpg',
          back: 'italy_back001.jpg'
        }
      }
    ]
  },

  {
    // Japan
    name: 'Japan',
    code: 'jp',
    capital: 'Tokyo',
    population: '126,740,000',
    path: '/japan',
    cards: [
      {
        city: 'Yokohama',
        coord: {lat: 35.463, lng: 139.639},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front014.jpg',
          back: 'japan_back014.jpg'
        }
      },
      {
        city: 'Toyota',
        coord: {lat: 35.117, lng: 137.149},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front013.jpg',
          back: 'japan_back013.jpg'
        }
      },
      {
        city: 'Hiroshima',
        coord: {lat: 34.402, lng: 132.458},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front012.jpg',
          back: 'japan_back012.jpg'
        }
      },
      {
        city: 'Tobata',
        coord: {lat: 33.904, lng: 130.836},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front011.jpg',
          back: 'japan_back011.jpg'
        }
      },
      {
        city: 'Nishinomiya',
        coord: {lat: 34.738, lng: 135.342},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front010.jpg',
          back: 'japan_back010.jpg'
        }
      },
      {
        city: 'Tokyo',
        coord: {lat: 35.689, lng: 139.692},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front009.jpg',
          back: 'japan_back009.jpg'
        }
      },
      {
        city: 'Chiba',
        coord: {lat: 35.607, lng: 140.106},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front008.jpg',
          back: 'japan_back008.jpg'
        }
      },
      {
        city: 'Sapporo',
        coord: {lat: 43.062, lng: 141.354},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front007.jpg',
          back: 'japan_back007.jpg'
        }
      },
      {
        city: 'Shimonoseki',
        coord: {lat: 33.958, lng: 130.941},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front006.jpg',
          back: 'japan_back006.jpg'
        }
      },
      {
        city: 'Kokubu',
        coord: {lat: 31.741, lng: 130.763},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front005.jpg',
          back: 'japan_back005.jpg'
        }
      },
      {
        city: 'Abiko',
        coord: {lat: 35.864, lng: 140.028},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front004.jpg',
          back: 'japan_back004.jpg'
        }
      },
      {
        city: 'Nagareyama',
        coord: {lat: 35.856, lng: 139.903},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front003.jpg',
          back: 'japan_back003.jpg'
        }
      },
      {
        city: 'Osaka',
        coord: {lat: 34.694, lng: 135.502},
        insta: 'https://www.instagram.com/p/BYxnT6jDwXy/',
        displayBack: true,
        images: {
          front: 'japan_front002.jpg',
          back: 'japan_back002.jpg'
        }
      },
      {
        city: 'Wakayama',
        coord: {lat: 34.231, lng: 135.171},
        insta: null,
        displayBack: true,
        images: {
          front: 'japan_front001.jpg',
          back: 'japan_back001.jpg'
        }
      }
    ]
  },

  {
    // Lithuania
    name: 'Lithuania',
    code: 'lt',
    capital: 'Vilnius',
    population: '2,821,674',
    path: '/lithuania',
    cards: [
      {
        city: 'Mažeikiai',
        coord: {lat: 56.309, lng: 22.341},
        insta: null,
        displayBack: true,
        images: {
          front: 'lithuania_front001.jpg',
          back: 'lithuania_back001.jpg'
        }
      }
    ]
  },

  {
    // Malaysia
    name: 'Malaysia',
    code: 'my',
    capital: 'Kuala Lumpur',
    population: '31,647,000',
    path: '/malaysia',
    cards: [
      {
        city: 'Jitra',
        coord: {lat: 6.265, lng: 100.421},
        insta: null,
        displayBack: true,
        images: {
          front: 'malaysia_front003.jpg',
          back: 'malaysia_back003.jpg'
        }
      },
      {
        city: 'Shah Alam',
        coord: {lat: 3.073, lng: 101.518},
        insta: null,
        displayBack: true,
        images: {
          front: 'malaysia_front002.jpg',
          back: 'malaysia_back002.jpg'
        }
      },
      {
        city: 'Kota Bharu',
        coord: {lat: 6.125, lng: 102.238},
        insta: 'https://www.instagram.com/p/BUa92hRDy6r/',
        displayBack: true,
        images: {
          front: 'malaysia_front001.jpg',
          back: 'malaysia_back001.jpg'
        }
      }
    ]
  },

  {
    // Netherlands
    name: 'Netherlands',
    code: 'nl',
    capital: 'Amsterdam',
    population: '17,116,281',
    path: '/netherlands',
    cards: [
      {
        city: 'Leeuwarden',
        coord: {lat: 52.201, lng: 5.799},
        insta: null,
        displayBack: true,
        images: {
          front: 'netherlands_front021.jpg',
          back: 'netherlands_back021.jpg'
        }
      },
      {
        city: 'Bergen ann Zee',
        coord: {lat: 52.661, lng: 4.63},
        insta: null,
        displayBack: true,
        images: {
          front: 'netherlands_front020.jpg',
          back: 'netherlands_back020.jpg'
        }
      },
      {
        city: 'Delft',
        coord: {lat: 52.012, lng: 4.358},
        insta: null,
        displayBack: true,
        images: {
          front: 'netherlands_front019.jpg',
          back: 'netherlands_back019.jpg'
        }
      },
      {
        city: 'Amsterdam',
        coord: {lat: 52.37, lng: 4.895},
        insta: null,
        displayBack: false,
        images: {
          front: 'netherlands_front018.jpg',
          back: 'netherlands_back018.jpg'
        }
      },
      {
        city: 'Amsterdam',
        coord: {lat: 52.37, lng: 4.895},
        insta: null,
        displayBack: false,
        images: {
          front: 'netherlands_front017.jpg',
          back: 'netherlands_back017.jpg'
        }
      },
      {
        city: 'Amsterdam',
        coord: {lat: 52.37, lng: 4.895},
        insta: null,
        displayBack: false,
        images: {
          front: 'netherlands_front016.jpg',
          back: 'netherlands_back016.jpg'
        }
      },
      {
        city: "'s-Hertogenbosch",
        coord: {lat: 51.698, lng: 5.304},
        insta: null,
        displayBack: true,
        images: {
          front: 'netherlands_front015.jpg',
          back: 'netherlands_back015.jpg'
        }
      },
      {
        city: 'Zwolle',
        coord: {lat: 52.517, lng: 6.083},
        insta: null,
        displayBack: true,
        images: {
          front: 'netherlands_front014.jpg',
          back: 'netherlands_back014.jpg'
        }
      },
      {
        city: 'Zwolle',
        coord: {lat: 52.517, lng: 6.083},
        insta: null,
        displayBack: false,
        images: {
          front: 'netherlands_front013.jpg',
          back: 'netherlands_back013.jpg'
        }
      },
      {
        city: 'Zwolle',
        coord: {lat: 52.517, lng: 6.083},
        insta: null,
        displayBack: false,
        images: {
          front: 'netherlands_front012.jpg',
          back: 'netherlands_back012.jpg'
        }
      },
      {
        city: 'Zwolle',
        coord: {lat: 52.517, lng: 6.083},
        insta: null,
        displayBack: false,
        images: {
          front: 'netherlands_front011.jpg',
          back: 'netherlands_back011.jpg'
        }
      },
      {
        city: 'Zwolle',
        coord: {lat: 52.517, lng: 6.083},
        insta: null,
        displayBack: false,
        images: {
          front: 'netherlands_front010.jpg',
          back: 'netherlands_back010.jpg'
        }
      },
      {
        city: 'Zwolle',
        coord: {lat: 52.517, lng: 6.083},
        insta: null,
        displayBack: false,
        images: {
          front: 'netherlands_front009.jpg',
          back: 'netherlands_back009.jpg'
        }
      },
      {
        city: 'Nieuwegein',
        coord: {lat: 52.025, lng: 5.092},
        insta: null,
        displayBack: true,
        images: {
          front: 'netherlands_front008.jpg',
          back: 'netherlands_back008.jpg'
        }
      },
      {
        city: 'Amsterdam',
        coord: {lat: 52.37, lng: 4.895},
        insta: null,
        displayBack: true,
        images: {
          front: 'netherlands_front007.jpg',
          back: 'netherlands_back007.jpg'
        }
      },
      {
        city: 'Breda',
        coord: {lat: 51.572, lng: 4.768},
        insta: null,
        displayBack: true,
        images: {
          front: 'netherlands_front006.jpg',
          back: 'netherlands_back006.jpg'
        }
      },
      {
        city: 'Nieuwegein',
        coord: {lat: 52.025, lng: 5.092},
        insta: null,
        displayBack: true,
        images: {
          front: 'netherlands_front005.jpg',
          back: 'netherlands_back005.jpg'
        }
      },
      {
        city: 'Zwolle',
        coord: {lat: 52.517, lng: 6.083},
        insta: null,
        displayBack: true,
        images: {
          front: 'netherlands_front004.jpg',
          back: 'netherlands_back004.jpg'
        }
      },
      {
        city: 'Goes',
        coord: {lat: 51.505, lng: 3.891},
        insta: 'https://www.instagram.com/p/BNnd2prh0bF/',
        displayBack: true,
        images: {
          front: 'netherlands_front003.jpg',
          back: 'netherlands_back003.jpg'
        }
      },
      {
        city: 'The Hague',
        coord: {lat: 52.07, lng: 4.301},
        insta: null,
        displayBack: true,
        images: {
          front: 'netherlands_front002.jpg',
          back: 'netherlands_back002.jpg'
        }
      },
      {
        city: 'Arnhem',
        coord: {lat: 51.985, lng: 5.899},
        insta: 'https://www.instagram.com/p/BSBfwV0DiIw/',
        displayBack: true,
        images: {
          front: 'netherlands_front001.jpg',
          back: 'netherlands_back001.jpg'
        }
      }
    ]
  },

  {
    // New Zealand
    name: 'New Zealand',
    code: 'nz',
    capital: 'Wellington',
    population: '4,814,190',
    path: '/newzealand',
    cards: [
      {
        city: 'Timaru',
        coord: {lat: -44.397, lng: 171.255},
        insta: null,
        displayBack: true,
        images: {
          front: 'newzealand_front001.jpg',
          back: 'newzealand_back001.jpg'
        }
      }
    ]
  },

  {
    // Philippines
    name: 'Philippines',
    code: 'ph',
    capital: 'Manila',
    population: '100,981,437',
    path: '/philippines',
    cards: [
      {
        city: 'Naga',
        coord: {lat: 13.622, lng: 123.195},
        insta: null,
        displayBack: true,
        images: {
          front: 'philippines_front004.jpg',
          back: 'philippines_back004.jpg'
        }
      },
      {
        city: 'Quezon City',
        coord: {lat: 14.676, lng: 121.044},
        insta: null,
        displayBack: true,
        images: {
          front: 'philippines_front003.jpg',
          back: 'philippines_back003.jpg'
        }
      },
      {
        city: 'Valenzuela',
        coord: {lat: 14.701, lng: 120.983},
        insta: null,
        displayBack: true,
        images: {
          front: 'philippines_front002.jpg',
          back: 'philippines_back002.jpg'
        }
      },
      {
        city: 'Valenzuela',
        coord: {lat: 14.701, lng: 120.983},
        insta: 'https://www.instagram.com/p/BP32JB5Bx1a/',
        displayBack: true,
        images: {
          front: 'philippines_front001.jpg',
          back: 'philippines_back001.jpg'
        }
      }
    ]
  },

  {
    // Poland
    name: 'Poland',
    code: 'pl',
    capital: 'Warsaw',
    population: '38,634,007',
    path: '/poland',
    cards: [
      {
        city: 'Białystok',
        coord: {lat: 53.132, lng: 23.169},
        insta: null,
        displayBack: true,
        images: {
          front: 'poland_front018.jpg',
          back: 'poland_back018.jpg'
        }
      },
      {
        city: 'Warsaw',
        coord: {lat: 52.23, lng: 21.012},
        insta: null,
        displayBack: true,
        images: {
          front: 'poland_front017.jpg',
          back: 'poland_back017.jpg'
        }
      },
      {
        city: 'Gdańsk',
        coord: {lat: 54.352, lng: 18.647},
        insta: null,
        displayBack: false,
        images: {
          front: 'poland_front016.jpg',
          back: 'poland_back016.jpg'
        }
      },
      {
        city: 'Gdańsk',
        coord: {lat: 54.352, lng: 18.647},
        insta: null,
        displayBack: false,
        images: {
          front: 'poland_front015.jpg',
          back: 'poland_back015.jpg'
        }
      },
      {
        city: 'Gdańsk',
        coord: {lat: 54.352, lng: 18.647},
        insta: null,
        displayBack: false,
        images: {
          front: 'poland_front014.jpg',
          back: 'poland_back014.jpg'
        }
      },
      {
        city: 'Gdańsk',
        coord: {lat: 54.352, lng: 18.647},
        insta: null,
        displayBack: false,
        images: {
          front: 'poland_front013.jpg',
          back: 'poland_back013.jpg'
        }
      },
      {
        city: 'Gdańsk',
        coord: {lat: 54.352, lng: 18.647},
        insta: null,
        displayBack: false,
        images: {
          front: 'poland_front012.jpg',
          back: 'poland_back012.jpg'
        }
      },
      {
        city: 'Gdańsk',
        coord: {lat: 54.352, lng: 18.647},
        insta: null,
        displayBack: false,
        images: {
          front: 'poland_front011.jpg',
          back: 'poland_back011.jpg'
        }
      },
      {
        city: 'Gdańsk',
        coord: {lat: 54.352, lng: 18.647},
        insta: null,
        displayBack: false,
        images: {
          front: 'poland_front010.jpg',
          back: 'poland_back010.jpg'
        }
      },
      {
        city: 'Gdańsk',
        coord: {lat: 54.352, lng: 18.647},
        insta: null,
        displayBack: false,
        images: {
          front: 'poland_front009.jpg',
          back: 'poland_back009.jpg'
        }
      },
      {
        city: 'Gdańsk',
        coord: {lat: 54.352, lng: 18.647},
        insta: null,
        displayBack: false,
        images: {
          front: 'poland_front008.jpg',
          back: 'poland_back008.jpg'
        }
      },
      {
        city: 'Gdańsk',
        coord: {lat: 54.352, lng: 18.647},
        insta: null,
        displayBack: false,
        images: {
          front: 'poland_front007.jpg',
          back: 'poland_back007.jpg'
        }
      },
      {
        city: 'Wrocław',
        coord: {lat: 51.108, lng: 17.039},
        insta: null,
        displayBack: true,
        images: {
          front: 'poland_front006.jpg',
          back: 'poland_back006.jpg'
        }
      },
      {
        city: 'Warsaw',
        coord: {lat: 52.23, lng: 21.012},
        insta: null,
        displayBack: true,
        images: {
          front: 'poland_front005.jpg',
          back: 'poland_back005.jpg'
        }
      },
      {
        city: 'Warsaw',
        coord: {lat: 52.23, lng: 21.012},
        insta: null,
        displayBack: true,
        images: {
          front: 'poland_front004.jpg',
          back: 'poland_back004.jpg'
        }
      },
      {
        city: 'Czechowice-Dziedzice',
        coord: {lat: 49.902, lng: 18.992},
        insta: null,
        displayBack: false,
        images: {
          front: 'poland_front003.jpg',
          back: 'poland_back003.jpg'
        }
      },
      {
        city: 'Częstochowa',
        coord: {lat: 50.812, lng: 19.12},
        insta: null,
        displayBack: true,
        images: {
          front: 'poland_front002.jpg',
          back: 'poland_back002.jpg'
        }
      },
      {
        city: 'Kielce',
        coord: {lat: 50.866, lng: 20.629},
        insta: null,
        displayBack: true,
        images: {
          front: 'poland_front001.jpg',
          back: 'poland_back001.jpg'
        }
      }
    ]
  },

  {
    // Portugal
    name: 'Portugal',
    code: 'pt',
    capital: 'Lisbon',
    population: '10,309,573',
    path: '/portugal',
    cards: [
      {
        city: 'Aveiro',
        coord: {lat: 40.64, lng: -8.654},
        insta: null,
        displayBack: false,
        images: {
          front: 'portugal_front003.jpg',
          back: 'portugal_back003.jpg'
        }
      },
      {
        city: 'Vila Nova de Gaia',
        coord: {lat: 41.124, lng: -8.612},
        insta: null,
        displayBack: true,
        images: {
          front: 'portugal_front002.jpg',
          back: 'portugal_back002.jpg'
        }
      },
      {
        city: 'Lisbon',
        coord: {lat: 38.722, lng: -9.139},
        insta: null,
        displayBack: true,
        images: {
          front: 'portugal_front001.jpg',
          back: 'portugal_back001.jpg'
        }
      }
    ]
  },

  {
    // Romania
    name: 'Romania',
    code: 'ro',
    capital: 'Bucharest',
    population: '19,638,000 ',
    path: '/romania',
    cards: [
      {
        city: 'Constanța',
        coord: {lat: 44.16, lng: 28.635},
        insta: null,
        displayBack: true,
        images: {
          front: 'romania_front001.jpg',
          back: 'romania_back001.jpg'
        }
      }
    ]
  },

  {
    // Russia
    name: 'Russia',
    code: 'ru',
    capital: 'Moscow',
    population: '144,463,451',
    path: '/russia',
    cards: [
      {
        city: 'Moscow',
        coord: {lat: 55.756, lng: 37.617},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front048.jpg',
          back: 'russia_back048.jpg'
        }
      },
      {
        city: 'Penza',
        coord: {lat: 53.228, lng: 44.994},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front047.jpg',
          back: 'russia_back047.jpg'
        }
      },
      {
        city: 'Kursk',
        coord: {lat: 51.75, lng: 36.194},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front046.jpg',
          back: 'russia_back046.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front045.jpg',
          back: 'russia_back045.jpg'
        }
      },
      {
        city: 'Moscow',
        coord: {lat: 55.756, lng: 37.617},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front044.jpg',
          back: 'russia_back044.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front043.jpg',
          back: 'russia_back043.jpg'
        }
      },
      {
        city: 'Novocherkassk',
        coord: {lat: 47.418, lng: 40.073},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front042.jpg',
          back: 'russia_back042.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: 'https://www.instagram.com/p/BcMuEM_j6_Q/',
        displayBack: true,
        images: {
          front: 'russia_front041.jpg',
          back: 'russia_back041.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: null,
        displayBack: false,
        images: {
          front: 'russia_front040.jpg',
          back: 'russia_back040.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: null,
        displayBack: false,
        images: {
          front: 'russia_front039.jpg',
          back: 'russia_back039.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: null,
        displayBack: false,
        images: {
          front: 'russia_front038.jpg',
          back: 'russia_back038.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: null,
        displayBack: false,
        images: {
          front: 'russia_front037.jpg',
          back: 'russia_back037.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: null,
        displayBack: false,
        images: {
          front: 'russia_front036.jpg',
          back: 'russia_back036.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: null,
        displayBack: false,
        images: {
          front: 'russia_front035.jpg',
          back: 'russia_back035.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: null,
        displayBack: false,
        images: {
          front: 'russia_front034.jpg',
          back: 'russia_back034.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: null,
        displayBack: false,
        images: {
          front: 'russia_front033.jpg',
          back: 'russia_back033.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: null,
        displayBack: false,
        images: {
          front: 'russia_front032.jpg',
          back: 'russia_back032.jpg'
        }
      },
      {
        city: 'Yekaterinburg',
        coord: {lat: 56.839, lng: 60.606},
        insta: 'https://www.instagram.com/p/BYYa-3eDlR7/',
        displayBack: true,
        images: {
          front: 'russia_front031.jpg',
          back: 'russia_back031.jpg'
        }
      },
      {
        city: 'Yekaterinburg',
        coord: {lat: 56.839, lng: 60.606},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front030.jpg',
          back: 'russia_back030.jpg'
        }
      },
      {
        city: 'Yekaterinburg',
        coord: {lat: 56.839, lng: 60.606},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front029.jpg',
          back: 'russia_back029.jpg'
        }
      },
      {
        city: 'Saint Petersburg',
        coord: {lat: 59.934, lng: 30.335},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front028.jpg',
          back: 'russia_back028.jpg'
        }
      },
      {
        city: 'Saint Petersburg',
        coord: {lat: 59.934, lng: 30.335},
        insta: null,
        displayBack: false,
        images: {
          front: 'russia_front027.jpg',
          back: 'russia_back027.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: 'https://www.instagram.com/p/BQE74DLA-D-/',
        displayBack: false,
        images: {
          front: 'russia_front026.jpg',
          back: 'russia_back026.jpg'
        }
      },
      {
        city: 'Komsomolsk-on-Amur',
        coord: {lat: 50.567, lng: 136.966},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front025.jpg',
          back: 'russia_back025.jpg'
        }
      },
      {
        city: 'Petrozavodsk',
        coord: {lat: 61.778, lng: 34.364},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front024.jpg',
          back: 'russia_back024.jpg'
        }
      },
      {
        city: 'Saint Petersburg',
        coord: {lat: 59.934, lng: 30.335},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front023.jpg',
          back: 'russia_back023.jpg'
        }
      },
      {
        city: 'Engels',
        coord: {lat: 51.475, lng: 46.114},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front022.jpg',
          back: 'russia_back022.jpg'
        }
      },
      {
        city: 'Engels',
        coord: {lat: 51.475, lng: 46.114},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front021.jpg',
          back: 'russia_back021.jpg'
        }
      },
      {
        city: 'Moscow',
        coord: {lat: 55.756, lng: 37.617},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front020.jpg',
          back: 'russia_back020.jpg'
        }
      },
      {
        city: 'Khabarovsk',
        coord: {lat: 48.503, lng: 135.066},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front019.jpg',
          back: 'russia_back019.jpg'
        }
      },
      {
        city: 'Vladivostok',
        coord: {lat: 43.174, lng: 132.006},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front018.jpg',
          back: 'russia_back018.jpg'
        }
      },
      {
        city: 'Moscow',
        coord: {lat: 55.756, lng: 37.617},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front017.jpg',
          back: 'russia_back017.jpg'
        }
      },
      {
        city: 'Moscow',
        coord: {lat: 55.756, lng: 37.617},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front016.jpg',
          back: 'russia_back016.jpg'
        }
      },
      {
        city: 'Saint Petersburg',
        coord: {lat: 59.934, lng: 30.335},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front015.jpg',
          back: 'russia_back015.jpg'
        }
      },
      {
        city: 'Lipetsk',
        coord: {lat: 52.612, lng: 39.598},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front014.jpg',
          back: 'russia_back014.jpg'
        }
      },
      {
        city: 'Moscow',
        coord: {lat: 55.756, lng: 37.617},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front013.jpg',
          back: 'russia_back013.jpg'
        }
      },
      {
        city: 'Moscow',
        coord: {lat: 55.756, lng: 37.617},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front012.jpg',
          back: 'russia_back012.jpg'
        }
      },
      {
        city: 'Moscow',
        coord: {lat: 55.756, lng: 37.617},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front011.jpg',
          back: 'russia_back011.jpg'
        }
      },
      {
        city: 'Moscow',
        coord: {lat: 55.756, lng: 37.617},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front010.jpg',
          back: 'russia_back010.jpg'
        }
      },
      {
        city: 'Moscow',
        coord: {lat: 55.756, lng: 37.617},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front009.jpg',
          back: 'russia_back009.jpg'
        }
      },
      {
        city: 'Novokuybyshevsk',
        coord: {lat: 53.096, lng: 49.891},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front008.jpg',
          back: 'russia_back008.jpg'
        }
      },
      {
        city: 'Oryol',
        coord: {lat: 52.967, lng: 36.062},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front007.jpg',
          back: 'russia_back007.jpg'
        }
      },
      {
        city: "Anadyr'",
        coord: {lat: 64.734, lng: 177.497},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front006.jpg',
          back: 'russia_back006.jpg'
        }
      },
      {
        city: 'Moscow',
        coord: {lat: 55.756, lng: 37.617},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front005.jpg',
          back: 'russia_back005.jpg'
        }
      },
      {
        city: 'Moscow',
        coord: {lat: 55.756, lng: 37.617},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front004.jpg',
          back: 'russia_back004.jpg'
        }
      },
      {
        city: 'Tomsk',
        coord: {lat: 56.501, lng: 84.992},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front003.jpg',
          back: 'russia_back003.jpg'
        }
      },
      {
        city: "Anadyr'",
        coord: {lat: 64.734, lng: 177.497},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front002.jpg',
          back: 'russia_back002.jpg'
        }
      },
      {
        city: 'Saint Petersburg',
        coord: {lat: 59.934, lng: 30.335},
        insta: null,
        displayBack: true,
        images: {
          front: 'russia_front001.jpg',
          back: 'russia_back001.jpg'
        }
      }
    ]
  },

  {
    // Serbia
    name: 'Serbia',
    code: 'rs',
    capital: 'Belgrade',
    population: '7,058,322',
    path: '/serbia',
    cards: [
      {
        city: 'Novi Sad',
        coord: {lat: 45.267, lng: 19.834},
        insta: null,
        displayBack: true,
        images: {
          front: 'serbia_front002.jpg',
          back: 'serbia_back002.jpg'
        }
      },
      {
        city: 'Belgrade',
        coord: {lat: 44.787, lng: 20.449},
        insta: null,
        displayBack: true,
        images: {
          front: 'serbia_front001.jpg',
          back: 'serbia_back001.jpg'
        }
      }
    ]
  },

  {
    // Slovenia
    name: 'Slovenia',
    code: 'si',
    capital: 'Ljubljana',
    population: '2,065,895',
    path: '/slovenia',
    cards: [
      {
        city: 'Portorož',
        coord: {lat: 45.514, lng: 13.591},
        insta: null,
        displayBack: true,
        images: {
          front: 'slovenia_front004.jpg',
          back: 'slovenia_back004.jpg'
        }
      },
      {
        city: 'Kranj',
        coord: {lat: 46.243, lng: 14.356},
        insta: null,
        displayBack: true,
        images: {
          front: 'slovenia_front003.jpg',
          back: 'slovenia_back003.jpg'
        }
      },
      {
        city: 'Gorica',
        coord: {lat: 46.172, lng: 15.45},
        insta: null,
        displayBack: true,
        images: {
          front: 'slovenia_front002.jpg',
          back: 'slovenia_back002.jpg'
        }
      },
      {
        city: 'Kranj',
        coord: {lat: 46.243, lng: 14.356},
        insta: null,
        displayBack: true,
        images: {
          front: 'slovenia_front001.jpg',
          back: 'slovenia_back001.jpg'
        }
      }
    ]
  },

  {
    // Spain
    name: 'Spain',
    code: 'es',
    capital: 'Madrid',
    population: '46,468,102',
    path: '/spain',
    cards: [
      {
        city: 'Ibiza',
        coord: {lat: 38.907, lng: 1.42},
        insta: null,
        displayBack: false,
        images: {
          front: 'spain_front006.jpg',
          back: 'spain_back006.jpg'
        }
      },
      {
        city: 'Ibiza',
        coord: {lat: 38.907, lng: 1.42},
        insta: null,
        displayBack: false,
        images: {
          front: 'spain_front005.jpg',
          back: 'spain_back005.jpg'
        }
      },
      {
        city: 'Ibiza',
        coord: {lat: 38.907, lng: 1.42},
        insta: null,
        displayBack: false,
        images: {
          front: 'spain_front004.jpg',
          back: 'spain_back004.jpg'
        }
      },
      {
        city: 'Ibiza',
        coord: {lat: 38.907, lng: 1.42},
        insta: null,
        displayBack: false,
        images: {
          front: 'spain_front003.jpg',
          back: 'spain_back003.jpg'
        }
      },
      {
        city: 'Tarragona',
        coord: {lat: 41.119, lng: 1.245},
        insta: null,
        displayBack: true,
        images: {
          front: 'spain_front002.jpg',
          back: 'spain_back002.jpg'
        }
      },
      {
        city: 'Oviedo',
        coord: {lat: 43.362, lng: -5.849},
        insta: null,
        displayBack: true,
        images: {
          front: 'spain_front001.jpg',
          back: 'spain_back001.jpg'
        }
      }
    ]
  },

  {
    // Sweden
    name: 'Sweden',
    code: 'se',
    capital: 'Stockholm',
    population: '10,053,061',
    path: '/sweden',
    cards: [
      {
        city: 'Stockholm',
        coord: {lat: 59.329, lng: 18.069},
        insta: null,
        displayBack: true,
        images: {
          front: 'sweden_front002.jpg',
          back: 'sweden_back002.jpg'
        }
      },
      {
        city: 'Helsingborg',
        coord: {lat: 56.046, lng: 12.695},
        insta: null,
        displayBack: true,
        images: {
          front: 'sweden_front001.jpg',
          back: 'sweden_back001.jpg'
        }
      }
    ]
  },

  {
    // Switzerland
    name: 'Switzerland',
    code: 'ch',
    capital: 'Bern',
    population: '8,401,120',
    path: '/switzerland',
    cards: [
      {
        city: 'Stäfa',
        coord: {lat: 47.239, lng: 8.736},
        insta: null,
        displayBack: true,
        images: {
          front: 'switzerland_front005.jpg',
          back: 'switzerland_back005.jpg'
        }
      },
      {
        city: 'Härkingen',
        coord: {lat: 47.307, lng: 7.82},
        insta: null,
        displayBack: true,
        images: {
          front: 'switzerland_front004.jpg',
          back: 'switzerland_back004.jpg'
        }
      },
      {
        city: 'Marly',
        coord: {lat: 46.778, lng: 7.156},
        insta: null,
        displayBack: true,
        images: {
          front: 'switzerland_front003.jpg',
          back: 'switzerland_back003.jpg'
        }
      },
      {
        city: 'Freienbach',
        coord: {lat: 47.202, lng: 8.791},
        insta: null,
        displayBack: true,
        images: {
          front: 'switzerland_front002.jpg',
          back: 'switzerland_back002.jpg'
        }
      },
      {
        city: 'Ascona',
        coord: {lat: 46.162, lng: 8.775},
        insta: null,
        displayBack: true,
        images: {
          front: 'switzerland_front001.jpg',
          back: 'switzerland_back001.jpg'
        }
      }
    ]
  },

  {
    // Taiwan
    name: 'Taiwan',
    code: 'tw',
    capital: 'Taipei',
    population: '23,550,077',
    path: '/taiwan',
    cards: [
      {
        city: 'Hsinchu',
        coord: {lat: 24.806, lng: 120.97},
        insta: null,
        displayBack: true,
        images: {
          front: 'taiwan_front009.jpg',
          back: 'taiwan_back009.jpg'
        }
      },
      {
        city: 'Tainan',
        coord: {lat: 23, lng: 120.227},
        insta: null,
        displayBack: true,
        images: {
          front: 'taiwan_front008.jpg',
          back: 'taiwan_back008.jpg'
        }
      },
      {
        city: 'Taipei',
        coord: {lat: 25.033, lng: 121.565},
        insta: null,
        displayBack: true,
        images: {
          front: 'taiwan_front007.jpg',
          back: 'taiwan_back007.jpg'
        }
      },
      {
        city: 'Keelung',
        coord: {lat: 25.128, lng: 121.739},
        insta: null,
        displayBack: true,
        images: {
          front: 'taiwan_front006.jpg',
          back: 'taiwan_back006.jpg'
        }
      },
      {
        city: 'Keelung',
        coord: {lat: 25.128, lng: 121.739},
        insta: 'https://www.instagram.com/p/BMGJggjBXq4/',
        displayBack: true,
        images: {
          front: 'taiwan_front005.jpg',
          back: 'taiwan_back005.jpg'
        }
      },
      {
        city: 'Keelung',
        coord: {lat: 25.128, lng: 121.739},
        insta: null,
        displayBack: true,
        images: {
          front: 'taiwan_front004.jpg',
          back: 'taiwan_back004.jpg'
        }
      },
      {
        city: 'Taipei',
        coord: {lat: 25.033, lng: 121.565},
        insta: null,
        displayBack: true,
        images: {
          front: 'taiwan_front003.jpg',
          back: 'taiwan_back003.jpg'
        }
      },
      {
        city: 'Taipei',
        coord: {lat: 25.033, lng: 121.565},
        insta: null,
        displayBack: true,
        images: {
          front: 'taiwan_front002.jpg',
          back: 'taiwan_back002.jpg'
        }
      },
      {
        city: 'Taipei',
        coord: {lat: 25.033, lng: 121.565},
        insta: null,
        displayBack: true,
        images: {
          front: 'taiwan_front001.jpg',
          back: 'taiwan_back001.jpg'
        }
      }
    ]
  },

  {
    // Thailand
    name: 'Thailand',
    code: 'th',
    capital: 'Bangkok',
    population: '67,959,000',
    path: '/thailand',
    cards: [
      {
        city: 'Bangkok',
        coord: {lat: 13.756, lng: 100.502},
        insta: null,
        displayBack: true,
        images: {
          front: 'thailand_front001.jpg',
          back: 'thailand_back001.jpg'
        }
      }
    ]
  },

  {
    // Turkey
    name: 'Turkey',
    code: 'tr',
    capital: 'Ankara',
    population: '79,814,871',
    path: '/turkey',
    cards: [
      {
        city: 'Maltepe',
        coord: {lat: 40.95, lng: 29.174},
        insta: null,
        displayBack: false,
        images: {
          front: 'turkey_front004.jpg',
          back: 'turkey_back004.jpg'
        }
      },
      {
        city: 'Maltepe',
        coord: {lat: 40.95, lng: 29.174},
        insta: 'https://www.instagram.com/p/BQA12I-hYtt/',
        displayBack: true,
        images: {
          front: 'turkey_front003.jpg',
          back: 'turkey_back003.jpg'
        }
      },
      {
        city: 'Muratpaşa',
        coord: {lat: 36.883, lng: 30.769},
        insta: null,
        displayBack: true,
        images: {
          front: 'turkey_front002.jpg',
          back: 'turkey_back002.jpg'
        }
      },
      {
        city: 'Fatih',
        coord: {lat: 41.008, lng: 28.978},
        insta: null,
        displayBack: true,
        images: {
          front: 'turkey_front001.jpg',
          back: 'turkey_back001.jpg'
        }
      }
    ]
  },

  {
    // Ukraine
    name: 'Ukraine',
    code: 'ua',
    capital: 'Kiev',
    population: '42,541,633',
    path: '/ukraine',
    cards: [
      {
        city: 'Lugansk',
        coord: {lat: 48.574, lng: 39.308},
        insta: null,
        displayBack: true,
        images: {
          front: 'ukraine_front003.jpg',
          back: 'ukraine_back003.jpg'
        }
      },
      {
        city: 'Kiev',
        coord: {lat: 50.45, lng: 30.523},
        insta: null,
        displayBack: true,
        images: {
          front: 'ukraine_front002.jpg',
          back: 'ukraine_back002.jpg'
        }
      },
      {
        city: 'Zaporizhzhia',
        coord: {lat: 47.839, lng: 35.14},
        insta: null,
        displayBack: true,
        images: {
          front: 'ukraine_front001.jpg',
          back: 'ukraine_back001.jpg'
        }
      }
    ]
  },

  {
    // United States
    name: 'United States',
    code: 'us',
    capital: 'Washington D.C.',
    population: '323,127,513',
    path: '/usa',
    cards: [
      {
        city: 'Aiken, SC',
        coord: {lat: 33.56, lng: -81.72},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front061.jpg',
          back: 'usa_back061.jpg'
        }
      },
      {
        city: 'Chicago, IL',
        coord: {lat: 41.882, lng: -87.63},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front060.jpg',
          back: 'usa_back060.jpg'
        }
      },
      {
        city: 'Portsmouth, VA',
        coord: {lat: 36.835, lng: -76.29},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front059.jpg',
          back: 'usa_back059.jpg'
        }
      },
      {
        city: 'Brandon, FL',
        coord: {lat: 27.939, lng: -82.284},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front058.jpg',
          back: 'usa_back058.jpg'
        }
      },
      {
        city: 'Marshall, TX',
        coord: {lat: 32.545, lng: -94.367},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front057.jpg',
          back: 'usa_back057.jpg'
        }
      },
      {
        city: 'Memphis, TN',
        coord: {lat: 35.15, lng: -90.049},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front056.jpg',
          back: 'usa_back056.jpg'
        }
      },
      {
        city: 'Colorado Springs, CO',
        coord: {lat: 38.834, lng: -104.821},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front055.jpg',
          back: 'usa_back055.jpg'
        }
      },
      {
        city: 'San Francisco, CA',
        coord: {lat: 37.775, lng: -122.419},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front054.jpg',
          back: 'usa_back054.jpg'
        }
      },
      {
        city: 'San Francisco, CA',
        coord: {lat: 37.775, lng: -122.419},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front053.jpg',
          back: 'usa_back053.jpg'
        }
      },
      {
        city: 'San Francisco, CA',
        coord: {lat: 37.775, lng: -122.419},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front052.jpg',
          back: 'usa_back052.jpg'
        }
      },
      {
        city: 'San Francisco, CA',
        coord: {lat: 37.775, lng: -122.419},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front051.jpg',
          back: 'usa_back051.jpg'
        }
      },
      {
        city: 'Chicago, IL',
        coord: {lat: 41.878, lng: -87.63},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front050.jpg',
          back: 'usa_back050.jpg'
        }
      },
      {
        city: 'Chicago, IL',
        coord: {lat: 41.878, lng: -87.63},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front049.jpg',
          back: 'usa_back049.jpg'
        }
      },
      {
        city: 'Chicago, IL',
        coord: {lat: 41.878, lng: -87.63},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front048.jpg',
          back: 'usa_back048.jpg'
        }
      },
      {
        city: 'Chicago, IL',
        coord: {lat: 41.878, lng: -87.63},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front047.jpg',
          back: 'usa_back047.jpg'
        }
      },
      {
        city: 'Atlanta, GA',
        coord: {lat: 33.749, lng: -84.388},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front046.jpg',
          back: 'usa_back046.jpg'
        }
      },
      {
        city: 'Atlanta, GA',
        coord: {lat: 33.749, lng: -84.388},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front045.jpg',
          back: 'usa_back045.jpg'
        }
      },
      {
        city: 'Gatlinburg, TN',
        coord: {lat: 35.714, lng: -83.51},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front044.jpg',
          back: 'usa_back044.jpg'
        }
      },
      {
        city: 'Gatlinburg, TN',
        coord: {lat: 35.714, lng: -83.51},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front043.jpg',
          back: 'usa_back043.jpg'
        }
      },
      {
        city: 'Gatlinburg, TN',
        coord: {lat: 35.714, lng: -83.51},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front042.jpg',
          back: 'usa_back042.jpg'
        }
      },
      {
        city: 'Gatlinburg, TN',
        coord: {lat: 35.714, lng: -83.51},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front041.jpg',
          back: 'usa_back041.jpg'
        }
      },
      {
        city: 'Savannah, GA',
        coord: {lat: 32.084, lng: -81.1},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front040.jpg',
          back: 'usa_back040.jpg'
        }
      },
      {
        city: 'Hilton Head Island, SC',
        coord: {lat: 32.216, lng: -80.753},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front039.jpg',
          back: 'usa_back039.jpg'
        }
      },
      {
        city: 'Hilton Head Island, SC',
        coord: {lat: 32.216, lng: -80.753},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front038.jpg',
          back: 'usa_back038.jpg'
        }
      },
      {
        city: 'Pittsburgh, PA',
        coord: {lat: 40.441, lng: -79.996},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front037.jpg',
          back: 'usa_back037.jpg'
        }
      },
      {
        city: 'Irwin, PA',
        coord: {lat: 40.325, lng: -79.701},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front036.jpg',
          back: 'usa_back036.jpg'
        }
      },
      {
        city: 'Irwin, PA',
        coord: {lat: 40.325, lng: -79.701},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front035.jpg',
          back: 'usa_back035.jpg'
        }
      },
      {
        city: 'Shelbyville, IN',
        coord: {lat: 39.521, lng: -85.777},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front034.jpg',
          back: 'usa_back034.jpg'
        }
      },
      {
        city: 'Detroit, MI',
        coord: {lat: 42.331, lng: -83.046},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front033.jpg',
          back: 'usa_back033.jpg'
        }
      },
      {
        city: 'Irwin, PA',
        coord: {lat: 40.325, lng: -79.701},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front032.jpg',
          back: 'usa_back032.jpg'
        }
      },
      {
        city: 'Hickory, NC',
        coord: {lat: 35.734, lng: -81.344},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front031.jpg',
          back: 'usa_back031.jpg'
        }
      },
      {
        city: 'Washington, DC',
        coord: {lat: 38.907, lng: -77.037},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front030.jpg',
          back: 'usa_back030.jpg'
        }
      },
      {
        city: 'Round Rock, TX',
        coord: {lat: 30.508, lng: -97.679},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front029.jpg',
          back: 'usa_back029.jpg'
        }
      },
      {
        city: 'Bedford Park, IL',
        coord: {lat: 41.764, lng: -87.781},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front028.jpg',
          back: 'usa_back028.jpg'
        }
      },
      {
        city: 'Westfield, WI',
        coord: {lat: 43.884, lng: -89.493},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front027.jpg',
          back: 'usa_back027.jpg'
        }
      },
      {
        city: 'Westfield, WI',
        coord: {lat: 43.884, lng: -89.493},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front026.jpg',
          back: 'usa_back026.jpg'
        }
      },
      {
        city: 'Westfield, WI',
        coord: {lat: 43.884, lng: -89.493},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front025.jpg',
          back: 'usa_back025.jpg'
        }
      },
      {
        city: 'Westfield, WI',
        coord: {lat: 43.884, lng: -89.493},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front024.jpg',
          back: 'usa_back024.jpg'
        }
      },
      {
        city: 'Westfield, WI',
        coord: {lat: 43.884, lng: -89.493},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front023.jpg',
          back: 'usa_back023.jpg'
        }
      },
      {
        city: 'Westfield, WI',
        coord: {lat: 43.884, lng: -89.493},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front022.jpg',
          back: 'usa_back022.jpg'
        }
      },
      {
        city: 'Westfield, WI',
        coord: {lat: 43.884, lng: -89.493},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front021.jpg',
          back: 'usa_back021.jpg'
        }
      },
      {
        city: 'Westfield, WI',
        coord: {lat: 43.884, lng: -89.493},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front020.jpg',
          back: 'usa_back020.jpg'
        }
      },
      {
        city: 'Westfield, WI',
        coord: {lat: 43.884, lng: -89.493},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front019.jpg',
          back: 'usa_back019.jpg'
        }
      },
      {
        city: 'Westfield, WI',
        coord: {lat: 43.884, lng: -89.493},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front018.jpg',
          back: 'usa_back018.jpg'
        }
      },
      {
        city: 'Tupelo, MS',
        coord: {lat: 34.258, lng: -88.703},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front017.jpg',
          back: 'usa_back017.jpg'
        }
      },
      {
        city: 'San Diego, CA',
        coord: {lat: 32.716, lng: -117.161},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front016.jpg',
          back: 'usa_back016.jpg'
        }
      },
      {
        city: 'Alexandria, VA,',
        coord: {lat: 38.805, lng: -77.047},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front015.jpg',
          back: 'usa_back015.jpg'
        }
      },
      {
        city: 'Cliffside Park, NJ',
        coord: {lat: 40.821, lng: -73.988},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front014.jpg',
          back: 'usa_back014.jpg'
        }
      },
      {
        city: 'Harrisburg, PA',
        coord: {lat: 40.273, lng: -76.887},
        insta: null,
        displayBack: false,
        images: {
          front: 'usa_front013.jpg',
          back: 'usa_back013.jpg'
        }
      },
      {
        city: 'DeKalb, IL',
        coord: {lat: 41.929, lng: -88.75},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front012.jpg',
          back: 'usa_back012.jpg'
        }
      },
      {
        city: 'Somerset, KY',
        coord: {lat: 37.092, lng: -84.604},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front011.jpg',
          back: 'usa_back011.jpg'
        }
      },
      {
        city: 'Alma, MI',
        coord: {lat: 43.379, lng: -84.66},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front010.jpg',
          back: 'usa_back010.jpg'
        }
      },
      {
        city: 'McLean, VA',
        coord: {lat: 38.934, lng: -77.177},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front009.jpg',
          back: 'usa_back009.jpg'
        }
      },
      {
        city: 'Cleveland, OH',
        coord: {lat: 41.499, lng: -81.694},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front008.jpg',
          back: 'usa_back008.jpg'
        }
      },
      {
        city: 'St. Petersburg, FL',
        coord: {lat: 27.752, lng: -82.627},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front007.jpg',
          back: 'usa_back007.jpg'
        }
      },
      {
        city: 'Gorham, NH',
        coord: {lat: 44.388, lng: -71.173},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front006.jpg',
          back: 'usa_back006.jpg'
        }
      },
      {
        city: 'Dayton, OH',
        coord: {lat: 39.759, lng: -84.192},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front005.jpg',
          back: 'usa_back005.jpg'
        }
      },
      {
        city: 'Lafayette, LA',
        coord: {lat: 30.224, lng: -92.02},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front004.jpg',
          back: 'usa_back004.jpg'
        }
      },
      {
        city: 'Baltimore, MD',
        coord: {lat: 39.29, lng: -76.612},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front003.jpg',
          back: 'usa_back003.jpg'
        }
      },
      {
        city: 'Hurst, TX',
        coord: {lat: 32.823, lng: -97.171},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front002.jpg',
          back: 'usa_back002.jpg'
        }
      },
      {
        city: 'Allen, TX',
        coord: {lat: 33.103, lng: -96.671},
        insta: null,
        displayBack: true,
        images: {
          front: 'usa_front001.jpg',
          back: 'usa_back001.jpg'
        }
      }
    ]
  }
];
