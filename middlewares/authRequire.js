function authRequire(req, res, next) {
    if(req.session.user) {
        console.log("debugger12")
        next();
    }
    else {
        console.log("debugger11")
        res.status(401).send('you are not logged in!')
    }

}

module.exports = authRequire;