import { redirect } from '@sveltejs/kit';

/**
 * 로그인한 유저만 접근 가능하게 막는 헬퍼 함수
 */
export function requireUser(locals) {
    if (!locals.user) {
        throw redirect(302, '/auth/login');
    }
}

/**
 * 로그인 안 한 사용자만 접근 가능하게 제한
 * (로그인된 사람은 튕겨냄)
 */
export function requireGuest(locals) {
    if (locals.user) {
        throw redirect(302, '/');
    }
}