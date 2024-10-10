import pool from './pool';

export async function getAllMessages() {
  const query = `SELECT * FROM messages ORDER BY added DESC`;
  const { rows } = await pool.query(query);
  console.log('ALL:', rows);
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
  console.log('getMessage');
  const query = `SELECT * FROM messages WHERE id = $1`;
  const { rows } = await pool.query(query, [messageId]);
  console.log(messageId);
  console.log(rows);
  if (!rows.length) return {};
  return rows[0];
}

/* export async function getSearchUsernames(username: string) {
  const query = `SELECT * FROM usernames WHERE LOWER(username) LIKE LOWER('%${username}%')`;
  console.log(query);
  const { rows } = await pool.query(query);
  return rows;
}

export async function deleteAllUsernames() {
  const query = `DELETE FROM usernames`;
  const { rows } = await pool.query(query);
  return rows;
} */
