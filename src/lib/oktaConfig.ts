export const oktaConfig = {
    clientId: "0oaisup9ow0Twspas5d7",
    issuer: "https://dev-47165213.okta.com/oauth2/default",
    redirectUri: "http://localhost:3000/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsChecks: true
}