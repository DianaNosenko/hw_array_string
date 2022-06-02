let a = [0, 2, 76, 14, 125, 9, -1, 35, -6, 100, 8, 12, -3, 0, -4]
console.log(`%cЗадан массив: [${a}]`, 'color: #f59542; font-weight: 600')
console.log('%c1. Отфильтруйте отрицательные элементы в массиве, оставив только положительные','font-weight: 900');


function isPositiveNum(el) {
    return el > 0;
}
console.log(`Массив положительных элементов: %c[${a.filter(isPositiveNum)}]`, 'color: #4caf50;');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('%c2. Найдите сумму элементов массива которые меньше 100 по значению','font-weight: 900');
function isLess100(el) {
    return el < 100;
}
let b = a.filter(isLess100);
console.log(`Массив элементов меньше ста:[${b}]`)
let resSum = b.reduce((el1, el2) => el1 + el2);
console.log(`Сумма элементов массива: %c${resSum}`, 'color: #4caf50;');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('%c3. Уменьшите каждый элемент массива на 3%','font-weight: 900');

let aLess3 = a.map(function(el){return el*0.97});
console.log(`Массив уменьшенный на 3%: %c[${aLess3}]`, 'color: #4caf50;');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let a2 = [0, 5, 8, 25, 4, 56, 9, 7, 10, 87, 0, 3, 6, 47]
console.log(`%cЗадан новый массив: [${a2}]`, 'color: #f59542; font-weight: 600');
console.log('%c4. Если все элементы массива меньше 100 увеличьте их на 5%','font-weight: 900');
let aLess100 = a2.every(isLess100)
let resPlus5;
if(aLess100 == true) {resPlus5 = a2.map((el) => el*1.05);
console.log(`Массив увеличенный на 5%: %c[${resPlus5}]`,'color: #4caf50;');
} else {console.log('%cВ массиве есть числа больше 100','color: #4caf50;')}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('%c5. Проверьте является ли слово палиндромом (например слово abcddcba подходит т.к. оно "зеркальное")','font-weight: 900');
let a3 = prompt('Введите слово (для проверки на палиндром)');
let stringToArray = Array.from(a3);                                       //Преобразование заданой строки в массив
let firstArr = stringToArray.slice(0,(stringToArray.length/2));           // Первая половина массива
let lasttArr = stringToArray.slice((stringToArray.length)/2);             // Вторая половина массива
let lastArrReverse = lasttArr.reverse();                                  // Реверс второй части массива
if (lastArrReverse.join() === firstArr.join()){console.log(`%cЗаданое слово ${a3} - палиндром`,'color: #4caf50;')
} else {console.log(`%cЗаданое слово ${a3} - не палиндром`,'color: #4caf50;')}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('%c6. Соедините две строки в одну и переверните наоборот','font-weight: 900');
let str1 = ' Hello', str2 = 'World';
console.log(`Первая строка %c'${str1}'`,'color: #f59542; font-weight: 600');
console.log(`Вторая строка %c'${str2}'`,'color: #f59542; font-weight: 600');
let toArray1 = Array.from(str1).reverse();     // Преобразование первого слова в массив и его реверс
let toArray2 = Array.from(str2).reverse();     // Преобразование второго слова в массив и его реверс
let resArray = toArray1.concat(toArray2);      // Соединение двух массивов
console.log(`Результат: %c${resArray.join('')}`, 'color: #4caf50;');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('%c7.* Напишите функцию, которая преобразует первую букву каждого слова строки в верхний регистр.','font-weight: 900');
let newString = prompt('Введите строку (для дальнейшего преобразования в верхний регистр)');
console.log(`Задана строка %c'${newString}'`,'color: #f59542; font-weight: 600');
let newArray = newString.split(' ');        // Превращение в массив строк
let doubles = newArray.map(function(el) {
  return Array.from(el);
}); 
toUpper = function(el){ 
    return el.toUpperCase();
  };
toUpperString = function(a){
    for(let i=0; i< a.length; i++){
        a[i][0] = toUpper(a[i][0]);
        a[i] = a[i].join('');
    }
    return a.join(' ')
}
let resString = toUpperString(doubles);
console.log(`Результат: %c${resString}`, 'color: #4caf50;')
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('%c8.* Вывести индексы минимальных элементов массива','font-weight: 900');
a2 = [0, 5, 8, 25, 4, 56, 9, 7, 10, 87, 0, 3, 6, 47]
console.log(`Задан массив %c[${a2}]`,'color: #f59542; font-weight: 600');
let min = Math.min.apply(Array, a2);
for(let i=0; i< a2.length; i++){
    if(a2[i] == min){
    console.log(`Индекс минимального элемента: %c${a2.indexOf(a2[i])}`, 'color: #4caf50;')
    a2[i]++
    } 
}







