import NextAuth, {User} from "next-auth";
import {withCookies} from "@/auth/cookies";
import Credentials from "@auth/core/providers/credentials";
import {skipCSRFCheck} from "@auth/core";
import {v4} from "uuid";


export const {signIn, signOut, auth, handlers} = NextAuth({
    cookies: withCookies({
        prefix: 'App',
        secure: true,
        path: '/',
        httpOnly: true,
    }),
    debug: true,
    basePath: '/api/auth',
    skipCSRFCheck: skipCSRFCheck,
    trustHost: true,
    session: {
        strategy: 'jwt',
    },
    providers: [
        Credentials({
            credentials: {},
            async authorize({}) {
                return {
                    id: '1',
                    name: v4()
                } satisfies User
            }
        })
    ],
});
