/* Создать функцию, которая исключает из строки все символы, 
которые мы передали вторым аргументом.
'func("hello world", ['l', 'd'])' вернет нам "heo wor" */

function func (str, restrictedList){

  for(i = 0; i <= restrictedList.length-1; i++ ) {
    str = str.split(restrictedList[i]).join('')
  } 

  /* for(let i in restrictedList) {
    str = str.split(restrictedList[i]).join('')
  } */

  /* for (let char of restrictedList) {
    str = str.split(char).join('')
  } */
  
  return str;
}

console.log(func("hello world", ['l', 'd']));