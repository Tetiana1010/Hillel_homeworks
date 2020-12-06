n = +prompt();

cur = 0;
prev = 1;

for (let i = 3; i <= n; i++){
  prevPrev = cur+prev;
  cur = prev;
  prev = prevPrev;
}

console.log(prevPrev);

//---------------------------

isPrime = true;

for( i = 2; i < n; i++){
  if(n%i === 0) {
    isPrime = false;
  }
}

if (isPrime) {
  console.log('n is prime');
} else {
  console.log('n is not prime');
}

//  list = [12,83,34,6,67,67,99];

//  console.log(list);
// list[10] = 1089;
// console.log(list);
//  for(i = 0; i<list.length;i++){
// if(list[i]== undefined)
//   list[i] = 0;
// }

// console.log (list);

// friends = ['name1', 'name2', 'name3', 'name3'];
// console.log(friends)

// newName = 'name6';
// friends = friends.lenght - friends.lenght - 1;

// friends.pop[newName]

// lastValue = friends.push(newName);


// friends.push(newName)
// console.log(lastValue)
// friends[3] = newName;
// console.log(friends)


// n = +prompt();

// // a = [1,2,3];// блок инициализация
// // a.length = n;


// a = new Array(n); // через конструктор

// val = Math.floor(Math.random()*20);

// for(i = 0; i < a.length; i++){
//   a[i] = val;

//   if (a[i] >= -99 && a[i] <= -10)

// }

// console.log(a);

// //-----------------------

// ****** факториал числа ******* //
//****** степень числа *******//

// 5! = 1*2*3*4*5;
//n! = 1 * 2 *... (n-1) * n;

// n = +prompt();
// fact = 1;

// for(i = 1; i <= n; i++){
//   fact = fact * i;
// }

// console.log(fact)

// // 5^4 = 5*5*5*5;
// // a^n = a1*a2* ...a (n-1) * an;

// a = 4;
// n = 7
// pow = 1;
// for(i = 1; i <= n; i++){
//   pow = pow * a;
// }

// console.log(pow)

// console.log (Math.pow(a,n));

// ****** факториал числа ******* //

//  math randome() -> 0 .. 1
//  math randome()*10 -> 0 .. 9

// val = Math.random()*10;
// console.log(val);