/* Написать функцию getMaxs(args), где args - любое количество массивов.
    Функция должна вернуть максимумы всех переданных массивов в виде строки,
    через разделитель `,` */

function getMaxOne(args){
  if(!Array.isArray(args)){
    return console.error('Not array');
  }
  let maxValue = args[0];

  for (let i = 1; i < args.length; i++){
    if(args[i] > maxValue){
      maxValue = args[i];
    }
  }
  return maxValue;
};

function getMaxs(allArrays){
  let maxs = [];

  for(let i = 0; i < allArrays.length; i++){
    maxs.push(getMaxOne(allArrays[i]));
  }
  return maxs.join(',')
}

arr1 = [5,8,8,9,10];
arr2 = [7,9,10,20];
arr3 = [7,8,9,2];

let maxValues = [arr1, arr2, arr3];

console.log(getMaxs(maxValues));
