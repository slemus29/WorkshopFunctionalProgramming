//-----------------Cafe example
// class Cafe {
//     // buyCoffee(creditCard: CreditCard): Coffee
//     buyCoffee(creditCard){
//         const cup = new Coffee()
//         creditCard.charge(cup.price)
//         return cup
//     } 
// }

// // Test tendria que llamar a la compañia  para eso tendira que mockear la funcion credit card
// //contactar al banco
// // Guardar en la base de datos


// class Cafe {
//     // buyCoffee(creditCard: CreditCard, p:Payments): Coffee
//     buyCoffee(creditCard, p){
//         const cup = new Coffee()
//         p.charge(creditCard, cup.price)
//         return cup
//     } 
// }


// ------------Memoize
// const memoize = (f) => {
//     const cache = {};
//     // console.log("cache", cache)
//     return (...args) => {
        
//         const argStr = JSON.stringify(args);
//         console.log("cache", cache, ...args, argStr)
//         cache[argStr] = cache[argStr] || f(...args);
//         // console.log(argStr)
//         return cache[argStr];
//     };
// };


// const squareNumber = memoize(x => {
//     console.log("x", x)
//  return (
//     x * x * x
//  )
// });

// const squareNumberN = memoize(x => {
//     console.log("y", x)
//  return (
//     x * x
//  )
// });

// console.log(squareNumber(4)); // 16
// console.log(squareNumberN(4)); // 16

// console.log(squareNumber(4)); // 16, returns cache for input 4

// console.log(squareNumber(4)); // 16, returns cache for input 4

// squareNumber(5); // 25

// squareNumber(5); // 25, returns cache for input 5

// //------------with side effects
// var info = {name:"Santy", date:2019}
// function rename (newName){
//     info.name = newName
// }
// rename("pedro")
// console.log(info);



// //------------No side effects
// var conf = {name:"Santy", date:2019}
// function rename (oldData, newName){
//     return {name: newName, date: oldData.date}
// }

// var newName = rename(conf ,'Juan');
// console.log(newName);
// console.log(conf);


// const add = (x,y) => x+y

// const add = x => y => x + y;

// const increment = add(1);
// const addTen = add(10);



// console.log(increment(2))


// compose
// const compose = (f,g) => {
//     return (x) => f(g(x))
// } 

// const compose  = (...args) => (param) => {
//     let result = param;
//     args.forEach((f) => {
//       result = f(result);
//     })
  
//     return result;
// }
const compose = function(...functions) {
    let value;
 
    return (param) => {
        value = param;
        functions.forEach((func, index) => {
            value = func(value)
        })
 
        return value
    }
 }
 
 
//  const toUpperCase = x => x.toUpperCase();
 
//  const exclaim = x => `${x}!!!`
 
// const composed = compose(exclaim, toUpperCase)('Wilson')

const addWord = x => `${x}=33333`
const toUpperCase = x => x.toUpperCase();
const explain = x => `${x}`

const shout = compose(explain, toUpperCase, addWord)

console.log(shout("functional programing"))


//curring

// const curryTwoParameters= (f) => {
//     return (x) => (y) => f(x,y)
//  }

//  const suma = (x,y) => x + y

//  const sumaCurry = curryTwoParameters(suma)

// const sumarTen = sumaCurry(10)

//  console.log(sumarTen(2))

