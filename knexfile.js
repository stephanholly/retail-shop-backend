// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'dropstore',
      host: '127.0.0.1'
    },
    migrations: {
      directory: __dirname + './db/seeds'
    },
  seeds: {
  directory: __dirname + './db/seeds'
}},

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + './db/seeds'
    },
  seeds: {
  directory: __dirname + './db/seeds'
}
}

};
