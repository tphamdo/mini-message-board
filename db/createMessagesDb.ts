#! /usr/bin/env node

import dotenv from 'dotenv';
dotenv.config();

import { Client } from 'pg';

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR(255),
  username VARCHAR(255),
  added TIMESTAMP
);

INSERT INTO messages (message, username, added)
VALUES
  ('Hi this is a message from Trueman', 'Trueman', NOW()),
  ('Hi from Odin', 'Odin', NOW()),
  ('Hi from Julia', 'Julia', NOW());
`;

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.error('Expected 1 argument: <local-db-url>');
    return -1;
  }
  console.log('seeding...');
  const client = new Client({
    connectionString: args[0],
  });

  try {
    await client.connect();
    await client.query(SQL);
  } catch (error) {
    console.error(error);
  } finally {
    await client.end();
    console.log('done');
  }
}

main();
