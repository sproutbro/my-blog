import { AUTH_KAKAO_ID, AUTH_KAKAO_SECRET, ORIGIN } from '$env/static/private';
import { tryFetch } from "$lib/utils";
import { saveOAuthUser } from '$lib/server/models/user.js';

export const OAUTH_CALLBACK_HANDLER = {
    kakao: async ({ code }) => {
        const redirectUri = `${ORIGIN}/auth/callback/kakao`;

        const tokenUrl = "https://kauth.kakao.com/oauth/token";
        const tokenUrlOption = {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                client_id: AUTH_KAKAO_ID,
                client_secret: AUTH_KAKAO_SECRET,
                redirect_uri: redirectUri,
                code,
            }),
        };

        const tokenData = await tryFetch(tokenUrl, tokenUrlOption);
        if (!tokenData.access_token) throw new Error('토큰 요청 실패');

        const userUrl = "https://kapi.kakao.com/v2/user/me";
        const userUrlOption = {
            headers: {
                Authorization: `Bearer ${tokenData.access_token}`,
            },
        };

        const rawUser = await tryFetch(userUrl, userUrlOption);
        const user = {
            id: String(rawUser.id),
            nickname: rawUser.kakao_account?.profile?.nickname,
            provider: 'kakao'
        }

        await saveOAuthUser(user);

        return user;
    }

    // 👉 나중에 google, github도 여기에 추가할 수 있어
};