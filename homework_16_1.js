/*
1) Создать цепочку классов C1 -> C2 -> C3.
Создание экземпляра - `new C3(1, 2, 3, 4)`

Первый аргумент должен определится в `this` как свойство `p1`.
Второй аргумент как `p2`
Третий как `p3`
Четвертый как `p4`

Конструктор C1 записывает в `this` свойство `p2`
Конструктор C2 записывает в `this` свойство `p1`, и `p3`
Конструктор C3 записывает в `this` свойство `p4`

*/

class C1{
  constructor(value){
    this.p2 = value;
  }
}

class C2 extends C1 {  
  constructor(value1, value2, value3){
    super(value2); 
    this.p1 = value1;
    this.p3 = value3;
  }
}

class C3 extends C2 {
  constructor(value1, value2, value3, value4) {
    super(value1, value2, value3)
    this.p4 = value4;
  }
}

const c3 = new C3(1,2,3,4);

console.log(c3)