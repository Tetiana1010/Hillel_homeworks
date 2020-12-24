
z = 5;


function scope_1 (a, b){
  var x1 = 'x1';
  var x2 = 'x2';

  /*

    scope_1.lexicalEnvironment = {
      a: 'hello',
      b: 'world',
      x1: 'x1',
      x2: 'x2',
    }

  */

  console.log(a, b, x1, x1, z);
  return a+b+x1+x2;
}

scope_1 ('hello', 'world')