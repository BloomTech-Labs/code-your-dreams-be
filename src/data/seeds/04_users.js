const users = [
  // bear001
  {
    auth0_id: 'auth0|62e4439b9b1f5f6077c26aab',
    name: 'Bear001',
    email: 'bear001@maildrop.cc',
    role_id: 1,
    chapter_id: 1
  },
  // bear002
  {
    auth0_id: 'auth0|62e443bde8116e9fce827b52',
    name: 'Bear002',
    email: 'bear002@maildrop.cc',
    role_id: 3,
    chapter_id: 1
  },
  // bear003
  {
    auth0_id: 'auth0|62e443dfdf1dad2163efdb89',
    name: 'Bear003',
    email: 'bear003@maildrop.cc',
    role_id: 2,
    chapter_id: 2
  },
  // bear004
  {
    auth0_id: 'auth0|62e443f59b1f5f6077c26ab9',
    name: 'Bear004',
    email: 'bear004@maildrop.cc',
    role_id: 3,
    chapter_id: 2
  },
  // bear005
  {
    auth0_id: 'auth0|62e44408e1c5006f71b0f30a',
    name: 'Bear005',
    email: 'bear005@maildrop.cc',
    role_id: 2,
    chapter_id: 5
  },
  // bear006
  {
    auth0_id: 'auth0|62e444269b1f5f6077c26abd',
    name: 'Bear006',
    email: 'bear006@maildrop.cc',
    role_id: 3,
    chapter_id: 5
  },
  // bear007
  {
    auth0_id: 'auth0|62e444448fc49f84e9d39497',
    name: 'Bear007',
    email: 'bear007@maildrop.cc',
    role_id: 2,
    chapter_id: 3
  },
];

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert(users);
    });
};

exports.users = { users };