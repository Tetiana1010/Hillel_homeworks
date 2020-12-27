/* Создать функцию, которая исключает из строки все символы, 
которые мы передали вторым аргументом.
'func("hello world", ['l', 'd'])' вернет нам "heo wor" */

// function func (str, restrictedList){

//   for(i = 0; i <= restrictedList.length-1; i++ ) {
//     str = str.split(restrictedList[i]).join('')
//   } 

//   /* for(let i in restrictedList) {
//     str = str.split(restrictedList[i]).join('')
//   } */

//   /* for (let char of restrictedList) {
//     str = str.split(char).join('')
//   } */
  
//   return str;
// }

// console.log(func("hello world", ['l', 'd']));

// var y;
// // console.log(x);
// console.log(y); // undefined


// x = 10;
// var y = 20;

// function f (str){
  
//   var sep = ', ';
//   var res = str + sep + 'world';

//   return res.toLocaleLowerCase();


// }

// console.log(f('hello'));


// function f1(){

//   var source = 'source';
//   f2();

//   function f2(){
//     console.log(source)

//   }
// }

// // f1();
// let x = 10;
// z = 70;

// function f1(){
//   let x = 100;

//   f2();
//   function f2(){

//     console.log(x)
//     console.log(window.x)
//     console.log(isFinite(10/0))
//   }
// }

// f1();

function f1(){
  function f(){
    console.log('dfgh')
  }
  

  return f;

}

let result = f1();

result();