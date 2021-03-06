const authModel = require('../models/auth')
const jwt = require('jsonwebtoken')

function login(req, res, next){
  if(!req.body.username){
    return next({ status: 400, message: 'Bad request'})
  }

  if(!req.body.password){
    return next({ status: 400, message: 'Bad request'})
  }

  authModel.login(req.body.username, req.body.password)
  .then(function(user){

    const token = jwt.sign({id: user.id}, process.env.SECRET)

    return res.status(200).send({ token })
  })
  .catch(next)
}


function getAuthStatus(req, res, next){
    res.status(200).send({id:req.claim.id})
}

function isAuthenticated(req, res, next){
  if(!req.headers.authorization){
    return next({ status: 401, message: 'Unauthorized! Why am I here?' })  // <-- ?
  }
  const [scheme, credentials] = req.headers.authorization.split(' ')

  jwt.verify(credentials, process.env.SECRET, (err, payload) => {
    if(err){
      return next({ status: 401, message: 'Unauthorized' })
    }

    req.claim = payload

    next()
  })
}

function isSelf(req, res, next){

  if(parseInt(req.params.userId) !== req.claim.id){
    return next({ status: 401, message: 'Unauthorized' })
  }

  next()
}

module.exports = {
    isAuthenticated,
    getAuthStatus,
    isSelf,
    login
}
