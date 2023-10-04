/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema
      .createTable('material_types', (table) => {
        table.increments('id').notNullable().unique().primary()
        table.string('material_type', 200).notNullable()
        table.timestamps(true, true)
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('material_types')
  }
