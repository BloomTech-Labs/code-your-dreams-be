/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('chapters').insert([
    {name: 'Code Your Dreams'},
    {name: 'Coding Bootcamp'},
    {name: 'Community Center'},
    {name: 'Neighborhood Public School'},
    {name: 'BT Labs - Remote'}
  ]);
};
