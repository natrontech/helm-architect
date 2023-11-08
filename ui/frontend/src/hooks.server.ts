import { SvelteKitAuth, type SvelteKitAuthConfig } from "@auth/sveltekit"
import Authentik from "@auth/core/providers/authentik"
import { redirect, type Handle } from "@sveltejs/kit"
import { sequence } from "@sveltejs/kit/hooks"
import { OAUTH2_ISSUER_URL, OAUTH2_AUTHORIZATION_URL, OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET } from "$env/static/private"
import { authentikAccessToken } from "$lib/stores/token.server"

const svelteKitAuth : SvelteKitAuthConfig = {
  providers: [
    Authentik({
        clientId: OAUTH2_CLIENT_ID,
        clientSecret: OAUTH2_CLIENT_SECRET,
        issuer: OAUTH2_ISSUER_URL,
        authorization: OAUTH2_AUTHORIZATION_URL, // necessary in order to define scope
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (token) {
        // session is called after the jwt callback and the accessToken must be set in the session to be available later
        // leaving the following commented line here for documentation
        // session.accessToken = token.accessToken // this might be dangerous because session is accessible in client-side code
        authentikAccessToken.set(token.accessToken) // this writable is placed in a server only file -> no exposure to client facing code.
      }
      if (user) {
        session.user = user
      }
      return session
    },
    async jwt({ token, account, }) {
      //console.log("(JWT) TOKEN: " + JSON.stringify(token))
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    }
  }
}

/** @type {import('@sveltejs/kit').Handle} */
export const handle : Handle = sequence(
  SvelteKitAuth(svelteKitAuth),
  authorization
)

async function authorization({ event, resolve }) {

  // currently its enough to just check if we have a session (are logged in)
  // in the future we might check more stuff (like roles etc.)
  const session = await event.locals.getSession()
  if (!session) {
    if (event.route.id !== '/login') {
      throw redirect(303, "/login")
    }
  }

  return resolve(event) 
}

