/*Написать функцию заполнения случайными значениями одномерного массива с указанием длины.
 Диапазон - на свой вкус
`fillArray(A, 20);`*/


function fillArray(A, len){
  while(A.length < len){
    A.push(Math.floor(Math.random()*10));
  } 
  while(A.length > len){
    A.pop();
  } 
  return A;
}

A = [5,7,7,8,9,40];

console.log(fillArray(A, 20));