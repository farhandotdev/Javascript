//currying

// function sum(num1){
//     // console.log(num1);
//     return function (num2){
//         // console.log(num1,num2);
//         return function (num3){
//             console.log(num1+num2+num3);
//         }
//     }
// }

const sum = (num1) => (num2) => (num3) => (num4) => console.log(num1 + num2 + num3 + num4);

sum(5)(4)(2)(9);
