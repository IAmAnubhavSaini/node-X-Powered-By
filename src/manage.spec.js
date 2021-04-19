"use strict";
var _a = require('./manage'), remove = _a.remove, manage = _a.manage;
describe('remove', function () {
    it('returns a function with arity of 3', function () {
        var actual = remove().length;
        var expected = 3;
        expect(actual).toEqual(expected);
    });
    it('returned function calls next param callback', function () {
        var called = false;
        var callback = function () { return called = !called; };
        expect(called).toBeFalse();
        remove()({}, {
            removeHeader: function () {
            },
            header: function () {
            }
        }, callback);
        expect(called).toBeTrue();
    });
});
module.exports = {
    remove: remove, manage: manage
};
//# sourceMappingURL=manage.spec.js.map