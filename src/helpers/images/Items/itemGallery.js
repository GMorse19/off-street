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
            },{
              src: process.env.PUBLIC_URL + '/Flags/RedWhite&Blue/Flag-flat.jpg',
              id: 4
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
  description: <p>Hand Made chalk board and organizer made with re-purposed
  Off Street rescue wood.</p>,
  name: 'Chalk Board',
  price: '$60.00',
  src: process.env.PUBLIC_URL + '/Stock/Chalk.png',
  gallery: [
    {
      src: process.env.PUBLIC_URL + '/Stock/ChalkSide.jpg',
      id: 1
    }
  ]
},
{
  type: 'item',
  id: '17',
  class: 'one flag-image2',
  description: <p>Hidden compartment bird house. From house keys to adult
  beverages, hide what ever you like inside this beautifully hand crafted
  "byrd" house.</p>,
  name: 'Byrd House',
  price: '$70.00',
  src: process.env.PUBLIC_URL + '/Stock/birdHouse.jpg',
  gallery: [{

  }]
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
  description: <p>Honor your fire fighters with this hand crafted, carefully
  burned fire flag.</p>,
  name: 'Fire Flag',
  price: '$40.00',
  src: process.env.PUBLIC_URL + '/Flags/RedLine/FireFlagCutOut.jpg',
  gallery: [{
    src: process.env.PUBLIC_URL + '/Flags/RedLine/FireFlag.jpg',
    id: 1
  }]
},
{
  type: 'fire',
  id: '6',
  class: 'three flag-image2',
  name: 'cutout',
  src: process.env.PUBLIC_URL + '/Flags/RedLine/FireFlag.jpg',
},
{
  type: 'blackAndWhite',
  id: '7',
  class: 'one flag-image2',
  description: <p>Black and white hand burned flag.</p>,
  name: 'front',
  price: '$40.00',
  src: process.env.PUBLIC_URL + '/Flags/B&W/B&W.jpg',
  gallery: [{
    src: process.env.PUBLIC_URL + '/Flags/B&W/B&W-angle.jpg',
    id: 1
  }]
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
  description: <p>Halloween jack-o-lantern made from 4x4 block.</p>,
  name: 'Block Pumkin',
  price: '$10.00',
  src: process.env.PUBLIC_URL + '/Stock/4x4Pump.jpg',
  gallery: [
    {

    }
  ]
},
{
  type: 'random',
  id: '12',
  class: 'two flag-image2',
  description: <p></p>,
  name: 'Bottle Opener',
  price: '$50.00',
  src: process.env.PUBLIC_URL + '/Stock/BottleOpenerSet.jpg',
  gallery: [
    {

    }
  ]
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
  name: 'Jack-O-Lantern',
  price: '$30.00',
  src: process.env.PUBLIC_URL + '/Stock/PlyWoodPump.jpg',
  gallery: [
    {

    }
  ]
},
{
  type: 'random',
  id: '15',
  class: 'two flag-image2',
  name: 'Scrap Wood Table',
  price: '$99.95',
  src: process.env.PUBLIC_URL + '/Stock/TableMashup.jpg',
  gallery: [
    {

    }
  ]
}

]
