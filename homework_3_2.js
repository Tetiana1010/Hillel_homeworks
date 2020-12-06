
n = 12;
m = 5;

border = '*';
space = '&nbsp';

strSpaces = '';
strFilled = '';

for (j = 1; j <= n - 2; j++){
  strSpaces = strSpaces + space;
  strFilled = strFilled + border;

}
resultSpaces = '*'+ strSpaces + '*<br />';
resultFilled = strFilled + border + border +'<br />';


document.write(resultFilled)

for (i = 1; i <= m-2; i++){
  document.write(resultSpaces)
}
document.write(resultFilled);