/* 
1) Создать персонажа игры-платформера. 
  При нажатии на пробел - прыжок вверх на h пикселей. 
  При нажатии на стрелки - передвижение персонажа на step пикселей 
  в сторону (вверх, вниз, вправо, влево) // event.keyCode

2) Персонаж - это квадрат, имеющий размеры 100 на 100 пикселей. 
  Прыжок - это анимация движения объекта вверх на h пикселей 
  и возврат в изначальное положение (до прыжка)

3) При нажатии на CTRL персонаж должен "присесть" 
(уменьшиться в размерах по высоте на 40%, по ширине - увеличится на 15%)

4) Дополнительно: при зажатом CTRL 
  персонаж может продолжать двигаться в ЛЕВО и ПРАВО! 
  (т.е. ВВЕРХ и ВНИЗ не работают, ПРОБЕЛ не работает)
*/

console.log('homework_11');


window.onload = function (){

  const block = document.querySelector('.block');

  block.classList.add('active');

  // block.style

  const clickMe = document.querySelector('#click_me');
  const counterElem = document.querySelector('#click_me_counter');


  // add event handler -- DOM Level 0
  // clickMe.onclick = function() {
  //   console.log('Click me')
  // }

  // clickMe.onmouseover = function() { // hover
  //   console.log('on mouse over')
  // }

  // remuve event handler -- DOM Level 0
  
  // clickMe.onclick = null;

  //--------------------------
  // DOM Level 3 -- новые технологии, использовать только это  

  /* clickMe.addEventListener('click', function() {
    console.log('Click me')
  }); 

  clickMe.addEventListener('click', function() {
    console.log('Click me 2')
  }); */ // -- норм но тупая запись 

  // нужно так 

  // function onClickMeButton(){
  //   console.log('Click me 3');
  // }
  // clickMe.addEventListener('click', onClickMeButton);

  // ClickMeButton();

  let counter = 0;


  function onClickMeButton(){
    counter++;
    console.log('Click me 3');
  // counterElem.innerHTML = counter + (counter == 1 ? ' time' : ' times');
    counterElem.innerHTML = `
    <strong>
     ${counter} ${copy}
    </strong>
    `

  }
  clickMe.addEventListener('click', onClickMeButton);

}
//------------------------
// ES6 -- Strings

var str = 'fvghbgvhbjn';
console.log(str.split(''));
console.log(str.substr(2,4))
//---------------

var str1 = ' " '; 
console.log(str1)  
//---------------

var str2 = " ' ";
console.log(str2)
//---------------

var data = 13;

var str3 = 'monday ' + data; 
console.log(str3);

//----------------

const nawStrings =  // такие ковычки умеют переносыть строки
`  sunday 
  monday
  ${data} ` 

// data -> String(data) -> '13;

console.log(nawStrings)


