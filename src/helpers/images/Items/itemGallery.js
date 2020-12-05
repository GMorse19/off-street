import React from 'react'

export const itemGallery = [{
  type: 'Flag',
  style: 'standard',
  id: '1',
  imgId: '1',
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
            },{
              src: process.env.PUBLIC_URL + '/Flags/B&W/B&W-back.jpg',
              id: 5
            }
           ]
},
{
  type: 'Flag gallery',
  style: 'standard',
  id: '2',
  imgId: '1',
  class: 'two flag-image2',
  name: 'front',
  src: process.env.PUBLIC_URL + '/Flags/RedWhite&Blue/Flag.jpg',
},
{
  type: 'Item',
  style: 'chalk board',
  id: '11',
  imgId: '11',
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
  type: 'Item',
  style: 'bird house',
  id: '17',
  imgId: '17',
  class: 'one flag-image2',
  description: <p>Hidden compartment bird house. From house keys to adult
  beverages, hide what ever you like inside this beautifully hand crafted
  "byrd" house.</p>,
  name: 'Byrd House',
  price: '$70.00',
  src: process.env.PUBLIC_URL + '/Stock/birdHouse.jpg',
},
{
  type: 'Flag gallery',
  style: 'standard',
  id: '3',
  imgId: '1',
  class: 'three flag-image2',
  name: 'sawdust',
  src: process.env.PUBLIC_URL + '/Flags/RedWhite&Blue/Flag2.jpg',
},
{
  type: 'Flag gallery',
  style: 'standard',
  id: '4',
  imgId: '1',
  class: 'two flag-image2',
  name: 'flat',
  src: process.env.PUBLIC_URL + '/Flags/RedWhite&Blue/Flag-flat.jpg',
},
{
  type: 'Flag',
  style: 'fire',
  id: '5',
  imgId: '5',
  class: 'four flag-image2',
  description: <p>Honor your fire fighters with this hand crafted, carefully
  burned fire flag.</p>,
  name: 'Fire Flag',
  price: '$40.00',
  src: process.env.PUBLIC_URL + '/Flags/RedLine/FireFlagCutOut.jpg',
  gallery: [
    {
    src: process.env.PUBLIC_URL + '/Flags/RedLine/FireFlag.jpg',
    id: 1
  },{
    src: process.env.PUBLIC_URL + '/Flags/B&W/B&W-back.jpg',
    id: 2
  }
]
},
{
  type: 'Flag gallery',
  style: 'fire',
  id: '6',
  imgId: '5',
  class: 'three flag-image2',
  name: 'cutout',
  src: process.env.PUBLIC_URL + '/Flags/RedLine/FireFlag.jpg',
},
{
  type: 'Flag',
  style: 'blackAndWhite',
  id: '7',
  imgId: '7',
  class: 'one flag-image2',
  description: <p>Black and white hand burned flag.</p>,
  name: 'Black and White',
  price: '$40.00',
  src: process.env.PUBLIC_URL + '/Flags/B&W/B&W.jpg',
  gallery: [
    {
    src: process.env.PUBLIC_URL + '/Flags/B&W/B&W-angle.jpg',
    id: 1
  },{
    src: process.env.PUBLIC_URL + '/Flags/B&W/B&W-back.jpg',
    id: 2
  }
]
},
{
  type: 'Flag gallery',
  style: 'blackAndWhite',
  id: '8',
  imgId: '7',
  class: 'four flag-image2',
  name: 'angle',
  src: process.env.PUBLIC_URL + '/Flags/B&W/B&W-angle.jpg',
},
{
  type: 'Flag gallery',
  style: 'blackAndWhite',
  id: '9',
  imgId: '1',
  class: 'two flag-image2',
  name: 'back',
  src: process.env.PUBLIC_URL + '/Flags/B&W/B&W-back.jpg'
},
{
  type: 'Flag gallery',
  style: 'random',
  id: '10',
  imgId: '7',
  class: 'three flag-image2',
  name: 'oldboards',
  src: process.env.PUBLIC_URL + '/Flags/old-boards.jpg'
},
{
  type: 'Item',
  style: 'pumpkin',
  id: '16',
  imgId: '16',
  class: 'three flag-image2',
  description: <p>Halloween jack-o-lantern made from 4x4 block.</p>,
  name: 'Block Pumkin',
  price: '$10.00',
  src: process.env.PUBLIC_URL + '/Stock/4x4Pump.jpg',
},
{
  type: 'Item',
  style: 'bottle opener',
  id: '12',
  imgId: '12',
  class: 'two flag-image2',
  description: <p>One of a kind bottle opener and hook set made from one piece
  of re-purposed fir and hardware.</p>,
  story: <p>This piece was made from a stud that was removed from a house in
  Newton MA during a renovation in 2015. The house was originally built in 1896.</p>,
  name: 'Bottle Opener',
  price: '$50.00',
  src: process.env.PUBLIC_URL + '/Stock/BottleOpenerSet.jpg',
  gallery: [
    {
      src: process.env.PUBLIC_URL + '/Stock/BottleOpenerCloseUp.jpg',
      id: 1
    },{
      src: process.env.PUBLIC_URL + '/Stock/BottleOpenerParts.jpg',
      id: 2
    }
  ]
},
{
  type: 'Item gallery',
  style: 'bottle opener',
  id: '21',
  imgId: '12',
  class: 'one flag-image2',
  name: 'Bottle Opener',
  src: process.env.PUBLIC_URL + '/Stock/BottleOpenerCloseUp.jpg'
},
{
  type: 'Item gallery',
  style: 'bottle opener',
  id: '22',
  imgId: '12',
  class: 'one flag-image2',
  name: 'Bottle Opener',
  src: process.env.PUBLIC_URL + '/Stock/BottleOpenerParts.jpg',
},
{
  type: 'Item gallery',
  style: 'chalk board',
  id: '13',
  imgId: '11',
  class: 'one flag-image2',
  name: 'Chalk Board',
  src: process.env.PUBLIC_URL + '/Stock/ChalkSide.jpg'
},
{
  type: 'Item',
  style: 'pumkin',
  description: <p>One of a kind Pumkin cutout made with scrap plywood.</p>,
  id: '14',
  imgId: '14',
  class: 'three flag-image2',
  name: 'Jack-O-Lantern',
  price: '$30.00',
  src: process.env.PUBLIC_URL + '/Stock/PlyWoodPump.jpg',
},
{
  type: 'Item',
  style: 'table',
  id: '15',
  imgId: '15',
  class: 'two flag-image2',
  name: 'Scrap Wood Table',
  price: '$99.95',
  src: process.env.PUBLIC_URL + '/Stock/TableMashup.jpg',
},
{
  type: 'Item',
  style: 'table',
  description: <p>Folding flag table hand crafted from 100% reclaimed scrap wood.</p>,
  id: '18',
  imgId: '18',
  class: 'two flag-image2',
  name: 'Folding Flag Table',
  price: '$75.99',
  src: process.env.PUBLIC_URL + '/Stock/folding-table.jpg',
  gallery: [
    {
      src: process.env.PUBLIC_URL + '/Stock/folding-table.jpg',
      id: 1
    },
    {
      src: process.env.PUBLIC_URL + '/Stock/folded-table.jpg',
      id: 2
    }
  ]
},
{
  type: 'Flag gallery',
  style: 'blackAndWhite',
  id: '20',
  imgId: '18',
  class: 'four flag-image2',
  name: 'Folding Table',
  src: process.env.PUBLIC_URL + '/Stock/folded-table.jpg',
},
{
  type: 'Flag gallery',
  style: 'blackAndWhite',
  id: '19',
  imgId: '19',
  class: 'four flag-image2',
  description: <p>Hand made American flag representing military, fire department, and police department.</p>,
  name: 'First Responders Flag',
  src: process.env.PUBLIC_URL + '/Flags/B&W/military-flags.jpg',
},

]
