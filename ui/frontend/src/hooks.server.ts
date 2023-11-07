import { SvelteKitAuth, getSession, type SvelteKitAuthConfig } from "@auth/sveltekit"
import Authentik from "@auth/core/providers/authentik"
import { redirect, type Handle, type RequestEvent, type ResolveOptions } from "@sveltejs/kit"
import { sequence } from "@sveltejs/kit/hooks"
import { OAUTH2_ISSUER_URL, OAUTH2_AUTHORIZATION_URL, OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET } from "$env/static/private"
import { getToken } from "@auth/core/jwt"

const svelteKitAuth : SvelteKitAuthConfig = {
  providers: [
    Authentik({
        clientId: OAUTH2_CLIENT_ID,
        clientSecret: OAUTH2_CLIENT_SECRET,
        issuer: OAUTH2_ISSUER_URL,
        authorization: OAUTH2_AUTHORIZATION_URL // necessary in order to define scope
    })
  ],
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true
    // },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    async session({ session, user, token }) {
      if (user) {
        console.log("(SESSION) USER: " + JSON.stringify(user))
      }
      if (token) {
        console.log("(SESSION) TOKEN: " + JSON.stringify(token))
        session.accessToken = token.accessToken
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("(JWT) TOKEN: " + JSON.stringify(token))
      if (user) {
        console.log("(JWT) USER: " + JSON.stringify(user))
      }
      if (account) {
        console.log("(JWT) USER: " + JSON.stringify(account))
      }
      if (profile) {
        console.log("(JWT) USER: " + JSON.stringify(profile))
      }
      return token
    }
  }
}

/** @type {import('@sveltejs/kit').Handle} */
export const handle : Handle = sequence(
  SvelteKitAuth(svelteKitAuth),
  logger,
  authorization
)

async function logger({ event, resolve }) {

  console.log("-----------------------------------------------------------------------------")
  console.log("EVENT: " + JSON.stringify(event))
  const session = event.locals.getSession()
  console.log("SESSION: " + JSON.stringify(session))
  console.log("-----------------------------------------------------------------------------")

  return resolve(event) 
}

async function authorization({ event, resolve }) {

  // Protect any routes under /app
  if (!event.url.pathname.startsWith("/login2")) {
    const session = await event.locals.getSession()
    if (!session) {
      throw redirect(303, "/login2")
    }
  }

  // If the request is still here, just proceed as normally
  return resolve(event) 
}

