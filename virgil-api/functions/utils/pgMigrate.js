import handler from '../../libs/handler-lib'
import pool from '../../libs/pg-lib'

/**
 * function to initialize the database on deploy
 */
export const main = handler(async (event, context) => {

  context.callbackWaitsForEmptyEventLoop = false; // !important to reuse pool

  const client = await pool.connect()

  const query = `
    CREATE TABLE IF NOT EXISTS items (
      itemId varchar(250) NOT NULL,
      accessToken varchar(250),
      userId varchar(250),
      PRIMARY KEY (itemId)
    );
    CREATE TABLE IF NOT EXISTS transactions (
      transactionId varchar(250) NOT NULL,
      itemId varchar(250),
      userId varchar(250),
      PRIMARY KEY (transactionId)
    );
  `

  try {
    const resDb = await client.query(query)
    console.log(resDb)
  } catch (err) {
    console.log(err)
    throw new Error('Unable to execute query')
  } finally {
    client.release(true)
  }

  return {
    message: 'Success',
  }
  
})