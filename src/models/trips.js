const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')

function getOneById(id) {
    return db('trip_order')
    .join('path', 'path.id', 'trip_order.path_id')
    .where('trip_id', id)
    .orderBy('order', 'inc')
    .then(
        function(data) {
            return Promise.all(data.map(a => {
                const location_a = db('locations').where('id', a.location_a_id).first()
                const location_b = db('locations').where('id', a.location_b_id).first()
                return Promise.all([location_a, location_b])
                .then(
                    function(locations) {
                        a.location_a = locations[0]
                        a.location_b = locations[1]
                        return a
                    }
                )
            })
        )
        }
    )
}

function getAllTrips(user_id) {
    return db('trips')
    .where('user_id', user_id)
    .then(user_trips => {
        return Promise.all(user_trips.map( trip => getOneById(trip.id)))
    })
}

module.exports = {
    getOneById,
    getAllTrips
}