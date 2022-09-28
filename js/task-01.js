// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesRef = document.querySelector('#categories');
// console.log(categoriesRef)

// const categoriesItemsRef = categoriesRef.querySelectorAll('.item')

console.log(categoriesItemsRef)

console.log(`Number of categories: ${categoriesRef.children.length}`);

const categoriesSumRef = categoriesRef => {

    for (const childElem of categoriesRef.children) {
        // console.log(chilElem.children)

        console.log('\n');

        for (const childInnerElem of childElem.children) {
            // console.log(childInnerElem)
            if (childInnerElem.localName === 'h2') {
                console.log(`Category:${childInnerElem.textContent}`)
            };

            if (childInnerElem.localName === 'ul') {
                console.log(`Elements:${childInnerElem.children.length}`)
            };
        };
    };
};

categoriesSumRef(categoriesRef)




