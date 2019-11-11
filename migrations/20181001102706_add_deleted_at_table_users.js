
exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', table => {
        table.increments('id').primary()
        table.integer('parentId').references('id')
            .inTable('users')
        table.string('post',1000).notNull()
        table.string('image',1000)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories')
};
