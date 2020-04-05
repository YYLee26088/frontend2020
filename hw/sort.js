//homework#5
let arr=[];
for(let i=0;i<100;i++){
    arr[i]=Math.floor(Math.random()*100+1)
}

arr.sort(compare);
console.log(arr);

//비교함수
function compare(i,j){
    return i-j;
}