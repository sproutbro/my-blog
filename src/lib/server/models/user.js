import { db } from '$lib/db.js';

/**
 * OAuth로 로그인한 유저를 저장 (이미 있으면 무시)
 */
export async function saveOAuthUser({ id, nickname, provider }) {
    await db.query(
        `INSERT INTO users (id, nickname, provider)
     VALUES ($1, $2, $3)
     ON CONFLICT (id) DO NOTHING`,
        [id, nickname, provider]
    );
}

/**
 * 사용자 ID로 조회
 */
export async function findUserById(id) {
    const result = await db.query(
        `SELECT * FROM users WHERE id = $1`,
        [id]
    );
    return result.rows[0] ?? null;
}
