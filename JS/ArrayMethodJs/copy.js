//test here
let c = {
    abc: 3,
    products: {
        0: {is_published: true, name: "hâhha", id: 1},
        1: {is_published: true, name: "hâhha", id: 2},
        2: {is_published: true, name: "hâhha", id: 3},
        3: {is_published: true, name: "hâhha", id: 4}
    }
}


let dataProducts = {
    0: {is_published: true, name: "hâhha", id: 1},
    1: {is_published: true, name: "hâhha", id: 2},
    2: {is_published: false, name: "hâhha", id: 3},
    3: {is_published: false, name: "hâhha", id: 4}
}

//console.log(dataProducts.filter(el => el.is_published).length > dataProducts.filter(el => !el.is_published).length)


// const arrayK = (arr, value) => {
//     arr.map(el => el.id == 3 ? el.is_published = value : el)
// }

// arrayK(dataProducts, true);

let arr=[1,2]


const change = () => {
    let obj = {}
    // let arr = Object.keys(dataProducts)
    console.log('arr', Object.keys(dataProducts))
    Object.keys(dataProducts).forEach((el) => {
        let params = {is_published: false}
        let crt = dataProducts[el]
        if(arr.includes(crt.id)){
            obj[el] = {
                ...crt,
                ...params
            }
        }else{
            obj[el] = crt
        }
    })
    console.log(obj)
    console.log(
        {
            ...c,
            products: obj
        }
    )
}

change()