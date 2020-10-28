import React from 'react'

export const itemGallery = [{
  type: 'standard',
  id: '1',
  class: 'one flag-image2',
  description: <p>Custom made, hand painted American Flag made with rescue wood
  from construction sites in the Boston area. Each stripe and union is burned
  individually.</p>,
  name: 'Full Color American Flag',
  price: '$40.00',
  src: process.env.PUBLIC_URL + '/Flags/RedWhite&Blue/FlagCutOut.png',
  gallery: [{
              src: process.env.PUBLIC_URL + '/Flags/RedWhite&Blue/Flag.jpg',
              id: 1
            },{
              src: process.env.PUBLIC_URL + '/Flags/RedWhite&Blue/Flag2.jpg',
              id: 2
            },{
              src: process.env.PUBLIC_URL + '/Flags/RedWhite&Blue/Flag.jpg',
              id: 3
            }
           ]
},
{
  type: 'standard',
  id: '2',
  class: 'two flag-image2',
  name: 'front',
  src: process.env.PUBLIC_URL + '/Flags/RedWhite&Blue/Flag.jpg',
},
{
  type: 'item',
  id: '11',
  class: 'three flag-image2',
  name: 'chalkBoard',
  src: process.env.PUBLIC_URL + '/Stock/Chalk.png'
},
{
  type: 'item',
  id: '17',
  class: 'one flag-image2',
  name: 'Bird House',
  src: process.env.PUBLIC_URL + '/Stock/birdHouse.jpg'
},
{
  type: 'standard',
  id: '3',
  class: 'three flag-image2',
  name: 'sawdust',
  src: process.env.PUBLIC_URL + '/Flags/RedWhite&Blue/Flag2.jpg',
},
{
  type: 'standard',
  id: '4',
  class: 'two flag-image2',
  name: 'flat',
  src: process.env.PUBLIC_URL + '/Flags/RedWhite&Blue/Flag-flat.jpg',
},
{
  type: 'fire',
  id: '5',
  class: 'four flag-image2',
  name: 'front',
  src: process.env.PUBLIC_URL + '/Flags/RedLine/FireFlag.jpg',
},
{
  type: 'fire',
  id: '6',
  class: 'three flag-image2',
  name: 'cutout',
  src: process.env.PUBLIC_URL + '/Flags/RedLine/FireFlagCutOut.jpg',
},
{
  type: 'blackAndWhite',
  id: '7',
  class: 'one flag-image2',
  name: 'front',
  src: process.env.PUBLIC_URL + '/Flags/B&W/B&W.jpg',
},
{
  type: 'blackAndWhite',
  id: '8',
  class: 'four flag-image2',
  name: 'angle',
  src: process.env.PUBLIC_URL + '/Flags/B&W/B&W-angle.jpg',
},
{
  type: 'blackAndWhite',
  id: '9',
  class: 'two flag-image2',
  name: 'back',
  src: process.env.PUBLIC_URL + '/Flags/B&W/B&W-back.jpg'
},
{
  type: 'random',
  id: '10',
  class: 'three flag-image2',
  name: 'oldboards',
  src: process.env.PUBLIC_URL + '/Flags/old-boards.jpg'
},
{
  type: 'random',
  id: '16',
  class: 'three flag-image2',
  name: 'Block Pumkin',
  src: process.env.PUBLIC_URL + '/Stock/4x4Pump.jpg'
},
{
  type: 'random',
  id: '12',
  class: 'two flag-image2',
  name: 'Bottle Opener',
  src: process.env.PUBLIC_URL + '/Stock/BottleOpenerSet.jpg'
},
{
  type: 'random',
  id: '13',
  class: 'one flag-image2',
  name: 'Chalk Board',
  src: process.env.PUBLIC_URL + '/Stock/ChalkSide.jpg'
},
{
  type: 'random',
  description: <p>One of a kind Pumkin cutout made with scrap plywood.</p>,
  id: '14',
  class: 'three flag-image2',
  name: 'Jock-O-Lantern',
  src: process.env.PUBLIC_URL + '/Stock/PlyWoodPump.jpg'
},
{
  type: 'random',
  id: '15',
  class: 'two flag-image2',
  name: 'Scrap Wood Table',
  src: process.env.PUBLIC_URL + '/Stock/TableMashup.jpg'
}

]
