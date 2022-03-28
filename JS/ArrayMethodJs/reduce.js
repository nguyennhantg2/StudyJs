const array = [
    { name: 'Object 1', body: 'Hello world'},
    { name: 'Object 2', body: 'Bye Pluto'},
    { name: 'Object 3', body: 'Hello world'},
    { name: 'Object 4', body: 'Bye Pluto'}
];


const newArr = array.reduce((array, el,index) => {
    array.push({
        id: index,
        name: el.name
    });
    return array
}, []);



console.log(array);

console.log(newArr);