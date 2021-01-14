/* 
Реализовать калькулятор, 
в котором есть слайдер (`input type=”range”`) и поле ввода (`input type=”number”`).

Изменяя состояние `range` меняется состояние поля ввода `number`. И наоборот.

Реализовать блок-диаграмму, который в пикселях будет отображать значение range.
Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.

![Alt Text](/src/images/img_3.png)

Красный блок - количество комиссии. Комиссия вычисляется по формуле:

  (range < 20) -> 2%
  (20 - 50)  -> 4%
  (50 - 75)  -> 6%
  (75 - 100)  -> 8%

Красный блок отображает количество комиссии. 
Например Значение выбора 100, комиссия будет 8%. 
Результирующая сумма: 108. Высота красного блока - 8px 
*/


// window.addEventListener('load', function(){

//   function eventHandler(event){
//     console.log(event.type, event);
    
//     if(event.keyKode == 40) {
//       event.target.style.top = `10px`;
//     }
//   }

//   const block = document.querySelector('.block');
//   const textArea = document.querySelector('#textArea')

//   block.addEventListener('click', eventHandler);

//   textArea.addEventListener('keydown', eventHandler)

// })

// calculatorTip.on('change', function () {

//     if ( calculatorBill.val() === '' || isNaN( calculatorBill.val() ) ) {
//         alert('Enter bill amount, please!')
//     } else {
//         amount = calculatorBill.val() * 1;
//     }

//     tipAmount.text( calculatorTip.val() + '%' );
//     percent = calculatorTip.val() * 1;
//     result = amount + amount * ( percent / 100 );
//     calculatorResult.text( result.toFixed(2) + '$' );
// });

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

  

});

/* block.innerHTML = block.innerHTML +'  </br>    sxdfcgvhbjnkmlnjbhvgc';
block.innerText = block.innerText +'      sxdfcgv</br>hbjnkmlnjbhvgc'; // -> воспринимает </br> как символ
*/