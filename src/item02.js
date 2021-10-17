function expect(actual){
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}


const add = (a, b) => a + b
const sub = (a, b) => a - b

let result = add(3, 7)
let expected = 10

expect(result).toBe(expected)

result = sub(10, 7)
expected = 3

expect(result).toBe(expected)