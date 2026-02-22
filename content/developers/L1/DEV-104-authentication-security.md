# DEV-104: Authentication & Security Model

| Field            | Value                                                        |
|------------------|--------------------------------------------------------------|
| **Module ID**    | DEV-104                                                      |
| **Title**        | Authentication & Security Model                              |
| **Track**        | Developer L1 — Foundation                                    |
| **Duration**     | 30 minutes                                                   |
| **Content Types**| Reading, Security Reference, Knowledge Check                 |
| **Prerequisites**| DEV-101, DEV-102, DEV-103                                    |

## Learning Objectives

After completing this module you will be able to:

1. Distinguish between the three Rainbow application types (Bot, User-based, Admin) and choose the correct type for a given use case.
2. Implement the OAuth 2.0 authorization code flow and client credentials flow for Rainbow authentication.
3. Manage the complete token lifecycle: obtaining, using, refreshing, and revoking access tokens.
4. Apply the correct scopes and permissions to your application to follow the principle of least privilege.
5. Implement security best practices including secret storage, token rotation, HTTPS enforcement, and IP whitelisting.
6. Understand and configure Role-Based Access Control (RBAC) in the Rainbow API for multi-tenant applications.

---

## 1. Application Types

Rainbow supports three application types, each designed for a different interaction pattern. Choosing the correct type is the first security decision you make.

### 1.1 Bot Application (Server-to-Server)

A Bot application operates as its own entity within Rainbow. It has its own Rainbow user account (with a display name, avatar, and presence), and it acts autonomously — it does not impersonate human users.

**Characteristics:**

- The bot logs in with its own credentials (email and password).
- It appears in the Rainbow directory as a contact that users can message.
- It runs on a server, typically unattended (no human at the keyboard).
- It can be invited to bubbles and participate in group conversations.
- It can only access data and perform actions within its own permission scope.

**Use cases:**

- Customer support chatbot that answers questions and routes inquiries.
- Notification bot that posts alerts from monitoring systems into Rainbow bubbles.
- Automation bot that creates bubbles, provisions users, or manages workflows based on external triggers.

**Authentication flow:** The bot authenticates using its own credentials via the login endpoint. This is the simplest flow — no user interaction is required.

```
POST /api/rainbow/authentication/v1.0/login
Authorization: Basic base64(botEmail:botPassword)
x-rainbow-app-auth: Basic base64(appId:appSecret)
```

### 1.2 User-Based Application (Interactive)

A User-based application acts on behalf of a human user. The user logs in through your application, grants permission, and your application makes API calls with the user's identity and permissions.

**Characteristics:**

- The application does not have its own Rainbow identity — it borrows the user's.
- API calls are attributed to the logged-in user (messages appear to come from them, not from a bot).
- The application can only access data the user has permission to see.
- Requires user interaction to authenticate (the user must enter their credentials or approve via OAuth).

**Use cases:**

- A custom web collaboration interface that provides an alternative UI to the standard Rainbow client.
- A CRM integration where the user's calls and messages appear under their own identity.
- A mobile app that extends Rainbow with custom features for a vertical market.

**Authentication flow:** OAuth 2.0 authorization code flow (recommended) or direct login with the user's credentials.

### 1.3 Admin Application (Management)

An Admin application manages Rainbow resources at the company or organization level. It provisions users, manages companies, configures settings, and monitors usage.

**Characteristics:**

- The application authenticates as a user with admin or super-admin privileges.
- It can access and modify resources across the entire company (or multiple companies for super-admins).
- It typically runs in a trusted backend environment with elevated privileges.
- Actions are audited and attributed to the admin account.

**Use cases:**

- User provisioning script that creates Rainbow accounts from an HR system.
- Company management portal that configures Rainbow settings across multiple tenants.
- Analytics dashboard that aggregates usage data across an organization.

**Authentication flow:** Login with admin credentials or client credentials flow with admin-scoped permissions.

### 1.4 Choosing the Right Type

| Scenario                                        | Recommended Type  |
|-------------------------------------------------|-------------------|
| Chatbot that answers user questions             | Bot               |
| Web app where users send messages as themselves | User-based        |
| Script to bulk-create 500 user accounts         | Admin             |
| Alert bot posting server status to a bubble     | Bot               |
| Custom mobile client for healthcare workers     | User-based        |
| Integration syncing AD groups to Rainbow teams  | Admin             |

---

## 2. OAuth 2.0 Flows for Rainbow

Rainbow implements OAuth 2.0 for secure, delegated authentication. There are two primary flows.

### 2.1 Authorization Code Flow

The authorization code flow is the recommended approach for user-based applications where a human user interacts with your application through a browser. It follows the standard OAuth 2.0 specification.

**Step-by-step process:**

**Step 1: Redirect the user to Rainbow's authorization endpoint.**

```
GET https://openrainbow.com/api/rainbow/authentication/v1.0/oauth/authorize
    ?response_type=code
    &client_id={appId}
    &redirect_uri={your_callback_url}
    &scope=all
    &state={random_csrf_token}
```

Parameters:
- `response_type=code` — Requests an authorization code.
- `client_id` — Your application's appId.
- `redirect_uri` — The URL Rainbow will redirect the user back to after authorization. This must match the redirect URI registered in your application settings on hub.openrainbow.com.
- `scope` — The permissions your application requests (see Section 4).
- `state` — A random value you generate to prevent CSRF attacks. You verify this value when the user returns.

**Step 2: User logs in and grants permission.**

Rainbow displays a login page. The user enters their Rainbow credentials and sees a consent screen listing the permissions your application requests. If they approve, Rainbow redirects back to your `redirect_uri`.

**Step 3: Receive the authorization code.**

Rainbow redirects the user's browser to:

```
https://your-app.com/callback?code={authorization_code}&state={your_csrf_token}
```

Your application must:
1. Verify the `state` parameter matches what you sent in Step 1 (CSRF protection).
2. Extract the `code` parameter.

**Step 4: Exchange the code for tokens.**

Your backend server (not the browser) sends a POST request to Rainbow:

```
POST https://openrainbow.com/api/rainbow/authentication/v1.0/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&code={authorization_code}
&redirect_uri={your_callback_url}
&client_id={appId}
&client_secret={appSecret}
```

Rainbow responds with:

```json
{
    "access_token": "eyJhbGciOiJSUzI1NiIs...",
    "refresh_token": "dGhpcyBpcyBhIHJlZnJl...",
    "token_type": "Bearer",
    "expires_in": 86400,
    "scope": "all"
}
```

**Step 5: Use the access token for API calls.**

Include the token in every API request:

```
GET /api/rainbow/enduser/v1.0/users/me
Authorization: Bearer eyJhbGciOiJSUzI1NiIs...
```

**Why this flow is secure:**
- Your application never sees the user's Rainbow password.
- The authorization code is short-lived (typically 5 minutes) and single-use.
- The code-to-token exchange happens server-to-server, so the appSecret is never exposed to the browser.
- The state parameter prevents CSRF attacks.

### 2.2 Client Credentials Flow

The client credentials flow is used for server-to-server applications (bots and admin tools) that do not act on behalf of a human user.

```
POST https://openrainbow.com/api/rainbow/authentication/v1.0/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id={appId}
&client_secret={appSecret}
```

Rainbow responds with an access token scoped to the application itself. This token can be used for bot operations or admin management tasks, depending on the permissions configured for the application.

**When to use:**
- Automated bots that do not impersonate users.
- Backend services that manage Rainbow resources.
- Scheduled scripts (cron jobs) that run without user interaction.

### 2.3 Direct Login (Basic Authentication)

For simplicity during development and for bot applications, Rainbow supports direct login:

```
POST /api/rainbow/authentication/v1.0/login
Authorization: Basic base64(email:password)
x-rainbow-app-auth: Basic base64(appId:appSecret)
```

Response:

```json
{
    "token": "eyJhbGciOiJSUzI1NiIs...",
    "loggedInUser": {
        "id": "5f3a...",
        "loginEmail": "bot@example.com",
        "displayName": "My Bot"
    }
}
```

This is what the Node.js SDK uses internally when you provide credentials in the configuration object. While simple, it requires your application to handle the user's password directly. For production user-facing applications, prefer the OAuth authorization code flow.

---

## 3. Token Lifecycle

Tokens are the currency of authenticated communication with Rainbow. Managing them correctly is essential for security and reliability.

### 3.1 Access Token

The access token is a JSON Web Token (JWT) that identifies the authenticated entity (user or application) and its permissions.

| Property         | Value                                                  |
|------------------|--------------------------------------------------------|
| Format           | JWT (JSON Web Token) signed with RS256                 |
| Lifetime         | 24 hours (86,400 seconds)                              |
| Usage            | Included in the `Authorization: Bearer` header         |
| Scope            | Determined at issuance based on application permissions |
| Revocation       | Explicit logout or admin action                        |

**JWT Structure:**

A Rainbow access token contains three sections (header, payload, signature), base64-encoded and separated by dots:

```
eyJhbGciOiJSUzI1NiIs...  (header)
.eyJqdGkiOiI1ZjNhLi4u... (payload)
.Rj3kF9dG7xQ2m...        (signature)
```

The payload contains claims including:

```json
{
    "jti": "unique-token-id",
    "sub": "user-id",
    "iss": "openrainbow.com",
    "aud": "app-id",
    "exp": 1700000000,
    "iat": 1699913600,
    "scope": ["all"]
}
```

Your application should never decode the JWT for business logic (treat it as an opaque string), but understanding its structure helps during debugging.

### 3.2 Refresh Token

The refresh token is used to obtain a new access token when the current one expires, without requiring the user to re-authenticate.

| Property         | Value                                                  |
|------------------|--------------------------------------------------------|
| Format           | Opaque string (not a JWT)                              |
| Lifetime         | 30 days                                                |
| Usage            | Sent to the token endpoint to get a new access token   |
| Storage          | Must be stored securely (server-side only)             |

**Refreshing an access token:**

```
POST /api/rainbow/authentication/v1.0/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token
&refresh_token={refresh_token}
&client_id={appId}
&client_secret={appSecret}
```

Rainbow responds with a new access token and potentially a new refresh token. Always store the new refresh token, as the old one may be invalidated (single-use refresh token rotation).

### 3.3 Token Renewal Strategy

Implement proactive token renewal rather than waiting for a 401 error:

```javascript
class TokenManager {
    constructor(appId, appSecret) {
        this.appId = appId;
        this.appSecret = appSecret;
        this.accessToken = null;
        this.refreshToken = null;
        this.expiresAt = null;
        this.renewalTimer = null;
    }

    setTokens(accessToken, refreshToken, expiresIn) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.expiresAt = Date.now() + (expiresIn * 1000);

        // Schedule renewal 5 minutes before expiration
        const renewIn = (expiresIn - 300) * 1000;
        if (this.renewalTimer) clearTimeout(this.renewalTimer);
        this.renewalTimer = setTimeout(() => this.renew(), renewIn);
    }

    async renew() {
        try {
            const response = await fetch(
                'https://openrainbow.com/api/rainbow/authentication/v1.0/oauth/token',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({
                        grant_type: 'refresh_token',
                        refresh_token: this.refreshToken,
                        client_id: this.appId,
                        client_secret: this.appSecret
                    })
                }
            );
            const data = await response.json();
            this.setTokens(data.access_token, data.refresh_token, data.expires_in);
            console.log('Token renewed successfully.');
        } catch (err) {
            console.error('Token renewal failed:', err.message);
            // Fall back to full re-authentication
        }
    }

    isValid() {
        return this.accessToken && Date.now() < this.expiresAt;
    }
}
```

### 3.4 Token Revocation

When a user logs out or you want to invalidate a token:

```
POST /api/rainbow/authentication/v1.0/logout
Authorization: Bearer {access_token}
```

This invalidates both the access token and the associated refresh token. Always revoke tokens when:

- A user explicitly logs out of your application.
- You detect suspicious activity on an account.
- An application is decommissioned.

---

## 4. Scopes and Permissions

Scopes define what your application is allowed to do with the Rainbow API. Following the principle of least privilege, request only the scopes your application needs.

### 4.1 Available Scopes

| Scope            | Grants Access To                                              |
|------------------|---------------------------------------------------------------|
| `all`            | Full access to all API endpoints (development convenience)    |
| `user`           | User profile read/write                                       |
| `contacts`       | Contact list management                                       |
| `im`             | Instant messaging (send and receive)                          |
| `presence`       | Presence read and write                                       |
| `bubbles`        | Bubble creation and management                                |
| `channels`       | Channel publishing and subscription                           |
| `telephony`      | Phone call control                                            |
| `conferences`    | Conference scheduling and management                          |
| `files`          | File upload and download                                      |
| `admin`          | Company and user administration                               |

### 4.2 Requesting Scopes

Specify scopes when initiating the OAuth flow:

```
GET /api/rainbow/authentication/v1.0/oauth/authorize
    ?response_type=code
    &client_id={appId}
    &redirect_uri={callback}
    &scope=im+presence+contacts
    &state={csrf_token}
```

Multiple scopes are separated by `+` (URL-encoded space) or commas. The user sees the requested scopes on the consent screen and must approve them.

### 4.3 Scope Best Practices

- **Development:** Use `scope=all` for convenience during development and testing.
- **Production:** Request only the scopes your application actually uses. A notification bot that only sends messages should request `im` scope only, not `all`.
- **Incremental scoping:** If your application adds features over time, request additional scopes incrementally. Users see only the new scopes on a re-consent screen.
- **Documentation:** Document which scopes your application requires and why. This helps security reviewers approve your application for production deployment.

---

## 5. Security Best Practices

### 5.1 Secret Storage

The appSecret and any tokens your application handles are sensitive credentials. They must be protected at rest and in transit.

**Do:**

- Store the appSecret in environment variables, a secrets manager (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault), or an encrypted configuration store.
- Use a `.env` file for local development and add it to `.gitignore`.
- In containerized deployments (Docker, Kubernetes), use secrets injection (Kubernetes Secrets, Docker Secrets).
- Rotate the appSecret periodically (regenerate on hub.openrainbow.com and update all deployed instances).

**Do not:**

- Commit secrets to version control (Git, SVN). Even if you later remove them, they remain in the history.
- Embed the appSecret in client-side code (JavaScript running in a browser, mobile app binaries). These can be decompiled and inspected.
- Log tokens or secrets. Redact them in log output.
- Send secrets via email, chat, or other unencrypted channels.

### 5.2 Token Rotation

Token rotation limits the damage if a token is compromised.

- **Access tokens** rotate automatically every 24 hours when you use the refresh flow.
- **Refresh tokens** should use single-use rotation: each time you use a refresh token, Rainbow issues a new one and invalidates the old one. If an attacker obtains a stolen refresh token, the legitimate refresh will fail, alerting you to the compromise.
- **appSecret** should be rotated on a schedule (e.g., every 90 days) or immediately if you suspect compromise. Regenerate the secret on hub.openrainbow.com and deploy the new value.

### 5.3 HTTPS Enforcement

All communication with Rainbow APIs must use HTTPS (TLS 1.2 or later). The Rainbow platform does not accept unencrypted HTTP connections.

In your application:

- Verify TLS certificates on all outgoing connections (do not disable certificate validation, even in development).
- Use HSTS (HTTP Strict Transport Security) headers if your application serves a web interface.
- Enforce HTTPS for your webhook callback URLs. Rainbow will not send webhooks to HTTP (unencrypted) endpoints.

### 5.4 IP Whitelisting

For server-side applications running in a known environment (data center, cloud VPC), configure IP whitelisting on hub.openrainbow.com:

1. Navigate to your application settings.
2. Add the static IP addresses or CIDR ranges from which your application connects.
3. Rainbow will reject API calls from any other IP address, even if the caller has valid tokens.

This adds a layer of defense: even if an attacker obtains your credentials and tokens, they cannot use them from outside your network.

### 5.5 Webhook Security

When receiving webhooks from Rainbow, verify that the request is authentic:

- **Signature validation:** Rainbow signs webhook payloads with HMAC-SHA256 using a shared secret. Your webhook handler should compute the expected signature and compare it to the `x-rainbow-signature` header.
- **IP verification:** Accept webhook requests only from Rainbow's known IP ranges (documented in the developer portal).
- **HTTPS only:** Serve your webhook endpoint over HTTPS.
- **Idempotency:** Process each webhook event exactly once. Rainbow may retry delivery, so use the event ID to deduplicate.

```javascript
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
    const expected = crypto
        .createHmac('sha256', secret)
        .update(payload)
        .digest('hex');
    return crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expected)
    );
}

// In your Express webhook handler:
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    const signature = req.headers['x-rainbow-signature'];
    if (!verifyWebhookSignature(req.body, signature, process.env.WEBHOOK_SECRET)) {
        return res.status(401).send('Invalid signature');
    }
    // Process the event
    const event = JSON.parse(req.body);
    console.log('Received event:', event.type);
    res.status(200).send('OK');
});
```

---

## 6. RBAC (Role-Based Access Control) in Rainbow API

Rainbow implements RBAC to control what different users and applications can do. Understanding RBAC is essential for building multi-tenant applications or applications that manage users.

### 6.1 Role Hierarchy

Rainbow defines a hierarchy of roles with increasing levels of privilege:

| Role              | Scope                  | Typical User                              |
|-------------------|------------------------|-------------------------------------------|
| `user`            | Own data only          | Regular Rainbow user                      |
| `admin`           | Company-wide           | Company IT administrator                  |
| `superadmin`      | Multi-company          | Partner administrator managing multiple companies |
| `bp_admin`        | Business Partner scope | Partner managing customer organizations   |
| `bp_finance`      | Financial data         | Partner finance team (billing, invoices)  |
| `app_admin`       | Application scope      | Application with admin-level permissions  |

### 6.2 What Each Role Can Do

**user:**
- Read and update own profile.
- Send and receive messages.
- Create and manage own bubbles.
- View own contacts and presence.
- Make and receive calls.

**admin:**
- Everything a user can do, plus:
- Create, modify, and delete users within their company.
- Manage company-level settings (features, policies, branding).
- View usage analytics for their company.
- Manage bubble and channel policies.

**superadmin:**
- Everything an admin can do, plus:
- Manage multiple companies.
- Create new companies.
- Assign admin roles to users.
- Access cross-company analytics.

### 6.3 RBAC in API Calls

When your application makes an API call, Rainbow checks the role of the authenticated entity (user or application) against the required role for the endpoint.

For example:

```
GET /api/rainbow/admin/v1.0/users          → Requires admin role
GET /api/rainbow/enduser/v1.0/users/me     → Requires user role (any authenticated user)
POST /api/rainbow/admin/v1.0/companies     → Requires superadmin or bp_admin role
```

If the authenticated entity does not have the required role, Rainbow returns `403 Forbidden`:

```json
{
    "errorCode": 403,
    "errorMsg": "forbidden",
    "errorDetails": "User does not have the required role for this operation."
}
```

### 6.4 Designing Multi-Tenant Applications

If you are building an application that serves multiple Rainbow companies (e.g., a partner portal), RBAC is your primary access control mechanism.

**Best practices:**

- Authenticate with a `bp_admin` account that has visibility across customer companies.
- When displaying data, filter by `companyId` to ensure each customer sees only their own data.
- When creating or modifying users, specify the target `companyId` explicitly.
- Log all admin actions for audit purposes.
- Implement your own application-level RBAC on top of Rainbow's RBAC if you need finer-grained permissions (e.g., a "read-only admin" role that Rainbow does not natively support).

### 6.5 Delegated Administration

For applications that need to perform admin tasks on behalf of a customer company without using the customer's admin credentials:

1. The partner's `bp_admin` account has delegated access to managed companies.
2. API calls specify the target company using the `companyId` parameter.
3. Actions are audited under the partner admin's identity.

This allows a partner to build management tools that operate across customer organizations without requiring each customer to share their admin credentials.

---

## Key Concepts Summary

| Concept                    | Definition                                                                     |
|----------------------------|--------------------------------------------------------------------------------|
| Bot Application            | Autonomous application with its own Rainbow identity (server-to-server)        |
| User-Based Application     | Application that acts on behalf of a human user (interactive)                  |
| Admin Application          | Application that manages company resources with elevated privileges            |
| Authorization Code Flow    | OAuth 2.0 flow for interactive user authentication (browser-based)             |
| Client Credentials Flow    | OAuth 2.0 flow for server-to-server authentication (no user interaction)       |
| Access Token (JWT)         | 24-hour credential used to authenticate API calls                              |
| Refresh Token              | 30-day credential used to obtain new access tokens without re-authentication   |
| Scope                      | Permission boundary defining what API operations an application can perform    |
| IP Whitelisting            | Restricting API access to specific IP addresses for server applications        |
| RBAC                       | Role-Based Access Control — user, admin, superadmin, bp_admin hierarchy        |
| Webhook Signature          | HMAC-SHA256 verification to confirm webhook requests are authentically from Rainbow |

---

## Practice Exercise

**Scenario:** You are building a partner management portal — a web application that allows a partner's team to:

- View a list of customer companies they manage.
- Create new Rainbow user accounts within customer companies.
- Reset user passwords.
- View usage analytics per company.

**Task:**

1. **Choose the application type** (Bot, User-based, or Admin) and justify your choice.
2. **Design the authentication flow.** Which OAuth 2.0 flow would you use for the partner's team members who log into the portal through a browser?
3. **Identify the minimum scopes** required for the operations listed above.
4. **Determine the RBAC roles** needed. Which role must the portal's accounts have?
5. **List three security measures** you would implement to protect this application, and explain why each is necessary.
6. **Write the webhook verification code** (in Node.js) that would validate incoming Rainbow webhook events sent to the portal's notification endpoint.

---

## Knowledge Check

**Question 1:** A developer is building a chatbot that runs on a server and automatically responds to messages. Which application type should they use?

- A) User-based (interactive)
- B) Bot (server-to-server)
- C) Admin (management)
- D) Any type works equally well.

**Answer:** B — A chatbot that runs autonomously on a server is a Bot application. It has its own Rainbow identity and does not act on behalf of a human user. The Bot type provides the correct authentication model (client credentials or direct login with bot account) and the bot appears as a contact in the Rainbow directory.

---

**Question 2:** In the OAuth 2.0 authorization code flow, why does the code-to-token exchange happen on the server side rather than in the browser?

- A) Browsers cannot make HTTP POST requests.
- B) The exchange requires the appSecret, which must never be exposed in client-side code.
- C) It is faster on the server.
- D) Rainbow blocks requests from browsers.

**Answer:** B — The code-to-token exchange includes the appSecret as a parameter. If this exchange happened in the browser, the appSecret would be visible in the JavaScript source code, network requests, or browser developer tools. Server-side exchange keeps the secret confidential.

---

**Question 3:** An application's access token has expired. What is the correct next step?

- A) Ask the user to log in again immediately.
- B) Use the refresh token to obtain a new access token without user interaction.
- C) Generate a new appSecret.
- D) Create a new application on hub.openrainbow.com.

**Answer:** B — Refresh tokens exist precisely for this purpose. They allow your application to obtain a new access token without requiring the user to re-authenticate. Only if the refresh token has also expired (after 30 days) should the user be asked to log in again.

---

**Question 4:** Which RBAC role is required to create new user accounts within a company?

- A) user
- B) admin
- C) guest
- D) moderator

**Answer:** B — The admin role provides company-level management capabilities, including creating, modifying, and deleting user accounts within the company. The user role only allows managing one's own profile and communication.

---

**Question 5:** An application receives a webhook event from Rainbow. How should it verify the request is authentic?

- A) Check that the request comes from a Rainbow IP address only.
- B) Compute the HMAC-SHA256 signature of the payload using the shared secret and compare it to the signature in the request header. Use timing-safe comparison.
- C) Trust all incoming requests without verification.
- D) Check that the request body contains valid JSON.

**Answer:** B — Webhook signature verification using HMAC-SHA256 is the primary authentication mechanism. IP verification can be added as an additional layer, but signature validation is the essential security measure. Always use timing-safe comparison (e.g., `crypto.timingSafeEqual`) to prevent timing attacks.
