/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema
      .createTable('users', (table) => {
        table.string('auth0_id').notNullable().unique().primary()
        table.string('name', 200).notNullable()
        table.string('email', 200).notNullable().unique()
        table
          .integer('role_id')
          .references('id')
          .inTable('roles')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        table
          .integer('chapter_id')
          .references('id')
          .inTable('chapters')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        table.timestamps(true, true)
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('users')
  }