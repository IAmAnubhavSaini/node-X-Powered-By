const {remove, manage} = require('./manage')

describe('remove', () => {
    it('returns a function with arity of 3', () => {
        const actual = remove().length
        const expected = 3
        expect(actual).toEqual(expected)
    })
    it('returned function calls next param callback', () => {
        let called = false
        const callback = () => called = !called
        expect(called).toBeFalse()
        remove()({}, {
            removeHeader() {
            },
            header() {
            }
        }, callback)
        expect(called).toBeTrue()
    })
})

module.exports = {
    remove, manage
}
