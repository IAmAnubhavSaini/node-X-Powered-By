import {Request, Response} from "express";

function remove() {
    return function (_: Request, res: Response, next: () => void) {
        res.removeHeader('X-Powered-By');
        res.removeHeader('x-powered-by');
        next();
    };
}

function manage(value: string) {
    return function (_: Request, res: Response, next: () => void) {
        res.set('X-Powered-By', value);
        next();
    };
}

module.exports = {
    remove, manage
};
