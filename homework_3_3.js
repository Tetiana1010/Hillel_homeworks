array = [1,4,5,7,8,9]
  for( i = 0, j = array.length-1; i < j; i++, j--){
    [array[i], array[j]] = [array[j], array[i]];
  }

console.log(array);

