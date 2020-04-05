//homework#6
let arr=[];

for(let i=0;i<100;i++){ //배열에 채우기
    arr[i]=Math.floor(Math.random()*100+1)
}

console.log("삭제전\n"+arr);

for(let i=arr.length-1;i>=0;i--){  //배열에서 2의배수 없애기
    if(arr[i]%2==0){arr.splice(i,1)}
}

console.log("\n삭제후\n"+arr);