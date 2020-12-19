import { itemGallery } from './images/Items/itemGallery'

export const handleItemList = (type) => {
  let itemList = []

  if (type === 'all') {
    itemList = (itemGallery.filter(product => product.type === 'Item' || product.type === 'Flag'))
  } else {
    itemList = (itemGallery.filter(product => product.type === type))
  }
  return (itemList)
}

export const handleType = (type) => {
  let tipo = ''

  if (type === 'all') {
    tipo = ''
  } else {
    tipo = type
  }

  return tipo
}
