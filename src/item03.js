function expect(actual){
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toEqual(){},
        toBeGreaterThan() {}
    }
}

function test(title, callback) {
    try {
        callback()
        console.log(`v ${title}`)
    } catch (error) {
        console.error(`x ${title}`)
        console.error(error)
    }
}

const add = (a, b) => a + b
const sub = (a, b) => a - b

test('sum test', () => {
    const result = add(3, 7)
    const expected = 10

    expect(result).toBe(expected)
})

test('sub test', () => {
    const result = sub(10, 7)
    const expected = 4
    
    expect(result).toBe(expected)
})


