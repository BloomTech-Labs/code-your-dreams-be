const material_types = [
  {
    material_type: 'Document'
  },
  {
    material_type: 'Presentation'
  },
  {
    material_type: 'Video'
  },
  {
    material_type: 'Quiz'
  },
];

exports.seed = function (knex) {
  return knex('material_types')
    .del()
    .then(function () {
      return knex('material_types').insert(material_types);
    });
};

exports.material_types = { material_types };