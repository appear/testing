
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


