# DEV-101: Rainbow CPaaS: Platform & Architecture

| Field            | Value                                                        |
|------------------|--------------------------------------------------------------|
| **Module ID**    | DEV-101                                                      |
| **Title**        | Rainbow CPaaS: Platform & Architecture                       |
| **Track**        | Developer L1 — Foundation                                    |
| **Duration**     | 30 minutes                                                   |
| **Content Types**| Reading, Architecture Diagrams, Knowledge Check              |
| **Prerequisites**| None                                                         |

## Learning Objectives

After completing this module you will be able to:

1. Define what Rainbow CPaaS is and how it relates to the Rainbow UCaaS platform.
2. Describe the end-to-end architecture from REST API call to media delivery.
3. Identify all available development interfaces (APIs, SDKs, CLI, Webhooks) and choose the right one for a given use case.
4. Explain the authentication model including application registration, app tokens, and user tokens.
5. Define the core Rainbow data model: Contacts, Bubbles, Channels, Presence, Telephony, and Conferences.
6. Understand rate limits and fair usage policies to design applications that behave correctly under load.

---

## 1. What Is Rainbow CPaaS?

![video: Rainbow CPaaS — Developer Quick Start](rainbow-cpaas-quickstart)

### 1.1 CPaaS Defined

CPaaS stands for Communication Platform as a Service. It is a cloud-based platform that allows developers to add real-time communication features — voice, video, messaging, presence — into their own applications using APIs and SDKs, without building the underlying communication infrastructure from scratch.

Rainbow CPaaS is the developer layer of the Alcatel-Lucent Enterprise Rainbow platform. While Rainbow UCaaS provides a ready-made collaboration application (the Rainbow desktop, web, and mobile clients), Rainbow CPaaS exposes the same communication capabilities as programmable interfaces that developers can integrate into custom applications.

### 1.2 The Relationship Between UCaaS and CPaaS

Think of Rainbow as having two faces:

- **UCaaS face:** The Rainbow application — a finished product that end users interact with directly for messaging, calls, and meetings. This is what most users see.
- **CPaaS face:** The Rainbow API and SDK layer — a set of building blocks that developers use to embed communication into other applications. This is what developers build with.

Both faces share the same backend infrastructure. A message sent through the Rainbow desktop client is delivered by the same system that handles a message sent through the REST API.

> **Key Concept:** UCaaS and CPaaS share the same backend. This means any application you build with the API can interoperate seamlessly with native Rainbow client users — your bot appears as a regular contact, your custom app can join existing Bubbles, and messages flow through the same pipeline. A call initiated by the SDK uses the same WebRTC media servers as a call made from the mobile app. This means:

- Applications built on the CPaaS layer can interoperate seamlessly with native Rainbow users.
- A bot you build with the Node.js SDK appears as a regular contact in the Rainbow directory.
- A custom web application using the Web SDK can participate in the same bubbles (group conversations) as desktop client users.

### 1.3 What You Can Build

The CPaaS layer enables a wide range of applications:

- **Chatbots** that answer questions, route inquiries, and automate workflows.
- **CRM integrations** that embed click-to-call and screen pop into Salesforce, ServiceNow, or custom CRMs.
- **IoT dashboards** that display alerts from connected devices and allow operators to respond via messaging or voice.
- **Custom collaboration apps** for vertical markets (healthcare patient communication, education virtual classrooms, hospitality guest services).
- **Workflow automation** that triggers communication events based on business rules (send an alert when a server goes down, escalate a ticket when SLA is breached).
- **Contact center solutions** with intelligent routing, queuing, and agent management.

---

## 2. Architecture Overview

Understanding the Rainbow architecture helps you make sound design decisions when building applications. Here is the end-to-end flow from an API call to media delivery.

### 2.1 High-Level Architecture

The Rainbow platform consists of four major layers:

![diagram: Rainbow CPaaS End-to-End Architecture](rainbow-cpaas-architecture)

```
+-----------------------------------------------------------+
|                    Client / Application Layer              |
|  (Web App, Mobile App, Bot, IoT Device, Custom Client)    |
+-----------------------------------------------------------+
        |                    |                    |
        v                    v                    v
+-----------------------------------------------------------+
|                      API Gateway Layer                     |
|  REST API (HTTPS)  |  WebSocket (XMPP/JSON)  |  Webhooks  |
+-----------------------------------------------------------+
        |                    |                    |
        v                    v                    v
+-----------------------------------------------------------+
|                   Rainbow Backend Services                 |
|  User Mgmt | Messaging | Presence | Telephony | Conference|
|  File Store | Directory | Channels | Admin     | Analytics |
+-----------------------------------------------------------+
        |                    |
        v                    v
+-------------------+  +-------------------+
| WebRTC Media      |  | PBX Integration   |
| Servers           |  | (SIP/CTI Gateway) |
| (SRTP/TURN/ICE)   |  |                   |
+-------------------+  +-------------------+
```

### 2.2 Layer-by-Layer Explanation

**Client / Application Layer:**
This is your code. It could be a web application running in a browser (using the Web SDK), a Node.js service running on a server (using the Node.js SDK), a mobile app (using the iOS or Android SDK), or any application that speaks HTTPS (using the REST API directly).

**API Gateway Layer:**
All communication between your application and the Rainbow backend passes through the API gateway. There are three primary protocols:

- **REST API (HTTPS):** Request-response interactions. You send an HTTP request (GET, POST, PUT, DELETE) and receive a JSON response. Used for operations like creating a bubble, fetching contacts, or sending a message.
- **WebSocket (XMPP over WebSocket or JSON):** Persistent bidirectional connection. Used for real-time event delivery — incoming messages, presence changes, call notifications. The SDKs manage the WebSocket connection automatically.
- **Webhooks:** Server-to-server HTTP callbacks. Rainbow sends an HTTP POST to your server when events occur. Used for server-side integrations that do not maintain a persistent connection.

**Rainbow Backend Services:**
The core platform services process all business logic. Each service handles a specific domain:

- **User Management:** Authentication, user profiles, company administration.
- **Messaging:** Instant message routing, delivery, storage, and history.
- **Presence:** User availability tracking and distribution.
- **Telephony:** PBX call control, PSTN connectivity, call routing.
- **Conference:** Multi-party audio/video meeting management.
- **File Store:** File upload, download, and sharing.
- **Directory:** Contact search and organizational structure.
- **Channels:** Broadcast communication (one-to-many).
- **Admin:** Company and user administration APIs.
- **Analytics:** Usage metrics and reporting.

**WebRTC Media Servers:**
Real-time audio and video streams flow through dedicated media servers. These servers handle:

- **ICE (Interactive Connectivity Establishment):** Finding the best network path between endpoints.
- **STUN (Session Traversal Utilities for NAT):** Discovering the public IP address of endpoints behind NAT.
- **TURN (Traversal Using Relays around NAT):** Relaying media when direct peer-to-peer connection is impossible.
- **SRTP (Secure Real-time Transport Protocol):** Encrypting audio and video streams in transit.

**PBX Integration Layer:**
For telephony features, Rainbow connects to enterprise PBX systems (Alcatel-Lucent OmniPCX Enterprise, OXO Connect, and third-party systems via SIP) through a gateway. This allows API-driven call control: your application can make a call, transfer it, put it on hold, or set up a conference — all through API calls that the PBX executes.

### 2.3 Data Flow Example: Sending a Message

Here is what happens when your application sends an instant message:

1. Your application calls `POST /api/rainbow/enduser/v1.0/conversations/{conversationId}/messages` with the message text in the request body.
2. The API gateway authenticates the request using the bearer token in the Authorization header.
3. The messaging service routes the message to the recipient.
4. If the recipient is online (connected via WebSocket), the message is pushed to their client in real time.
5. If the recipient is offline, the message is stored and delivered when they reconnect. A push notification is sent to their mobile device.
6. The message is persisted in the message store for history retrieval.
7. Your application receives a `201 Created` response with the message ID.

### 2.4 Data Flow Example: Making a Phone Call

1. Your application calls `POST /api/rainbow/telephony/v1.0/calls` with the callee's number or Rainbow user ID.
2. The API gateway authenticates and forwards to the telephony service.
3. The telephony service sends a call control command to the PBX via the CTI/SIP gateway.
4. The PBX initiates the call (rings the callee's desk phone or softphone).
5. When the callee answers, a WebRTC media session is established between the endpoints.
6. Your application receives call state events via WebSocket (ringing, answered, ended).

---

## 3. Available Development Interfaces

Rainbow provides multiple interfaces for developers. Choose the one that best fits your use case and technology stack.

### 3.1 REST API

The Rainbow REST API exposes over 300 endpoints organized into service categories. It is the most flexible interface — any programming language or tool that can make HTTP requests can use it.

**Base URL:** `https://openrainbow.com/api/rainbow`

**Key endpoint categories:**

| Category         | Base Path                        | Example Operations                        |
|------------------|----------------------------------|-------------------------------------------|
| Authentication   | `/authentication/v1.0`           | Login, logout, token renewal              |
| Users            | `/enduser/v1.0/users`            | Get profile, update settings              |
| Conversations    | `/enduser/v1.0/conversations`    | List conversations, send messages         |
| Bubbles          | `/enduser/v1.0/rooms`            | Create, invite, manage group spaces       |
| Channels         | `/channels/v1.0`                 | Create channels, publish items            |
| Contacts         | `/enduser/v1.0/users/networks`   | Add contacts, manage roster               |
| Presence         | `/enduser/v1.0/users/{id}/presences` | Get/set presence                      |
| Telephony        | `/telephony/v1.0`               | Make calls, transfer, hold, conference    |
| Conferences      | `/conferences/v1.0`             | Schedule, start, manage meetings          |
| Files             | `/filestorage/v1.0`            | Upload, download, share files             |
| Admin            | `/admin/v1.0`                    | Company management, user provisioning     |

### 3.2 Web SDK (JavaScript)

The Web SDK is a JavaScript library designed for browser-based applications. It wraps the REST API and WebSocket layer into a high-level, event-driven API.

**Installation:** `<script>` tag or npm module.
**Best for:** Single-page web applications, embedded communication widgets, browser-based collaboration tools.
**Features:** Full messaging, presence, audio/video calling (WebRTC), screen sharing, bubble management, file sharing.

### 3.3 Node.js SDK

The Node.js SDK is designed for server-side applications. It is the most popular SDK for building bots, automation scripts, and backend integrations.

**Installation:** `npm install rainbow-node-sdk`
**Best for:** Chatbots, server-side automation, webhook processors, backend integrations with CRM/ERP systems.
**Features:** Messaging, presence, bubble management, contact management, telephony control, file sharing. Does not include WebRTC media (server-side applications typically do not process audio/video directly).

### 3.4 C# SDK (.NET)

The C# SDK targets Windows desktop applications and .NET backend services.

**Installation:** NuGet package.
**Best for:** Windows desktop integrations, .NET web services, enterprise applications running on Windows Server.

### 3.5 iOS SDK (Swift / Objective-C)

The iOS SDK provides native iOS development capabilities.

**Installation:** CocoaPods or Swift Package Manager.
**Best for:** Custom iOS communication apps, healthcare patient apps, hospitality guest apps.
**Features:** Full messaging, presence, WebRTC audio/video, push notifications (APNs), CallKit integration.

### 3.6 Android SDK (Java / Kotlin)

The Android SDK provides native Android development capabilities.

**Installation:** Gradle dependency.
**Best for:** Custom Android communication apps, field worker tools, IoT device interfaces.
**Features:** Full messaging, presence, WebRTC audio/video, Firebase push notifications, Connection Service integration.

### 3.7 S2S API (Server-to-Server)

The S2S API is a specialized REST interface designed for server-side applications that need to act on behalf of multiple users or operate as bots without maintaining a persistent WebSocket connection.

**Best for:** High-scale backend integrations, multi-tenant applications, scenarios where webhook-based event delivery is preferred over WebSocket.
**Key difference from standard REST API:** Uses webhook callbacks for event delivery instead of WebSocket. This is more scalable for server applications that manage many Rainbow identities.

### 3.8 Webhooks

Webhooks allow Rainbow to push events to your server. You register a callback URL, and Rainbow sends HTTP POST requests to that URL when specified events occur (new message, presence change, call event, etc.).

**Best for:** Lightweight integrations that need to react to events without maintaining a persistent connection. Often used with the S2S API.

### 3.9 Rainbow CLI

The Rainbow CLI is a command-line tool for administrative tasks and scripting.

**Installation:** `npm install -g rainbow-cli`
**Best for:** Automated user provisioning, bulk operations, DevOps scripting, testing and debugging.
**Features:** User and company management, application management, configuration scripting.

---

## 4. Authentication Model

Every application that interacts with Rainbow must authenticate. The authentication model has two layers: application identity and user identity.

### 4.1 Application Registration

Before writing any code, you must register your application on the Rainbow developer portal at **hub.openrainbow.com**. Registration produces two credentials:

- **Application ID (appId):** A unique identifier for your application. This is not secret and can be included in client-side code.
- **Application Secret (appSecret):** A secret key used to authenticate your application. This MUST be kept confidential and stored securely on the server side. Never embed the appSecret in client-side JavaScript or mobile application code.

> **Warning:** Exposing your appSecret in client-side code (browser JavaScript, mobile app bundles) is a critical security vulnerability. Attackers can extract the secret and impersonate your application. Always keep the appSecret on your backend server and proxy API calls through it.

### 4.2 User Token vs. Application Token

Rainbow supports two authentication flows depending on your application type:

**User Token (interactive applications):**
Used when your application acts on behalf of a specific user. The user provides their Rainbow credentials (email and password), and the application exchanges them for an access token. The token represents the user's identity and permissions.

Flow:
1. Application sends `POST /authentication/v1.0/login` with the user's credentials and the appId/appSecret.
2. Rainbow returns an access token (JWT) and a refresh token.
3. The application includes the access token in the `Authorization: Bearer <token>` header of every subsequent API call.
4. When the access token expires, the application uses the refresh token to obtain a new one.

**Application Token (bot / server-to-server):**
Used when your application operates as its own entity (a bot) rather than on behalf of a human user. The bot has its own Rainbow account (email/password created during setup).

The flow is identical to the user token flow, but the credentials belong to the bot account rather than a human user. The bot appears as a contact in the Rainbow directory with its own presence, avatar, and display name.

### 4.3 OAuth 2.0 Flow

For third-party applications that need to access Rainbow on behalf of users without handling their passwords directly, Rainbow supports OAuth 2.0 authorization code flow:

1. Your application redirects the user to Rainbow's authorization endpoint.
2. The user logs in and grants permission to your application.
3. Rainbow redirects back to your application with an authorization code.
4. Your application exchanges the authorization code for access and refresh tokens using the appId and appSecret.
5. Your application uses the access token for API calls.

This is the recommended flow for web applications where users log in interactively. It ensures your application never sees the user's Rainbow password.

### 4.4 Token Lifecycle

| Token Type      | Lifetime        | Renewal Method                        |
|-----------------|-----------------|---------------------------------------|
| Access Token    | 24 hours        | Use refresh token to obtain a new one |
| Refresh Token   | 30 days         | Re-authenticate with credentials      |

Your application must handle token expiration gracefully. When an API call returns `401 Unauthorized`, attempt to refresh the access token. If the refresh token has also expired, the user must re-authenticate.

> **Tip:** Implement a token refresh interceptor in your HTTP client. Check token expiry before each request and refresh proactively — this avoids failed API calls and provides a smoother user experience than waiting for a 401 response.

---

## 5. Core Data Model

Understanding the Rainbow data model is essential for building applications. These are the fundamental entities you will work with.

### 5.1 Contacts

A Contact is a Rainbow user that has been added to your roster (contact list). You can search the Rainbow directory for users and add them as contacts. Once added, you can see their presence, send them messages, and initiate calls.

Key properties: `id`, `loginEmail`, `displayName`, `firstName`, `lastName`, `companyId`, `companyName`, `presence`.

### 5.2 Bubbles (Groups)

A Bubble is a persistent group space where multiple users can communicate. Bubbles support instant messaging, file sharing, and audio/video conferencing. They are the equivalent of group chats or team channels in other platforms.

Key properties: `id`, `name`, `topic`, `creator`, `members` (array with roles: owner, moderator, member, guest), `isActive`, `conference` (associated conference room).

Bubbles are central to many application designs. A bot can be invited to a bubble to monitor conversations, respond to commands, or relay information from external systems.

### 5.3 Channels

A Channel is a one-to-many broadcast mechanism. Unlike bubbles (which are conversational), channels are publishing-oriented. An owner publishes items (text, images, links) and subscribers receive them. Subscribers cannot reply within the channel — they can only react (like) or share.

Key properties: `id`, `name`, `topic`, `subscribers_count`, `items` (published content).

Use channels for announcements, news feeds, status dashboards, and alert broadcasting.

### 5.4 Presence

Presence indicates a user's current availability. Rainbow tracks presence automatically based on user activity and allows users (and applications) to set it manually.

Standard presence states:

| State            | Meaning                                         |
|------------------|--------------------------------------------------|
| `online`         | User is active and available                     |
| `away`           | User is idle (no activity for a configurable period) |
| `dnd`            | Do Not Disturb — notifications are suppressed    |
| `busy`           | User is in a call or meeting                     |
| `offline`        | User is not connected                            |

Applications can subscribe to presence changes for contacts and receive real-time notifications when a contact's presence changes.

### 5.5 Telephony

The Telephony entity represents phone call state and control. Through the API, you can:

- Initiate a call to a phone number or Rainbow user.
- Answer an incoming call.
- Put a call on hold and retrieve it.
- Transfer a call (blind or attended).
- Set up a conference by merging calls.
- Retrieve call logs and history.

Telephony requires the user to have a Business or Enterprise subscription tier and a PBX line associated with their Rainbow account.

### 5.6 Conferences

A Conference is a multi-party audio/video meeting. Conferences can be scheduled in advance or started on demand. They support features like mute/unmute, video on/off, screen sharing, recording, and participant management.

Key properties: `id`, `scheduledDate`, `participants`, `active`, `locked`, `recording`.

---

## 6. Rate Limits and Fair Usage

Rainbow enforces rate limits to ensure platform stability and fair access for all users.

### 6.1 Rate Limit Structure

| Endpoint Category     | Rate Limit                    | Window    |
|-----------------------|-------------------------------|-----------|
| Authentication        | 10 requests                   | Per minute|
| Messaging (send)      | 20 messages                   | Per second|
| REST API (general)    | 600 requests                  | Per minute|
| File upload           | 10 uploads                    | Per minute|
| Search / directory    | 30 requests                   | Per minute|

When you exceed a rate limit, Rainbow returns `429 Too Many Requests` with a `Retry-After` header indicating how many seconds to wait before retrying.

### 6.2 Handling Rate Limits in Code

Your application should:

1. Implement exponential backoff: on receiving a 429, wait the specified time, then retry. If still throttled, double the wait time.
2. Queue outgoing messages rather than sending them in tight loops.
3. Use bulk APIs where available (e.g., batch user provisioning) rather than making individual calls for each item.
4. Cache frequently accessed data (user profiles, contact lists) rather than fetching them repeatedly.

### 6.3 Fair Usage Policy

Beyond per-endpoint rate limits, Rainbow has a fair usage policy that applies to:

- Total storage per company (file uploads).
- Maximum number of bubbles per user.
- Maximum bubble membership (participants per bubble).
- Conference duration and participant limits based on subscription tier.

Exceeding fair usage thresholds may result in throttling or account review. Always check the current fair usage policy documentation on the developer portal.

> **Info:** The sandbox environment at hub.openrainbow.com has lower rate limits than production. If you hit rate limits during development, it may be the sandbox ceiling — not a bug in your code. Check the sandbox-specific limits in the developer portal documentation.

---

## Key Concepts Summary

| Concept                | Definition                                                                  |
|------------------------|-----------------------------------------------------------------------------|
| CPaaS                  | Communication Platform as a Service — programmable APIs over UCaaS          |
| REST API               | HTTPS request-response interface with 300+ endpoints                        |
| WebSocket              | Persistent bidirectional connection for real-time events                     |
| Webhook                | Server-to-server HTTP callback for event delivery                           |
| appId / appSecret      | Application credentials obtained by registering on hub.openrainbow.com      |
| Access Token           | JWT token (24-hour lifetime) used to authenticate API calls                 |
| Refresh Token          | Long-lived token (30 days) used to obtain new access tokens                 |
| Bubble                 | Persistent group space for multi-user communication                         |
| Channel                | One-to-many broadcast mechanism for publishing content                      |
| Presence               | Real-time user availability indicator (online, away, busy, dnd, offline)    |
| Rate Limit (429)       | Server response when request frequency exceeds allowed threshold            |

---

## Practice Exercise

**Scenario:** You are designing a customer support chatbot for an e-commerce company. The bot should:

- Greet customers who message it.
- Answer frequently asked questions about order status by querying the company's order management system.
- Escalate to a human agent (transfer the conversation to a support bubble) when it cannot answer.
- Log all conversations to an external analytics system.

**Task:**

1. Which Rainbow SDK or API would you choose for this bot? Justify your choice.
2. Which authentication model (user token or application token) would you use? Why?
3. Which Rainbow data model entities (contacts, bubbles, channels, etc.) would the bot interact with?
4. Sketch the data flow for a customer sending a message to the bot and the bot querying the order management system before replying.
5. How would you handle rate limits if the bot becomes popular and receives hundreds of messages per minute?

---

## Knowledge Check

**Question 1:** What is the relationship between Rainbow UCaaS and Rainbow CPaaS?

- A) They are completely separate products with no interoperability.
- B) CPaaS is the developer API layer built on top of the same backend as the UCaaS application, allowing custom applications to interoperate with native Rainbow users.
- C) UCaaS is an older product that has been replaced by CPaaS.
- D) CPaaS is only available in the on-premises Rainbow Edge deployment.

**Answer:** B — CPaaS and UCaaS share the same backend infrastructure. Applications built with the CPaaS APIs can seamlessly communicate with users of the native Rainbow clients.

---

**Question 2:** Your application needs to receive real-time notifications when a contact comes online. Which interface should you use?

- A) REST API polling every 5 seconds.
- B) WebSocket connection with presence event subscription.
- C) Webhooks.
- D) Rainbow CLI.

**Answer:** B — WebSocket provides real-time event delivery for presence changes. Polling the REST API would be inefficient and would not provide true real-time updates. Webhooks could also work for server-side applications, but WebSocket is the standard approach for real-time client applications.

---

**Question 3:** Where do you register your application to obtain the appId and appSecret?

- A) The Rainbow desktop client settings.
- B) hub.openrainbow.com (the Rainbow developer portal).
- C) The Apple App Store.
- D) The ALE Partner Portal.

**Answer:** B — All applications must be registered on hub.openrainbow.com. This is the developer portal where you create applications, manage credentials, and access documentation.

---

**Question 4:** Your API call returns HTTP 429. What should your application do?

- A) Retry immediately in a tight loop.
- B) Read the Retry-After header, wait the specified time, then retry with exponential backoff.
- C) Stop the application and report an error to the user.
- D) Switch to a different API endpoint.

**Answer:** B — HTTP 429 means you have exceeded the rate limit. The correct behavior is to respect the Retry-After header, wait, and then retry. Retrying immediately will result in continued 429 responses.

---

**Question 5:** What is a Bubble in the Rainbow data model?

- A) A one-to-many broadcast channel.
- B) A persistent group space where multiple users can communicate with messaging, file sharing, and conferencing.
- C) A single phone call between two users.
- D) A file storage folder.

**Answer:** B — A Bubble is Rainbow's term for a persistent group communication space. It supports instant messaging, file sharing, and audio/video conferencing among its members.
