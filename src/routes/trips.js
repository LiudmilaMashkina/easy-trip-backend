const express = require('express')
const router = express.Router()
const tripsController = require('../controllers/trips')

router.get('/', tripsController.getAllTrips)
router.get('/:id', tripsController.getOneById)

module.exports = router
