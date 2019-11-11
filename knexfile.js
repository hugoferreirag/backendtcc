module.exports = {
	production:{
	client: 'postgres',
	connection: process.env.DATABASE_URL,

	migrations: {
		directory:'migrations'
	}
}
};