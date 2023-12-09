When a user logs in with GitHub using NextAuth.js, the following data is typically stored:

**User Collection:**

- `id`: A unique identifier for the user.
- `name`: The name of the user as it appears on GitHub.
- `email`: The email address associated with the user's GitHub account.
- `image`: The URL of the user's profile picture on GitHub.
- `emailVerified`: The date and time when the user's email was verified. This might be `null` if the email hasn't been verified.
- `hashedPassword`: This field is typically used for local authentication strategies (i.e., username and password). For OAuth providers like GitHub, this field is usually `null` because the authentication is handled by GitHub, and the password is not shared with your application.

**Account Collection:**

- `id`: A unique identifier for the account.
- `provider`: The name of the provider (in this case, 'github').
- `type`: The type of account (for GitHub, this would be 'oauth').
- `providerAccountId`: The ID assigned to the user by GitHub.
- `refresh_token`: The refresh token for OAuth (this is used to get a new access token when the current one expires).
- `access_token`: The access token for OAuth (this is used to make authenticated requests to the GitHub API).
- `expires_at`: The expiration timestamp for the tokens.
- `userId`: The ID of the user in the `User` collection that this account is linked to.
