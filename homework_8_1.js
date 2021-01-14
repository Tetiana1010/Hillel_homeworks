/* Написать функцию getMaxs(args), где args - любое количество массивов.
    Функция должна вернуть максимумы всех переданных массивов в виде строки,
    через разделитель `,` */

// function getMaxOne(args){
//   if(!Array.isArray(args)){
//     return console.error('Not array');
//   }
//   let maxValue = args[0];

//   for (let i = 1; i < args.length; i++){
//     if(args[i] > maxValue){
//       maxValue = args[i];
//     }
//   }
//   return maxValue;
// };

// function getMaxs(allArrays){
//   let maxs = [];

//   for(let i = 0; i < allArrays.length; i++){
//     maxs.push(getMaxOne(allArrays[i]));
//   }
//   return maxs.join(',')
// }

// arr1 = [5,8,8,9,10];
// arr2 = [7,9,10,20];
// arr3 = [7,8,9,2];

// let maxValues = [arr1, arr2, arr3];

// console.log(getMaxs(maxValues));



// ------------------------------------------------------------------------------------------

// let elem = document.getElementById('example');



// setTimeout(function(){
//   elem.title =  'Test';
// }, 2000)

// console.log(elem)


// #2 -- change attributes - class, id, style

// let elem = document.getElementById('example');

// elem.title = 'test';

// console.dir(elem)

// #2 -- change content -- innerHTML

let elem = document.getElementById('example');

// elem.title = 'test'

elem.className = elem.className + ' color-red';

// add -- добавленые
elem.classList.add('color-red');


// remuve -- удаление
elem.classList.remove('active');

console.dir(elem);

// contains -- проверка на наличие
console.dir(elem.classList.contains('coffdx-red'));

//toggle -- проверка на наличие/ добавление 
elem.classList.toggle('fdg');
// elem.classList.toggle('color-red'); // удаление при наличии;


console.dir(elem);

elem.style.top = getR() + 'px';

console.log(elem.style)


// style

function getR(min, max) {
  return Math.floor(Math.random()*400)
}


document.body.style.backgroundColor = 'rgb'