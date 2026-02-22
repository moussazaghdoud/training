# DEVELOPER TRACK -- Silver (Certified) Assessment

**Assessment ID:** DEV-CERT-01
**Passing Score:** 70% (18 of 25)
**Total Questions:** 25
**Time Limit:** 45 minutes

**Domain Weighting:**
- Platform Architecture: 15% (4 questions)
- Authentication: 20% (5 questions)
- REST API: 30% (7 questions)
- SDK Basics: 20% (5 questions)
- Bot Concepts: 15% (4 questions)

---

## Domain 1: Platform Architecture

### Question 1

```yaml
id: DEV-CERT-01-Q01
type: multiple_choice
difficulty: easy
domain: Platform Architecture
question: >
  What type of platform is Rainbow from a developer's perspective?
options:
  a: SaaS-only with no developer APIs
  b: A CPaaS (Communication Platform as a Service) that provides REST APIs, SDKs, and webhooks for embedding communication features into applications
  c: An on-premises SDK that must be compiled into each application
  d: A hardware platform that requires physical SIP phones
correct_answer: b
explanation: >
  Rainbow is a CPaaS (Communication Platform as a Service) that exposes
  communication capabilities through REST APIs, client SDKs (JavaScript,
  iOS, Android, etc.), server-side SDKs (Node.js), and webhooks. Developers
  can embed messaging, voice, video, and presence into their own
  applications using these interfaces.
```

### Question 2

```yaml
id: DEV-CERT-01-Q02
type: multiple_choice
difficulty: medium
domain: Platform Architecture
question: >
  Which protocol does the Rainbow client SDK primarily use for
  real-time event delivery (presence changes, incoming messages,
  call notifications)?
options:
  a: Long polling over HTTP
  b: XMPP over WebSocket
  c: gRPC streaming
  d: MQTT
correct_answer: b
explanation: >
  Rainbow uses XMPP (Extensible Messaging and Presence Protocol) over
  WebSocket for real-time event delivery. The XMPP protocol handles
  presence, messaging, and signaling, while WebSocket provides a
  persistent, full-duplex connection from the client to the Rainbow
  server. The SDKs abstract this protocol layer so developers interact
  with higher-level APIs.
```

### Question 3

```yaml
id: DEV-CERT-01-Q03
type: multiple_choice
difficulty: medium
domain: Platform Architecture
question: >
  Which of the following describes the relationship between the Rainbow
  REST API and the Rainbow client SDKs?
options:
  a: They are completely independent -- the SDK does not use the REST API
  b: The SDKs wrap the REST API and XMPP protocol, providing higher-level abstractions for common operations while the REST API offers direct HTTP access for server-side integrations
  c: The REST API is deprecated in favor of the SDKs
  d: The SDKs are only for mobile platforms; web applications must use REST API directly
correct_answer: b
explanation: >
  The Rainbow client SDKs combine REST API calls (for operations like
  creating Bubbles, managing contacts) with XMPP/WebSocket (for real-time
  events), providing a unified high-level interface. The REST API can also
  be used directly for server-side integrations where the full SDK is not
  needed. Both interfaces are actively maintained and complementary.
```

### Question 4

```yaml
id: DEV-CERT-01-Q04
type: true_false
difficulty: easy
domain: Platform Architecture
question: >
  Rainbow provides both a sandbox (development) environment and a
  production environment, and developers should use the sandbox for
  testing before deploying to production.
options:
  a: "True"
  b: "False"
correct_answer: a
explanation: >
  Rainbow provides a sandbox environment specifically for development
  and testing. This environment is separate from production and allows
  developers to test their integrations without affecting real users
  or consuming production resources. Developers should build and test
  in sandbox before moving to production.
```

---

## Domain 2: Authentication

### Question 5

```yaml
id: DEV-CERT-01-Q05
type: multiple_choice
difficulty: medium
domain: Authentication
question: >
  What authentication mechanism does the Rainbow REST API use?
options:
  a: API key passed as a query parameter
  b: HTTP Basic Authentication for initial login, which returns a JWT token used as a Bearer token for subsequent requests
  c: OAuth 2.0 Authorization Code flow exclusively
  d: SAML assertion in every request header
correct_answer: b
explanation: >
  The Rainbow REST API uses HTTP Basic Authentication (base64-encoded
  email:password) for the initial login request to the /api/rainbow/
  authentication/v1.0/login endpoint. This returns a JWT (JSON Web Token)
  that is used as a Bearer token in the Authorization header for all
  subsequent API calls. The token has an expiration time and must be
  refreshed before it expires.
```

### Question 6

```yaml
id: DEV-CERT-01-Q06
type: multiple_choice
difficulty: hard
domain: Authentication
question: >
  A developer's application receives an HTTP 401 response when calling
  the Rainbow REST API with a Bearer token that was working 30 minutes
  ago. What is the MOST likely cause?
options:
  a: The API endpoint URL has changed
  b: The JWT token has expired and needs to be refreshed using the refresh token
  c: The user's password was changed by an administrator
  d: The Rainbow API is down for maintenance
correct_answer: b
explanation: >
  JWT tokens issued by Rainbow have a limited lifespan (typically around
  24 hours, but the exact TTL can vary). When a token expires, all API
  calls return HTTP 401 Unauthorized. The developer should implement
  token refresh logic that detects 401 responses and uses the refresh
  token to obtain a new JWT before retrying the failed request. This
  should be handled automatically in well-designed applications.
```

### Question 7

```yaml
id: DEV-CERT-01-Q07
type: scenario
difficulty: hard
domain: Authentication
question: >
  Scenario: A developer is building a server-side integration that needs
  to access Rainbow on behalf of an application (not a specific user).
  Which authentication approach is correct?
options:
  a: Use any user's credentials and share the token across all requests
  b: Create a dedicated "bot" or "service account" application in the Rainbow developer portal and authenticate using the application's credentials (app ID and secret)
  c: Embed admin credentials in the server-side code
  d: Use anonymous API access since server-side apps don't need authentication
correct_answer: b
explanation: >
  For server-side integrations that operate on behalf of an application
  rather than a specific user, developers should create a bot/service
  account application in the Rainbow developer portal. This provides an
  app ID and app secret that are used for authentication. Using personal
  user credentials is a security anti-pattern, and anonymous access is
  not supported.
```

### Question 8

```yaml
id: DEV-CERT-01-Q08
type: multiple_choice
difficulty: medium
domain: Authentication
question: >
  What information is typically encoded in the JWT token returned by
  the Rainbow authentication endpoint?
options:
  a: Only the user's email address
  b: User identity, company association, roles/permissions, token expiration time, and issuer information
  c: The user's password in encrypted form
  d: A random session ID with no user information
correct_answer: b
explanation: >
  The Rainbow JWT token contains claims including the user's identity
  (user ID), company association (company ID), assigned roles and
  permissions, token expiration time (exp claim), and issuer information.
  The token is digitally signed by the server to prevent tampering. It
  never contains the user's password. Developers can decode the token
  (base64) to inspect these claims but should not modify them.
```

### Question 9

```yaml
id: DEV-CERT-01-Q09
type: multiple_choice
difficulty: medium
domain: Authentication
question: >
  When registering an application in the Rainbow developer portal, which
  of the following must be specified?
options:
  a: The application name only
  b: Application name, application type (bot/user/admin), and the platform/redirect URI
  c: Only the developer's credit card number
  d: The source code repository URL
correct_answer: b
explanation: >
  When registering a Rainbow application, the developer must specify the
  application name, the application type (which determines available
  permissions -- bot applications vs. user-context applications vs. admin
  applications), and platform details or redirect URIs depending on the
  application type. These settings determine how the application
  authenticates and what APIs it can access.
```

---

## Domain 3: REST API

### Question 10

```yaml
id: DEV-CERT-01-Q10
type: multiple_choice
difficulty: easy
domain: REST API
question: >
  What is the base URL pattern for Rainbow REST API endpoints?
options:
  a: https://api.rainbow.com/v1/
  b: https://openrainbow.com/api/rainbow/{service}/v1.0/
  c: https://rainbow.alcatel-lucent.com/rest/
  d: https://api.ale.com/rainbow/
correct_answer: b
explanation: >
  Rainbow REST API endpoints follow the pattern
  https://openrainbow.com/api/rainbow/{service}/v1.0/ where {service}
  represents the specific API service (e.g., "enduser" for user operations,
  "admin" for admin operations). The sandbox environment uses a different
  base URL (sandbox.openrainbow.com). Understanding this URL structure is
  fundamental to working with the API.
```

### Question 11

```yaml
id: DEV-CERT-01-Q11
type: scenario
difficulty: medium
domain: REST API
question: >
  Scenario: A developer wants to retrieve the list of members in a
  specific Bubble. Which API call pattern is correct?
options:
  a: GET /api/rainbow/enduser/v1.0/rooms/{bubbleId}/users
  b: POST /api/rainbow/enduser/v1.0/bubbles/{bubbleId}/members
  c: GET /api/rainbow/enduser/v1.0/rooms/{bubbleId}/users  (where "rooms" is the API resource name for Bubbles)
  d: DELETE /api/rainbow/enduser/v1.0/bubbles/{bubbleId}
correct_answer: c
explanation: >
  In the Rainbow REST API, Bubbles are represented as "rooms" in the
  endpoint path. To retrieve members of a Bubble, you issue a GET request
  to /api/rainbow/enduser/v1.0/rooms/{bubbleId}/users. Understanding that
  "rooms" in the API maps to "Bubbles" in the UI terminology is important
  for navigating the API documentation.
```

### Question 12

```yaml
id: DEV-CERT-01-Q12
type: multiple_choice
difficulty: medium
domain: REST API
question: >
  What HTTP status code does the Rainbow API return when a request
  exceeds the rate limit?
options:
  a: 400 Bad Request
  b: 403 Forbidden
  c: 429 Too Many Requests
  d: 503 Service Unavailable
correct_answer: c
explanation: >
  Rainbow returns HTTP 429 Too Many Requests when the rate limit is
  exceeded. The response typically includes a Retry-After header
  indicating how many seconds the client should wait before retrying.
  Developers should implement exponential backoff or respect the
  Retry-After header to handle rate limiting gracefully.
```

### Question 13

```yaml
id: DEV-CERT-01-Q13
type: scenario
difficulty: hard
domain: REST API
question: >
  Scenario: A developer writes the following code to send a message to a
  Bubble:

  ```javascript
  fetch('https://openrainbow.com/api/rainbow/enduser/v1.0/rooms/' + bubbleId + '/messages', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Hello team!'
    })
  });
  ```

  The API returns 400 Bad Request. What is the MOST likely issue?
options:
  a: The Authorization header format is wrong
  b: The request body field should be "content" instead of "message" per the Rainbow API schema
  c: POST is the wrong HTTP method; PUT should be used
  d: The bubbleId must be a numeric value, not a string
correct_answer: b
explanation: >
  The Rainbow API expects the message body to use the field name "content"
  (not "message") for the text of the message. The correct body would be:
  { "content": "Hello team!" }. This is a common mistake when developers
  guess at field names instead of consulting the API documentation. The
  400 Bad Request response indicates a malformed request body.
```

### Question 14

```yaml
id: DEV-CERT-01-Q14
type: multiple_choice
difficulty: medium
domain: REST API
question: >
  How does the Rainbow REST API handle pagination for endpoints that
  return large collections (e.g., listing contacts)?
options:
  a: All results are returned in a single response regardless of size
  b: The API uses offset and limit query parameters (e.g., ?offset=0&limit=100) to page through results
  c: The API returns a cursor token that must be passed in the next request
  d: Pagination is not supported; developers must filter client-side
correct_answer: b
explanation: >
  The Rainbow REST API uses offset/limit pagination. Developers specify
  "offset" (starting position) and "limit" (maximum number of results)
  as query parameters. The response includes a "total" field indicating
  the total number of matching records, allowing the developer to
  calculate how many pages remain. Default and maximum limit values
  are documented per endpoint.
```

### Question 15

```yaml
id: DEV-CERT-01-Q15
type: scenario
difficulty: hard
domain: REST API
question: >
  Scenario: A developer is calling the Rainbow API to update a user's
  presence status:

  ```
  PUT /api/rainbow/enduser/v1.0/users/{userId}/presence
  Content-Type: application/json
  Authorization: Bearer <token>

  { "status": "dnd" }
  ```

  The API returns 403 Forbidden. The developer is authenticated as a
  regular user (not admin). What is the cause?
options:
  a: The "dnd" status value is invalid; it should be "busy"
  b: Regular users cannot modify their own presence through the REST API; this requires admin or application-level credentials
  c: The PUT method should be PATCH for presence updates
  d: The userId in the URL does not match the authenticated user's ID
correct_answer: d
explanation: >
  A 403 Forbidden on a presence update most commonly means the
  authenticated user is trying to update another user's presence.
  Regular users can update their own presence but cannot modify other
  users' status. The userId in the URL must match the authenticated
  user's own ID. If the developer intends to update another user's
  presence programmatically, admin-level or application-level credentials
  are required.
```

### Question 16

```yaml
id: DEV-CERT-01-Q16
type: multiple_choice
difficulty: hard
domain: REST API
question: >
  A developer wants to be notified in real-time when a new message is
  posted in a specific Bubble, without polling the API repeatedly.
  Which approach should they use?
options:
  a: Set a cron job to call GET /rooms/{bubbleId}/messages every 5 seconds
  b: Configure a webhook callback URL in the Rainbow developer portal to receive message events via HTTP POST
  c: Use long polling on the messages endpoint
  d: Subscribe to a Redis pub/sub channel
correct_answer: b
explanation: >
  Rainbow supports webhook callbacks for real-time event notification.
  The developer configures a callback URL in the Rainbow developer portal,
  and Rainbow sends HTTP POST requests to that URL whenever subscribed
  events occur (e.g., new messages, presence changes). This is the correct
  server-side approach for real-time notifications without polling.
  For client-side applications, the SDK's XMPP connection provides
  real-time events.
```

---

## Domain 4: SDK Basics

### Question 17

```yaml
id: DEV-CERT-01-Q17
type: multiple_choice
difficulty: easy
domain: SDK Basics
question: >
  Which programming languages/platforms have official Rainbow SDKs?
options:
  a: JavaScript/Node.js only
  b: JavaScript/Node.js, iOS (Swift/Objective-C), and Android (Java/Kotlin)
  c: Python and Ruby only
  d: C++ and Rust only
correct_answer: b
explanation: >
  Rainbow provides official SDKs for JavaScript/Node.js (for web and
  server-side applications), iOS (Swift/Objective-C), and Android
  (Java/Kotlin). The JavaScript SDK can be used both in browser
  environments and Node.js server environments. Python, Ruby, C++,
  and Rust SDKs are not officially provided, though the REST API can
  be used from any language.
```

### Question 18

```yaml
id: DEV-CERT-01-Q18
type: scenario
difficulty: medium
domain: SDK Basics
question: >
  Scenario: A developer initializes the Rainbow Node.js SDK with the
  following code:

  ```javascript
  const RainbowSDK = require('rainbow-node-sdk');
  const rainbowSDK = new RainbowSDK({
    rainbow: { host: 'sandbox' },
    credentials: {
      login: 'developer@company.com',
      password: 'password123'
    },
    application: {
      appID: 'my-app-id',
      appSecret: 'my-app-secret'
    }
  });
  rainbowSDK.start();
  ```

  The SDK emits an error event: "XMPP connection failed." The credentials
  are correct and work via the REST API. What should the developer check?
options:
  a: The Node.js version is too old to support WebSocket
  b: The host should be "sandbox.openrainbow.com" instead of just "sandbox"
  c: The application is not registered or not approved in the developer portal, or the appID/appSecret are incorrect
  d: The password must be base64-encoded in the SDK configuration
correct_answer: c
explanation: >
  If REST API authentication works but the SDK's XMPP connection fails,
  the issue is likely with the application credentials (appID/appSecret)
  rather than the user credentials. The SDK requires a valid, approved
  application registered in the Rainbow developer portal. If the
  application has not been deployed/approved or the appID/appSecret are
  incorrect, the XMPP connection will fail even though basic REST
  authentication succeeds with user credentials alone.
```

### Question 19

```yaml
id: DEV-CERT-01-Q19
type: multiple_choice
difficulty: medium
domain: SDK Basics
question: >
  In the Rainbow SDK connection lifecycle, what is the correct sequence
  of events?
options:
  a: connect -> authenticate -> ready -> started
  b: started -> connected -> ready -> authenticated
  c: start() called -> authentication -> XMPP connection established -> SDK ready (all services available)
  d: ready -> start() -> connect -> authenticate
correct_answer: c
explanation: >
  The correct SDK lifecycle sequence is: (1) The developer calls start(),
  (2) the SDK authenticates the user via REST API, (3) an XMPP/WebSocket
  connection is established for real-time events, (4) the SDK emits a
  "ready" or "started" event indicating all services are initialized and
  available. Developers should wait for the ready event before calling
  other SDK methods to ensure all services are fully initialized.
```

### Question 20

```yaml
id: DEV-CERT-01-Q20
type: scenario
difficulty: hard
domain: SDK Basics
question: >
  Scenario: A developer's Rainbow web application works perfectly in
  Chrome but fails to establish audio calls in Firefox. The SDK logs
  show: "getUserMedia failed: NotAllowedError." What is the cause and fix?
options:
  a: Firefox does not support WebRTC; the developer should use a different protocol
  b: The application is served over HTTP instead of HTTPS; Firefox requires a secure context (HTTPS) for getUserMedia access to microphone and camera
  c: The developer needs to install a Firefox plugin for Rainbow
  d: The SDK version is incompatible with Firefox
correct_answer: b
explanation: >
  "NotAllowedError" from getUserMedia in Firefox (but not Chrome) is
  almost always caused by the application being served over HTTP instead
  of HTTPS. Firefox strictly enforces the secure context requirement for
  media device access -- getUserMedia is only available on HTTPS pages
  (or localhost). Chrome is more lenient in some configurations. The fix
  is to serve the application over HTTPS.
```

### Question 21

```yaml
id: DEV-CERT-01-Q21
type: multiple_choice
difficulty: medium
domain: SDK Basics
question: >
  How should a developer handle SDK disconnection events (e.g., network
  interruption) in a production application?
options:
  a: Ignore disconnections; the SDK automatically reconnects with no developer action needed
  b: Listen for disconnection events, inform the user of the connectivity issue, and implement reconnection logic with exponential backoff
  c: Immediately restart the entire application process
  d: Fall back to REST API polling when the SDK disconnects
correct_answer: b
explanation: >
  While the Rainbow SDK has some built-in reconnection capability,
  production applications should explicitly handle disconnection events
  by: (1) listening for disconnect/reconnecting events, (2) informing the
  user about connectivity status, and (3) implementing reconnection logic
  with appropriate backoff. Relying solely on automatic reconnection
  without user feedback creates a poor user experience, and restarting
  the entire application is excessive.
```

---

## Domain 5: Bot Concepts

### Question 22

```yaml
id: DEV-CERT-01-Q22
type: multiple_choice
difficulty: easy
domain: Bot Concepts
question: >
  In Rainbow, what is the primary difference between a "bot" application
  and a "user" application?
options:
  a: Bots can only send messages; user apps can also make calls
  b: A bot operates as an autonomous service account that can interact with users programmatically, while a user application operates in the context of a specific logged-in human user
  c: Bots are free; user applications require a paid license
  d: There is no difference; the terms are interchangeable
correct_answer: b
explanation: >
  A bot application operates as an autonomous entity with its own identity
  in the Rainbow directory. It runs as a service (typically server-side)
  and can receive messages, respond automatically, and interact with users
  without a human behind it. A user application operates on behalf of a
  specific human user, taking actions in that user's context. This
  distinction affects authentication, permissions, and how the application
  appears to other users.
```

### Question 23

```yaml
id: DEV-CERT-01-Q23
type: scenario
difficulty: hard
domain: Bot Concepts
question: >
  Scenario: A developer wants to create a Rainbow bot that automatically
  responds to user questions with answers from a knowledge base. The bot
  should be invited into Bubbles and respond when mentioned. Which of
  the following is the correct implementation approach?
options:
  a: Create a user account for the bot operator who manually copies answers from the knowledge base
  b: Register a bot application in the developer portal, use the Node.js SDK to listen for message events in Bubbles, detect @mentions, query the knowledge base, and send a reply message via the SDK
  c: Use the REST API to poll all Bubbles every second and check for new messages
  d: Configure a webhook that forwards all messages to an email address for manual response
correct_answer: b
explanation: >
  The correct approach is: (1) Register a bot application in the Rainbow
  developer portal, (2) use the Node.js SDK (ideal for server-side bots)
  to maintain a persistent connection and listen for message events, (3)
  filter events for @mentions of the bot, (4) query the knowledge base
  for relevant answers, and (5) send a reply using the SDK's messaging
  service. This provides real-time, automated responses without polling.
```

### Question 24

```yaml
id: DEV-CERT-01-Q24
type: multiple_choice
difficulty: medium
domain: Bot Concepts
question: >
  What happens when a Rainbow bot is added to a Bubble?
options:
  a: All historical messages in the Bubble are replayed to the bot
  b: The bot receives an invitation event and, once it accepts, begins receiving new messages posted to the Bubble from that point forward
  c: The bot automatically becomes the owner of the Bubble
  d: The bot cannot be added to existing Bubbles; it must create its own
correct_answer: b
explanation: >
  When a bot is added (invited) to a Bubble, it receives an invitation
  event. Upon accepting the invitation, the bot begins receiving new
  message events for that Bubble going forward. Historical messages are
  not replayed to the bot. The bot does not gain ownership; it becomes a
  member with whatever role is assigned (typically "member"). Bots can
  be added to existing Bubbles just like human users.
```

### Question 25

```yaml
id: DEV-CERT-01-Q25
type: scenario
difficulty: hard
domain: Bot Concepts
question: >
  Scenario: A developer deploys a Rainbow bot to production. The bot
  works correctly for 2 days, then stops responding to messages. The
  server process is running, no errors in application logs, and the
  bot appears "online" in Rainbow. However, the SDK logs show
  "XMPP stanza received: 0 in last 3600 seconds." What is the
  MOST likely cause?
options:
  a: The bot's subscription license has expired
  b: The XMPP connection has silently dropped (a "zombie" connection) and the bot needs to implement health checks and forced reconnection when no stanzas are received within a timeout period
  c: The Rainbow server has banned the bot for excessive API usage
  d: All users have left the Bubbles the bot was monitoring
correct_answer: b
explanation: >
  A "zombie" connection occurs when the TCP connection appears alive
  (the process runs, the bot shows online) but no XMPP data flows through
  it -- often due to an intermediate network device (NAT, firewall, load
  balancer) silently dropping the idle connection. The fix is to implement
  XMPP ping/keepalive (the bot sends periodic pings) and a health check
  that detects when no stanzas have been received within a threshold,
  triggering a forced reconnection. This is a common production issue
  for long-running bot applications.
```

---

## Answer Key Summary

| Question | Answer | Domain                  | Difficulty |
|----------|--------|-------------------------|------------|
| Q01      | B      | Platform Architecture   | Easy       |
| Q02      | B      | Platform Architecture   | Medium     |
| Q03      | B      | Platform Architecture   | Medium     |
| Q04      | A      | Platform Architecture   | Easy       |
| Q05      | B      | Authentication          | Medium     |
| Q06      | B      | Authentication          | Hard       |
| Q07      | B      | Authentication          | Hard       |
| Q08      | B      | Authentication          | Medium     |
| Q09      | B      | Authentication          | Medium     |
| Q10      | B      | REST API                | Easy       |
| Q11      | C      | REST API                | Medium     |
| Q12      | C      | REST API                | Medium     |
| Q13      | B      | REST API                | Hard       |
| Q14      | B      | REST API                | Medium     |
| Q15      | D      | REST API                | Hard       |
| Q16      | B      | REST API                | Hard       |
| Q17      | B      | SDK Basics              | Easy       |
| Q18      | C      | SDK Basics              | Medium     |
| Q19      | C      | SDK Basics              | Medium     |
| Q20      | B      | SDK Basics              | Hard       |
| Q21      | B      | SDK Basics              | Medium     |
| Q22      | B      | Bot Concepts            | Easy       |
| Q23      | B      | Bot Concepts            | Hard       |
| Q24      | B      | Bot Concepts            | Medium     |
| Q25      | B      | Bot Concepts            | Hard       |

**Difficulty Distribution:** Easy: 5 | Medium: 12 | Hard: 8
