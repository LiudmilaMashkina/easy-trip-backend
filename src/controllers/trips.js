const tripModel = require('../models/trips')
const jwt = require('jsonwebtoken')

function getAllTrips(req, res, next) {
    tripModel.getAllTrips(1)
    .then (
        function(data) {
            console.log(data)
            res.status(200).send({ data })
        }
    )
    .catch (
        next
    )
}

function getOneById(req, res, next) {
    tripModel.getOneById(req.params.id)
    .then (
        function(data) {
            console.log(data)
            res.status(200).send({ data })
        }
    )
    .catch (
        next
    )
}

module.exports = {
    getOneById,
    getAllTrips
}