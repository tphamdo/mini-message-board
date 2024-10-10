import pool from './pool';

export async function getAllMessages() {
  const query = `SELECT * FROM messages ORDER BY added DESC`;
  const { rows } = await pool.query(query);
  return rows;
}

export async function insertMessage(message: {
  message: string;
  username: string;
}) {
  const query = `INSERT INTO messages (message, username, added) VALUES ($1, $2, NOW())`;
  await pool.query(query, [message.message, message.username]);
}

export async function getMessage(messageId: number) {
  const query = `SELECT * FROM messages WHERE id = $1`;
  const { rows } = await pool.query(query, [messageId]);
  if (!rows.length) return {};
  return rows[0];
}
