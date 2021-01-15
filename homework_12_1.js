/*
Создать блок по середине экрана. 
При нажатии на стрелки - блок смещается в соответствующем направлении. 
Блок должен "упираться в экран", т.е. не может выйти за пределы экрана.

1) блок не вываливается за экран

2) при каждом "врезании" в стенку - блок отпрыгивает на step*2 пикселей в противоположном направлении.

3) При каждом отпрыгивании - по середине блока появляется надпись "БЭМС", которая исчезает через 2 секунды
*/

window.addEventListener('load', function(){

  const block = document.querySelector('.block')

    // left arrow	37
    // up arrow	38
    // right arrow	39
    // down arrow	40
    
    let stepsHorizontal = 0;
    let stepsVertical = 0;

    function arrows (event){
      // Right wall
      if (block.offsetLeft + block.offsetWidth >= window.innerWidth) {
        block.style.left = window.innerWidth - block.offsetWidth - 1  + 'px';
        return false;
      } 

      // Left wall
      if (block.offsetLeft <= 0) {
        block.style.left = 1 + 'px';
        return false;
      }

      // Bottom wall
      if (block.offsetTop + block.offsetHeight >= window.innerHeight) {
        block.style.top = window.innerHeight - block.offsetHeight - 1  + 'px';
        return false;
      }

      // Top wall
      if (block.offsetTop <= 0) {
        block.style.top = 1 + 'px';
        return false;
      }

    
      if(event.keyCode == 37){
        stepsHorizontal--;
        block.style.left = stepsHorizontal * 50 + 'px';
      }
      else if(event.keyCode == 39){
        stepsHorizontal++;
        block.style.left = stepsHorizontal * 50 + 'px';
      }
      else if(event.keyCode == 38){
        stepsVertical--;
        block.style.top = stepsVertical * 50 + 'px';
      }
      else if(event.keyCode == 40){
        stepsVertical++;
        block.style.top = stepsVertical * 50 + 'px';
      }
    }
    document.addEventListener('keydown', arrows)


});