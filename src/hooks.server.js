/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const userId = event.cookies.get('user_id');

    // 여기에서 DB나 캐시로부터 유저 정보 조회 가능
    event.locals.user = userId ? { id: userId } : null;

    return resolve(event);
}
