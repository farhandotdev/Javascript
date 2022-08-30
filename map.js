let arr = [1,4,9,16,25,49];

// let arrSqr = arr.map((currElem)=>{
//     return Math.sqrt(currElem);
// })

// console.log(arrSqr);

let arr2 = arr.map((currElem)=>{                   //using map()mathod we can add another method too such as filter(),reduce();
    return currElem*2;
}).filter((currElem)=>{
    return currElem>15;
});

console.log(arr2);


