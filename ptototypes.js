// let bool = new Boolean(false);
// let num = new Number(78);
// let str = new String('hello');

// console.log(bool);
// console.log(num);
// console.log(str)

// ------------------------------------------------------------
// let obj = {x: 10}
// console.log(obj);

//-------------------------------------------------------------

// const parent = {
//   x:10,
//   y:20,
// }

// const child = Object.create(parent); // child -- новый пустой object, который в своем прототипе имеет parent

// console.log(child); //  chold смотрит на --> parent, а тот на --> God object

// child.value = 'hello'; // добавление значений;
// child.z = 99;

// const superChild = Object.create(child);

// console.log(superChild);
//------------------------------------------------------------- 

/*
console.log(child);

for (const key in child){
  if(!child.hasOwnProperty(key)){  // достает только то что в child (value = 'hello'/ z = 99)
    continue; // пропускает то что в прототипе
  }
  console.log(key);
}
*/

// console.log(Object.getOwnPropertyNames(child));
//                -----------or---------------  достает только то что в child (value = 'hello'/ z = 99)
// console.log(Object.keys(child)); // --> лучше использовать это


// console.log('------------------lecture_13------------------');

// const parent = {
//   x: 10,
//   run(){
//     console.log('some text')
// //   }
// // };

// // const child = Object.create(parent); // создание нового object в прототипе которого будет perent;

// // child.y = 200; // добавление в сам child;

// // child.run();

// // console.log(child); // изначально он пустой но child.__proto__parent;

// //-----------------------------

// // const list = [7,8,9];

// // list.push = function(){ 
// //   console.log('mySuperPush')
// // } 
// // list.push(200);

// // console.log(list);

// //-----------------------------

// // function getSumArray (source){
// //   return source.reduce((prev, curr) => prev + curr);
// // }

// // const res = getSumArray ([1,6,8]);

// // console.log(res);

// // console.dir(getSumArray);

// // functon constructor --> new;

// // list = new Array();
// // obj = new Object();
// // reg = new RegExp();
// // str = new String();

// // Data  -- (класс) определяет оъекты, представляючие даты;
// // RegExp -- (класс) определяет оъекты, представляючие регулярное выражение;
// // Error -- (класс)определяет оъекты, представляючие синтаксические ошибки и ошибки времени положения;


// // древний код;
// function Person(name1, age){
//   this.name = name1; 

//   if(age >= 0 && age <= 150){
//     this.age = age;
//   } else console.warn(`for user name ${name1} age is incorrect ${age}`)
// } 

// Person.prototype.x = 10;
// Person.prototype.run = () => {};

// // экземпляр
// // если без new this смотрит на window;
// //this смотрит на child;
// /* new
//   1) создает пустой объект;
//   2) вызывает функцию Person() с перенаправленным this на объект 1;


// */
// const child = new Person('vasya', 12); // создание представителя
// const child2 = new Person('tanya', -12); // пока что child и child2 без собственных полей;

// console.log(child);
// console.log(child2)

// function AnimatedPlayer(settings){
//   this.x = settings.x;
//   this.y = settings.y;
//   this.size = {
//     width: settings.width,
//     height: settings.height, 
//   };
//   this.imageSource = settings.imageSource;
//   this.targetContainer = settings.targetContainer;
// }

// AnimatedPlayer.prototype.step = 30;
// AnimatedPlayer.prototype.go  = function(directon){
//   switch(directon){
//     case 'left':
//       this.x = this.x - step;
//     case 'rigth':
//       return this.x = this.x + step;
//     case 'top':
//       return this.y = this.y - step;
//     case 'bottom':
//       return this.y = this.y + step;
//   }
// }

// const player = new AnimatedPlayer({
//   x: 50,
//   y: 120,
//   width: 130,
//   height: 130,
//   imageSource: 'link to image',
//   targetContainer: 'link to dom element'
// });

// const parent = {
//   x: 10,
//   y: 20,
//   run(){
//     console.log(`it's run`)
//   }
// }

// const child = Object.create(parent); // child по прототиту parent;
// child.y = 200;

// // const newChild = Object.create(child);
// child.value = 'i am child'
// child.run();

// console.log(child); 

// console.log(newChild); // newChild по прототыту child, который прототип parent;

// for(const key in child){
//   if(!child.hasOwnProperty(key)){
//     continue;
//   }
//   console.log(key)
// }

// функции-конструкторы (название с большой буквы)

function Person (){
  this.
}

Person.prototype.x = 10;

const child = new Person(); // создание представителя или экземляра
console.log(child) 

/*
new 
1) создает новый объект
2) вызывет функцию Persone


*/