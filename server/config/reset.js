import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const runSQL = async (relativeFilePath) => {
  const filePath = path.resolve(__dirname, '../../', relativeFilePath);
  const sql = fs.readFileSync(filePath, 'utf-8');
  try {
    await pool.query(sql);
    console.log(`Successfully executed ${relativeFilePath}`);
  } catch (err) {
    console.error(`Error executing ${relativeFilePath}:`, err.message);
    throw err;
  }
};

const resetDatabase = async () => {
  try {
    console.log('Starting database setup...');
    // Run schema
    await runSQL('server/schema.sql');
    // Run seed
    await runSQL('server/seed.sql');
    console.log('Database setup completed successfully.');
  } catch (err) {
    console.error('Database setup failed.');
  } finally {
    await pool.end();
  }
};

resetDatabase();
