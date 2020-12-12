
/*Создать 2 объекта с различными полями. 
Написать код,который переберёт оба объекта и сконкатениурет все поля-массивы, 
которые сохранятся в переменную `allArrays = [...]`. 
Посчитать сумму чисельных элементов в массивах.
  *Объекты только одноуровневые
*/

obj1 = {
  field1: [1,3,5],
  field2: [2,4,6],
  field3: [6,6,7],
  field4: [4,7,8]
}

obj2 = {
  field5: [1,3,5],
  field6: [2,4,6],
  field7: [6,6,7],
  field8: [4,7,9]
}

allArrays = [];

sum = 0;

for (key in obj1){
  if (Array.isArray(obj1[key])){
    for (i = 0; i < obj1[key].length; i++){
      allArrays.push(obj1[key][i]);
      if (typeof obj1[key][i] == 'number'){
        sum +=  obj1[key][i];
      } 
    } 
  } 
} 
for (key in obj2){
  if (Array.isArray(obj2[key])){
    for (i = 0; i < obj2[key].length; i++){
      allArrays.push(obj2[key][i]);
      if (typeof obj2[key][i] == 'number'){
        sum += obj2[key][i];
      }
    } 
  } 
} 

console.log(allArrays);
console.log(sum);
