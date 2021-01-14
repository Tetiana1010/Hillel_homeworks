
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
Результирующая сумма: 108. Высота красного блока - 8px */


window.addEventListener('load', function(){

  const calculatorRange = document.querySelector('.calculator-range');
  const calculatorNumber = document.querySelector('.calculator-number');
  const red = document.querySelector('.red');
  const green = document.querySelector('.green');

  function changeRange(){
    
    calculatorRange.value = calculatorNumber.value;
  }
  calculatorNumber.addEventListener('change', changeRange);

  function changeNumber(){

    calculatorNumber.value = calculatorRange.value;

  }
  calculatorRange.addEventListener('change', changeNumber);

  function changeDiagramHeight(){
    const range = calculatorNumber.value;
    green.style.height = range + 'px';

    let redHeight = 0;
    if (range < 20) 
      redHeight = range * 2 / 100;
    else if (range < 50)
      redHeight = range * 4 / 100;
    else if (range< 75)
      redHeight = range * 6 / 100;
    else 
      redHeight = range * 8 / 100;
      
    red.style.height = redHeight + 'px';
    
  }
  calculatorNumber.addEventListener('change', changeDiagramHeight)
  calculatorRange.addEventListener('change', changeDiagramHeight)

}); 



