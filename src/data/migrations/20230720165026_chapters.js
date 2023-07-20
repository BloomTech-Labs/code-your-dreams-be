/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema
      .createTable('chapters', (table) => {
        table.increments('id').notNullable().unique().primary()
        table.string('name', 200).notNullable()
        table.timestamps(true, true)
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('chapters')
  }
