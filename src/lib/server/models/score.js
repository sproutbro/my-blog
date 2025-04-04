import { db } from '$lib/db.js';

export async function saveScore({ userId, game, score }) {
    await db.query(
        'INSERT INTO scores (user_id, game, score) VALUES ($1, $2, $3)',
        [userId, game, score]
    );
}