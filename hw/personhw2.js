//homework#14
let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
];

var max=persons.reduce((a,b)=>a.age>b.age?a:b);
console.log(max);