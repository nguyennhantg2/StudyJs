const array = [
    { name: 'Object 1', body: 'Hello world'},
    { name: 'Object 2', body: 'Bye Pluto'},
    { name: 'Object 3', body: 'Hello world'},
    { name: 'Object 4', body: 'Bye Pluto'}
];


const newArr = array.reduce((array, el, index) => {
    array.push({
        id: index,
        name: el.name
    });
    return array
}, []);



console.log(array);
/*
    [
        { name: 'Object 1', body: 'Hello world' },
        { name: 'Object 2', body: 'Bye Pluto' },
        { name: 'Object 3', body: 'Hello world' },
        { name: 'Object 4', body: 'Bye Pluto' }
    ]
*/
console.log(newArr);
/*
    [
        { id: 0, name: 'Object 1' },
        { id: 1, name: 'Object 2' },
        { id: 2, name: 'Object 3' },
        { id: 3, name: 'Object 4' }
    ]
*/