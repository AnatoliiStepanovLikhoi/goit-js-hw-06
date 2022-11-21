// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtnRef = document.querySelectorAll('button')[0];
const incrementBtnRef = document.querySelectorAll('button')[1];
const valueRef = document.querySelector('#value');

console.log(decrementBtnRef);

// const counter = {
//     value: 0,

//     increment() {
//         this.value += 1
//     },

//     decrement() {
//         this.value -=1
//     }
// }

class Counter {
    constructor(value = 0) {
        this.value = value
    }

        increment() {
        this.value += 1
    }

        decrement() {
        this.value -=1
    }

}

const numberCounter = new Counter(0)

decrementBtnRef.addEventListener('click', () => {

    numberCounter.decrement();

    valueRef.textContent = numberCounter.value;
})

incrementBtnRef.addEventListener('click', () => {
    numberCounter.increment();

    valueRef.textContent = numberCounter.value;
})



