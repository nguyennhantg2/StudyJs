// const sumAll = a => b => c => {
//     return a + b + c
// }

// console.log(sumAll(1, 2, 3))
// try{
//     let a = eval("1+2+1e5-'a'")
//     console.log(a)
// }
// catch(error){
//     console.log("elo",error)
// }

// console.log(typeof(1e5))

// let a = 0
// eval(`
//     a = const str = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
//     console.log(str)
// `)

// console.log('const', a)

// var day1 = new Date("08/25/2020 22:10:30"); 
// var day2 = new Date("08/25/2021 11:11:30 PM");

// var difference= Math.abs(day2-day1);
// days = difference/(1000 * 3600 * 24)

// console.log('days', days)


// eval(`
//     let a = 0
//     a = 1*3+((3*2)/3-1)
//     console.log('a',a)
// `)



// const handle = (str) => {
//     eval(str)
// }

// let day1 = "08/25/2020 22:10:30"
// let day2 = "08/25/2021 11:11:30 PM"

// handle(`${day1}-${day2}`)


const sayHello = (a, b) => {
    let c = a+b
    console.log('hello: ' + c)
}


let a = 10
let b = 100

eval('sayHello(a, b)')


