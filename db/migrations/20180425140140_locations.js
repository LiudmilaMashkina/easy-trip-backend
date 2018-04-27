const TABLE_NAME = 'locations'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('location_name').notNullable()
    table.string('location_address').notNullable()
    table.string('location_map_ref') // <- make not nullable later
    table.string('img_path')
    table.integer('stay_time_min').notNullable()
    table.string('date_mm_dd_yyyy').notNullable()
    table.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};