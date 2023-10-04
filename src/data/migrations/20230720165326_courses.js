/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema
      .createTable('courses', (table) => {
        table.increments('id').notNullable().unique().primary()
        table.string('name', 200).notNullable()
        table.text('description').notNullable()
        table.boolean('visibility').notNullable()
        table.timestamps(true, true)
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('courses')
  }
