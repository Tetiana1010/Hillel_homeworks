

// let sourceUsers = [
//   ['name1', 'surName1'],
//   ['name2', 'surName2'],
//   ['name3', 'surName3']
// ]
// console.log(sourceUsers);

// let resultUsers = sourceUsers.map(function(user){
//   let name = user[0];
//   let surName = user[1];


//   return {
//     name: name,
//     surName: name,
//   }
// });

// console.log(resultUsers);

// // map(); --> возвращает что-то новое;


// let foundUser = resultUsers.find(function(user){
//   return user.surName === 'name1';
// });

// console.log(foundUser);

// reduce ----------------------------


// const sumArray = [ -1, 5, 7, 8, 4, 6];

// const summ = sumArray.reduce(function(result, value, ){

//   // result += value;
//          //or 
//   return result + value;
// });

// console.log(summ)


// const A = new Array (15);

// for (let i = 0; i < A.length; i++){
// A[i] = Math.floor(Math.random()*10);
// } 

// console.log(A);

// let max = 0;

// if ( A[0] > A[1]) {
//   max = A[0];
// } 
// else {
//   max = A[1];
// }
// console.log(max);

arr = [0,1,2,3]

function doSomething(arr) {
  for (let i = arr.length-1; i >= arr.length/2; i--) {
    let tmp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = tmp; 
    console.log(tmp+arr[i]);
  }
  return arr;
}

doSomething();

console.log(arr)



