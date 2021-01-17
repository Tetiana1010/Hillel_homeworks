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

window.addEventListener('load', function(){

  const block = document.querySelector('.block')

    let step = 50; 
    
    let stepsHorizontal = 0;
    let stepsVertical = 0;

    let h = 100;

    let isCrouching = false;

    function arrows (event){
    
      if(event.keyCode == 37){
        stepsHorizontal--;
        block.style.left = stepsHorizontal * step + 'px';
      }
      else if(event.keyCode == 39){
        stepsHorizontal++;
        block.style.left = stepsHorizontal * step + 'px';
      }
      else if(event.keyCode == 38){
        if(!isCrouching){
          stepsVertical++;
          block.style.bottom = stepsVertical * step + 'px';
      }
      }
      else if(event.keyCode == 40){
        if(!isCrouching){
          stepsVertical--;
          block.style.bottom = stepsVertical * step + 'px';
        }
      }
      else if(event.keyCode == 32){
        if(!isCrouching){
          block.style.bottom = parseInt(block.style.bottom) + h + 'px'; 
          setTimeout(function(){
            block.style.bottom = parseInt(block.style.bottom) - h + 'px'; 
          }, 500);
        }
      }
      else if(event.keyCode == 17){
        isCrouching = true;
        block.style.height = 60 + 'px'; 
        block.style.width = 115 + 'px'; 
      }  
    } 
    document.addEventListener('keydown', arrows); 
});


    // left arrow	-- 37
    // up arrow	-- 38
    // right arrow --	39
    // down arrow	-- 40
    // space -- 32
    // CTRL -- 17


    

   

      // function squat(){
      //   if(event.keyCode == 17){
      //     block.style.height = 60 + 'px'; //(-40%) 
      //     block.style.width = 115 + 'px'; //(+15%)
      //   }
      // }
      // document.addEventListener('keydown', squat);