exports.up = async (knex) => {
    await knex.schema
      .createTable('users', (table) => {
        table.string('auth0_id').notNullable().unique().primary()
        table.string('name', 200).notNullable()
        table.string('email', 200).notNullable().unique()
        table.string('role').notNullable()
        table.integer('chapter_id')
        table.timestamps(true, true)
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('users')
  }