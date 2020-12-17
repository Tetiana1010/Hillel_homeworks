/*Написать функцию `doMath(x, znak, y)`, которая получает 3 аргумента: числа `x` и `y`, строку
`znak`. В переменной знак может быть: `+, -, *, /, %, ^`. Вывести результат
математического действия, указанного в переменной `znak`. */


function doMath (x, znak, y){
  switch (znak) {
    case '+' :
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    case '%':
      return x & y;
    case '^':
    return x ^ y;
  }
}

console.log(doMath(9,'*', 4));