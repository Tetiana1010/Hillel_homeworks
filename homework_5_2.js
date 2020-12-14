/* Создать строки `str1`, `str2`, `str3`. Строки состоят из символом любого вида.
Создать массив запрещенных символов `restrictedList = ['!', 'g', '_', '/' ......]`.
Из всех строк исключить все запрещенные символы.*/


rows = {
  str1:'fv!ghb/j',
  str2:'_xdcfghu',
  str3:'xfgyufc!'
}
restrictedList = ['!', 'g', '_', '/'];


for(i = 0; i <= restrictedList.length-1; i++ ){
  for (key in rows){
    for (i = 0; i < rows[key].length; i++){
      rows[key] = rows[key].split(restrictedList[i]).join('')
    }
  }
};

console.log(rows);








