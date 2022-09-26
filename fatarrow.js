// const prices = [200, 300, 400, 550, 600];

// const findElement = prices.find((currValue) => {
//     return currValue>500;
// });

// console.log(findElement);


// console.log(prices.find((currValue)=> currValue<300));


const prices1 = [200, 300, 400, 550, 600, 650, 750, 890];

const newPriceTag = prices1.filter((elem, index)=>{
    return elem>500;                                          
});

console.log(newPriceTag);

console.log(prices1.filter((elem)=>elem<400));               //Singal return of code written like this in fat arraow function
console.log(prices1.filter((elem)=>elem>1200));              //if cond. are false the empty array return {  elem>1200  }
