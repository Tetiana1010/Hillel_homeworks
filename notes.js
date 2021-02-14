// window.addEventListener('load', function(){

//   //запрос к селектору --> querySelector(' # --> id')/('. --> class')
//   const clickMe = document.querySelector('#click-me');

//   const calculatorRange = document.querySelector('.calculator-range');
//   const calculatorNumber = document.querySelector('.calculator-number');
  
//   //манипуляция с класами --> classList
//   calculatorRange.classList.add('active') // add
//   calculatorRange.classList.remove('active') //remuve

//   //манипуляция co стилями --> style
//   calculatorRange.style.color = 'red';
//   calculatorNumber.style.color = 'red';

//   console.log(calculatorRange);
//   console.log(calculatorNumber);

//   //-------------------------------------------
//   let counrer = 0;

//   function addMe(){
//     counrer++;
//     console.log( counrer);
//   }
//   calculatorNumber.addEventListener('click', addMe)

  //-----------------------------------------

  //---------------------------------- add EVENT handler ----------------------------------

  /* 
  addEventListener (DOM Level 3) --> позволяет создавать много обрaботчиков, 
    которые будут срабатывать одновременно, чего не было в DOM Level 0; 
  */

  // onclick / click --  готовое свойство/событие при нажатии мышкой 

  /* 1)
    clickMe.onclick = function(){
    console.log('вывод количества нажатий');
  }  -----------------------------------------> (DOM Level 0) -- старый метод;
  */

  /* 2)
    clickMe.addEventListener('click', function(){
    console.log('вывод количества нажатий');
  });  -----------------------------------------> (DOM Level 3) можно так, но не лучший вариант для записи;
  */

  // // 3) лучше создавать новую функцию
  // function onClickMeButton(){
  //   console.log('вывод количества нажатий');
  // }
  // clickMe.addEventListener('click', onClickMeButton)
  // -----------------------------------------> (DOM Level 3) -- использовать этот метод;


  // onmouseover / mouseover -- готовое свойство/событие при наведении мышкой (как hower в css) 

  /* 1)
  clickMe.onmouseover = function(){
    console.log('вывод количества при наведении мышкой');
  } -----------------------------------------> (DOM Level 0) -- старый метод;
  */

  /* 2)
  clickMe.addEventListener( 'mouseover', function(){
    console.log('вывод количества при наведении мышкой');
  }); -----------------------------------------> (DOM Level 3) можно так, но не лучший вариант для записи;
  */

  // 3) лучше создавать новую функцию
//   function onMouseMeButton(){
//     console.log('вывод количества при наведении мышкой');
//   }
//   clickMe.addEventListener('mouseover', onMouseMeButton) 
//   // -----------------------------------------> (DOM Level 3) -- использовать этот метод;

//   // Remuve event handler  

//   clickMe.onclick = null; // (потому что null изначальное значение)
//   // (DOM Level 0) -- старый метод

//   function clickMeExample(event){ //проверка собитий
//     console.log(event.target);
//   }
//   clickMe.addEventListener('click', clickMeExample)

//   // ----------------------------------------- ES6 Strings -----------------------------------------;

//   // `обратные ковички` --> поддерживают многострочьный режим;
//   // `обратные ковички ${вставить сюда переменную -- интерполяция }` --> возможность рендерить внутри себя переменные;

//   let data = 16;
//   let nextDays = [17,18,19];

//   const newString =  `monday ${data} ${nextDays}` ; // data -> String(data) -> 16;

//   console.log(newString);

//   // ----------------------------------------------


//   const block = document.querySelector('.block');

//   function changeColor(){
//     block.style.color = 'green';
//     block.style.fontSize = '40px';
//     block.style.top = 50 + 'px';
//   } 
//   block.addEventListener('click', changeColor);

//   // ----------------------------------------------

//   const textArea = document.querySelector('#textArea')

//   function eventHandler (event){
//     console.log(event.type, event)

//     if(event.keyCode == 40);
//     console.log(event.target.style.top)
//     let newTop = 0;
//     if(event.target.style.top == ''){
//       newTop = 0;
//     } else {
//       newTop = parseInt(event.target.style.top) + 1;
//     }
//     event.target.style.top = `${newTop + 20}px`
//   }

//   textArea.addEventListener('keydown', eventHandler)




// });








//   // block.addEventListener('click', eventHandler);
//   // block.addEventListener('mousedown', eventHandler); // нажатие мышки вниз



// // выход объекта за предели области видимости -- это когда программа утрачивает возможность доступа к объекту;

// // объекты и массивы -- изменяемые типы;
// // числа, логические значения, null и undefined -- неизменяемые;
// // cтроки же могут быть представлены как массив символов;

// // --------------------- числа ---------------------

// /*
// Math.round(0.6) // => округление до ближайшего целого -- 1.0;
// Math.ceil(0.6) // => округление вверх -- 1.0;
// Math.floor(0.6) // => округление вниз -- 0.0;
// Math.abs(-5) // => абсолютное значение 5;
// Math.max(5,7,8) // => 8;
// Math.max(5,7,8) // => 5;
// Math.random() // псевдослучайное число от 0 до 1;
// Math.sqrt(3) // корень квадратный из 3;
// Math.pow() // корень кубическый;
// */

// // деление на 0 в js не считается ошибкой, в результате будет infinity or -infinity; NaN;


// // --------------------- дата и время ---------------------

// // var then = new Date (2010,0,1); // первый день первого месяца 2010;

// // var later = new Date (2010,0,1,17,10,30); // та же дата но с локальным временем 17:30:10;

// /*
// later.getFullYear();                // 2010
// later.getMonth();                   // 0: счет месяцев начынается с нуля; 
// later.getDate();                    // 1: счет дней начынается с 1; 
// later.getDay();                     // 0 - воскр., 5 - пятница;
// later.toString();                   // "Fri Jun 01 2010 17:10:30 GMT+0300"
// later.toLocaleDateString();         // "1 січня 2010";
// later.toLocaleTimeString();          // "17:10:30";
// */



// --------------------- текст ---------------------

// длина строки  -- количевство 16-битних значений;

// msg = 'hello' + ' ' + 'world';        // конкатенация;
// msg.length;                           // => 11: cчитает длину строки;
// msg.charArt(0);                       // => 'h': первый символ;
// msg.charArt(msg.length-1);            // => 'd': последний символ;
// msg.substring(1,4);                   // => 'ell': 2-й, 3-й, 4-й cимволы;
// msg.slice(1,4);                       // => 'ell':то же самое;
// msg.indexOf('e');                     // => 1: индекс символа'e';
// msg.split(", ");                      // => ['hello','world']разбивает на подстроки;

//------ возвращают новую строку;
// msg.replace('h', 'H');                // => 'Hello world' замещает 'h' на 'H';
// msg.toUpperCase();                    // => 'HELLO WORLD';


// -------------------- логическое значение -------------  true/ false


// var globar = this; // определыть глобальную переменную для ссылки на глобальный объект;

// Window -- специальный глобальный объект в клиентском JS, 
//который может храныть другие глобальный переменные;

// ---------------------------
// var x = {x:1};
// var p = {x:1};

// x === p; //fasle --> объекты не сравниваются!

//---------------------------
// var a = [];
// var b = [];

// a === b // false --> два самих массива тоже не сравниваются!

// объекты и массивы часто называют ссылочными типами. например;

// var t = [];
// var linkT = t; //  linkT ссылается на t и получает его значение;
// linkT[0] = 1; // изменение массива в помощью ссылки в переменной linkT;
// t[0]; // 1: 
// a === b // true;

// --------- копирование с помощью цикла for;

// let condition = true; 
// condition = 12; //число тоже true;
// condition = 'cvb'; // любая строка true;
// condition = ''; // пустая строка false;
// condition = 0; // false;
// condition = null; // false;
// condition = 0n; // false;
// condition = undefined; // false;

// condition = {} // true;
// condition = [] // true;
// condition = function(){} // true;



// if(condition){ //  в консоле появится только если сondition true;
//   console.log('can read it only if condition is true')
// }


// //число в консоле синем цветом; строка черная:

// let value = '100';
// value = '347.5';
// value = '347.в';
// value = '3 людини';

// Number(value);              //преобразование в число через "Number"; 
// +value;                     //преобразование в число через "+";

// // Функции parseInt() и parseFloat() глобальные функции, а не методы какого-либо класса;

// parseInt(value);            //преобразование в число через "parseInt"; 
// parseFloat(value);          //преобразование в число через "parseFloat";


// console.log(Number(value));      //  '347.5' --> 347.5; '347.в' --> NaN
// console.log(+value);             //  '347.5' --> 347.5; '347.в' --> NaN
// console.log(parseInt(value));    //  '347.5' --> 347;   '347.в' --> 347
// console.log(parseFloat(value));  //  '347.5' --> 347.5; '347.в' --> 347


// let x = 123; // преобразование числа в строку ниже:

// String(x);                       //преобразование числа в строку c помощью String();
// x.toString();                    //преобразование числа в строку c помощью x.String();
// '' + x;                          //преобразование числа в строку через конкатинацию;
// `${x}`;                          //преобразование числа в строку через интерполяцию;


// console.log(String(x));      
// console.log(x.toString());         
// console.log(''+ x);   
// console.log(`${x}`); 

// console.log(
//   2 == '2', // true
//   2 === '2', // false
// )

// var someNumber = 54654.543789;
// // toFixed -- преобразует число в строку, позволяя указывать количество десятичных цифр после запятой;
// console.log(someNumber.toFixed(2)); // 54654.54: потому что 2 знака;
// //Nan === NaN // false

// console.log(3 > 18);       // false;
// console.log(3 > '18');     // false, потому что если сравнивать два типа строка интерпритируется как число;
// console.log('3' > '18');   // true, строки сравниваются по другому;


// function getGuestsCount(guestsInput){
//   if(parseInt(guestsInput)){
//     return parseInt(guestsInput);
//   } else {
//     return 'not a number';
//   }
// }

// console.log(getGuestsCount(0));

// // || - операнд;

// // true || true, --> true
// // true || false, --> true
// // false || true, --> true
// // false || false, --> false

// // console.log(
// //   0 || 1 || 2 || 3
// // ); // 1: --> потому что при нескольких сравнениях вернет первое true 

// // console.log(
// //   0 && 1 && 2 && 3
// // ); // 0: --> потому что при нескольких сравнениях вернет первое false 

// // console.log(
// //   0 || 1 && 2 || 3, // && -- приаритетное;
// //   0 || (1 && 2) || 3, // 1 это true, а должно && возвращать первое false, это 2;
// //   0 || 2 || 3,  // 0 false; 2 true;
// //   2 || 3 // 2 первое true
// // ); 



// // function canTheyBook(adultsCount, childrenCount){
// //   if(adultsCount + childrenCount <= 8 ){
// //     return true;
// //   } 
// // }

// // console.log(canTheyBook(5, 3));


// //  // Другая функция (метод) преобразования объектов

// //  // Область видимости (scope)

// //  // local -- внутри тела функции локальная переменная имеет преимущество
// //  // перед глобальной переменной с тем же именем.

// // //  var scope = 'globar';

// // //  function checkScope(){
// // //   var scope = 'local'; // внутри функции важно var, иначе тогда будет переприсвоение глобальной переменной;
// // //   return scope;
// // //  }

// // //  console.log(checkScope()); // local

// // // var scope = 'global';

// // // // function checkScope(){
// // // //   console.log(scope); // global
// // // // }

// // // // console.log(checkScope());

// // // function checkScope(){
// // //   console.log(scope); // undefined
// // //   var scope = 'local';
// // //   console.log(scope); // local
// // // }

// // // console.log(checkScope());

// // // // прототипроее ООП

// // // // function Animal (type, age){ // клас
// // // //   this.type = type;
// // // //   this.age = age;

// // // //   const specialId = Math.random();
// // // //   //--------------------
// // // //   this.getspecialId =  function(){
// // // //     return specialId;
// // // //   }
// // // // }

// // // // Animal.prototype.increaseAge = function(){ // поведение класа
// // // //   console.dir(Animal.prototype.increaseAge);
// // // //   this.age++
// // // // }

// // // // var an1 = new Animal('crocodile', 15); // представители
// // // // var an2 = new Animal('dog', 1);


// // // // console.log(an1);
// // // // console.log(an2);

// // // //------------------------------------- старый метод -------------------------------------

// // // /*
// // // function Parent (){}
// // // Parent.prototype.parentMethod = function(){}

// // // function Child (){}

// // // Child.prototype = Object.create(Parent.prototype); //создает новый объект
// // // Child.prototype.childMethod = function(){}

// // // const child1 = new Child();
// // // console.log(child1);
// // // */

// // // //------------------------------------- новый метод -------------------------------------

// // // // класс
// // // // class Animal { // нету круглых скобочек
// // // //   constructor(type, age){
// // // //     this.type = type;
// // // //     this.age = age;
// // // //   }

// // // //   increaseAge(){
// // // //     this.age++;
// // // //   }
// // // // }


// // // // var an1 = new Animal ('Crocodile', 15);
// // // // console.log(an1);

// // // //наследование

// // // // class Parent{
// // // //   constructor(){
// // // //     this.parentValue = 'Parent - 100'
// // // //   }
// // // //   parentMethod(){}
// // // // }

// // // // class Child extends Parent{  // extends --> привязка Child к Parent;
// // // //   constructor(){
// // // //     super(); //  super()
// // // //     this.childValue = true;
// // // //   }
// // // //   childMethod(){}
// // // // }

// // // // const child1 = new Child();
// // // // console.log(child1)

// // // // //--------------------

// // // // const input = '  ';

// // // // /* if(+input){ // + --> приобразование в число;
// // // //     console.log('ok') // --> если число;
// // // //   } else {
// // // //    console.log('Error'); --> если строка
// // // //   }
// // // // */ 

// // // // /*
// // // // if(!isNaN(input)){ 
// // // //   console.log('ok') // --> если число;
// // // } else {
// // //   console.log('Error'); // --> если строка;
// // // }
// // // */

// // // /*
// // // if(isFinite(input)){ 
// // //   console.log('ok') // --> если число;
// // // } else {
// // //   console.log('Error'); // --> если Infinity или false;
// // }
// // */

// // // if(input.trim()){ // метод который убирает пробелы и т.д;
// // //   console.log('ok') // --> если true;
// // // } else {
// // //   console.log('Error'); // --> если Infinity или false;
// // // }




// // // function convertCurrency(amount, exchangeRate, currencyName) {
// // //   let x = 0;

// // //   if(amount > 0 && exchangeRate > 0){
// //     x = exchangeRate * amount;
// //     if (x == x.toFixed(1)){
// //       return `Give them ${x} ${currencyName}('s)`;;
// //     }
// //     if (!Number.isInteger(x)){
// //       return `Give them ${x.toFixed(2)} ${currencyName}('s)`;
// //     }
// //     return `Give them ${x} ${currencyName}('s)`;
// //   }

// //   else {
// //     return 'Enter valid data';
// //   }
// // }

// // console.log(convertCurrency(0, 0, 'dollar'));


// // // Math.random() -- от 0 до 1;

// // // 
// // // o = [u = 10, q = 40, r = 90];

// // // if(o instanceof Array && o instanceof Object){
// // //   console.log('o is an instance of Array and Object') // true
// // // }

// // // o = {u: 10, q: 40, r: 90};

// // // if(o instanceof Array){
// // //   console.log('o is an instance of Array)') // false
// // // };

// // //Условный(тернарный) оператор (?:)'?:'

// // // let username = 'name';

// // // greting = 'hello ' + (username ? username : 'there');
// // // //  ? --> if username is true --> greting =  username;
// // // //  : --> if username is false (like else) -->  greting + 'there';


// // // console.log(greting);


// // // class Car {
// // //   #some; //

// // //   constructor(){
// // //     this.parentValue
// // //     this.#some = 4;
// // //   }
// // // }

// // // //rest
// // // //spread

// // // class A4{
// // //   constructor(a4){
    
// // //   }
// // // }


// // // class A3{
// // //   constructor(a3, a4){
    
// // //   }
// // // }

// // // class A2{
// // //   constructor(a2, a3, a4){
    
// // //   }
// // // }

// // // class A1{
// // //   constructor(a1, ... restArquments){ // вместо constructor(a1, a2, a3, a4)
// // //     superer();

// // //     console.log(restArquments);
// // //     console.log(a1);
// // //   }
// // // }





// // // // function getSuccessRate(statistic) {
// // // //   let sum = 0;
// // // //   for(let i = 0; i < statistic.length; i++){
// // // //     if (statistic[i] == 1){
// // // //       sum += 1;
// // // //     }
// // // //   }       
// // // //   sum = (sum/statistic.length)*100;
// // // //   return sum

// // // // }

// // // // getSuccessRate('111000');


// // // //bind
// // // // ...


// // // // Оператор in --> требует, чтобы левый операнд был строкой или мог быть преобразован в строку;

// // // Оператор instanceof -- требует, чтобы левым операндом был объект, а правым – имя класса объектов
// // // Следовательно, правый операнд оператора instanceof должен быть именем функции-конструктора. 

// // /*
// // Например:
// // var d = new Date(); // Соз­дать но­вый объ­ект с по­мо­щью кон­ст­рук­то­ра(new) Date()
// // d instanceof Date; // Вер­нет true; объ­ект d был соз­дан с функ­ци­ей Date()
// // d instanceof Object; // Вер­нет true; все объ­ек­ты яв­ля­ют­ся эк­зем­п­ля­ра­ми Object
// // d instanceof Number; // Вер­нет false; d не яв­ля­ет­ся объ­ек­том Number

// // var a = [1, 2, 3]; // Соз­дать мас­сив с по­мо­щью ли­те­ра­ла мас­си­ва
// // a instanceof Array; // Вер­нет true; a – это мас­сив
// // a instanceof Object; // Вер­нет true; !все мас­си­вы яв­ля­ют­ся объ­ек­та­ми!
// // a instanceof RegExp; // Вер­нет false; мас­си­вы не яв­ля­ют­ся ре­гу­ляр­ны­ми вы­ра­же­ния­ми

// // все объекты являются экземплярами класса Object. 
// // */

// // // «цепочка прототипов» – механизм наследования в Java-Script; 

// // // type of --> возвращает строку указывающую на тип данных операнда:
// // // undefined --> "undefined";
// // // null --> "object"; Если потребуется отличать null от других объектов, добавьть проверку для этого спецслучая.
// // // true/false --> "boolean";
// // // любое число или NaN --> "number";
// // // любая строка --> "string";
// // // любая функция --> "function"; Несмотря на то что функции в JavaScript также являются разновидностью объектов, оператор typeof отличает функции, потому что они имеют собственные возвращаемые значения.
// // // любой объект базового языка,не являющийся функцией --> "object";

// /*
// delete --> выполняет попытку удалить свойство объекта или элемент массива, определяемый операндом:

// var o = {x: 1, y: 2}; // Оп­ре­де­лить объ­ект
// delete o.x; // Уда­лить од­но из его свойств
// "x" in o // => false: свой­ст­во боль­ше не су­ще­ст­ву­ет

// var a = [1,2,3]; // Соз­дать мас­сив
// delete a[2]; // Уда­лить по­след­ний эле­мент мас­си­ва
// 2 in a // => false: второй элемент больше не существует
// a.length // => 3: обратите внимание, что длина мас­сива при этом не изменилась

// */


// // Унарный оператор void

// /*
//   {
//     составная инструкция 
//     не завершается 
//     точкой с запятой.---|
//   } <--------------------

// */

// // var
// //Инструкция var позволяет явно объявить одну или несколько переменных.


// //объявления функций не могут находиться внутри инструкций if, циклов while или любых других конструкций.

// //if

// // Синтаксис языка JavaScript позволяет вставить только одну инструкцию после
// //  инструкции if и выражения в круглых скобках, однако одиночную инструкцию
// //  всегда можно заменить блоком инструкций. Поэтому инструкция if может выглядеть так:

// /*
// if (!address) {
// address = "";
// message = "По­жа­луй­ста, ука­жи­те поч­то­вый ад­рес.";
// }
// */

// // else if --> это лишь распространенный стиль программирования,заключающийся в применении повторяющихся инструкций if/else:

// /*
// if (n == 1) {
//   // Вы­пол­нить блок 1
//   }
//   else if (n == 2) {
//   // Вы­пол­нить блок 2
//   }
//   else if (n == 3) {
//   // Вы­пол­нить блок 3
//   }
//   else {
//   // Ес­ли ни од­на из пре­ды­ду­щих ин­ст­рук­ций else не бы­ла вы­пол­не­на, вы­пол­нить блок 4
//   }

// */


// switch
// Различные места в блоке помечены ключевым словом case;
/*
switch(вы­ра­же­ние) {
  ин­ст­рук­ции
}
*/

// Инструкция continue --> заставляет интерпретатор пропустить оставшуюся часть тела цикла;
// Инструкция return заставляет интерпретатор перейти из вызванной функции обратно в точку ее вызова и вернуть значение вызова.
// Инструкция return может располагаться только в теле функции.


// let name1 = 'tanya';
// let name2 = 'dima'

// let longer = (name1.length > name2.length) ? 'tanya is longer' : 'dima is longer';

// console.log(longer); // 'tanya is longer' 

// console.log(name1[1]) // a: --> доступ к буквам через индекс;
// console.log(name1.charAt(1)) // a: --> доступ к буквам (как с индексами);

// console.log(name1[20]) // undefined: если нету столько индексов;
// console.log(name1.charAt(20)) // вернет пустую строку


// let word = 'abcdabab';
// let part1 = 'ab';
// let part2 = 'abc1';

// console.log(
//   word.includes(part1),//true
//   word.indexOf(part1), // 0: первый индекс совпадения
//   word.lastIndexOf(part1), // 6: первый индекс совпадения
//   word.startsWith(part1), // true: потому что тоже начинается с 'ab'
//   word.endsWith(part1), // true: потому что заканчивается 'ab'
// )

// console.log(
//   word.includes(part2), //false
//   word.indexOf(part2) // -1
// )
// //--------------------
// let str = 'Fghj';

// let upperStr = str.toUpperCase();
// console.log(upperStr);

// let lowerStr = str.toLowerCase();
// console.log(lowerStr);

// //--------------------

// let strCharCode = 'gvhb';

// for( letter in strCharCode){
//   console.log(strCharCode.charAt(letter), 
//   strCharCode.charCodeAt(letter)) 
//   // g 103
//   // v 118
//   // 104
//   // b 98
// }


// // алфавит 

// let alfa = 'alfa';
// let beta = 'beta';

// console.log(alfa.charCodeAt(2));

// console.log(alfa.charCodeAt() < beta.charCodeAt())


// let alfaU = 'Рпмо';
// let betaU = 'чваГпмр';


// console.log(alfaU.toLocaleLowerCase() > betaU.toLocaleLowerCase());


// function isAlphabet(letters) {

//   if (letters.length == 1){
//     return true;
//   }

//     if (letters.length <= 1){
//     return false;
//   }

//   if(letters[0].charCodeAt() == letters[1].charCodeAt()){
//       return false;
//   }

//   for ( let i = 0; i < letters.length; i++){

//     if(letters[i].charCodeAt(0) < letters[i].charCodeAt(1)){


//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isAlphabet('abvsa'));


// let message = '0123456789';

// console.log(
//   message.substr(3,5),    // 34567: c 3 индекса 5 значений;
//   message.substring(3,5), // 34: c 3 по 5 индекс(не включая его)
//   message.slice(3,5), // 34: может работать с отрицательними
//   message.slice(3,-2) // 34567: c 3 но -2 с конца
// )

// let message1 = ' удаление пробелов ';
// console.log(message1.length); // 19: 
// console.log(message1.trim().length); //17: c друх сторон
// console.log(message1.trimLeft().length); // 18:
// console.log(message1.trimRight().length); // 18:

// //-----------------------------

// let cardNumber = '1112 1112 1112 1112';

// const result1 = cardNumber.slice(-4);

// console.log(result1.padStart(16, '*')) // сначала
// console.log(result1.padEnd(16, '*')) // вконце
// console.log(result1.padStart(19, '**** ')) // c пробелами



// const devider = '-'.repeat(15) // добавление символа 15 раз



// let message3 = 'xc fvgbh nj a';

// const result3 = message3.replace('nj', 'me');

// console.log(result3 );







//object

/*
• Атрибут prototype содержит ссылку на другой объект, от которого наследуются свойства.

• Атрибут class содержит строку с именем класса объекта и определяет тип объекта.

• Флаг extensible (в ECMAScript 5) указывает на возможность добавления новых свойств в объект.
*/

/*
• Object.prototype – один из немногих объектов, которые не имеют прототипа: у него нет унаследованных свойств;
• Oбъект, созданный выражением new Object(), наследует свойства объекта Object.prototype;
• Аналогично прототипом объекта, созданного выражением new Array(), является Array.prototype;

- метод Object.create(), создает новый объект и использует свой первый аргумент 
  в качестве прототипа этого объекта;
- дополнительно Object.create() может принимать второй необязательный аргумент, 
  описывающий свойства нового объекта.
- Object.create() является статической функцией, а не методом, 
  вызываемым относительно некоторого конкретного объекта:
var o1 = Object.create({x:1, y:2}); // o1 на­сле­ду­ет свой­ст­ва x и y.

var o = {} // o на­сле­ду­ет ме­то­ды объ­ек­та Object.prototype
o.x = 1; // и об­ла­да­ет соб­ст­вен­ным свой­ст­вом x.
var p = inherit(o); // p на­сле­ду­ет свой­ст­ва объ­ек­тов o и Object.prototype
p.y = 2; // и об­ла­да­ет соб­ст­вен­ным свой­ст­вом y.
var q = inherit(p); // q на­сле­ду­ет свой­ст­ва объ­ек­тов p, o и Object.prototype
q.z = 3; // и об­ла­да­ет соб­ст­вен­ным свой­ст­вом z.
var s = q.toString(); // toString на­сле­ду­ет­ся от Object.prototype
q.x + q.y // => 3: x и y на­сле­ду­ют­ся от o и p

*/

// массив с именем и фамилией
// let arr = ["Ilya", "Kantor"]
// деструктурирующее присваивание
// let [firstName, surname] = arr;

// let firstName = arr[0];
// let surname = arr[1];

// console.log(firstName) // Ilya;
// console.log(surname) // Kantor

// OOP

/*
const circle = {
  radiis: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function(){ //draw: --> method;
    console.log('1draw');
  }  

};

circle.draw(); // call

*/



/*
  factory function
function createCircle(radius){
  return {
    radius,
    draw: function(){ //draw: --> method;
      console.log('1draw');
    } 
  };
  
}


circle.draw(); // call
*/

// const circle = createCircle(1)

// constructor 

// function Circle (radius){
//   this.radius = radius;
//   this.draw = function(){
//     console.log('draw');
//   }
// }

// Circle.call({},);
// Circle.apply({},[1,2,3,4]);


// const another = new Circle(1);
// console.log(another)

//function f(){} - инструкция
// var f = function f(){} - выражение

/*
var myObject = {
  value: 1,
  increment: function(inc){ 
    this.value += typeof inc === 'number' ? inc : 6; // значение this.value += еслы при вызове значение increment(...) число, а если не число, то + 6;
  }
};

myObject.increment() // 
console.log(myObject.value) // value+ inc = 10
*/

// myObject.double = function(){
//   var that = this; // решение

//   var helper = function (){
//     that.value = add (that.value, that.value);
//   };

//   helper(); // вызов функции helper;
// };

// myObject.double ()


// const Animal  = function (options){
//   this.name  = options.name;// контекст указывающый на екзепляр класа
//   this.color = options.color;

//   // this.voice = function(){
//   //   console.log('base voice frome  ', this.name)
//   // }

// }



// Animal.prototype.voice = function(){
//   console.log('base voice frome  ', this.name)
// }


// console.log(Animal.prototype)

// const dog = new Animal({name: 'rex', color: 'white'});

// dog.voice(); //вызов новго метода класа Animal

// console.log(dog)


// const Cat = function(...args){
//   Animal.apply(this, args)
// }

// Cat.prototype = Object.create(Animal.prototype)

// const cat = new Cat({name: 'murzik', color: 'black', hasTail: true})

// console.log(cat)


class Animal{
  constructor(options){
    this.name = options.name;
    this.color = options.color;
  }

  voice(){
    console.log('base voice from', this.name)
  }
}

const dog = new Animal({name: 'Rex', color: 'red'})

console.log(dog)


class Cat  extends Animal{
  constructor(options){
    super(options)
      this.hasTail = options.hasTail;
  }
}

const cat = new Cat({name: 'Murzik', color: 'white', hasTail: true})

console.log(cat)


// examples



Object.prototype.print = function(){
  console.log('i am a object:', this)
}

cat.print()