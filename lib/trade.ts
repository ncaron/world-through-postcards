export interface Card {
  available: number;
  id: string;
  image: string;
}

export interface Group {
  cards: Card[];
  id: string;
  image: string;
  name: string;
}

export const tradeGroups: { [key: string]: Group } = {
  ad: {
    cards: [
      {
        available: 1,
        id: 'Ad Card 005',
        image: 'adCard_005.jpg',
      },
      {
        available: 1,
        id: 'Ad Card 004',
        image: 'adCard_004.jpg',
      },
      {
        available: 1,
        id: 'Ad Card 003',
        image: 'adCard_003.jpg',
      },
      {
        available: 1,
        id: 'Ad Card 002',
        image: 'adCard_002.jpg',
      },
      {
        available: 1,
        id: 'Ad Card 001',
        image: 'adCard_001.jpg',
      },
    ],
    id: 'ad',
    image: 'ad.jpg',
    name: 'Ad Cards',
  },
  womenInScience: {
    cards: [
      {
        available: 2,
        id: 'Women In Science 049',
        image: 'womenInScience_049.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 048',
        image: 'womenInScience_048.jpg',
      },
      {
        available: 2,
        id: 'Women In Science 047',
        image: 'womenInScience_047.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 046',
        image: 'womenInScience_046.jpg',
      },
      {
        available: 2,
        id: 'Women In Science 045',
        image: 'womenInScience_045.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 044',
        image: 'womenInScience_044.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 043',
        image: 'womenInScience_043.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 042',
        image: 'womenInScience_042.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 041',
        image: 'womenInScience_041.jpg',
      },
      {
        available: 2,
        id: 'Women In Science 040',
        image: 'womenInScience_040.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 039',
        image: 'womenInScience_039.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 038',
        image: 'womenInScience_038.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 037',
        image: 'womenInScience_037.jpg',
      },
      {
        available: 2,
        id: 'Women In Science 036',
        image: 'womenInScience_036.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 035',
        image: 'womenInScience_035.jpg',
      },
      {
        available: 2,
        id: 'Women In Science 034',
        image: 'womenInScience_034.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 033',
        image: 'womenInScience_033.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 032',
        image: 'womenInScience_032.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 031',
        image: 'womenInScience_031.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 030',
        image: 'womenInScience_030.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 029',
        image: 'womenInScience_029.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 028',
        image: 'womenInScience_028.jpg',
      },
      {
        available: 2,
        id: 'Women In Science 027',
        image: 'womenInScience_027.jpg',
      },
      {
        available: 2,
        id: 'Women In Science 026',
        image: 'womenInScience_026.jpg',
      },
      {
        available: 2,
        id: 'Women In Science 025',
        image: 'womenInScience_025.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 024',
        image: 'womenInScience_024.jpg',
      },
      {
        available: 2,
        id: 'Women In Science 023',
        image: 'womenInScience_023.jpg',
      },
      {
        available: 2,
        id: 'Women In Science 022',
        image: 'womenInScience_022.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 021',
        image: 'womenInScience_021.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 020',
        image: 'womenInScience_020.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 019',
        image: 'womenInScience_019.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 018',
        image: 'womenInScience_018.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 017',
        image: 'womenInScience_017.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 016',
        image: 'womenInScience_016.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 015',
        image: 'womenInScience_015.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 014',
        image: 'womenInScience_014.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 013',
        image: 'womenInScience_013.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 012',
        image: 'womenInScience_012.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 011',
        image: 'womenInScience_011.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 010',
        image: 'womenInScience_010.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 009',
        image: 'womenInScience_009.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 008',
        image: 'womenInScience_008.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 007',
        image: 'womenInScience_007.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 006',
        image: 'womenInScience_006.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 005',
        image: 'womenInScience_005.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 004',
        image: 'womenInScience_004.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 003',
        image: 'womenInScience_003.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 002',
        image: 'womenInScience_002.jpg',
      },
      {
        available: 1,
        id: 'Women In Science 001',
        image: 'womenInScience_001.jpg',
      },
    ],
    id: 'womenInScience',
    image: 'womenInScience',
    name: 'Women In Science',
  },
};
