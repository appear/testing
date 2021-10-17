// node --require ./globals.js src/item04.js 

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

global.expect = expect
global.test = test
