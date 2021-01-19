import pg from 'pg'

// for debugging
console.log(process.env.PGHOST)
console.log(process.env.PGPORT)
console.log(process.env.PGDATABASE)
console.log(process.env.PGUSER)
console.log(process.env.PGPASSWORD)

const pool = new pg.Pool({
  max: 1,
  min: 0,
  idleTimeoutMillis: 120000,
  connectionTimeoutMillis: 10000
})

export default pool
