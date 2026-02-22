# DEV-103: Your First Rainbow Application

| Field            | Value                                                        |
|------------------|--------------------------------------------------------------|
| **Module ID**    | DEV-103                                                      |
| **Title**        | Your First Rainbow Application                               |
| **Track**        | Developer L1 — Foundation                                    |
| **Duration**     | 30 minutes                                                   |
| **Content Types**| Reading, Code Walkthrough, Hands-On Exercise, Knowledge Check|
| **Prerequisites**| DEV-101, DEV-102 (environment must be set up)                |

## Learning Objectives

After completing this module you will be able to:

1. Build a complete "Hello World" Rainbow application using the Node.js SDK.
2. Implement the connection lifecycle: initialize, connect, authenticate, and gracefully disconnect.
3. Send an instant message to a contact programmatically.
4. Listen for incoming messages and respond to them.
5. Understand the event-driven programming model used by the Rainbow SDK.
6. Implement basic error handling for connection failures, token expiration, and rate limits.
7. Apply testing and debugging techniques to troubleshoot Rainbow applications.

---

## 1. Hello World with the Node.js SDK

In this section, you will build a complete working application that connects to Rainbow, sends a message, and listens for incoming messages. Every line of code is explained.

### 1.1 Project Setup

Make sure you have completed the environment setup from DEV-102. Your project should have:

- `package.json` with `rainbow-node-sdk` and `dotenv` as dependencies.
- A `.env` file with your credentials:

```
RAINBOW_APP_ID=your_app_id
RAINBOW_APP_SECRET=your_app_secret
RAINBOW_LOGIN=your_bot_email@example.com
RAINBOW_PASSWORD=your_bot_password
RAINBOW_HOST=sandbox.openrainbow.com
```

- A `.gitignore` that excludes `.env` and `node_modules/`.

### 1.2 The Complete Application

Create a file called `src/index.js` with the following code. Read through it entirely before running it — each section is explained in detail afterward.

```javascript
// Load environment variables from .env file
require('dotenv').config();

// Import the Rainbow Node.js SDK
const RainbowSDK = require('rainbow-node-sdk');

// ============================================================
// Configuration
// ============================================================
const options = {
    rainbow: {
        // Target environment: sandbox for development, openrainbow.com for production
        host: process.env.RAINBOW_HOST || 'sandbox.openrainbow.com'
    },
    credentials: {
        // The bot's Rainbow account credentials
        login: process.env.RAINBOW_LOGIN,
        password: process.env.RAINBOW_PASSWORD
    },
    application: {
        // Application credentials from hub.openrainbow.com
        appID: process.env.RAINBOW_APP_ID,
        appSecret: process.env.RAINBOW_APP_SECRET
    },
    logs: {
        // Enable console logging for development; disable in production
        enableConsoleLogs: true,
        enableFileLogs: false,
        // Log level: "debug", "info", "warn", "error"
        customLabel: "HelloBot",
        color: true
    },
    im: {
        // Send read receipts automatically when messages are received
        sendReadReceipt: true
    }
};

// ============================================================
// Initialize the SDK
// ============================================================
const rainbowSDK = new RainbowSDK(options);

// ============================================================
// Event Handlers
// ============================================================

// Called when the SDK has successfully connected and authenticated
rainbowSDK.events.on('rainbow_onready', async () => {
    console.log('[HelloBot] Connected and ready!');

    // Get the connected user's profile
    const me = rainbowSDK.contacts.getConnectedUser();
    console.log(`[HelloBot] Logged in as: ${me.displayName} (${me.loginEmail})`);

    // List contacts to find someone to message
    const contacts = rainbowSDK.contacts.getAll();
    console.log(`[HelloBot] Number of contacts: ${contacts.length}`);

    if (contacts.length > 0) {
        // Send a greeting to the first contact
        const target = contacts[0];
        console.log(`[HelloBot] Sending greeting to: ${target.displayName}`);

        try {
            await rainbowSDK.im.sendMessageToJid(
                'Hello from my Rainbow bot! This is my first message sent via the API.',
                target.jid
            );
            console.log('[HelloBot] Message sent successfully!');
        } catch (err) {
            console.error('[HelloBot] Failed to send message:', err.message);
        }
    } else {
        console.log('[HelloBot] No contacts found. Add a contact first, then restart.');
    }
});

// Called when a new instant message is received
rainbowSDK.events.on('rainbow_onmessagereceived', (message) => {
    // Ignore messages sent by the bot itself
    if (message.fromJid === rainbowSDK.contacts.getConnectedUser().jid) {
        return;
    }

    console.log(`[HelloBot] Message received from ${message.fromJid}:`);
    console.log(`[HelloBot]   Content: ${message.content}`);

    // Echo the message back with a prefix
    const reply = `Echo: ${message.content}`;

    rainbowSDK.im.sendMessageToJid(reply, message.fromJid)
        .then(() => {
            console.log('[HelloBot] Reply sent.');
        })
        .catch((err) => {
            console.error('[HelloBot] Failed to send reply:', err.message);
        });
});

// Called when the SDK starts connecting
rainbowSDK.events.on('rainbow_onstarted', () => {
    console.log('[HelloBot] SDK started, connecting...');
});

// Called when the SDK is fully connected (before authentication)
rainbowSDK.events.on('rainbow_onconnected', () => {
    console.log('[HelloBot] Connected to Rainbow server.');
});

// Called when an error occurs
rainbowSDK.events.on('rainbow_onerror', (err) => {
    console.error('[HelloBot] Error:', err);
});

// Called when the connection is lost
rainbowSDK.events.on('rainbow_ondisconnected', () => {
    console.log('[HelloBot] Disconnected from Rainbow.');
});

// Called when the SDK is attempting to reconnect
rainbowSDK.events.on('rainbow_onreconnecting', () => {
    console.log('[HelloBot] Reconnecting...');
});

// Called when reconnection succeeds
rainbowSDK.events.on('rainbow_onreconnected', () => {
    console.log('[HelloBot] Reconnected successfully.');
});

// ============================================================
// Graceful Shutdown
// ============================================================
process.on('SIGINT', async () => {
    console.log('[HelloBot] Shutting down...');
    try {
        await rainbowSDK.stop();
        console.log('[HelloBot] Disconnected cleanly. Goodbye!');
    } catch (err) {
        console.error('[HelloBot] Error during shutdown:', err.message);
    }
    process.exit(0);
});

// ============================================================
// Start the SDK
// ============================================================
console.log('[HelloBot] Starting...');
rainbowSDK.start();
```

### 1.3 Running the Application

```bash
node src/index.js
```

You should see output similar to:

```
[HelloBot] Starting...
[HelloBot] SDK started, connecting...
[HelloBot] Connected to Rainbow server.
[HelloBot] Connected and ready!
[HelloBot] Logged in as: Training Bot (bot@example.com)
[HelloBot] Number of contacts: 1
[HelloBot] Sending greeting to: John Developer
[HelloBot] Message sent successfully!
```

Now open the Rainbow client (desktop, web, or mobile) logged in as the contact. You should see the greeting message from the bot. Type a reply, and the bot will echo it back.

Press `Ctrl+C` to stop the bot cleanly.

---

## 2. Code Walkthrough

Let us examine each section of the code in detail.

### 2.1 Configuration Object

```javascript
const options = {
    rainbow: {
        host: process.env.RAINBOW_HOST || 'sandbox.openrainbow.com'
    },
    credentials: {
        login: process.env.RAINBOW_LOGIN,
        password: process.env.RAINBOW_PASSWORD
    },
    application: {
        appID: process.env.RAINBOW_APP_ID,
        appSecret: process.env.RAINBOW_APP_SECRET
    },
    logs: {
        enableConsoleLogs: true,
        enableFileLogs: false,
        customLabel: "HelloBot",
        color: true
    },
    im: {
        sendReadReceipt: true
    }
};
```

The configuration object has four sections:

- **rainbow:** Platform settings. The `host` determines which environment to connect to. Using an environment variable lets you switch between sandbox and production without changing code.
- **credentials:** The Rainbow user account the bot will log in as. This is a real Rainbow user account — the bot appears in the directory just like a human user.
- **application:** The appId and appSecret from your registered application on hub.openrainbow.com. These authenticate your code as an approved application.
- **logs:** Logging configuration. Enable console logs during development for visibility. Disable them or reduce the level in production to reduce noise.
- **im:** Instant messaging settings. `sendReadReceipt: true` automatically marks incoming messages as read, which updates the sender's UI with delivery/read indicators.

### 2.2 SDK Initialization

```javascript
const rainbowSDK = new RainbowSDK(options);
```

This creates an instance of the SDK with your configuration. At this point, no network connection has been made. The SDK is in an idle state waiting for you to call `start()`.

### 2.3 The Ready Event

```javascript
rainbowSDK.events.on('rainbow_onready', async () => {
    // Bot is connected and authenticated — safe to make API calls
});
```

The `rainbow_onready` event fires when the SDK has completed the entire startup sequence: TCP connection, TLS handshake, authentication, contact roster synchronization, and presence announcement. This is the safe point to begin your application logic.

**Do not make API calls before `rainbow_onready` fires.** The SDK is not fully initialized until this event. Calling methods like `sendMessageToJid` before the SDK is ready will fail or produce undefined behavior.

### 2.4 Sending a Message

```javascript
await rainbowSDK.im.sendMessageToJid(
    'Hello from my Rainbow bot!',
    target.jid
);
```

The `im.sendMessageToJid()` method sends an instant message to a specific user identified by their JID (Jabber ID — the internal identifier used by the XMPP protocol underlying Rainbow's messaging system).

Parameters:
- First argument: the message text (string).
- Second argument: the recipient's JID.

The method returns a Promise. Using `await` ensures you wait for confirmation before proceeding. If the send fails (network error, rate limit, invalid recipient), the Promise rejects and you can catch the error.

**Alternative: Sending to a conversation**

```javascript
// Get or create a conversation with a contact
const conversation = await rainbowSDK.conversations
    .openConversationForContact(contact);

// Send a message to the conversation
await rainbowSDK.im.sendMessageToConversation(
    conversation,
    'Hello via conversation!'
);
```

Using conversations is often more practical than JIDs because conversations handle both 1:1 and bubble (group) messaging with the same interface.

### 2.5 Receiving Messages

```javascript
rainbowSDK.events.on('rainbow_onmessagereceived', (message) => {
    if (message.fromJid === rainbowSDK.contacts.getConnectedUser().jid) {
        return; // Ignore own messages
    }
    console.log(`Content: ${message.content}`);
});
```

The `rainbow_onmessagereceived` event fires every time a message arrives — including messages sent by the bot itself (which appear as echoes in the conversation). The `fromJid` check prevents infinite loops where the bot replies to its own messages.

The `message` object contains:

| Property        | Type     | Description                                    |
|-----------------|----------|------------------------------------------------|
| `id`            | String   | Unique message identifier                      |
| `content`       | String   | The message text                               |
| `fromJid`       | String   | Sender's JID                                   |
| `toJid`         | String   | Recipient's JID (or bubble JID for group msgs) |
| `type`          | String   | "chat" for 1:1, "groupchat" for bubble         |
| `date`          | Date     | Timestamp when the message was sent            |
| `isMarkdown`    | Boolean  | Whether the content uses Markdown formatting   |
| `alternativeContent` | Array | Rich content alternatives (file, sticker, etc.) |

### 2.6 Graceful Shutdown

```javascript
process.on('SIGINT', async () => {
    await rainbowSDK.stop();
    process.exit(0);
});
```

When you press `Ctrl+C`, Node.js sends a SIGINT signal. The handler calls `rainbowSDK.stop()` which:

1. Sets the bot's presence to offline.
2. Closes the WebSocket connection.
3. Cleans up internal state.

Always implement graceful shutdown. If you kill the process without calling `stop()`, the bot may appear online for several minutes until the server detects the dead connection.

---

## 3. Understanding the Event-Driven Model

The Rainbow SDK uses an event-driven programming model. Instead of calling a function and waiting for a result (synchronous), you register listeners that are called when events occur (asynchronous).

### 3.1 Connection Lifecycle Events

Events fire in this order during a normal startup:

```
1. rainbow_onstarted       → SDK has begun the connection process
2. rainbow_onconnected     → TCP/TLS connection established
3. rainbow_onready         → Fully authenticated and synchronized
```

During operation:

```
4. rainbow_onmessagereceived  → Incoming message
5. rainbow_oncontactpresencechanged → Contact presence change
6. rainbow_onbubbleinvitationreceived → Invited to a bubble
7. rainbow_onbubbleaffiliationchanged → Role changed in a bubble
```

On disconnection:

```
8. rainbow_ondisconnected  → Connection lost
9. rainbow_onreconnecting  → SDK attempting to reconnect
10. rainbow_onreconnected  → Reconnection successful
```

On shutdown:

```
11. rainbow_onstopped      → SDK has been stopped cleanly
```

### 3.2 Listeners, Callbacks, and Promises

The SDK uses three patterns for asynchronous operations:

**Event Listeners (for incoming events):**
```javascript
rainbowSDK.events.on('rainbow_onmessagereceived', (message) => {
    // Called every time a message arrives
});
```

Use listeners when you want to react to events that can happen at any time.

**Promises (for outgoing operations):**
```javascript
rainbowSDK.im.sendMessageToJid('Hello', targetJid)
    .then((result) => {
        console.log('Message sent:', result.id);
    })
    .catch((error) => {
        console.error('Send failed:', error);
    });
```

Use promises (or async/await) when you initiate an action and want to know when it completes.

**Async/Await (cleaner promise syntax):**
```javascript
try {
    const result = await rainbowSDK.im.sendMessageToJid('Hello', targetJid);
    console.log('Message sent:', result.id);
} catch (error) {
    console.error('Send failed:', error);
}
```

Async/await is syntactic sugar over promises. Use it for cleaner, more readable code, especially when you have sequential operations.

### 3.3 Common Event Patterns

**Pattern: Command Bot**

A bot that responds to specific commands (messages starting with `!` or `/`):

```javascript
rainbowSDK.events.on('rainbow_onmessagereceived', async (message) => {
    if (message.fromJid === rainbowSDK.contacts.getConnectedUser().jid) return;

    const content = message.content.trim().toLowerCase();

    if (content === '!help') {
        await rainbowSDK.im.sendMessageToJid(
            'Available commands: !help, !status, !time',
            message.fromJid
        );
    } else if (content === '!status') {
        await rainbowSDK.im.sendMessageToJid(
            'Bot is running normally.',
            message.fromJid
        );
    } else if (content === '!time') {
        await rainbowSDK.im.sendMessageToJid(
            `Current server time: ${new Date().toISOString()}`,
            message.fromJid
        );
    }
});
```

**Pattern: Bubble (Group) Message Handler**

Handling messages in group conversations:

```javascript
rainbowSDK.events.on('rainbow_onmessagereceived', async (message) => {
    if (message.fromJid === rainbowSDK.contacts.getConnectedUser().jid) return;

    // Check if this is a group message
    if (message.type === 'groupchat') {
        console.log(`Group message in bubble from ${message.fromJid}: ${message.content}`);
        // Only respond if the bot is mentioned
        if (message.content.includes('@bot')) {
            await rainbowSDK.im.sendMessageToJid(
                'You mentioned me! How can I help?',
                message.toJid  // Reply to the bubble, not the sender
            );
        }
    }
});
```

---

## 4. Error Handling Basics

Production-quality applications must handle errors gracefully. Here are the most common error scenarios and how to deal with them.

### 4.1 Connection Failures

The SDK may fail to connect for several reasons:

- Incorrect credentials (appId, appSecret, login, or password).
- Network issues (DNS resolution failure, firewall blocking, proxy misconfiguration).
- Platform outage (rare, but possible).

```javascript
rainbowSDK.events.on('rainbow_onerror', (error) => {
    console.error('SDK error:', error);

    // Inspect the error to determine the cause
    if (error.code === 'UNAUTHORIZED') {
        console.error('Invalid credentials. Check appId, appSecret, login, and password.');
        process.exit(1); // No point retrying with bad credentials
    }

    // For network errors, the SDK will attempt automatic reconnection
    // You do not need to restart manually
});
```

### 4.2 Token Expiration

Access tokens expire after 24 hours. The SDK handles token renewal automatically using the refresh token. You do not need to write renewal code — the SDK does it for you. However, if the refresh token also expires (after 30 days of disconnection), the SDK will need to re-authenticate with the original credentials.

If you see `401 Unauthorized` errors after a long disconnection, restart the SDK:

```javascript
rainbowSDK.events.on('rainbow_onerror', async (error) => {
    if (error.code === 'TOKEN_EXPIRED') {
        console.log('Token expired. Restarting SDK...');
        await rainbowSDK.stop();
        await rainbowSDK.start();
    }
});
```

### 4.3 Rate Limits

If your bot sends messages too quickly, the server returns a 429 status. The SDK may handle basic rate limiting internally, but for high-throughput bots, implement a message queue:

```javascript
const messageQueue = [];
let isSending = false;

function enqueueMessage(jid, content) {
    messageQueue.push({ jid, content });
    processQueue();
}

async function processQueue() {
    if (isSending || messageQueue.length === 0) return;
    isSending = true;

    const { jid, content } = messageQueue.shift();
    try {
        await rainbowSDK.im.sendMessageToJid(content, jid);
    } catch (err) {
        if (err.statusCode === 429) {
            // Rate limited — put the message back and wait
            messageQueue.unshift({ jid, content });
            const retryAfter = err.headers?.['retry-after'] || 2;
            console.log(`Rate limited. Waiting ${retryAfter} seconds...`);
            await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        } else {
            console.error('Send failed:', err.message);
        }
    }

    isSending = false;
    if (messageQueue.length > 0) {
        processQueue();
    }
}
```

### 4.4 Network Disconnection and Reconnection

The SDK includes automatic reconnection. When the connection drops:

1. `rainbow_ondisconnected` fires.
2. The SDK waits briefly, then attempts to reconnect.
3. `rainbow_onreconnecting` fires with each attempt.
4. On success, `rainbow_onreconnected` fires.
5. If reconnection fails after multiple attempts, `rainbow_onerror` fires.

You can monitor these events for logging and alerting:

```javascript
let reconnectAttempts = 0;

rainbowSDK.events.on('rainbow_ondisconnected', () => {
    reconnectAttempts = 0;
    console.warn('Connection lost. SDK will attempt to reconnect...');
});

rainbowSDK.events.on('rainbow_onreconnecting', () => {
    reconnectAttempts++;
    console.log(`Reconnection attempt #${reconnectAttempts}...`);
});

rainbowSDK.events.on('rainbow_onreconnected', () => {
    console.log(`Reconnected after ${reconnectAttempts} attempts.`);
    reconnectAttempts = 0;
});
```

---

## 5. Testing and Debugging Tips

### 5.1 Enable Verbose Logging

During development, enable detailed SDK logging to see exactly what is happening:

```javascript
logs: {
    enableConsoleLogs: true,
    enableFileLogs: true,      // Write logs to a file for post-mortem analysis
    file: {
        path: './logs/',
        level: 'debug'
    },
    customLabel: "MyBot",
    color: true
}
```

The SDK logs every API call, WebSocket message, and internal state change. This is invaluable for diagnosing issues.

### 5.2 Use the Rainbow Client for Verification

Always have the Rainbow desktop or web client open alongside your development environment:

- Log into the Rainbow client with one of your test user accounts.
- Send messages from the client to your bot and verify the bot responds.
- Check the client to see messages sent by your bot.
- Observe presence changes when your bot connects and disconnects.

This gives you a real-time visual feedback loop.

### 5.3 Test with Postman in Parallel

If your bot is not behaving as expected, use Postman to make the same API call directly. This helps you determine whether the issue is in your code or in the API:

- If the Postman call succeeds but your code fails, the issue is in your code (incorrect parameters, missing headers, etc.).
- If the Postman call also fails, the issue is in the API (wrong endpoint, expired token, etc.).

### 5.4 Common Debugging Checklist

When your bot does not work, check these items in order:

1. **Are credentials correct?** Verify appId, appSecret, login, and password in your `.env` file.
2. **Is the host correct?** Make sure you are pointing to `sandbox.openrainbow.com` for development.
3. **Is the application in sandbox state?** Check on hub.openrainbow.com.
4. **Is the bot account activated?** Log into the Rainbow client with the bot's credentials to verify the account works.
5. **Are there network issues?** Can you reach `https://sandbox.openrainbow.com` from your machine? Is a proxy or firewall blocking the connection?
6. **Are you handling the ready event?** API calls before `rainbow_onready` will fail.
7. **Is the contact in the bot's roster?** You can only send messages to contacts. Use the admin portal or the API to add contacts.
8. **Check the SDK logs.** They contain detailed error messages that point to the exact issue.

### 5.5 Unit Testing Rainbow Applications

For unit testing, mock the Rainbow SDK to avoid making real API calls:

```javascript
// In your test file
const mockSDK = {
    im: {
        sendMessageToJid: jest.fn().mockResolvedValue({ id: 'msg-123' })
    },
    contacts: {
        getConnectedUser: jest.fn().mockReturnValue({ jid: 'bot@test' })
    }
};

// Test your message handler
const { handleMessage } = require('./handlers/message');
test('should echo received message', async () => {
    const message = { content: 'Hello', fromJid: 'user@test', toJid: 'bot@test' };
    await handleMessage(mockSDK, message);
    expect(mockSDK.im.sendMessageToJid).toHaveBeenCalledWith(
        'Echo: Hello',
        'user@test'
    );
});
```

Separate your business logic from the SDK initialization so it can be tested independently.

---

## Key Concepts Summary

| Concept                    | Definition                                                                     |
|----------------------------|--------------------------------------------------------------------------------|
| rainbow_onready            | Event indicating the SDK is fully connected and safe to use                    |
| sendMessageToJid           | SDK method to send an instant message to a specific user                       |
| rainbow_onmessagereceived  | Event fired when an incoming message arrives                                   |
| Event-driven model         | Programming pattern where code executes in response to events, not sequentially|
| Graceful shutdown          | Calling sdk.stop() before exiting to clean up connections and presence         |
| Message queue              | Pattern for rate-limit-safe message sending with backoff                       |
| Automatic reconnection     | SDK feature that handles temporary network disconnections without code changes |

---

## Practice Exercise

**Build an Improved Echo Bot:**

Starting from the Hello World application in this module, extend it with the following features:

1. **Command handling:** Respond to these commands:
   - `!help` — Reply with a list of available commands.
   - `!whoami` — Reply with the sender's display name and JID.
   - `!uptime` — Reply with how long the bot has been running.
   - Any other message — Echo it back with a timestamp.

2. **Bubble support:** Make the bot accept bubble invitations and respond to messages in bubbles.

3. **Error handling:** Implement the message queue pattern from Section 4.3 so the bot handles rate limits gracefully.

4. **Logging:** Write all received messages to a local log file with timestamps, sender IDs, and content.

**Deliverable:** Your `src/index.js` file and a screenshot showing the bot responding to each command in the Rainbow client.

---

## Knowledge Check

**Question 1:** When is it safe to start making API calls (sending messages, creating bubbles, etc.) after starting the SDK?

- A) Immediately after calling `rainbowSDK.start()`.
- B) After the `rainbow_onstarted` event fires.
- C) After the `rainbow_onconnected` event fires.
- D) After the `rainbow_onready` event fires.

**Answer:** D — The `rainbow_onready` event indicates that the SDK has completed authentication, synchronized the contact roster, and is fully operational. Making API calls before this event may fail or produce undefined behavior.

---

**Question 2:** Why should your message handler check `message.fromJid` against the bot's own JID?

- A) To log messages more accurately.
- B) To prevent an infinite loop where the bot responds to its own messages endlessly.
- C) To improve message delivery speed.
- D) The SDK requires it.

**Answer:** B — The `rainbow_onmessagereceived` event fires for all messages in a conversation, including those sent by the bot itself. Without the JID check, the bot would reply to its own replies, creating an infinite loop.

---

**Question 3:** What happens if you kill the bot process without calling `rainbowSDK.stop()` first?

- A) Nothing — the bot disconnects immediately.
- B) The bot may appear online in other users' contact lists for several minutes until the server detects the dead connection.
- C) The bot's account is permanently locked.
- D) All sent messages are deleted.

**Answer:** B — Without a clean disconnect, the server does not know the bot is offline. It relies on connection timeout detection (heartbeat failure), which can take several minutes. During this time, the bot appears online and users may send it messages that go undelivered.

---

**Question 4:** Your bot receives HTTP 429 (Too Many Requests) when sending messages. What is the correct response?

- A) Send the messages faster to clear the queue.
- B) Read the Retry-After header, wait the specified time, then retry. Implement a message queue with exponential backoff.
- C) Restart the SDK.
- D) Create a new application on hub.openrainbow.com.

**Answer:** B — HTTP 429 means rate limits have been exceeded. The correct approach is to respect the Retry-After header and implement a message queue that spaces out outgoing messages to stay within limits.

---

**Question 5:** Which method would you use to send a message to a group conversation (bubble)?

- A) `rainbowSDK.im.sendMessageToJid(text, senderJid)` using the sender's JID.
- B) `rainbowSDK.im.sendMessageToJid(text, bubbleJid)` using the bubble's JID, or `rainbowSDK.im.sendMessageToConversation(conversation, text)` using a bubble conversation object.
- C) `rainbowSDK.bubbles.sendMessage(bubbleId, text)`.
- D) Group messaging is not supported by the SDK.

**Answer:** B — You can send to a bubble using either `sendMessageToJid` with the bubble's JID or `sendMessageToConversation` with a conversation object opened for the bubble. Both approaches deliver the message to all bubble members.
