function logger(req, res, next) {
    console.log(`${req.method} ${req, originalUl} ${res, statusCode}`)
    next()
}

module.exports=logger
