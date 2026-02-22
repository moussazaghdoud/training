# Rainbow API Quick Start — Quick Reference Card

> **Version:** 2.0 | **Last Updated:** February 2026 | **Classification:** Developer & Partner Use
> **Developer Hub:** hub.openrainbow.com
> **API Documentation:** developers.openrainbow.com

---

## Step 1: Register on the Developer Hub

1. Navigate to **hub.openrainbow.com**
2. Click **Sign Up**
3. Enter your email, name, and company
4. Verify your email address via the confirmation link
5. Log in to the developer dashboard
6. You receive a **sandbox** environment automatically (free, limited to 20 users)

---

## Step 2: Create an Application

1. In the Developer Hub, go to **My Applications > Create Application**
2. Enter:
   - **Application Name** — descriptive name for your integration
   - **Application Type** — choose: Bot, Server-side, Mobile, or Web
   - **Redirect URI** — your OAuth callback URL (e.g., `https://yourapp.com/callback`)
   - **Description** — brief description of what the app does
3. Click **Create**
4. Note your credentials:
   - **Application ID** (client_id)
   - **Application Secret** (client_secret) — store securely, shown only once

---

## Step 3: Authentication

Rainbow uses OAuth 2.0 for all API authentication.

### OAuth 2.0 Flow Diagram

```
+--------+                               +---------------+
|        |-- (1) Authorization Request -->|   Rainbow     |
|  Your  |                               |   Auth        |
|  App   |<-- (2) Authorization Code ----|   Server      |
|        |                               | openrainbow   |
|        |-- (3) Code + Client Secret -->|   .com        |
|        |                               |               |
|        |<-- (4) Access Token + --------|               |
|        |       Refresh Token           |               |
+--------+                               +---------------+
     |
     |-- (5) API Request + Bearer Token --> Rainbow API
     |<-- (6) JSON Response --------------- Rainbow API
```

### Get an Access Token (Client Credentials — for bots and server apps)

```bash
curl -X POST https://openrainbow.com/api/rainbow/authentication/v1.0/login \
  -H "Authorization: Basic $(echo -n 'user@email.com:password' | base64)" \
  -H "x-rainbow-app-auth: Basic $(echo -n 'appId:appSecret' | base64)" \
  -H "Accept: application/json"
```

**Response:**
```json
{
  "token": "eyJhbGciOiJSUzI1NiIs...",
  "loggedInUser": {
    "id": "5bb735a0d26cc11234567890",
    "loginEmail": "user@email.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

### Use the Token in Subsequent Requests

```bash
curl -X GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/me \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIs..." \
  -H "Accept: application/json"
```

### Token Lifecycle

| Parameter | Value |
|---|---|
| Access token validity | 24 hours |
| Refresh token validity | 30 days |
| Token refresh endpoint | `POST /api/rainbow/authentication/v1.0/renew` |
| Token revocation | `DELETE /api/rainbow/authentication/v1.0/logout` |

---

## Key API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/rainbow/authentication/v1.0/login` | Login and obtain token |
| `POST` | `/api/rainbow/authentication/v1.0/renew` | Refresh access token |
| `DELETE` | `/api/rainbow/authentication/v1.0/logout` | Revoke token / logout |

### Users and Contacts

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/rainbow/enduser/v1.0/users/me` | Get current user profile |
| `GET` | `/api/rainbow/enduser/v1.0/users/{userId}` | Get a specific user |
| `GET` | `/api/rainbow/enduser/v1.0/users?displayName=John` | Search users by name |
| `POST` | `/api/rainbow/enduser/v1.0/users/{userId}/invitations` | Invite a user to contacts |
| `GET` | `/api/rainbow/enduser/v1.0/users/{userId}/roster` | Get user's contact list |
| `PUT` | `/api/rainbow/enduser/v1.0/users/{userId}` | Update user profile |

### Presence

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/rainbow/enduser/v1.0/users/{userId}/presence` | Get user presence |
| `PUT` | `/api/rainbow/enduser/v1.0/users/{userId}/presence` | Set user presence |

**Presence Values:** `online`, `away`, `dnd` (Do Not Disturb), `busy`, `invisible`, `offline`

### Bubbles (Group Conversations)

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/rainbow/enduser/v1.0/rooms` | Create a bubble |
| `GET` | `/api/rainbow/enduser/v1.0/rooms` | List user's bubbles |
| `GET` | `/api/rainbow/enduser/v1.0/rooms/{roomId}` | Get bubble details |
| `POST` | `/api/rainbow/enduser/v1.0/rooms/{roomId}/users` | Add user to bubble |
| `DELETE` | `/api/rainbow/enduser/v1.0/rooms/{roomId}/users/{userId}` | Remove user from bubble |
| `PUT` | `/api/rainbow/enduser/v1.0/rooms/{roomId}` | Update bubble settings |

### Messaging

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/rainbow/enduser/v1.0/conversations/{convId}/messages` | Send a message |
| `GET` | `/api/rainbow/enduser/v1.0/conversations/{convId}/messages` | Get messages |
| `PUT` | `/api/rainbow/enduser/v1.0/conversations/{convId}/messages/{msgId}` | Edit a message |
| `DELETE` | `/api/rainbow/enduser/v1.0/conversations/{convId}/messages/{msgId}` | Delete a message |
| `POST` | `/api/rainbow/enduser/v1.0/conversations/{convId}/messages/{msgId}/read` | Mark as read |

### Telephony

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/rainbow/telephony/v1.0/calls` | Make a call |
| `PUT` | `/api/rainbow/telephony/v1.0/calls/{callId}/answer` | Answer a call |
| `PUT` | `/api/rainbow/telephony/v1.0/calls/{callId}/hold` | Hold a call |
| `PUT` | `/api/rainbow/telephony/v1.0/calls/{callId}/retrieve` | Retrieve from hold |
| `PUT` | `/api/rainbow/telephony/v1.0/calls/{callId}/transfer` | Transfer a call |
| `DELETE` | `/api/rainbow/telephony/v1.0/calls/{callId}` | Hang up a call |
| `GET` | `/api/rainbow/telephony/v1.0/calls` | List active calls |

### Conferencing

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/rainbow/enduser/v1.0/conferences` | Create a conference |
| `POST` | `/api/rainbow/enduser/v1.0/conferences/{confId}/join` | Join a conference |
| `POST` | `/api/rainbow/enduser/v1.0/conferences/{confId}/participants` | Add participant |
| `DELETE` | `/api/rainbow/enduser/v1.0/conferences/{confId}/participants/{userId}` | Remove participant |
| `PUT` | `/api/rainbow/enduser/v1.0/conferences/{confId}/mute` | Mute all |

### Webhooks (Server-to-Server Events)

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/rainbow/webhooks/v1.0/subscriptions` | Subscribe to events |
| `GET` | `/api/rainbow/webhooks/v1.0/subscriptions` | List subscriptions |
| `DELETE` | `/api/rainbow/webhooks/v1.0/subscriptions/{subId}` | Unsubscribe |

**Available Webhook Events:**
- `message.received` — new message in conversation
- `presence.changed` — user presence update
- `call.updated` — telephony call state change
- `room.created` / `room.updated` — bubble lifecycle
- `user.invited` / `user.accepted` — contact invitation
- `conference.updated` — conference state change

---

## SDK Installation

### Node.js SDK

```bash
npm install rainbow-node-sdk
```

**Quick Start:**
```javascript
const RainbowSDK = require("rainbow-node-sdk");

let options = {
  rainbow: { host: "openrainbow.com" },
  credentials: { login: "user@email.com", password: "password" },
  application: { appID: "your-app-id", appSecret: "your-app-secret" },
  logs: { enableConsoleLogs: true, enableFileLogs: false }
};

let rainbowSDK = new RainbowSDK(options);

rainbowSDK.start().then(() => {
  console.log("Connected to Rainbow");
}).catch((err) => {
  console.error("Connection failed:", err);
});

// Listen for incoming messages
rainbowSDK.events.on("rainbow_onmessagereceived", (message) => {
  console.log("Message from:", message.fromJid);
  console.log("Content:", message.content);
});
```

### .NET SDK (NuGet)

```powershell
Install-Package Rainbow.CSharp.SDK
```

**Or via .NET CLI:**
```bash
dotnet add package Rainbow.CSharp.SDK
```

**Quick Start:**
```csharp
using Rainbow;

var application = new Application();
application.SetApplicationInfo("your-app-id", "your-app-secret");
application.SetHostInfo("openrainbow.com");

application.ConnectionStateChanged += (sender, args) => {
    Console.WriteLine($"State: {args.ConnectionState}");
};

application.Login("user@email.com", "password", callback => {
    if (callback.Result.Success) {
        Console.WriteLine("Connected to Rainbow");
    }
});
```

### Mobile SDKs

| Platform | Package Manager | Package Name |
|---|---|---|
| iOS (Swift) | CocoaPods | `pod 'RainbowSDK'` |
| Android (Kotlin/Java) | Maven Central | `com.ale.rainbow:rainbow-sdk-android` |

---

## Rate Limits

| Tier | Requests per Minute | Requests per Day | Concurrent Connections |
|---|---|---|---|
| Sandbox (free) | 100 | 5,000 | 5 |
| Connect (paid) | 10,000 | 1,000,000 | 100 |
| Enterprise (API access) | 1,000 | 100,000 | 20 |

### Rate Limit Headers

Every API response includes:

```
X-RateLimit-Limit: 10000
X-RateLimit-Remaining: 9847
X-RateLimit-Reset: 1708642800
```

When rate-limited, you receive:

```
HTTP/1.1 429 Too Many Requests
Retry-After: 30
```

---

## Error Codes

| HTTP Code | Meaning | Common Cause | Resolution |
|---|---|---|---|
| 400 | Bad Request | Malformed JSON, missing required field | Validate request body against schema |
| 401 | Unauthorized | Invalid or expired token | Re-authenticate or refresh token |
| 403 | Forbidden | Insufficient permissions | Check app scopes and user role |
| 404 | Not Found | Invalid resource ID | Verify the ID exists |
| 409 | Conflict | Duplicate resource | Check for existing resource before creating |
| 429 | Too Many Requests | Rate limit exceeded | Implement exponential backoff |
| 500 | Internal Server Error | Server-side issue | Retry with backoff; report if persistent |
| 502 | Bad Gateway | Upstream service unavailable | Check status.openrainbow.com; retry |
| 503 | Service Unavailable | Maintenance or overload | Check status page; retry after delay |

### Error Response Format

```json
{
  "errorCode": 401,
  "errorMsg": "Unauthorized",
  "errorDetails": "The provided token has expired.",
  "errorDetailsCode": 401001
}
```

---

## WebSocket Real-Time Connection

For real-time events (presence, messages, call state), connect via WebSocket:

```
wss://openrainbow.com/websocket
```

**Connection handshake:**
```json
{
  "type": "connection",
  "token": "your-access-token"
}
```

**Keep-alive:** Send a ping frame every 30 seconds to maintain the connection.

---

## Sandbox vs. Production

| Aspect | Sandbox | Production |
|---|---|---|
| URL | sandbox.openrainbow.com | openrainbow.com |
| Users | Up to 20 test users | Unlimited (per license) |
| Rate limits | 100 req/min | Per plan |
| Data persistence | Cleared periodically | Permanent |
| Telephony | Simulated | Real PBX integration |
| Cost | Free | Per Connect subscription |

### Moving to Production
1. Complete development and testing in sandbox
2. Go to **Developer Hub > My Applications > [App Name] > Deploy**
3. Accept the Terms of Service
4. Submit for review (automated checks, typically < 24 hours)
5. Once approved, update your app configuration to use `openrainbow.com`

---

## Quick Links

| Resource | URL |
|---|---|
| Developer Hub | hub.openrainbow.com |
| API Reference | developers.openrainbow.com |
| SDK Documentation (Node.js) | hub.openrainbow.com/doc/sdk/node |
| SDK Documentation (.NET) | hub.openrainbow.com/doc/sdk/csharp |
| Community Forum | forum.openrainbow.com |
| Sample Code (GitHub) | github.com/Rainbow-CPaaS |
| Status Page | status.openrainbow.com |

---

*This quick start card is for developers integrating with the Rainbow platform. For production deployments, review the full API documentation and rate limit policies at developers.openrainbow.com.*
