const userModel = require('../models/users')

function create(req, res, next){
  if(!req.body.username){
    return next({ status: 400, message: 'Bad username'})
  }

  if(!req.body.password){
    return next({ status: 400, message: 'Bad username'})
  }

  userModel.create(req.body.username, req.body.password)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

// function getUsers(req, res, next) {
  
// }

module.exports = {
  create
}
