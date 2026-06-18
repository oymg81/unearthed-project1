import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM project2_items ORDER BY id ASC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching project2 items:', error);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

export default router;
