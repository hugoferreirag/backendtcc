
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', table => {
        table.increments('id').primary()
        table.string('description', 1000).notNull()
        table.string('imageUrl', 1000)
        table.integer('userId').references('id')
            .inTable('users').notNull()
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts')
};
