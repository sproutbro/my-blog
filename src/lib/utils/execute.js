import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } from "$env/static/private";
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
    max: 5,
});

const query = async (text, params) => {
    try {
        return await pool.query(text, params);
    } catch (error) {
        console.error(error)
    }
};

export { query }