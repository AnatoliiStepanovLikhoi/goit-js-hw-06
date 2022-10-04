const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListRef = document.querySelector('.gallery')

console.log(galleryListRef);

const makegalleryMarkup = images => {
  return images.map(image => {
    const imgItem = document.createElement("img");
    const liItem = document.createElement("li");
    imgItem.src = image.url;
    imgItem.alt = image.alt;
    imgItem.width = 350;
    liItem.append(imgItem)
    return liItem
  })
}

// console.log(makegalleryMarkup)

const galleryElems = makegalleryMarkup(images)

galleryListRef.append(...galleryElems)


// const makegalleryMarkup = images.map(({url, alt}) => 
//  `<li class = 'gallery__item'>
//   <img class = 'gallery__img' src="${url}" 
//   alt="${alt}" width="400">
//   </li>`
// ).join(``)

// galleryListRef.insertAdjacentHTML('beforeend', makegalleryMarkup)
