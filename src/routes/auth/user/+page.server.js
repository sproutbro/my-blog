import { requireUser } from '$lib/server/auth.js';

/** @type {import('./$types').PageServerLoad} */
export function load({ locals }) {
    requireUser(locals); // 로그인 안 되어 있으면 /login 으로 리디렉션

    return {
        user: locals.user
    };
}