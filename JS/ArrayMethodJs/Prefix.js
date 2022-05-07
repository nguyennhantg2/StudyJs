class Stack {
    #stack = []
    push = (item) => this.#stack.push(item)
    pop = () => this.#stack.pop()
    isEmpty = () => this.#stack.length === 0
    empty = () => this.#stack.length = 0
    size = () => this.#stack.length
    head = () => this.#stack[this.#stack.length-1]
    show = () => this.#stack.map(el => el)
}


const myStack = new Stack()

const str = "x+y*z"
const arr = str.split("").reverse()
let ouput = []
const isOperator = (operator) => ["+","-","*","/","%"].includes(operator)
// const isParentheses = ()
const GetPriority = (op) => {
    if (op == "*" || op == "/" || op == "%")
        return 2;
    if (op == "+" || op == "-")
        return 1;
    return 0;
}

arr.forEach(el => {
    if(isOperator(el)){
        while(myStack.size() > 0 && GetPriority(el) < GetPriority(myStack.head()))
            ouput.push(myStack.pop())
        myStack.push(el)
    }else if(el == ")"){
        myStack.push(el)
    }else if(el == "("){
        let x = myStack.pop()
        while(x != ")"){
            ouput.push(x)
            x = myStack.pop()
        }
    }else{
        ouput.push(el)
    }
})

while(myStack.size() > 0){
    ouput.push(myStack.pop())
}

let temp = ouput.reverse()
console.log("input:", str)
console.log("ouput:",temp.join(""))