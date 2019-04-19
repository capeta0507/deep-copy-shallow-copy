var obj1 = { a: 10, b: 20, c: 30 };
var obj2 = { a: obj1.a, b: obj1.b, c: obj1.c };
obj2.b = 100;
obj1.c = 50;
console.log(obj1);
console.log(obj2);

var obj3 = { a: 10, b: 20, c: 30 };
var obj4 = Object.assign({}, obj3);
obj4.b = 100;
obj3.a = 55;

console.log(obj3);
console.log(obj4);

var obj5 = [1,2,3,4];
var obj6 = Object.assign([], obj5);
obj5[1] = 10;
obj6[3] = 15;

console.log(obj5);
console.log(obj6);

var obj7 = [1,2,3,4];
var obj8 = JSON.parse(JSON.stringify(obj7));
obj7[1] = 10;
obj8[3] = 15;

console.log(obj7);
console.log(obj8);