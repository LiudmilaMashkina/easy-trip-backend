const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.get('/validate_token', authController.isAuthenticated, authController.getAuthStatus)
router.post('/token', authController.login) 

module.exports = router
