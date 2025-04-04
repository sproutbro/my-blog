import { json } from "@sveltejs/kit";
import { saveScore } from "@lib/server/models/score.js";

/** @type {import('./$types').RequestHandler} */
export function POST({ request, locals }) {
    if (!locals.user) {
        return json({});
    }

    const { score } = await request.json();
    saveScore({ userId: locals.user, game: "runner", score });

    return json({});
}
