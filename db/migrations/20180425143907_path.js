const TABLE_NAME = 'path'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('location_a_id').notNullable().references('locations.id')
    table.integer('location_b_id').notNullable().references('locations.id')
    table.integer('time_min').notNullable()
    table.integer('user_time_min')
    table.enu('transport_type', ['car', 'public', 'walk', 'bike', 'plane'])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};