import {NextAuthConfig} from 'next-auth';
import type {CookieSerializeOptions} from "cookie";

export interface CookiesProps extends CookieSerializeOptions {
    prefix: string;
}

export type WithCookies = (props: CookiesProps) => NextAuthConfig['cookies'];

export const withCookies: WithCookies = ({
                                             prefix,
                                             ...options
                                         }) => ({
    sessionToken: {
        name: `__${prefix}-.session-token`,
        options,
    },
    callbackUrl: {
        name: `__${prefix}-.callback-url`,
        options,
    },
    csrfToken: {
        name: `__${prefix}-.csrf-token`,
        options,
    },
    pkceCodeVerifier: {
        name: `${prefix}-.pkce.code_verifier`,
        options,
    },
    state: {
        name: `__${prefix}-.state`,
        options: {
            ...options,
            maxAge: 900,
        },
    },
    nonce: {
        name: `__${prefix}-.nonce`,
        options,
    },
    webauthnChallenge: {
        name: `__${prefix}-.webauthn.challenge`,
        options,
    }
});
