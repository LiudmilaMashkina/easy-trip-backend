const TABLE_NAME = 'trip_order'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('trip_id').notNullable().references('trips.id')
    table.integer('path_id').notNullable().references('path.id')
    table.integer('order').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};