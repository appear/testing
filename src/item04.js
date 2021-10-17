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

async function test(title, callback) {
    try {
        await callback()
        console.log(`v ${title}`)
    } catch (error) {
        console.error(`x ${title}`)
        console.error(error)
    }
}

const add = (a, b) => Promise.resolve(a + b)
const sub = (a, b) => Promise.resolve(a - b)

test('sum test', async () => {
    const result = await add(3, 7)
    const expected = 10

    expect(result).toBe(expected)
})

test('sub test', async () => {
    const result = await sub(10, 7)
    const expected = 4
    
    expect(result).toBe(expected)
})


