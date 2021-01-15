window.addEventListener('load', function(){

  //запрос к селектору --> querySelector(' # --> id')/('. --> class')
  const clickMe = document.querySelector('#click-me');

  const calculatorRange = document.querySelector('.calculator-range');
  const calculatorNumber = document.querySelector('.calculator-number');
  
  //манипуляция с класами --> classList
  calculatorRange.classList.add('active') // add
  calculatorRange.classList.remove('active') //remuve

  //манипуляция co стилями --> style
  calculatorRange.style.color = 'red';
  calculatorNumber.style.color = 'red';

  console.log(calculatorRange);
  console.log(calculatorNumber);

  //-------------------------------------------
  let counrer = 0;

  function addMe(){
    counrer++;
    console.log( counrer);
  }
  calculatorNumber.addEventListener('click', addMe)

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

  // 3) лучше создавать новую функцию
  function onClickMeButton(){
    console.log('вывод количества нажатий');
  }
  clickMe.addEventListener('click', onClickMeButton)
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
  function onMouseMeButton(){
    console.log('вывод количества при наведении мышкой');
  }
  clickMe.addEventListener('mouseover', onMouseMeButton) 
  // -----------------------------------------> (DOM Level 3) -- использовать этот метод;

  // Remuve event handler  

  clickMe.onclick = null; // (потому что null изначальное значение)
  // (DOM Level 0) -- старый метод

  function clickMeExample(event){ //проверка собитий
    console.log(event.target);
  }
  clickMe.addEventListener('click', clickMeExample)

  // ----------------------------------------- ES6 Strings -----------------------------------------;

  // `обратные ковички` --> поддерживают многострочьный режим;
  // `обратные ковички ${вставить сюда переменную -- интерполяция }` --> возможность рендерить внутри себя переменные;

  let data = 16;
  let nextDays = [17,18,19];

  const newString =  `monday ${data} ${nextDays}` ; // data -> String(data) -> 16;

  console.log(newString);

  // ----------------------------------------------


  const block = document.querySelector('.block');

  function changeColor(){
    block.style.color = 'green';
    block.style.fontSize = '40px';
    block.style.top = 50 + 'px';
  } 
  block.addEventListener('click', changeColor);

  // ----------------------------------------------

  const textArea = document.querySelector('#textArea')

  function eventHandler (event){
    console.log(event.type, event)

    if(event.keyCode == 40);
    console.log(event.target.style.top)
    let newTop = 0;
    if(event.target.style.top == ''){
      newTop = 0;
    } else {
      newTop = parseInt(event.target.style.top) + 1;
    }
    event.target.style.to = `${newTop + 20}px`
  }

  textArea.addEventListener('keydown', eventHandler)




});








  // block.addEventListener('click', eventHandler);
  // block.addEventListener('mousedown', eventHandler); // нажатие мышки вниз