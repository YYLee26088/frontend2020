//homework#7
let s="When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";
for(let i=0;i<s.length;i++){
    if("AEIOUaeiou".search(s[i])>0){console.log("인덱스(%s): %d",s[i],i)}
}
