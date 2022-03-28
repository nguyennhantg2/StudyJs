

// const obj = {
//     test: {
//         da: "das"
//     },
//     a123: "a123",
//     ayk: "hayko",
// }

// console.log(obj);


// let a = {
//     ...obj,
//     test: {
//         ...obj.test,
//         da: "hoho"
//     }
// }

// console.log(a);
// const axios = require('axios').default;
// const getData = async` () => {
//     const res = await axios.get('https://geolocation-db.com/json/')
//     console.log(res.data);
// }

// getData();

// let a = [
//     {c: 1, b: 2},
//     {c: 1, b: 2},
//     {c: 1, b: 2},
//     {c: 1, b: 2},
//     {c: 1, b: 2},
//     {c: 1, b: 2},
//     {c: 1, b: 2},
// ]

// console.log(a);


// let c = a.map(el => {
//     el.c = 3;
//     el.b = 4
// })

// console.log(a);


// console.log(c);


const randomId = (n, currentID) => {
    if(n < 2){
      return currentID += Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }
    n--;
    return randomId(n, currentID += Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1));
}

let a = randomId(1000, "");

console.log("a", a);