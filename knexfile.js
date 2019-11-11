module.exports = {
	production:{
	client: 'pg',
	connection:   {
        host : '127.0.0.1',
        port: 5432,
        database: 'linked',
        user: 'postgres',
        password: 'okok'
    },
	migrations: {
		directory: __dirname + '/migrations'
	}
}
};