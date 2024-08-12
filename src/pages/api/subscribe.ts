import type { APIRoute } from "astro";

type SubscribeBody = {
    email: string;
}

export const POST: APIRoute = async ({ request }) => {
    // Check for valid request body
    if (!request.body) {
        return new Response(
            JSON.stringify({ success: false }),
            { headers: { "Content-Type": "application/json", }, status: 400 }
        )
    }
    let body;
    try {
        body = await request.json();
    } catch {
        return new Response(
            JSON.stringify({ success: false }),
            { headers: { "Content-Type": "application/json", }, status: 400 }
        )
    }
    if (typeof body['email'] != "string") {
        return new Response(
            JSON.stringify({ success: false }),
            { headers: { "Content-Type": "application/json", }, status: 400 }
        )
    }
    if (body.email.length <= 0) {
        return new Response(
            JSON.stringify({ success: false }),
            { headers: { "Content-Type": "application/json", }, status: 400 }
        )
    }
    body = body as SubscribeBody;

    // Timeout after 5 seconds
    let timeout = setTimeout(() => {
        console.warn("Failed to subscribe, timed out after 5 seconds");
        return new Response(
            JSON.stringify({ success: false }),
            { headers: { "Content-Type": "application/json", }, status: 500 },
        )
    }, 5000);

    let res: Response;

    try {
        res = await fetch("https://postal.hackclub.com/subscribe", {
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            body: `email=${encodeURIComponent(body.email)}&hp=&list=8be763ZUDKetQTHFNFXIHZNg&subform=yes`,
            method: "POST"
        });
    } catch (e) {
        console.warn("Failed to subscribe, uncaught exception:", e);
        clearTimeout(timeout);
        return new Response(
            JSON.stringify({ success: false }),
            { headers: { "Content-Type": "application/json", }, status: 500 }
        )
    }
    if (res.redirected && (res.url.startsWith("https://ragnohacks.ca/mail/success") || res.url.startsWith("https://ragnohacks.ca/mail/prevsub"))) {
        clearTimeout(timeout);
        return new Response(
            JSON.stringify({ success: true }),
            { headers: { "Content-Type": "application/json", }, status: 200 }
        )
    } else {
        clearTimeout(timeout);
        return new Response(
            JSON.stringify({ success: false }),
            { headers: { "Content-Type": "application/json", }, status: 500 }
        )
    }
}