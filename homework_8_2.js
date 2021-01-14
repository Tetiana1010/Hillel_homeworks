/* Написать функцию assignObjects(obj1, obj2), 
  которая принимает аргументами 2 объекта и возвращает новый,
  который состоит из свойство обоих объектов (склеить). 
  Если свойство повторяется, то взять значение второго объекта. 
  Object.assign() - не использовать */


function assignObjects(obj1, obj2){
  var obj3 = obj1;

  for (key in obj2) {
    obj3[key] = obj2[key];
  }
  return obj3;
}

x = {
  a: 1,
  b: 2,
}
  
y = {
  b: 5,
  c: 8,
  h: 9
}

console.log(assignObjects(x,y));







