
const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        { id: 1, username: 'yoda', password: '$2a$10$n8UqyqjHuIsede7Krp1w9OOCJENVfaRS3OlgTjEevSxvhjp/axIaC' },
        { id: 2, username: 'luda', password: '$2a$10$b5ud1OaOFhjDhfpxiKno4eKcpOumNvMrGzmdx0HmHsGUC8Y87wyX.' },
        { id: 3, username: 'dan', password: '$2a$10$WgH2w5hSRAriC/MZ4AZmWufPHMGa24NanRzlKNPG2X9P6UqMfUg4m' },
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};

