import 'server-only';
import pg from 'pg';

// One pool per server process; kept on globalThis so dev hot-reloads don't open new connections.
const globalForDb = globalThis;

export const pool =
  globalForDb.relientPool ??
  new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    // Supabase requires TLS; its pooler certificate isn't in Node's default CA bundle.
    ssl: { rejectUnauthorized: false },
    max: 3,
  });

if (process.env.NODE_ENV !== 'production') globalForDb.relientPool = pool;
