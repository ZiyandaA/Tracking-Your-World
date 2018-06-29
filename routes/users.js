var express = require('express');
var router = express.Router();
var User = require('../models/user');
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(process.env);
  models.User.find()
    .exec()
    .then(data => {
      res.send(data)
    })
  
});

router.get('/:id', async (req, res, next) => {
  try {
 
    var ObjectId = require('mongoose').Types.ObjectId;
    let user = await models.User.findById(req.params.id).lean().exec();
    let userTrackers = await models.Tracker.find({userID: user._id}).lean().exec();
    for (let i=0; i < userTrackers.length; i++) {
      let trackerTargets = await models.TrackerTarget.find({trackerID: userTrackers[i]._id});
      userTrackers[i] = Object.assign({}, userTrackers[i], {trackerTargets: trackerTargets})
    }
    
    user.trackers = userTrackers;
    

    res.send(user)
}
catch (err) {
    next(err);
}
})

router.delete('/', (req, res, next) => {
  models.User.remove()
    .exec()
    .then(data => {
      console.log(data);
      res.send(data);
    })
})

router.post('/', (req, res, next) => {

  User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send({err: err});
  })
})

module.exports = router;
