var A = [1,2,3,4];
var B = A; // shallow Copy

var C = [];
// deep copy
for(let X = 0; X < A.length; X ++) {
    C.push(A[X]);
}
var D = [];
// deep copy
A.map((data,index)=>{
    D.push(data);
})

var E = [];
// deep copy
E = E.concat(A);

var F = []
// deep copy
F = [...A,5,6,7,8,9,0];

A[0]= 99;
console.log(A);
console.log(B);
console.log("---C---");
console.log(C);
console.log("---D---");
console.log(D);
console.log("---E---");
console.log(E);
console.log("---F---");
console.log(F);
