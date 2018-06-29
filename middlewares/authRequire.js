function authRequire(req, res, next) {
    console.log(req.session, 'this is the session')
    if(req.session.user) {
        next();
    }
    else {
        res.status(401).send('you are not logged in!')
    }

}

module.exports = authRequire;