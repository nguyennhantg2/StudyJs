const obj = {
    name: 'nhan',
    age: 20,
    showName: function() {console.log(`name: ${this.name}, age: ${this.age}`)}
}


obj.showName()


const cities = ['Gbg', 'Stockholm', 'Oslo']
for (const city in obj) { 
  console.log(obj[city])
}