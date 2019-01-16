var express = require('express');
var router = express.Router();
var authRequire = require('../middlewares/authRequire');

router.get('/', authRequire, (req, res, next) => {
    console.log(req.session.user);
    if (req.session.user){
        res.send(req.session.user);
    }
    else {
        console.log("user does not exist")
        res.next()
    }
    // res.send(req.session.user);

})

module.exports = router;