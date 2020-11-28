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

