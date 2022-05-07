let luckyPerson = []
let count = 0

let luckyNumber = Math.floor((Math.random() * 100000000) + 1)
while(!luckyPerson.includes(luckyNumber)){
    console.log('count', ++count)
    luckyPerson.push(luckyNumber)
    luckyNumber = Math.floor((Math.random() * 100000000) + 1)
}

console.log('luckyPerson', luckyPerson)
console.log('luckyNumber', luckyNumber)
console.log('count', count)
