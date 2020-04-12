//homework#12
var persons1=[];

//persons1 배열 생성
for(var i=0;i<10;i++){
    persons1.push({                
        name: "홍길동", 
        age: 16+i 
    });
}

//persons1의 내용을 persons2에 복제
var persons2=Object.assign([],persons1);

console.log("persons2");
console.log(persons2);