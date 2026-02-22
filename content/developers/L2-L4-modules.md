# Developer Track — L2, L3, L4 Module Content Outlines

> Rainbow Training Academy | Developer Track | Practitioner through Champion Levels

---

## LEVEL 2: PRACTITIONER (5 hours total)

---

### DEV-201: REST API Deep Dive

| Field | Value |
|---|---|
| **Module ID** | DEV-201 |
| **Title** | REST API Deep Dive |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + REF |
| **Prerequisites** | DEV-103 (First Application) |

#### Detailed Content Outline

**1. API Endpoint Categories**
- Rainbow REST API base URL: `https://openrainbow.com/api/rainbow`
- Endpoint namespaces: `/enduser/v1.0/` (end-user operations), `/admin/v1.0/` (administrative operations), `/notificationsadmin/v1.0/` (webhook/notification management)
- Core resource categories: Users (profile, presence, contacts), Bubbles (group conversations/rooms), Messages (IM, file sharing), Telephony (call control), Channels (broadcast feeds), Directory (company contacts, search)
- Discovery: `GET /api/rainbow/enduser/v1.0/` returns a list of all available endpoints with brief descriptions; use this for runtime API discovery
- Versioning: API version is embedded in the URL path (v1.0); breaking changes require a new version; non-breaking additions (new fields, new endpoints) are added to the current version

**2. Request/Response Examples for Key Operations**
- **Create a Bubble**: `POST /api/rainbow/enduser/v1.0/rooms` with body `{"name": "Project Alpha", "topic": "Q1 Planning", "visibility": "private"}`; response includes the bubble `id`, `jid`, and `creator` fields
- **Send a message**: `POST /api/rainbow/enduser/v1.0/conversations/{convId}/messages` with body `{"message": "Hello from the API", "type": "text/plain"}`; response includes `id`, `timestamp`, and delivery status
- **Get contacts**: `GET /api/rainbow/enduser/v1.0/users/contacts?format=full&limit=100&offset=0`; response is a paginated array of contact objects with `displayName`, `presenceStatus`, `lastLogin`, and relationship metadata
- **Update presence**: `PUT /api/rainbow/enduser/v1.0/users/{userId}/presences` with body `{"presence": "dnd", "status": "In a meeting until 3pm"}`; valid presence values: `online`, `away`, `dnd`, `busy`, `xa` (extended away)
- **Search directory**: `GET /api/rainbow/enduser/v1.0/users?displayName=John&limit=20`; supports filtering by company, department, email, and phone number

**3. Pagination, Filtering, and Sorting**
- Pagination parameters: `limit` (items per page, max 1000, default 100), `offset` (items to skip); response includes `total` (total matching items) for calculating page count
- Cursor-based pagination: for large datasets (>10,000 items), use `after` parameter with the last item's ID instead of offset for better performance
- Filtering: most list endpoints support query parameter filters; e.g., `GET /users?companyId={id}&roles=admin` filters users by company and role
- Sorting: `sortField` and `sortOrder` parameters; e.g., `sortField=displayName&sortOrder=asc`
- Best practice: always set explicit `limit` and use pagination; never attempt to fetch all records in a single request (this may timeout or hit rate limits)

**4. Error Handling Patterns**
- HTTP status codes: 200 OK (success), 201 Created (resource created), 400 Bad Request (malformed request body), 401 Unauthorized (expired or invalid token), 403 Forbidden (insufficient permissions), 404 Not Found (resource does not exist), 429 Too Many Requests (rate limit exceeded), 500 Internal Server Error (server-side issue)
- Error response body: `{"errorCode": 1234, "errorMsg": "User not found", "errorDetails": "The user ID provided does not match any existing user"}`
- Rate limiting: default 600 requests per minute per application; 429 responses include a `Retry-After` header indicating seconds to wait; implement exponential backoff in your code
- Idempotency: POST operations are NOT idempotent (duplicate calls create duplicate resources); GET, PUT, and DELETE are idempotent; use unique client-generated IDs for critical operations to detect duplicates
- Retry logic: retry on 429 (rate limit) and 5xx (server errors) with exponential backoff (1s, 2s, 4s, 8s, max 30s); do NOT retry on 4xx (client errors — the request itself is wrong)

**5. Authentication and Headers**
- Authentication header: `Authorization: Bearer <access_token>` for user tokens; `Authorization: Bearer <app_token>` for application tokens
- Required headers: `Content-Type: application/json`, `Accept: application/json`
- Token refresh: user tokens expire after 24 hours; use the refresh token to obtain a new access token before expiry; application tokens expire based on the configured TTL
- Request tracing: include `x-rainbow-request-id: <uuid>` header for correlating requests with server-side logs during debugging
- CORS: API calls from browser-based applications require CORS headers; the Rainbow API supports CORS for whitelisted origins configured in the application settings on the Developer Hub

#### Lab Description (LAB)

**Setup**: The learner has a pre-configured Rainbow sandbox account with API credentials and a collection of test users.

**Steps**:
1. Authenticate via the API and obtain an access token using `POST /api/rainbow/authentication/v1.0/login`.
2. Create a Bubble called "API Lab Test" and add 3 test users as members.
3. Send a text message to the Bubble via the API.
4. Retrieve the message history for the Bubble with pagination (fetch 5 messages per page).
5. Update your own presence to "dnd" with a custom status message, then verify the change via a GET request.
6. Search the company directory for users with "test" in their display name and filter by department.

**Expected Outcome**: Learner can perform CRUD operations via the REST API, handle pagination, and implement proper authentication and error handling.

#### Key Takeaways
- The Rainbow REST API is organized into enduser, admin, and notification namespaces; choose the right namespace for your use case
- Always implement pagination with explicit `limit` parameters; never attempt unbounded queries
- Implement exponential backoff retry logic for 429 and 5xx errors; the default rate limit is 600 requests per minute
- Include the `x-rainbow-request-id` header in every request; it is invaluable for debugging production issues with ALE support

---

### DEV-202: Web SDK: Building Browser Apps

| Field | Value |
|---|---|
| **Module ID** | DEV-202 |
| **Title** | Web SDK: Building Browser Apps |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + QIZ |
| **Prerequisites** | DEV-103 (First Application) |

#### Detailed Content Outline

**1. SDK Initialization**
- Installation: `npm install rainbow-web-sdk` or include via CDN: `<script src="https://sdk.openrainbow.com/web/latest/rainbow-sdk.min.js"></script>`
- Initialization: `rainbowSDK.initialize(appId, appSecret).then(() => { ... })` — the SDK connects to the Rainbow platform, authenticates the application, and establishes a WebSocket connection
- Configuration options: `host` (default: openrainbow.com; override for Edge deployments), `enableLogs` (boolean for console logging), `logLevel` (debug/info/warn/error)
- Connection states: `initialized`, `connecting`, `connected`, `disconnected`, `reconnecting`, `failed`; listen for state changes with `rainbowSDK.events.on('connection_state_changed', callback)`
- Error handling on init: common errors include `APP_NOT_FOUND` (invalid appId), `APP_DISABLED` (application suspended), `NETWORK_ERROR` (cannot reach Rainbow servers)

**2. Event Listeners**
- Event architecture: the SDK uses an event-driven pattern; register listeners for events such as `message_received`, `presence_changed`, `call_incoming`, `bubble_invitation_received`
- Message events: `rainbow_onmessagereceived` fires when a new IM arrives; payload includes `message.content`, `message.from`, `message.conversation`, `message.date`
- Presence events: `rainbow_oncontactpresencechanged` fires when a contact's presence changes; payload includes `contact.id`, `contact.presence`, `contact.status`
- Connection events: `rainbow_onconnectionstatechanged` fires on WebSocket connect/disconnect/reconnect; use this to update the UI (show "Reconnecting..." banner)
- Cleanup: always remove event listeners when the component unmounts to prevent memory leaks; `rainbowSDK.events.removeListener('message_received', handler)`

**3. Real-Time Messaging Implementation**
- Fetching conversations: `rainbowSDK.conversations.getAll()` returns an array of active conversations (1:1 and Bubbles)
- Sending a message: `rainbowSDK.im.sendMessageToConversation(conversation, "Hello World")` returns a promise that resolves when the message is delivered to the server
- Message types: text (`text/plain`), markdown (`text/markdown`), file attachment (use `rainbowSDK.fileStorage.uploadFileToConversation()`), and custom content types for rich messages
- Read receipts: `rainbowSDK.im.markAsRead(conversation)` sends a read receipt to the sender; listen for `rainbow_onmessagereceiptreceived` to track delivery/read status
- Typing indicators: `rainbowSDK.im.sendIsTyping(conversation, true/false)` sends typing status; listen for `rainbow_oncontactistyping` to display "User is typing..." in the UI

**4. Audio/Video Call Setup in Browser**
- Making a call: `rainbowSDK.webRTC.callInAudio(contact)` initiates an audio call; `rainbowSDK.webRTC.callInVideo(contact)` initiates a video call
- Handling incoming calls: listen for `rainbow_oncallincoming`; display UI for accept/reject; accept with `rainbowSDK.webRTC.answerCall(call)`; reject with `rainbowSDK.webRTC.rejectCall(call)`
- Media constraints: configure camera and microphone preferences: `rainbowSDK.webRTC.setMediaConstraints({audio: true, video: {width: 1280, height: 720}})`
- Rendering media: attach local and remote media streams to HTML `<video>` elements; `localStream` is available on call start; `remoteStream` is available when the other party answers
- Call lifecycle events: `rainbow_oncallstatechanged` tracks the call through states: `ringing`, `active`, `held`, `ended`; use these to update the UI (show call timer, mute button, etc.)

**5. Handling Connection State**
- Automatic reconnection: the SDK automatically reconnects on WebSocket disconnection with exponential backoff (1s, 2s, 4s, up to 60s)
- Offline handling: when the WebSocket is disconnected, messages sent by the user are queued locally and delivered when the connection is restored; incoming messages during offline are retrieved via the REST API on reconnect
- Token refresh: the SDK handles token refresh automatically; if the refresh token is also expired (after 30 days), the user must re-authenticate
- Network change: the SDK detects network changes (Wi-Fi to cellular, VPN connect/disconnect) and triggers a reconnection
- Best practice: always display the connection state in the UI; users should know when they are offline/reconnecting rather than assuming their messages are being delivered

#### Lab Description (LAB)

**Setup**: A starter HTML/JavaScript project with the Rainbow Web SDK installed and a login form pre-built.

**Steps**:
1. Initialize the SDK with the provided appId and connect to the sandbox.
2. Implement a contact list that displays all contacts with real-time presence indicators (green dot for online, red for busy, gray for offline).
3. Implement a chat view: select a contact, load conversation history, send new messages, display incoming messages in real-time.
4. Add typing indicators: show "User is typing..." when the remote user is composing a message.
5. Implement a basic audio call feature: "Call" button on the contact card, incoming call notification with accept/reject, active call display with a "Hang Up" button.
6. Display a connection state banner at the top of the page (Connected/Reconnecting/Disconnected).

**Expected Outcome**: Learner builds a functional browser-based chat and calling application using the Rainbow Web SDK.

#### Key Takeaways
- The Web SDK uses an event-driven architecture; register listeners for all events your UI needs and clean them up on component unmount
- Always display connection state to the user; silent failures erode trust in the application
- Audio/video calls use WebRTC under the hood; the SDK abstracts the complexity but you still need to handle media constraints and stream rendering
- Message delivery is asynchronous; use read receipts and delivery confirmations to provide accurate status in the UI

---

### DEV-203: Node.js SDK: Backend Automation

| Field | Value |
|---|---|
| **Module ID** | DEV-203 |
| **Title** | Node.js SDK: Backend Automation |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + QIZ |
| **Prerequisites** | DEV-104 (Authentication & Security) |

#### Detailed Content Outline

**1. Bot Architecture**
- A Rainbow bot is a headless application that authenticates as a bot user (not a human user) and interacts with the platform programmatically
- Bot account creation: register a bot application on the Developer Hub (hub.openrainbow.com); the bot gets its own JID, display name, and avatar
- Node.js SDK installation: `npm install rainbow-node-sdk`; minimum Node.js version: 16.x
- Bot lifecycle: initialize SDK > login (automatic) > listen for events > respond to events > handle shutdown gracefully
- Bot user vs. human user: bots can be added to Bubbles, receive messages, send messages, and manage presence; bots cannot initiate audio/video calls (they can trigger call invitations via the API)

**2. Event-Driven Patterns**
- SDK event system: `rainbowSDK.events.on('rainbow_onmessagereceived', (message) => { ... })`
- Common bot events: `rainbow_onmessagereceived` (IM from a user), `rainbow_onbubbleinvitationreceived` (added to a Bubble), `rainbow_oncontactpresencechanged` (contact came online/went offline), `rainbow_onconnectionstatechanged` (SDK connection status)
- Event filtering: filter events by conversation type (1:1 vs. Bubble), by sender (ignore messages from other bots), by content (match keywords or commands)
- Async processing: bot event handlers should be async; avoid blocking the event loop; use `async/await` or return Promises from handlers
- Error isolation: wrap every event handler in a try/catch; an unhandled exception in an event handler can crash the entire bot process

**3. Message Routing**
- Command pattern: detect user commands by message prefix (e.g., `!help`, `!status`, `/lookup`); route to the appropriate handler function
- Intent detection: for more sophisticated routing, integrate with an NLP service (IBM Watson, Google Dialogflow) to classify user intent from natural language
- Conversation context: maintain conversation state (e.g., a multi-step form) using a context object keyed by conversation ID; persist context in Redis or a database for multi-instance bots
- Message formatting: use Markdown for rich responses (bold, italic, lists, links); the Rainbow client renders Markdown in IM messages
- Rate limiting: the bot should not send more than 1 message per second per conversation to avoid flooding; implement a send queue with throttling

**4. Automated Responses and Workflows**
- Auto-reply: respond to specific keywords or phrases; e.g., when a user sends "hours," the bot replies with the company's business hours
- Data lookup: the bot queries an external database or API and returns the result; e.g., "!order 12345" triggers a lookup in the ERP system and returns the order status
- Scheduled messages: use `node-cron` or similar to send periodic messages; e.g., a daily standup reminder to a project Bubble at 9 AM
- Workflow triggers: the bot detects a specific condition and initiates a workflow; e.g., when a new user joins a Bubble, the bot sends a welcome message with onboarding instructions
- File sharing: the bot can upload and share files via `rainbowSDK.fileStorage.uploadFileToConversation(conversation, file)`; useful for generating reports and sharing them in Bubbles

**5. Data Processing Pipelines**
- Pattern: message event > extract data > transform > store > respond; the bot acts as a pipeline processor
- Example: expense report bot — user sends a photo of a receipt > bot extracts text via OCR API > parses amount, date, vendor > stores in expense database > confirms to user
- Batch processing: the bot collects data throughout the day and generates a summary at end-of-day; e.g., a support ticket bot that summarizes daily ticket counts per category
- Integration with external systems: use HTTP requests (axios, node-fetch) to interact with REST APIs (CRM, ERP, ITSM); use database drivers (pg, mysql2, mongodb) for direct database access
- Error handling: if an external system is unavailable, queue the request and retry later; notify the user that their request is pending

#### Lab Description (LAB)

**Setup**: A starter Node.js project with the Rainbow Node.js SDK installed and a bot account pre-configured.

**Steps**:
1. Initialize the SDK and connect the bot to the Rainbow platform.
2. Implement a `!help` command that lists all available bot commands.
3. Implement a `!weather <city>` command that queries a public weather API and returns the current temperature and conditions.
4. Implement a welcome workflow: when the bot is added to a Bubble, it sends a welcome message explaining its capabilities.
5. Implement a `!poll <question>` command that creates a simple yes/no poll in the Bubble and tallies votes from message reactions.
6. Add error handling: wrap all handlers in try/catch, log errors, and send a user-friendly error message if something fails.

**Expected Outcome**: Learner builds a functional bot with command routing, external API integration, workflow automation, and error handling.

#### Key Takeaways
- Rainbow bots are headless Node.js applications that authenticate as bot users and respond to platform events
- Every event handler must be wrapped in try/catch; an unhandled exception crashes the entire bot process
- Implement message rate limiting (1 message/second/conversation) to avoid flooding users
- Use conversation context (keyed by conversation ID) to maintain state in multi-step interactions

---

### DEV-204: S2S API & Webhooks

| Field | Value |
|---|---|
| **Module ID** | DEV-204 |
| **Title** | S2S API & Webhooks |
| **Level** | L2 Practitioner |
| **Duration** | 45 minutes |
| **Content Types** | VID + LAB |
| **Prerequisites** | DEV-103 (First Application) |

#### Detailed Content Outline

**1. Webhook Registration**
- Webhook concept: instead of polling the API for changes, register a callback URL that Rainbow will POST to when events occur; this is more efficient and provides near-real-time notifications
- Registration endpoint: `POST /api/rainbow/notificationsadmin/v1.0/subscriptions` with body `{"type": "webhook", "callbackUrl": "https://your-server.com/rainbow/webhook", "events": ["message_received", "presence_changed", "bubble_member_added"]}`
- Event types: the full list of available webhook events is documented at hub.openrainbow.com/doc/webhook; major categories include messaging events, presence events, telephony events, bubble events, and admin events
- Subscription management: `GET /subscriptions` to list active webhooks, `PUT /subscriptions/{id}` to update, `DELETE /subscriptions/{id}` to remove
- Limitations: maximum 10 webhook subscriptions per application; each subscription can listen to up to 20 event types

**2. Callback URL Setup**
- HTTPS required: callback URLs must use HTTPS with a valid TLS certificate (self-signed certificates are rejected)
- Verification: upon registration, Rainbow sends a `GET` request to the callback URL with a `challenge` query parameter; the server must respond with the challenge value in the response body to prove ownership
- Endpoint architecture: create a dedicated webhook endpoint (e.g., `/api/webhooks/rainbow`) that handles POST requests; parse the JSON body to determine the event type and payload
- Acknowledgment: the server must respond with HTTP 200 within 10 seconds; if it responds with a non-2xx status or times out, Rainbow retries the delivery
- Multiple events per request: Rainbow may batch multiple events into a single POST request (array of event objects); always iterate over the array

**3. Event Payload Format**
- Standard envelope: `{"event": "message_received", "data": { ... }, "timestamp": "2025-01-15T10:30:00Z", "id": "uuid-of-event"}`
- Message event data: `{"message": {"content": "Hello", "from": {"id": "userId"}, "conversation": {"id": "convId"}}, "type": "text/plain"}`
- Presence event data: `{"contact": {"id": "userId", "presence": "online", "status": "Available"}}`
- Bubble event data: `{"room": {"id": "roomId", "name": "Project Alpha"}, "action": "member_added", "member": {"id": "userId"}}`
- Custom fields: some events include additional metadata; always parse conservatively (check for field existence before accessing)

**4. Retry Logic**
- Rainbow retry policy: if the webhook delivery fails (timeout, non-2xx response), Rainbow retries 3 times with exponential backoff (30s, 60s, 120s)
- After 3 failed retries, the event is dropped and a `webhook_delivery_failed` event is logged in the admin portal
- Dead letter handling: implement a dead letter queue in your application; if you detect missed events (via sequence gaps in event IDs), use the REST API to fetch the missing data
- Health monitoring: Rainbow checks webhook health hourly; if the callback URL returns errors for 24 consecutive hours, the webhook subscription is automatically suspended; reactivate via `PUT /subscriptions/{id} {"status": "active"}`
- Idempotency: Rainbow may deliver the same event multiple times (due to retries); use the event `id` field to deduplicate; store processed event IDs in a set (with a 24-hour TTL)

**5. Signature Verification**
- HMAC signature: each webhook delivery includes an `x-rainbow-signature` header containing an HMAC-SHA256 hash of the request body, signed with the application secret
- Verification: compute `HMAC-SHA256(applicationSecret, requestBody)` and compare with the received signature; reject requests with mismatched signatures
- Security importance: without signature verification, any server that discovers your webhook URL can forge Rainbow events; always verify in production
- Implementation: `const crypto = require('crypto'); const expectedSig = crypto.createHmac('sha256', appSecret).update(rawBody).digest('hex'); if (expectedSig !== receivedSig) { return res.status(401).send('Invalid signature'); }`

#### Lab Description (LAB)

**Setup**: A pre-built Express.js server with a webhook endpoint stub and a public HTTPS URL (via ngrok or similar tunneling service).

**Steps**:
1. Register a webhook subscription for `message_received` and `presence_changed` events.
2. Implement the challenge verification handler for the callback URL.
3. Implement the webhook event handler: log all incoming events, parse message content, and send an acknowledgment.
4. Implement HMAC signature verification to reject forged events.
5. Test the webhook by sending messages to the bot user from the Rainbow web client and verifying they appear in the server logs.
6. Simulate a delivery failure (return 500 from the webhook endpoint) and observe Rainbow's retry behavior.

**Expected Outcome**: Learner can register, implement, secure, and troubleshoot webhooks for real-time event processing.

#### Key Takeaways
- Webhooks are the preferred pattern for real-time event processing; polling is inefficient and adds latency
- Always verify the HMAC signature on every webhook delivery; without it, your endpoint is vulnerable to forged events
- Implement idempotency using the event `id` field; Rainbow may deliver the same event multiple times due to retries
- Respond to webhook deliveries within 10 seconds; long-running processing should be offloaded to a background worker queue

---

### DEV-205: Building Chatbots

| Field | Value |
|---|---|
| **Module ID** | DEV-205 |
| **Title** | Building Chatbots |
| **Level** | L2 Practitioner |
| **Duration** | 45 minutes |
| **Content Types** | VID + LAB + QIZ |
| **Prerequisites** | DEV-103 (First Application) |

#### Detailed Content Outline

**1. Rainbow-Chatbot Framework**
- The Rainbow-Chatbot framework is an open-source toolkit (`npm install rainbow-chatbot`) that simplifies bot development by providing a conversation flow engine on top of the Node.js SDK
- Architecture: the framework wraps the Rainbow Node.js SDK, adding a state machine engine, intent matching, and response templating
- Key components: Scenarios (conversation flow definitions), Intents (user message classification), Entities (extracted data from user messages), Actions (bot responses and API calls)
- When to use: for bots with structured conversation flows (FAQ, forms, guided workflows); for free-form conversational bots, use the Node.js SDK directly with NLP integration

**2. JSON Scenario Syntax**
- Scenarios are defined in JSON files that describe the conversation flow as a state machine
- Structure: `{"scenario": "orderLookup", "startState": "askOrderNumber", "states": [{"name": "askOrderNumber", "message": "Please enter your order number", "transitions": [{"intent": "orderNumber", "target": "lookupOrder"}]}, {"name": "lookupOrder", "action": "api.lookupOrder", "transitions": [{"condition": "found", "target": "showOrder"}, {"condition": "notFound", "target": "orderNotFound"}]}]}`
- State types: `message` (send a message to the user), `question` (send a message and wait for a response), `action` (execute a function), `conditional` (branch based on a condition)
- Transitions: move between states based on user input (matched intent), action results (success/failure), or conditions (variable values)
- Variables: store data during the conversation using `$variableName`; access in messages with `{{variableName}}`; persist across states within a conversation session

**3. State Machines**
- Each conversation with a user is an independent state machine instance; multiple users can be in different states simultaneously
- State persistence: conversation state is stored in memory by default; for production, configure a persistent store (Redis, MongoDB) to survive bot restarts
- Timeout handling: configure a `timeout` on each state (e.g., 120 seconds); if the user does not respond, transition to a timeout state (e.g., "Are you still there?")
- Error states: define a global error state that catches unmatched intents or processing failures; respond with a helpful fallback message ("I did not understand that. Type !help for available commands.")
- State history: the framework maintains a conversation history that can be used for analytics (most common paths, drop-off points, average conversation length)

**4. NLP Integration (IBM Watson)**
- The Rainbow-Chatbot framework supports pluggable NLP providers for intent classification and entity extraction
- IBM Watson Assistant integration: configure the Watson workspace ID and API key in the bot configuration; the framework sends user messages to Watson for intent classification and returns the top-ranked intent
- Intent mapping: map Watson intents to scenario transitions; e.g., Watson detects intent "check_order" > transition to the `lookupOrder` state
- Entity extraction: Watson extracts entities (order number, date, product name) from the user message; these are stored as conversation variables for use in subsequent states
- Fallback: if Watson confidence is below 0.5, the framework triggers the fallback state; tune the confidence threshold based on the bot's vocabulary size and complexity

**5. Multi-Language Bots**
- Language detection: the framework can detect the user's language from their Rainbow profile or from the first message using a language detection library (e.g., franc, cld3)
- Localized scenarios: create separate JSON scenario files per language (`scenario_en.json`, `scenario_fr.json`, `scenario_de.json`); the framework loads the appropriate file based on detected language
- NLP per language: configure separate Watson workspaces for each language, or use a multi-language Watson workspace (supports up to 10 languages per workspace)
- Dynamic switching: allow users to switch language mid-conversation with a command (e.g., `/lang fr`); the framework reloads the scenario and resets to the start state in the new language

#### Lab Description (LAB)

**Setup**: A starter project with the Rainbow-Chatbot framework installed and connected to the sandbox.

**Steps**:
1. Create a JSON scenario for an IT helpdesk bot: (a) greeting state, (b) ask for issue category (hardware/software/network), (c) based on category, ask follow-up questions, (d) create a summary message and offer to create a support ticket.
2. Implement an `action` state that calls an external API (mock IT ticketing system) to create a ticket.
3. Add timeout handling: if the user does not respond within 60 seconds, send a reminder; after 120 seconds, end the conversation with "Session expired."
4. Add a fallback state for unrecognized inputs: "I did not understand. Please select from the options: hardware, software, or network."
5. Test the bot by chatting with it from the Rainbow web client; walk through the complete flow and verify the ticket creation.

**Expected Outcome**: Learner builds a structured chatbot with state machine flow, external API integration, timeout handling, and error fallback.

#### Key Takeaways
- The Rainbow-Chatbot framework simplifies bot development by providing a JSON-based state machine engine; use it for structured conversation flows
- Always implement timeout handling and fallback states; without them, the bot becomes unresponsive when users provide unexpected input
- State persistence (Redis or MongoDB) is essential for production bots; in-memory state is lost when the bot restarts
- NLP integration (Watson, Dialogflow) adds natural language understanding but requires separate training data for each language

---

## LEVEL 3: EXPERT (5 hours total)

---

### DEV-301: Telephony APIs & CTI Integration

| Field | Value |
|---|---|
| **Module ID** | DEV-301 |
| **Title** | Telephony APIs & CTI Integration |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB |
| **Prerequisites** | DEV-201 (REST API Deep Dive) |

#### Detailed Content Outline

**1. Call Control API**
- Make call: `POST /api/rainbow/telephony/v1.0/calls` with body `{"callee": "+33140443322", "calleeType": "pstn"}`; returns the call ID for subsequent operations
- Answer call: `POST /api/rainbow/telephony/v1.0/calls/{callId}/answer`
- Hold/Retrieve: `POST /calls/{callId}/hold` and `POST /calls/{callId}/retrieve`
- Transfer: `POST /calls/{callId}/transfer` with body `{"target": "+33140443323"}`; supports blind transfer and attended transfer (establish second call first, then transfer)
- Conference: `POST /calls/{callId}/conference` merges two active calls into a 3-way conference
- DTMF: `POST /calls/{callId}/dtmf` with body `{"digits": "1234#"}`; sends in-band or RFC 2833 DTMF tones for IVR navigation

**2. IVR Scripting via API**
- IVR flow management: `GET /api/rainbow/telephony/v1.0/ivr/flows` lists all IVR flows; `POST /flows` creates a new flow; `PUT /flows/{id}` updates an existing flow
- Flow definition: IVR flows are defined as JSON objects with nodes (greeting, menu, queue, transfer, voicemail) and edges (DTMF inputs, timeouts, conditions)
- Dynamic IVR: combine the API with real-time data to create dynamic IVR behavior; e.g., query a database during the IVR call to route based on caller account status
- Audio prompt management: upload audio files via `POST /api/rainbow/telephony/v1.0/ivr/prompts` (WAV/MP3); reference prompts by ID in the flow definition
- Testing: use the IVR simulation endpoint `POST /flows/{id}/simulate` to test the flow without making a real call

**3. PBX Bridge API**
- The PBX Bridge API allows applications to control PBX calls from Rainbow; this bridges the gap between cloud applications and on-premises telephony
- Supported operations: make call via PBX, answer PBX call, hold, retrieve, transfer, conference, pickup
- Events: subscribe to PBX call events via webhooks or the S2S API; events include `call_ringing`, `call_connected`, `call_ended`, `call_transferred`
- Use case: CRM screen pop — when a PBX call arrives, the PBX Bridge API sends a `call_ringing` event with the caller ID; the CRM application looks up the caller in the database and opens their record

**4. Call Recording API**
- Start recording: `POST /calls/{callId}/recording/start`; requires the user to have call recording enabled in their subscription
- Stop recording: `POST /calls/{callId}/recording/stop`
- Retrieve recording: `GET /api/rainbow/telephony/v1.0/recordings/{recordingId}`; returns the audio file URL and metadata (duration, participants, timestamp)
- Compliance: recording API enforces company-level recording policies; if the company requires all-call recording, individual stop/start is overridden
- Storage: recordings are stored encrypted in the customer's selected data center region; retention period is configurable (default 1 year)

**5. Call Analytics API**
- Call statistics: `GET /api/rainbow/telephony/v1.0/statistics/calls` with date range, site, and user filters; returns call counts, durations, and quality metrics
- CDR (Call Detail Records): `GET /statistics/cdr` returns detailed per-call records including caller, callee, start/end time, duration, codec, MOS score
- Real-time monitoring: subscribe to call status events to build real-time call center dashboards showing active calls, queue depth, and agent status
- Data export: bulk CDR export for integration with BI tools (Tableau, Power BI) via CSV download or scheduled API pull

#### Lab Description (LAB)

**Setup**: A sandbox environment with PBX overlay configured and 5 test extensions.

**Steps**:
1. Make a programmatic call between two test extensions using the Call Control API.
2. Put the call on hold, make a second call, and merge both into a 3-way conference.
3. Start and stop a call recording; retrieve the recording file.
4. Query the CDR API for calls made in the last hour and display the results.
5. Build a simple real-time call dashboard using webhooks: display active calls, caller/callee, duration, and status.

**Expected Outcome**: Learner can programmatically control telephony operations and build telephony-integrated applications.

#### Key Takeaways
- The Telephony API provides full call control (make, answer, hold, transfer, conference) for both WebRTC and PBX calls
- IVR flows can be managed via API, enabling dynamic routing based on real-time data
- Call recording and CDR APIs enable compliance and analytics use cases; recordings are encrypted and stored per data residency policy
- PBX Bridge API is the key integration point for building CRM screen pops and click-to-call features

---

### DEV-302: IoT Integration Patterns

| Field | Value |
|---|---|
| **Module ID** | DEV-302 |
| **Title** | IoT Integration Patterns |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + CAS |
| **Prerequisites** | DEV-205 (Building Chatbots) |

#### Detailed Content Outline

**1. Device-to-Bot Communication**
- Architecture: IoT device > MQTT/HTTP gateway > Rainbow bot (via REST API or Node.js SDK) > Bubble notification to human team
- Protocol bridging: IoT devices typically use MQTT or CoAP; the gateway translates these to Rainbow API calls (HTTP POST to send a message)
- Message format: standardize IoT alert messages: `{"device": "temp-sensor-01", "location": "Server Room B", "metric": "temperature", "value": 42, "threshold": 38, "severity": "critical"}`
- Bot processing: the Rainbow bot receives the alert, formats a human-readable message ("CRITICAL: Server Room B temperature is 42C, exceeding 38C threshold"), and posts it to the appropriate Bubble

**2. Alerting Patterns**
- Severity-based routing: critical alerts go to the on-call Bubble (with push notification), warnings go to the monitoring Bubble (no push), informational alerts are logged but not messaged
- Escalation: if a critical alert is not acknowledged within 5 minutes (no message reply in the Bubble), the bot escalates by mentioning the on-call manager or initiating a call
- Deduplication: IoT sensors may fire the same alert repeatedly; the bot should deduplicate by alert type and device (suppress duplicate alerts within a configurable window, e.g., 15 minutes)
- Alert enrichment: before sending the alert, the bot can query additional context (device location from the asset management system, recent maintenance history) and include it in the message

**3. Monitoring Dashboards**
- Real-time data feed: IoT devices send periodic telemetry (every 30 seconds); the bot aggregates this data and posts summaries to a monitoring Bubble hourly
- Integration with visualization tools: expose Rainbow Bubble data via a webhook to a dashboard tool (Grafana, Power BI); the dashboard displays device health alongside communication logs
- Historical analysis: store all IoT events in a database; build trend reports (e.g., "Temperature alerts have increased 40% this month — investigate cooling system")

**4. Smart Building Use Case**
- Scenario: a smart building with HVAC sensors, occupancy sensors, and security cameras integrated with Rainbow
- HVAC: temperature alerts trigger maintenance team notifications; the team discusses the issue in a Bubble, shares photos, and logs the resolution
- Occupancy: meeting room occupancy sensors update Rainbow room availability status; employees can see which rooms are free via the Rainbow client
- Security: camera motion detection after hours triggers a video clip sent to the security team Bubble; the team can view the clip and coordinate response
- ROI: reduced response time to facility issues (from 30 minutes average to 5 minutes with real-time alerts), improved energy efficiency (HVAC optimization based on occupancy data)

**5. Production Considerations**
- Scalability: IoT deployments can generate thousands of events per minute; design the gateway for horizontal scaling; use message queues (RabbitMQ, Kafka) between the gateway and the Rainbow bot
- Security: authenticate IoT devices at the gateway; never expose Rainbow API credentials to IoT devices directly; use device certificates or API keys at the gateway level
- Reliability: if the Rainbow API is temporarily unavailable, the gateway should queue messages locally and retry; never drop IoT alerts silently
- Testing: simulate high-volume alert scenarios to validate the bot's deduplication, routing, and escalation logic under load

#### Lab Description (LAB)

**Setup**: A simulated IoT environment with 10 virtual sensors (temperature, humidity, motion) and a pre-configured Rainbow bot.

**Steps**:
1. Implement the IoT gateway: receive MQTT messages from the simulated sensors and translate them to Rainbow API calls.
2. Configure severity-based routing: critical alerts to "Emergency" Bubble, warnings to "Monitoring" Bubble.
3. Implement deduplication: suppress duplicate alerts from the same sensor within 5 minutes.
4. Implement escalation: if a critical alert is not acknowledged within 3 minutes, mention the on-call manager.
5. Generate an hourly summary message: count of alerts by severity, list of devices with active issues.

**Expected Outcome**: Learner builds a complete IoT-to-Rainbow integration with alerting, deduplication, and escalation.

#### Key Takeaways
- IoT integration follows the device > gateway > bot > human team pattern; the Rainbow bot is the intelligence layer between machines and people
- Deduplication and escalation logic are critical for operational effectiveness; without them, alert fatigue causes teams to ignore notifications
- Use message queues between the IoT gateway and the Rainbow bot for scalability and reliability
- Smart building use cases (HVAC, occupancy, security) are the most common IoT integration patterns for Rainbow

---

### DEV-303: Mobile SDKs (iOS & Android)

| Field | Value |
|---|---|
| **Module ID** | DEV-303 |
| **Title** | Mobile SDKs (iOS & Android) |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB |
| **Prerequisites** | DEV-202 (Web SDK) |

#### Detailed Content Outline

**1. iOS SDK: Swift Integration**
- Installation: add `RainbowiOS` via CocoaPods (`pod 'RainbowiOS'`) or Swift Package Manager
- Initialization: `RainbowSDK.shared().initialize(appId: "...", appSecret: "...")`; call in `AppDelegate.didFinishLaunching`
- Key classes: `ServicesManager` (entry point for all services), `ContactsService` (user lookup, presence), `ConversationsService` (messaging), `CallService` (audio/video calls), `BubblesService` (group management)
- CallKit integration: register a `CXProvider` to present incoming Rainbow calls as native iOS calls; this ensures calls ring even when the app is in the background
- Push notifications: configure APNs and PushKit (VoIP push) credentials in the Rainbow Developer Hub; handle incoming VoIP pushes by presenting CallKit UI within 3 seconds (iOS 16+ requirement)

**2. Android SDK: Kotlin Integration**
- Installation: add `implementation 'com.ale.rainbow:rainbow-android-sdk:x.y.z'` to `build.gradle`
- Initialization: `RainbowSdk.instance().initialize(applicationContext, appId, appSecret)`; call in `Application.onCreate()`
- Key classes: `RainbowSdk.instance().contacts()`, `.conversations()`, `.calls()`, `.bubbles()`; each returns a service manager
- Firebase Cloud Messaging: configure FCM server key in the Rainbow Developer Hub; handle high-priority FCM messages in a `FirebaseMessagingService` subclass to wake the app for incoming calls
- Foreground service: for reliable call delivery, run a foreground service with a persistent notification; this prevents the OS from killing the app in the background

**3. Native App Embedding**
- Embed Rainbow functionality into an existing native app (e.g., add messaging and calling to a hospital patient management app)
- Fragment-based UI (Android): embed Rainbow chat and call views as Fragments within your app's Activity hierarchy
- ViewController-based UI (iOS): embed Rainbow views as child ViewControllers; present call UI modally over the current screen
- Custom UI: use the SDK's service layer (contacts, conversations, calls) to build a fully custom UI that matches your app's design language; the SDK provides data and events, you provide the UI

**4. Push Notification Handling**
- iOS VoIP push flow: APNs delivers VoIP push > PushKit wakes the app > app presents CallKit UI > user accepts > SDK establishes the call
- Android FCM flow: FCM delivers high-priority message > `FirebaseMessagingService` receives it > app shows a full-screen notification > user accepts > SDK establishes the call
- Troubleshooting: common push failures include expired push tokens (user reinstalled the app), blocked FCM domains (corporate Wi-Fi), and battery optimization killing the foreground service
- Token refresh: register a callback for push token changes and update the Rainbow server whenever the token changes

**5. Media Handling**
- Audio routing: on iOS, use `AVAudioSession` to route audio to speaker, earpiece, or Bluetooth; on Android, use `AudioManager`
- Video rendering: attach remote and local video streams to `UIView` (iOS) or `SurfaceView` (Android); handle orientation changes and picture-in-picture mode
- Screen sharing: iOS requires a Broadcast Extension (ReplayKit); Android uses `MediaProjection` API; both require explicit user permission
- Bandwidth adaptation: the SDK automatically adjusts video quality based on network conditions; listen for quality change events to update the UI (e.g., show "Low quality" indicator)

#### Lab Description (LAB)

**Setup**: A starter mobile project (iOS or Android, learner's choice) with the Rainbow SDK integrated.

**Steps**:
1. Implement login and connection state display.
2. Build a contacts list with real-time presence indicators.
3. Implement a chat screen: send messages, receive messages, display typing indicators.
4. Implement incoming call handling with native UI (CallKit on iOS, full-screen notification on Android).
5. Make an outgoing audio call and display call state (ringing, connected, ended).

**Expected Outcome**: Learner builds a functional mobile app with Rainbow messaging and calling embedded.

#### Key Takeaways
- Mobile SDK integration requires platform-specific handling: CallKit on iOS, FCM + foreground service on Android
- Push notification configuration is the most common source of issues; ensure tokens are refreshed and FCM domains are not blocked
- For embedding in existing apps, use the SDK's service layer for data and events while building a custom UI that matches the host app
- Always test on real devices; emulators do not accurately simulate push notifications, audio routing, or battery optimization

---

### DEV-304: C# SDK: Enterprise Windows Integration

| Field | Value |
|---|---|
| **Module ID** | DEV-304 |
| **Title** | C# SDK: Enterprise Windows Integration |
| **Level** | L3 Expert |
| **Duration** | 45 minutes |
| **Content Types** | VID + LAB |
| **Prerequisites** | DEV-104 (Authentication & Security) |

#### Detailed Content Outline

**1. SDK Installation and Setup**
- NuGet package: `Install-Package Rainbow.CSharp.SDK`; targets .NET 6.0+ and .NET Framework 4.7.2+
- Initialization: `var application = new Rainbow.Application(); application.SetApplicationInfo(appId, appSecret); application.SetHostInfo("openrainbow.com");`
- Login: `application.GetLogin().LoginWithCredentials(email, password, callback);` — callback receives success/failure with connection details
- Service access: `application.GetContacts()`, `.GetConversations()`, `.GetBubbles()`, `.GetTelephony()` — each returns a service manager

**2. .NET Integration Patterns**
- WPF desktop application: embed Rainbow messaging and calling into a WPF business application; use MVVM pattern with Rainbow service events binding to ViewModel properties
- Windows Service: run a Rainbow bot as a Windows Service for 24/7 operation; use `application.Login()` in the `OnStart()` method and `application.Logout()` in `OnStop()`
- ASP.NET integration: use the C# SDK in an ASP.NET backend to provide Rainbow functionality to a web application; the SDK maintains a persistent connection to Rainbow from the server
- Console application: for scripting and automation (bulk provisioning, report generation); use the SDK in a C# console app with async/await patterns

**3. Desktop Embedding**
- Scenario: embed a Rainbow contact list and click-to-call capability into a legacy Windows business application (ERP, CRM, helpdesk)
- Approach: create a Rainbow sidebar panel (WPF UserControl) that displays contacts with presence; clicking a contact initiates a call via the SDK's Telephony service
- System tray integration: show Rainbow presence status in the system tray; incoming message/call notifications via Windows toast notifications
- Outlook add-in: embed Rainbow presence next to Outlook contacts; click-to-call from the email header

**4. Event Handling in C#**
- Event pattern: `application.GetContacts().ContactPresenceChanged += (sender, args) => { /* update UI */ };`
- Thread marshaling: Rainbow events fire on background threads; marshal to the UI thread using `Dispatcher.Invoke()` (WPF) or `SynchronizationContext.Post()` (general)
- Async/await: most SDK operations support async patterns; `await application.GetConversations().GetAllConversationsAsync();`
- Error handling: wrap all SDK calls in try/catch; handle `RainbowException` for API errors and `NetworkException` for connectivity issues

**5. Enterprise Deployment**
- MSI packaging: package the Rainbow-integrated application as an MSI for deployment via SCCM or Group Policy
- Configuration management: externalize Rainbow connection settings (appId, host) in a config file or registry for per-environment configuration (dev/staging/production)
- Auto-update: implement an auto-update mechanism for the Rainbow SDK dependency; new SDK versions may include bug fixes and security patches
- Logging: configure the SDK's built-in logging to write to the Windows Event Log or a file for production diagnostics

#### Lab Description (LAB)

**Setup**: A starter C# WPF project with the Rainbow SDK NuGet package installed.

**Steps**:
1. Implement login with credentials and display connection status.
2. Build a contacts list panel with real-time presence updates.
3. Implement click-to-call: clicking a contact initiates an audio call via the Telephony service.
4. Implement a message notification: when a new message arrives, display a Windows toast notification.
5. Build a simple system tray icon that shows the current user's presence status.

**Expected Outcome**: Learner builds a WPF application with Rainbow contacts, calling, and notification integration.

#### Key Takeaways
- The C# SDK targets .NET 6.0+ and .NET Framework 4.7.2+; choose based on the host application's target framework
- Always marshal Rainbow events to the UI thread; events fire on background threads and direct UI access causes exceptions
- For enterprise deployment, externalize configuration and package as MSI for SCCM/Group Policy distribution
- The C# SDK enables embedding Rainbow into legacy Windows business applications without rewriting them

---

### DEV-305: Rainbow CLI & Admin Automation

| Field | Value |
|---|---|
| **Module ID** | DEV-305 |
| **Title** | Rainbow CLI & Admin Automation |
| **Level** | L3 Expert |
| **Duration** | 45 minutes |
| **Content Types** | VID + LAB + REF |
| **Prerequisites** | DEV-104 (Authentication & Security) |

#### Detailed Content Outline

**1. CLI Installation and Authentication**
- Installation: `npm install -g rainbow-cli`; requires Node.js 16+
- Interactive login: `rbw login` prompts for email and password; stores the session token locally
- Token-based login: `rbw login --token <api_token>` for automation scripts; API tokens are created in the Developer Hub with configurable permissions and expiry
- Profile management: `rbw profile list` shows saved profiles; `rbw profile use production` switches to a named profile; useful for managing multiple environments (dev, staging, production)
- Connection verification: `rbw status` shows the current connection state, authenticated user, company, and API endpoint

**2. Scripted Provisioning**
- User creation: `rbw user create --email john@example.com --firstName John --lastName Smith --tier business --company <companyId>`
- Bulk import: `rbw user import --file users.csv` (same CSV format as the admin portal import)
- User modification: `rbw user update --email john@example.com --tier enterprise --department Sales`
- User deletion: `rbw user delete --email john@example.com` (permanent; no undo)
- Company management: `rbw company create --name "Acme Corp" --country FR`, `rbw company list`, `rbw site create --company <id> --name "Paris HQ" --timezone Europe/Paris`

**3. Bulk Operations**
- Export users: `rbw user export --company <id> --output users.csv` exports all users with their current tier, site, and status
- Batch tier change: pipe a list of emails through a script: `while read email; do rbw user update --email "$email" --tier enterprise; done < upgrade-list.txt`
- Batch site assignment: `rbw user update --email "$email" --site <siteId>` in a loop for mass reassignment during office moves
- Scheduled operations: use cron (Linux) or Task Scheduler (Windows) to run CLI scripts on a schedule; e.g., nightly sync with HR system

**4. CI/CD Integration**
- Infrastructure as Code: define Rainbow configuration (companies, sites, users, settings) in version-controlled files (YAML/JSON); apply using CLI scripts
- CI pipeline: include Rainbow provisioning as a step in the CI/CD pipeline for applications that depend on Rainbow (e.g., a chatbot deployment: build > test > deploy > `rbw bot update` > verify)
- Environment promotion: use CLI profiles to promote configuration from dev to staging to production: `rbw profile use staging && rbw user import --file users.csv`
- Rollback: maintain previous configuration exports; in case of provisioning errors, reimport the previous state

**5. Monitoring and Reporting Scripts**
- Health check: `rbw status --json | jq '.platform.status'` — verify Rainbow platform connectivity in a monitoring script
- Usage reporting: `rbw user list --company <id> --format json | jq '[.[] | select(.lastLoginDate < "2025-01-01")] | length'` — count inactive users for license optimization
- Audit: `rbw log list --company <id> --from 2025-01-01 --to 2025-01-31 --format csv > audit.csv` — export audit logs for compliance review
- Custom dashboards: pipe CLI output through jq/Python scripts to generate custom reports and dashboards

#### Lab Description (LAB)

**Setup**: A sandbox environment with CLI access and a company to manage.

**Steps**:
1. Authenticate with the CLI and verify the connection.
2. Create 3 sites and import 30 users from a CSV file.
3. Write a bash script that upgrades all users in the "Engineering" department to Enterprise tier.
4. Write a script that exports all inactive users (no login in 90 days) to a CSV report.
5. Schedule the inactive user report to run daily using cron (or simulate the scheduling).

**Expected Outcome**: Learner can use the Rainbow CLI for administrative automation, bulk operations, and reporting.

#### Key Takeaways
- The Rainbow CLI is the primary tool for administrative automation; use it for any operation you would otherwise do manually in the admin portal
- Token-based authentication is required for automation scripts; never embed user passwords in scripts
- Bulk operations should be scripted and version-controlled; this provides audit trails and enables rollback
- CI/CD integration enables Infrastructure as Code patterns for Rainbow configuration management

---

## LEVEL 4: CHAMPION (2 hours total)

---

### DEV-401: Architecture Best Practices & Scalability

| Field | Value |
|---|---|
| **Module ID** | DEV-401 |
| **Title** | Architecture Best Practices & Scalability |
| **Level** | L4 Champion |
| **Duration** | 45 minutes |
| **Content Types** | VID + CAS + REF |
| **Prerequisites** | Multiple L3 modules |

#### Detailed Content Outline

**1. Production Architecture Patterns**
- Microservices: decompose Rainbow-integrated applications into independent services (message handler, call handler, notification service); each service communicates with the Rainbow API independently
- Event sourcing: use webhooks to capture all Rainbow events into an event store (Kafka, EventStoreDB); rebuild application state from the event stream; enables replay, audit, and debugging
- CQRS (Command Query Responsibility Segregation): separate the write path (Rainbow API calls to create/modify) from the read path (local database for fast queries); keeps the application responsive even when the Rainbow API has latency
- Circuit breaker: wrap all Rainbow API calls in a circuit breaker (e.g., opossum for Node.js, Polly for C#); when the API returns errors repeatedly, the circuit opens and the application falls back gracefully instead of hanging
- Queue-based architecture: place a message queue (RabbitMQ, SQS) between the application and the Rainbow API; this absorbs traffic spikes and provides guaranteed delivery

**2. Error Handling at Scale**
- Retry strategies: use exponential backoff with jitter for 429 and 5xx errors; the jitter prevents thundering herd when multiple instances retry simultaneously
- Dead letter handling: after max retries, move failed operations to a dead letter queue for manual review; never silently drop operations
- Monitoring: track API error rates, latency percentiles (p50, p95, p99), and queue depth; alert when error rate exceeds 5% or p99 latency exceeds 5 seconds
- Graceful degradation: if the Rainbow API is unavailable, the application should continue operating with reduced functionality (e.g., queue messages locally, display cached presence data) rather than failing entirely

**3. Rate Limit Management**
- Default limits: 600 requests per minute per application (10/second); higher limits available on request for enterprise applications
- Rate limit optimization: batch operations where possible (use bulk endpoints instead of individual calls), cache frequently accessed data (contacts, presence), use webhooks instead of polling
- Distributed rate limiting: if the application runs on multiple instances, coordinate rate limiting across instances using a shared counter (Redis INCR with TTL)
- Monitoring: track the `X-RateLimit-Remaining` response header to proactively slow down before hitting the limit

**4. Security Best Practices**
- Credential management: store API credentials (appId, appSecret, tokens) in a secrets manager (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault); never hardcode in source code
- Token rotation: rotate application tokens quarterly; implement zero-downtime rotation by supporting two active tokens simultaneously during the rotation period
- Webhook security: always verify HMAC signatures; implement IP whitelisting for the webhook endpoint (Rainbow webhook source IPs are documented in the Developer Hub)
- Input validation: sanitize all user input before sending to the Rainbow API; prevent injection attacks and malformed data from corrupting the platform
- Audit logging: log all API operations with timestamps, actor identity, and operation details; store logs in a tamper-evident system for compliance

**5. Performance Optimization**
- Connection pooling: reuse HTTP connections to the Rainbow API (enable keep-alive); creating a new connection for each request adds 50-100ms overhead
- Caching: cache static data (user profiles, company settings) with a 5-minute TTL; cache presence data with a 30-second TTL; invalidate on webhook events
- Async processing: offload non-time-critical operations (analytics logging, report generation) to background workers; keep the main request path fast
- CDN for media: serve uploaded files (images, documents) through a CDN rather than fetching from the Rainbow API each time; reduces latency and API load

#### Case Study (CAS)

**Scenario**: A healthcare application integrates Rainbow for clinical messaging (10,000 daily messages across 500 clinicians). The application is experiencing 429 (rate limit) errors during peak hours (8-10 AM when all clinicians log in simultaneously).

**Analysis Tasks**:
1. Identify the cause: the application polls the presence API every 10 seconds for all 500 clinicians (500 x 6 = 3,000 requests/minute, exceeding the 600/minute limit).
2. Recommend solution: replace polling with webhooks for presence changes; this reduces presence-related API calls from 3,000/minute to near zero (only webhook deliveries).
3. Additional optimization: implement connection pooling (reduce per-request overhead), cache user profiles (reduce profile lookups), and batch message sends (use bulk API where available).
4. Monitoring: implement rate limit tracking using the `X-RateLimit-Remaining` header and proactive throttling when remaining count drops below 100.

#### Key Takeaways
- Replace polling with webhooks wherever possible; polling is the primary cause of rate limit issues at scale
- Implement circuit breakers around all Rainbow API calls; cascading failures from API unavailability can bring down the entire application
- Cache static data (profiles, settings) and use webhooks to invalidate; never fetch the same data repeatedly within a short window
- Credential management must use a secrets manager; hardcoded credentials in source code are the most common security vulnerability in integrations

---

### DEV-402: Contributing to the Ecosystem

| Field | Value |
|---|---|
| **Module ID** | DEV-402 |
| **Title** | Contributing to the Ecosystem |
| **Level** | L4 Champion |
| **Duration** | 30 minutes |
| **Content Types** | VID |
| **Prerequisites** | DEV-401 (Architecture Best Practices) |

#### Detailed Content Outline

**1. Open Source Contributions**
- Rainbow CPaaS GitHub organization: github.com/Rainbow-CPaaS hosts SDKs, sample applications, and starter kits
- Contributing guidelines: fork the repository, create a feature branch, implement the change with tests, submit a pull request; the ALE developer team reviews PRs within 5 business days
- Types of contributions: bug fixes (most welcome), documentation improvements, new sample applications, SDK feature enhancements, localization/translation
- License: most Rainbow SDK repositories use the MIT license; contributions must be compatible with this license
- Recognition: significant contributors are highlighted in the Developer Hub and may be invited to the Rainbow Developer Advisory Board

**2. Rainbow Marketplace**
- The Rainbow Marketplace (marketplace.openrainbow.com) is a catalog of applications, bots, and integrations built by the developer community and partners
- Publishing: submit your application via the Developer Hub > Marketplace > Submit; provide a description, screenshots, installation instructions, and pricing (free or paid)
- Review process: ALE reviews submitted applications for security, quality, and compliance; review takes 2-4 weeks
- Revenue model: paid marketplace applications use a revenue share model (70% to the developer, 30% to ALE)
- Visibility: marketplace applications are visible to all Rainbow customers; popular applications receive promotional placement

**3. Community Engagement**
- Rainbow Developer Community: community.openrainbow.com hosts forums, Q&A, and announcements for the developer community
- Stack Overflow: monitor and answer questions tagged [openrainbow] to build expertise visibility
- Webinars: ALE hosts quarterly developer webinars on new API features, SDK updates, and best practices; contribute by presenting your integration case study
- Hackathons: ALE sponsors annual hackathons with prizes for the most innovative Rainbow integrations; participate or mentor

**4. Developer Advisory Board**
- Purpose: provide feedback on API design, SDK roadmap, and developer experience to the ALE product team
- Membership: by invitation based on ecosystem contributions (open source, marketplace, community); approximately 20 members globally
- Activities: quarterly virtual meetings with the Rainbow product team, early access to beta features, direct feedback channel for feature requests and bug reports
- Value: influence the direction of the Rainbow developer platform based on real-world integration experience

**5. Thought Leadership**
- Blog posts: write about your Rainbow integration experience on your company blog, Medium, or Dev.to; share challenges, solutions, and architecture decisions
- Conference talks: present your Rainbow integration at developer conferences (local meetups, regional conferences, industry events)
- Certifications: complete the Rainbow Certified Developer assessment (DEV-403) and display the badge on your professional profiles
- Case studies: partner with ALE marketing to publish a developer-focused case study of your integration (process, architecture, results)

#### Key Takeaways
- The Rainbow developer ecosystem thrives on community contributions: open source, marketplace, forums, and knowledge sharing
- Publishing to the Rainbow Marketplace provides visibility to all Rainbow customers and potential revenue through the 70/30 revenue share
- Developer Advisory Board membership is the highest recognition for ecosystem contributors; it provides direct influence on the platform roadmap
- Thought leadership (blog posts, conference talks, case studies) builds both personal brand and the Rainbow developer community
