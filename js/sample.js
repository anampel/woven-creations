const { Pool, Client } = require('pg')
const connectionString = 'postgressql://postgres:anampel21@localhost:5432/eshop'

const client = new Client({
    connectionString: connectionString
})

client.connect()

client.query('Select * from goods', (err, res) => {
    console.log(err, res)
    client.end()
})