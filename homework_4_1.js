// n = 10;
// m = 20;

// bordeItem = '*';
// space = '&nbsp';


// strSpaces = '';
// for( j = 1; j <= n-2; j++){
//   strSpaces = strSpaces+ space;
// }
// resultSpace = '*' + strSpaces + '*<br />';

// strFilled = '';
// for( j = 1; j <= n; j++){
//   strFilled = strFilled+ bordeItem ;
// }
// resultFilled =  + strFilled + '<br />';

// console.log(resultSpace);
// console.log(resultFilled);



// document.write(resultFilled);

// for (i = 0; i <= m-2; i++){
//   document.write(resultSpace);
// }

// document.write(resultFilled);

//-----------------------------------
// two dimensional arrays



// array = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]



// array = [
//   [1,2,3],
//   [4,5,6, 77, 99],
//   [7,8,] 
// ]

// console.log(array);

//***** стандартний цикл перебору одномірного масиву ******

// for(i = 0;i < array.length; i++){ ........}


//***** стандартний цикл перебору двомірного  масиву *****

// for(i = 0; i < array.length; i++){
//   for(j = 0; j < array[i].length; j++){
//     console.log(array[i][j]);
//   }

// }



// for(i = 0; i < array.length; i++){
//   for(j = 0; j < array[i].length; j++){ 
//   }
// }

// n = 5;
// m = 5;

// A = new Array (n);

// for (i = 0; i < A.length; i++){
//   A[i] = new Array (m);
//   for(j = 0; j < A[i].length; j++ ){
//   A[i][j] = Math.floor(Math.random()*21 -10);
//   }
// }

// console.log(A)


// max =  A[0][0];


// for(i = 0; i < A.length; j++){
//   for(j = 0; j < A[i].length; j++){
//     if (A[i][j] > max){
//       max = A[i][j];
//     }
//   }
// }


// console.loh(max);


//----------------------------

n = 9;
m = n;

k = 3;

document.write( n + ' ' + n + '<br />')

for ( i = 1; i <= n; i++){
  for (j = 1; j <= m; j++){
    // if ( i + j == n +1  ){
    //   document.write( '** ' );
    // }  
    
    // if ( i + j >= n + 1 ){
    //   document.write( '** ' );
    // } else 

    if (i <= j){
      document.write( '** ' );
    } else
    document.write(i +  '' + j + ' ')
  }
  document.write('<br />')
}

/* звернення до ряду k чи стовпчика k

i = k
j = k


*/

// головна діагональ -- 11; 22; 33; 44; 55 