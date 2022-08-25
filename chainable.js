let arr = [1,2,3,5,8,11,17];

let result = arr.map((curElem)=>{
    return curElem * 2;
}).filter((curElem)=>{
    return curElem > 10;
}).reduce((sum,curElem)=>{
    return sum += curElem;
})

console.log(result);