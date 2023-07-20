/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema
      .createTable('course_materials', (table) => {
        table.string('id').notNullable().unique().primary()
        table.string('name', 200).notNullable()
        table.integer('material_type_id')
            .notNullable()
            .references('id')
            .inTable('material_types')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.text('description').notNullable()
        table.string('material_link').notNullable()
        table.timestamps(true, true)
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('course_materials')
  }
