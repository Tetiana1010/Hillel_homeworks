/*Написать функцию заполнения случайными значениями одномерного массива с указанием длины.
 Диапазон - на свой вкус
`fillArray(A, 20);`*/

function fillArray(A, len){
  
  A.length = len;

  for (var i = 0; i < A.length; i++){
    A[i] = Math.floor(Math.random()*10)
  }
  return A;
}

arr = [];
console.log(fillArray(arr, 20));