var A = {
    name:"David",
    address:"Taipei"
}

var B = A;
A.name = "Johnny";
B.address = "嘉義";
console.log(A);
console.log(B);