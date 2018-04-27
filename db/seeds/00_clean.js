
exports.seed = function(knex, Promise) {

  return knex('trip_order').del()
  .then(function () {
    return knex('path').del()
  })
  .then (function () {
    return knex('locations').del()
  })
  .then(function () {
    return knex('trips').del()
  })
  .then(function(){
    return knex('users').del()
  })
};         
