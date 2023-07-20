/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema
      .createTable('course_permissions', (table) => {
        table.increments('id').notNullable().unique().primary()
        table
            .integer('chapter_id')
            .notNullable()
            .references('id')
            .inTable('chapters')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table
            .integer('course_id')
            .notNullable()
            .references('id')
            .inTable('courses')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.boolean('access_granted').notNullable()
        table.timestamps(true, true)
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('course_permissions')
  }
