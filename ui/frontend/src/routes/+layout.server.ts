import type { LayoutServerLoad } from './$types';

// turn off SSR - we're JAMstack here
export const ssr = false;
// Prerendering turned off. Turn it on if you know what you're doing.
export const prerender = false;
// trailing slashes make relative paths much easier
export const trailingSlash = "always";

export const load: LayoutServerLoad = async (event) => {
    return {
        session: await event.locals.getSession()
    };
};
