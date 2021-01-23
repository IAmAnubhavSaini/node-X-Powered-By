function remove() {
    return function (req, res, next) {
        res.header('X-Powered-By', '')
        res.removeHeader('X-Powered-By')
        next()
    }
}

function manage(value) {
    return function (req, res, next) {
        res.header('X-Powered-By', value)
        next()
    }
}

module.exports = {
    remove, manage
}
