
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('nivel').notNull()
        table.string('empresa').notNull()
        table.string('salario').notNull()
        table.date('nascimento').notNull()
        table.date('trabalho_data').notNull()
        table.boolean('cientista').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.boolean('admin').notNull().defaultTo(false)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
};
