// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає 
// один параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим 
// від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

const refs = {
  divControls: document.querySelector('#controls'),
  numberInput: document.querySelector('#controls > input'),
  divBoxes: document.querySelector('#boxes'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]')
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let divMarkup = [];

  for (let i = 0; i < amount; i += 1) {
    
    const divDims = 30 + i * 10;

    // console.log(divDims);
    // divMarkup += `<div style ="width: ${divDims}px; height: ${divDims}px; background-color: ${getRandomHexColor()}"></div>`;
    // console.log(divMarkup)
    
    const elem = document.createElement('div');
    elem.style.width = `${divDims}px`;
    elem.style.height = `${divDims}px`;
    elem.style.backgroundColor = getRandomHexColor();

    // console.log(elem)
    // divArray += elem.toString();

    divMarkup.push(elem);

  }
return divMarkup
  // console.log(divMarkup)
  // refs.divBoxes.insertAdjacentHTML('beforeend', divMarkup);
}

function destroyBoxes(){
  refs.divBoxes.innerHTML = '';
}

function onCreateBtnClick(){
  const number = refs.numberInput.value
  if (!number) {
    alert('Please fill number of boxes')
  }
  // console.log(number)
  refs.divBoxes.append(...createBoxes(number))

  refs.numberInput.value = '';
}

// console.log(createBoxes(3))

refs.createButton.addEventListener('click', onCreateBtnClick)

refs.destroyButton.addEventListener('click', destroyBoxes)

const onKeyDownCode= ({ code }) => {
  if (code === 'Enter') {
  onCreateBtnClick()
  }
  if (code === 'Escape') {
  destroyBoxes()
  }
};
  
window.addEventListener('keydown', onKeyDownCode)