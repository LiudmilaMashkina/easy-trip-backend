const TABLE_NAME = 'trip_order'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, trip_id: 1, path_id: 1, order: 1},
        {id: 2, trip_id: 1, path_id: 2, order: 2},
        {id: 3, trip_id: 1, path_id: 3, order: 3},
        {id: 4, trip_id: 1, path_id: 4, order: 4},
        {id: 5, trip_id: 1, path_id: 5, order: 5},
        {id: 6, trip_id: 2, path_id: 6, order: 1},
        {id: 7, trip_id: 2, path_id: 7, order: 2},
        {id: 8, trip_id: 3, path_id: 8, order: 1},
        {id: 9, trip_id: 3, path_id: 9, order: 2},
        {id: 10, trip_id: 3, path_id: 10, order: 3}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};