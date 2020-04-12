//homework#10
var count=0;

function printTime(msg){
    console.log(msg,new Date());
    count++;
    if(count==10){
        clearInterval(this);
        console.log("10번 반복되어 종료합니다")
    }
}

setInterval(printTime, 1000, "[현재 시각]"); //호출
