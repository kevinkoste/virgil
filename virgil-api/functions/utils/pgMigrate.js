import handler from '../../libs/handler-lib'
import pool from '../../libs/pg-lib'

/**
 * function to initialize the database on deploy
 */
export const main = handler(async (event, context) => {

  context.callbackWaitsForEmptyEventLoop = false; // !important to reuse pool

  const client = await pool.connect()

  const query = `
    DROP TABLE IF EXISTS transactions;
    DROP TABLE IF EXISTS items;
    
    CREATE TABLE IF NOT EXISTS items (
      itemId          VARCHAR(255) PRIMARY KEY,
      accessToken     VARCHAR(255),
      userId          VARCHAR(255)
    );
    INSERT INTO items (itemId, accessToken, userId) VALUES ('test-item-id', 'test-access-token', 'test-user-id');

    CREATE TABLE IF NOT EXISTS transactions (
      transactionId   VARCHAR(255) PRIMARY KEY,
      itemId          VARCHAR(255) REFERENCES items(itemId),
      userId          VARCHAR(255),
      amount          NUMERIC
    );
    INSERT INTO transactions (transactionId, itemId, userId, amount) VALUES ('test-transaction-id', 'test-item-id', 'test-user-id', 10.00);
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