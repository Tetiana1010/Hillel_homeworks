
n = 13;

A = new Array (n);

for (i = 0; i < A.length; i++){
A[i] = Math.floor(Math.random()*40-20);
}

console.log(A);


B = new Array (n);

for (i = 0; i < B.length; i++){
B[i] = Math.floor(Math.random()*20);
}

console.log(B);

var duplicates = A.filter(function(val) {
  return B.indexOf(val) != -1;
});

console.log(duplicates);

