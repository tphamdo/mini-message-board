import { Pool } from 'pg';

console.log('database_url:', process.env.DATABASE_URL);

export default new Pool({
  connectionString: process.env.DATABASE_URL,
});
