/* В двумерном массив удалить столбцы где сумма элементов столбца < 0. 
Массив должен быть размером 10 на 10, 
заполненым случайными числам в диапазоне от -20 д+20 */

const A = new Array(10);

for (let i = 0; i < A.length; i++){
  A[i] = new Array(10);
  for (let j = 0; j < A[i].length; j++){
    A[i][j] = Math.floor(Math.random()*40-20);
  }
}

for ( i = 0; i < 10; i++){
  let sum = 0;
  for ( j = 0; j < A.length; j++){
    sum += A[j][i];
  } 

  console.log(sum);

  if(sum < 0){
    for( j = 0; j < 10; j++){
      delete A[j][i];
    }
  }
} 

console.log(A);

