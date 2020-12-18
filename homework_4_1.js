
n = 50; 

center = Math.floor(n/2)


for(i = 0; i < n; i++){
  for(j = 0; j < n; j++){
    if ((i + j >= n) || (j >= i && j < center)) {
      document.write(0);
    } else {
      document.write(1);
    }
  }
  document.write('<br />');
}


