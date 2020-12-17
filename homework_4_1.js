
n = 50; 
m = n; 

centerN = Math.floor(n/2)
centerM = Math.floor(m/2)


for(i = 0; i <= n; i++){
  for(j = 0; j <= m; j++){
    if( i > j|| i + j < n + 1 && i <= centerN && j >= centerM ){
      document.write(1)
    } else
    document.write(0)
  }
  document.write('<br />')
}