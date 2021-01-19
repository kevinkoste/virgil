import handler from '../../libs/handler-lib'
import pool from '../../libs/pg-lib'

/**
 * function to test select statement of db tables
 */
export const main = handler(async (event, context) => {

  context.callbackWaitsForEmptyEventLoop = false; // !important to reuse pool

  const client = await pool.connect()

  const query = `
    SELECT * FROM items;
  `

  let resDb

  try {
    resDb = await client.query(query)
    console.log(resDb)
  } catch (err) {
    console.log(err)
    throw new Error('Unable to execute query')
  } finally {
    client.release(true)
  }

  return {
    message: 'Success',
    data: resDb.rows
  }
  
})