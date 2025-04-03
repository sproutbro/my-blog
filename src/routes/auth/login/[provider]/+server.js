import { redirect, error } from '@sveltejs/kit';
import { AUTH_KAKAO_ID, ORIGIN } from '$env/static/private';

const OAUTH_CONFIG = {
    kakao: (state) => {
        const redirectUri = `${ORIGIN}/auth/callback/kakao`;

        return `https://kauth.kakao.com/oauth/authorize` +
            `?client_id=${AUTH_KAKAO_ID}` +
            `&redirect_uri=${encodeURIComponent(redirectUri)}` +
            `&response_type=code` +
            `&state=${state}`;
    },

    // 예시: 나중에 Google 추가할 경우
    // google: () => { ... }

    // 예시: GitHub 추가할 경우
    // github: () => { ... }
};

/** @type {import('./$types').RequestHandler} */
export function GET({ params, cookies }) {
    const provider = params.provider;

    const getAuthUrl = OAUTH_CONFIG[provider];

    if (!getAuthUrl) {
        throw error(400, `Unsupported OAuth provider: ${provider}`);
    }

    const state = crypto.randomUUID();
    cookies.set("state", state, { path: "/" });

    const authUrl = getAuthUrl(state);
    throw redirect(302, authUrl);
}