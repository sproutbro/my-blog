import { json } from "@sveltejs/kit";
import { saveScore } from "$lib/server/models/score.js";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals }) {
    if (!locals.user) {
        return json({});
    }

    const { score } = await request.json();
    saveScore({ userId: locals.user.id, game: "runner", score });

    return json({});
}
