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

