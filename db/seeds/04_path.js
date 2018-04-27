const TABLE_NAME = 'path'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, location_a_id: 2, location_b_id: 1, time_min: 30},
        {id: 2, location_a_id: 1, location_b_id: 4, time_min: 240},
        {id: 3, location_a_id: 4, location_b_id: 5, time_min: 480},
        {id: 4, location_a_id: 5, location_b_id: 6, time_min: 300},
        {id: 5, location_a_id: 6, location_b_id: 3, time_min: 270},
        {id: 6, location_a_id: 1, location_b_id: 6, time_min: 540},
        {id: 7, location_a_id: 6, location_b_id: 5, time_min: 510},
        {id: 8, location_a_id: 7, location_b_id: 8, time_min: 480},
        {id: 9, location_a_id: 8, location_b_id: 9, time_min: 600},
        {id: 10, location_a_id: 9, location_b_id: 10, time_min: 1150}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};