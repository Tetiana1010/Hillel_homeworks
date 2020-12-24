/*Написать функцию, которая примет как аргументы(параметры) два массива 
и сравнит суммы всех ЧИСЛОВЫХ элементов.
Тот массив, сумма которого большая - должен вернутся функцией.*/


// function f (source1,source2){
  
//   let sum1 = 0;
//   let sum2 = 0;

//   for (var i = 0; i < source1.length; i++){
//     sum1 += source1[i]; 
//   } 
//   for (var j = 0; j < source2.length; j++){
//     sum2 += source2[j]; 
//   } 
   
//   if (sum1 > sum2){
//     return sum1;
//   } else {
//     return sum2;
//   }
// } 

// const array1 = [7,8,8,9];
// const array2 = [7,8,8,0,7,3,6];

// console.log(f(array1, array2));



function f(source1,source2){
  
  let sum1 = 0;
  let sum2 = 0;

  function getSum (source){
    let sum = 0;

    for(i = 0; i  < source.length; i++){
      sum +=  source[i]
    }
    return sum;
  }
  
  sum1 = getSum(source1);
  sum2 = getSum(source2);
   
  if (sum1 > sum2){
    return sum1;
  } else {
    return sum2;
  }  
} 


const array1 = [7,8,8,9];
const array2 = [7,8,8,0,7,3,8,6];

console.log(f(array1, array2));