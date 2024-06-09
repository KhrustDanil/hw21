// 1
function pow(num, deegre) {
    return (deegre == 1) ? num : (num * pow(num, deegre - 1));
}

let num = +prompt('Введіть число яке будемо зводити в ступінь.', 3);
let deegre = +prompt('Введіть ступінь.', 5);

console.log(pow(num, deegre));
document.write(`Число ${num} в степені ${deegre} дорівнює: ${pow(num, deegre)} <br>`);

// 2
const array = [1, 2, 3, 4, 5, 6, 7];
const removeNum = +prompt('Введіть який елемент видалити', 5);

function removeElement(array, item) {
    const deleteEl = array.indexOf(item)
    if (deleteEl !== -1) {
        array.splice(deleteEl, 1);
    }
    return array;
}

console.log(removeElement(array, removeNum));
document.write(`Масив з виделаним елементом ${removeNum}: ${removeElement(array, removeNum)} <br>`);


// 3
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
    let key = '';
    for(i = 0; i < length; i++) {
        const randomIn = Math.floor(Math.random() * characters.length);
        key += characters[randomIn];
    }
    return key;
}

const key = generateKey(16, characters);
document.write(`Набір випадкових чисел: ${key}`);
console.log(key);
