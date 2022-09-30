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

console.log(`Number of categories: ${categoriesRef.children.length}`);

const categoriesSumRef = categoriesRef => {

    for (const childElem of categoriesRef.children) {
        // console.log(chilElem.children)

        console.log(' ');

        for (const childInnerElem of childElem.children) {
            // console.log(childInnerElem)
            if (childInnerElem.nodeName === 'H2') {
                console.log(`Category:${childInnerElem.textContent}`)
            };

            if (childInnerElem.nodeName === 'UL') {
                console.log(`Elements:${childInnerElem.children.length}`)
            };
        };
    };
};

categoriesSumRef(categoriesRef)


// const ulCategoriesRef = document.querySelector("#categories");
// const liRef = document.querySelectorAll(".item");
// console.log(`Number of categories: ${ulCategoriesRef.children.length}`);

// liRef.forEach((elem) => {
//   const h2Ref = elem.querySelector("h2");
//   const ulRef = elem.querySelector("ul");
//   console.log(" ");
//   console.log(`Category: ${h2Ref.innerText}`);
//   console.log(`Elements: ${ulRef.children.length}`);
// });




