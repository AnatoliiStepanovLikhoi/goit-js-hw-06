function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  changeColorBTN: document.querySelector('.change-color'),
  displayColorSpan: document.querySelector('.color'),
  bodyRef: document.querySelector('body'),
}

function onRandomButtonClick() {
  const randomBodyColor = getRandomHexColor();

  refs.bodyRef.style.backgroundColor = randomBodyColor;
  refs.displayColorSpan.textContent = randomBodyColor;
}


refs.changeColorBTN.addEventListener('click', onRandomButtonClick);
