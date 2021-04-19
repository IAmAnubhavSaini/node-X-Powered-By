"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function remove() {
    return function (_, res, next) {
        res.removeHeader('X-Powered-By');
        res.removeHeader('x-powered-by');
        next();
    };
}
function manage(value) {
    return function (_, res, next) {
        res.set('X-Powered-By', value);
        next();
    };
}
module.exports = {
    remove: remove, manage: manage
};
//# sourceMappingURL=manage.js.map