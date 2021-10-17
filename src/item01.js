const add = (a, b) => a + b
const sub = (a, b) => a - b

let result = add(3, 7)
let expected = 10

if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}

result = sub(10, 7)
expected = 3

if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}