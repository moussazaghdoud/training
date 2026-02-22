# DEV-102: Developer Environment Setup

| Field            | Value                                                        |
|------------------|--------------------------------------------------------------|
| **Module ID**    | DEV-102                                                      |
| **Title**        | Developer Environment Setup                                  |
| **Track**        | Developer L1 — Foundation                                    |
| **Duration**     | 30 minutes                                                   |
| **Content Types**| Reading, Hands-On Walkthrough, Knowledge Check               |
| **Prerequisites**| DEV-101: Rainbow CPaaS: Platform & Architecture              |

## Learning Objectives

After completing this module you will be able to:

1. Register a developer account on the Rainbow developer portal (hub.openrainbow.com).
2. Create a Rainbow application and obtain the appId and appSecret credentials.
3. Configure the sandbox environment for safe development and testing.
4. Install the Rainbow Node.js SDK and Web SDK in a local development project.
5. Set up a complete local development environment with the necessary tools.
6. Navigate the developer portal to find API documentation, SDK references, and application management features.
7. Understand the differences between the sandbox and production environments.

---

## 1. Step 1: Register on hub.openrainbow.com

The Rainbow developer portal is your starting point for all development work. You must have a registered account before you can create applications, access APIs, or use the sandbox environment.

### 1.1 Creating Your Account

1. Open your browser and navigate to **https://hub.openrainbow.com**.
2. Click the **Sign Up** or **Create Account** button on the landing page.
3. Fill in the registration form:
   - **Email address:** Use a valid email you have access to. This will become your Rainbow login and the identity for your developer account.
   - **Password:** Choose a strong password (minimum 8 characters, including uppercase, lowercase, number, and special character).
   - **First name and Last name:** Your real name. This will appear in the Rainbow directory.
   - **Company name:** Your organization's name. If you are an independent developer, you can use your own name or a project name.
   - **Country:** Select your country. This affects data residency and regional settings.
4. Accept the Terms of Service and Developer Agreement.
5. Click **Register**.
6. Check your email for a verification message. Click the verification link to activate your account.

### 1.2 First Login

After verifying your email:

1. Return to **https://hub.openrainbow.com** and log in with your email and password.
2. You will land on the developer dashboard. This is your home base for managing applications, accessing documentation, and monitoring API usage.
3. Take note of the navigation menu. Key sections include:
   - **My Applications:** Where you create and manage your Rainbow applications.
   - **API Documentation:** Interactive reference for all REST API endpoints.
   - **SDK Documentation:** Guides and references for each SDK.
   - **Sandbox:** Information about the sandbox testing environment.
   - **Support:** Developer forums, FAQ, and support ticket system.

### 1.3 Developer Account vs. End-User Account

Your hub.openrainbow.com account is a full Rainbow user account. This means:

- You can log into the Rainbow desktop, web, or mobile client with the same credentials.
- Other Rainbow users can find you in the directory, send you messages, and call you.
- Your developer account starts on the Essential (free) tier.
- Bot accounts you create later will be separate user accounts with their own credentials.

---

## 2. Step 2: Create a Rainbow Application

Every piece of code that interacts with the Rainbow API must be associated with a registered application. The application registration gives you the credentials (appId and appSecret) that authenticate your code with the platform.

### 2.1 Creating the Application

1. From the developer dashboard, navigate to **My Applications**.
2. Click **Create Application** (or the "+" button).
3. Fill in the application details:

   - **Application Name:** A descriptive name for your application (e.g., "My Support Bot" or "CRM Integration Prototype"). This name is visible in the admin portal and may be shown to users when your app requests permissions.
   - **Platform:** Select the platform type that best describes your application:
     - **Web** — Browser-based application using the Web SDK.
     - **Server** — Backend service using the Node.js SDK, C# SDK, or REST API directly.
     - **Mobile** — iOS or Android native application.
     - **Desktop** — Windows or macOS desktop application.
     - **Bot** — Automated agent that operates as its own Rainbow user.
   - **Description:** A brief description of what your application does. This is for your own reference.

4. Click **Create**.

### 2.2 Retrieving Your Credentials

After creation, the portal displays your application's credentials:

- **Application ID (appId):** A string like `a]2b3c4d5e6f7a8b9c0d1e2f3`. Copy this value. You will use it in your code to identify your application.
- **Application Secret (appSecret):** A string like `x9y8z7w6v5u4t3s2r1q0p9o8n7m6l5k4`. Copy this value **immediately** and store it securely. The portal may not show it again after you navigate away.

**Security warning:** The appSecret is a credential equivalent to a password. Do not:
- Commit it to a public Git repository.
- Embed it in client-side JavaScript that runs in the browser.
- Share it in emails, chat messages, or documentation.
- Hard-code it in your source files.

Instead, store it in:
- Environment variables on your server.
- A secrets manager (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault).
- A `.env` file that is listed in your `.gitignore`.

### 2.3 Application States

Your application goes through several states:

| State        | Description                                                  |
|--------------|--------------------------------------------------------------|
| **sandbox**  | Default state after creation. Can only connect to the sandbox environment. Limited to 100 users. |
| **in_review**| You have requested production deployment. ALE is reviewing your application. |
| **deployed** | Approved for production. Can connect to the production Rainbow platform. No user limit. |

New applications start in the **sandbox** state. This is intentional — it gives you a safe environment to develop and test without affecting production users.

---

## 3. Step 3: Configure the Sandbox Environment

The sandbox is an isolated Rainbow environment specifically for developers. It mirrors the production environment's API surface but operates on a separate infrastructure.

### 3.1 What Is the Sandbox?

The sandbox is a fully functional Rainbow environment where:

- Your application can authenticate, send messages, create bubbles, and make API calls — just like in production.
- Up to 100 user accounts can be created for testing.
- No impact on production Rainbow users or data.
- All sandbox data is periodically cleaned (typically every 30 days). Do not store anything permanent in the sandbox.
- The sandbox URL is **sandbox.openrainbow.com** (as opposed to **openrainbow.com** for production).

### 3.2 Sandbox vs. Production Endpoints

| Service                | Sandbox URL                           | Production URL                       |
|------------------------|---------------------------------------|--------------------------------------|
| REST API               | `https://sandbox.openrainbow.com`     | `https://openrainbow.com`            |
| WebSocket              | `wss://sandbox.openrainbow.com`       | `wss://openrainbow.com`              |
| Developer Portal       | `https://hub.openrainbow.com`         | `https://hub.openrainbow.com`        |

When initializing your SDK or making direct API calls, you must specify the sandbox hostname during development and switch to the production hostname when you deploy.

### 3.3 Creating Test Users

To test your application, you need at least two Rainbow accounts: one for your application (or bot) and one to simulate a human user.

1. In the developer portal, navigate to the sandbox section.
2. Create test user accounts with unique email addresses. You can use email aliases (e.g., `yourname+test1@gmail.com`) or disposable email addresses.
3. Each test user can log into the Rainbow client (desktop, web, or mobile) pointed at the sandbox environment.

**Tip:** Create at least three test accounts:
- One for your application/bot.
- One to simulate a regular user.
- One to simulate an administrator (if your application has admin features).

### 3.4 Sandbox Limitations

| Limitation                     | Sandbox                | Production              |
|--------------------------------|------------------------|-------------------------|
| Maximum users                  | 100                    | Unlimited (per license) |
| Data retention                 | Periodic cleanup       | Persistent              |
| PSTN telephony                 | Not available          | Available               |
| PBX integration                | Simulated              | Full integration        |
| Performance / load testing     | Not suitable           | Full capacity           |
| SLA                            | Best effort            | Guaranteed (per contract)|

The sandbox is for functional testing only. Do not use it for performance testing, load testing, or demonstrations to customers. For customer demos, use a production trial account.

---

## 4. Step 4: Install the SDK

Now that you have credentials and a sandbox environment, it is time to install the SDK. This section covers the two most commonly used SDKs: Node.js (for server-side applications and bots) and Web SDK (for browser applications).

### 4.1 Node.js SDK Installation

**Prerequisites:**
- Node.js version 18 LTS or later installed on your machine. Verify with `node --version`.
- npm (Node Package Manager) installed. Verify with `npm --version`.

**Installation steps:**

1. Create a new project directory:
   ```bash
   mkdir my-rainbow-bot
   cd my-rainbow-bot
   ```

2. Initialize a Node.js project:
   ```bash
   npm init -y
   ```

3. Install the Rainbow Node.js SDK:
   ```bash
   npm install rainbow-node-sdk
   ```

4. Verify the installation:
   ```bash
   node -e "const RainbowSDK = require('rainbow-node-sdk'); console.log('SDK loaded successfully');"
   ```

5. Create a `.env` file for your credentials (and add `.env` to your `.gitignore`):
   ```
   RAINBOW_APP_ID=your_app_id_here
   RAINBOW_APP_SECRET=your_app_secret_here
   RAINBOW_LOGIN=your_bot_email@example.com
   RAINBOW_PASSWORD=your_bot_password
   RAINBOW_HOST=sandbox.openrainbow.com
   ```

6. Install the `dotenv` package to load environment variables:
   ```bash
   npm install dotenv
   ```

### 4.2 Web SDK Installation

The Web SDK can be included in a web project via npm or a script tag.

**Option A: npm installation (recommended for modern web projects)**

```bash
npm install rainbow-web-sdk
```

Then import in your JavaScript:
```javascript
import { RainbowSDK } from 'rainbow-web-sdk';
```

**Option B: Script tag (for simple HTML pages)**

```html
<script src="https://sdk.openrainbow.com/web/rainbow-sdk.min.js"></script>
```

The SDK will be available as a global `rainbowSDK` object.

### 4.3 Verifying Your Setup

Create a minimal test script to verify that your SDK installation and credentials work.

**Node.js verification script (`test-connection.js`):**

```javascript
require('dotenv').config();
const RainbowSDK = require('rainbow-node-sdk');

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
        enableFileLogs: false
    }
};

const sdk = new RainbowSDK(options);

sdk.events.on('rainbow_onready', () => {
    console.log('Connected to Rainbow successfully!');
    console.log('Logged in as:', sdk.contacts.getConnectedUser().displayName);
    // Disconnect after verification
    sdk.stop().then(() => {
        console.log('Disconnected. Setup verified.');
        process.exit(0);
    });
});

sdk.events.on('rainbow_onerror', (err) => {
    console.error('Connection failed:', err);
    process.exit(1);
});

sdk.start();
```

Run it with:
```bash
node test-connection.js
```

If you see "Connected to Rainbow successfully!" followed by your bot's display name, your environment is correctly configured.

---

## 5. Step 5: Set Up the Local Development Environment

A productive development environment includes more than just the SDK. Here are the recommended tools and configurations.

### 5.1 Required Software

| Tool                   | Purpose                                    | Recommended Version     |
|------------------------|--------------------------------------------|-------------------------|
| Node.js                | JavaScript runtime for Node.js SDK         | 18 LTS or 20 LTS       |
| npm or yarn            | Package manager                            | npm 9+ or yarn 1.22+   |
| Code editor            | Writing and debugging code                 | VS Code (recommended)  |
| Git                    | Version control                            | Latest stable           |
| REST client            | Testing API calls manually                 | Postman or Insomnia     |

### 5.2 VS Code Extensions for Rainbow Development

If you use Visual Studio Code, these extensions improve the development experience:

- **REST Client** (by Huachao Mao): Send HTTP requests directly from VS Code. Useful for testing Rainbow REST API endpoints without leaving the editor.
- **ESLint**: JavaScript linting to catch errors early.
- **Prettier**: Code formatting for consistent style.
- **DotENV**: Syntax highlighting for `.env` files.
- **Thunder Client**: Lightweight REST client built into VS Code.

### 5.3 Postman Collection for Rainbow API

ALE provides a Postman collection with pre-configured requests for the most common Rainbow API endpoints. To use it:

1. Download the Rainbow API Postman collection from the developer portal documentation section.
2. Import it into Postman (File > Import).
3. Create a Postman environment with the following variables:
   - `host`: `sandbox.openrainbow.com`
   - `appId`: Your application ID.
   - `appSecret`: Your application secret.
   - `login`: Your test user's email.
   - `password`: Your test user's password.
   - `token`: Leave empty — this will be populated by the login request.
4. Run the "Login" request first. It will automatically store the access token in the `token` variable.
5. All subsequent requests in the collection use `{{token}}` in the Authorization header.

This is the fastest way to explore the Rainbow API without writing any code.

### 5.4 Project Structure Recommendation

For a Node.js bot or integration project, use this structure:

```
my-rainbow-project/
  ├── .env                  # Credentials (in .gitignore)
  ├── .gitignore            # Exclude .env, node_modules
  ├── package.json          # Project metadata and dependencies
  ├── src/
  │   ├── index.js          # Application entry point
  │   ├── config.js         # Configuration loader (reads .env)
  │   ├── handlers/
  │   │   ├── message.js    # Message event handlers
  │   │   ├── presence.js   # Presence event handlers
  │   │   └── call.js       # Telephony event handlers
  │   └── services/
  │       ├── rainbow.js    # Rainbow SDK initialization and wrapper
  │       └── external.js   # External API integrations (CRM, DB, etc.)
  ├── tests/
  │   └── message.test.js   # Unit tests
  └── README.md             # Project documentation
```

This structure separates concerns: configuration, event handling, and external service integration are in distinct modules.

---

## 6. Developer Portal Navigation

The Rainbow developer portal at hub.openrainbow.com is your primary reference throughout development. Here is a guide to its key sections.

### 6.1 API Documentation

The API documentation section provides an interactive (Swagger/OpenAPI-style) reference for every REST API endpoint. For each endpoint you can see:

- The HTTP method and path.
- Required and optional parameters.
- Request body schema with field descriptions.
- Response schema with example JSON.
- Error codes and their meanings.
- A "Try it" button that lets you execute the request directly from the browser (after authenticating).

**Tip:** Always check the API documentation when you encounter an unexpected response. The documentation includes error code explanations that help you diagnose issues quickly.

### 6.2 SDK References

Each SDK has its own documentation section:

- **Getting Started guides:** Step-by-step tutorials for your first application.
- **API Reference:** Auto-generated documentation of all classes, methods, and events in the SDK.
- **Changelog:** List of changes in each SDK version. Check this before upgrading to understand breaking changes.
- **Code samples:** Working examples for common tasks (send a message, create a bubble, handle incoming calls).

### 6.3 Application Management

The "My Applications" section lets you:

- View all your registered applications.
- Edit application details (name, description, platform type).
- View and regenerate the appSecret (if compromised).
- Submit an application for production deployment review.
- Monitor API usage statistics (number of calls, error rates).

### 6.4 Developer Community

The developer portal includes community resources:

- **Forums:** Ask questions and get answers from other developers and ALE engineers.
- **Blog:** Announcements about new features, API changes, and best practices.
- **GitHub repositories:** Open-source sample projects and SDK source code.

---

## 7. Sandbox vs. Production Environment Differences

Understanding the differences between sandbox and production is critical to avoid surprises when you deploy your application.

### 7.1 Feature Differences

| Feature                          | Sandbox                      | Production                    |
|----------------------------------|------------------------------|-------------------------------|
| API surface                      | Full (mirrors production)    | Full                          |
| User limit                       | 100 accounts                 | Unlimited (per license)       |
| PSTN calling                     | Not available                | Available (requires PBX/SIP)  |
| PBX integration                  | Simulated / limited          | Full integration              |
| WebRTC audio/video               | Available                    | Available                     |
| File storage                     | Limited (periodic cleanup)   | Per company allocation        |
| Webhooks                         | Available                    | Available                     |
| Rate limits                      | Same as production           | Same as sandbox               |
| Data persistence                 | Temporary (cleaned monthly)  | Persistent                    |

### 7.2 Switching from Sandbox to Production

When your application is ready for production:

1. Submit a deployment request through the developer portal (My Applications > Select App > Request Deployment).
2. ALE reviews your application. The review checks for:
   - Proper use of the API (no abusive patterns).
   - Compliance with the developer terms of service.
   - Application description and purpose.
3. Once approved, your application state changes to **deployed**.
4. Update your application configuration to use the production hostname (`openrainbow.com` instead of `sandbox.openrainbow.com`).
5. Update user credentials to production accounts (sandbox accounts do not exist in production).

### 7.3 Common Migration Pitfalls

- **Hardcoded sandbox URLs:** Search your codebase for `sandbox.openrainbow.com` and replace with a configurable environment variable.
- **Test user IDs:** User IDs from the sandbox do not exist in production. Do not hardcode user IDs — always look them up dynamically by email or display name.
- **Missing error handling:** The sandbox is more forgiving than production under load. Ensure your application handles rate limits, network errors, and token expiration gracefully.
- **Credentials in code:** Before deploying, audit your codebase to ensure no credentials are hardcoded or committed to version control.

---

## Key Concepts Summary

| Concept                    | Definition                                                                     |
|----------------------------|--------------------------------------------------------------------------------|
| hub.openrainbow.com        | The Rainbow developer portal for account registration, app management, and documentation |
| appId                      | Public application identifier, used to identify your app in API calls          |
| appSecret                  | Confidential application credential, must be stored securely                   |
| Sandbox                    | Isolated development environment at sandbox.openrainbow.com, limited to 100 users |
| Production                 | Live environment at openrainbow.com, requires application deployment approval  |
| rainbow-node-sdk           | npm package for server-side Node.js development                                |
| rainbow-web-sdk            | npm package / script for browser-based development                             |
| .env file                  | Local file for storing credentials, excluded from version control via .gitignore |
| Application state          | Lifecycle: sandbox > in_review > deployed                                      |

---

## Practice Exercise

**Hands-On Task:** Complete the following steps and verify each one:

1. **Register** a developer account on hub.openrainbow.com (if you do not already have one).
2. **Create** a new Rainbow application named "Training Exercise Bot" with the Server platform type.
3. **Record** your appId and appSecret in a secure location (password manager or encrypted notes).
4. **Set up** a new Node.js project:
   - Create a project directory.
   - Run `npm init -y`.
   - Install `rainbow-node-sdk` and `dotenv`.
   - Create a `.env` file with your credentials.
   - Create a `.gitignore` that excludes `.env` and `node_modules`.
5. **Write and run** the verification script from Section 4.3 to confirm your connection to the sandbox.
6. **Explore** the API documentation on the developer portal:
   - Find the endpoint for sending an instant message.
   - Find the endpoint for creating a bubble.
   - Find the endpoint for retrieving your own user profile.
   - Note the required parameters for each.

**Deliverable:** A screenshot of your terminal showing "Connected to Rainbow successfully!" with your bot's display name.

---

## Knowledge Check

**Question 1:** After creating a new application on the developer portal, what is the application's initial state?

- A) deployed
- B) sandbox
- C) in_review
- D) disabled

**Answer:** B — New applications start in the sandbox state. They can only connect to the sandbox environment until they are reviewed and approved for production deployment.

---

**Question 2:** Where should you store the appSecret for a server-side Node.js application?

- A) Hardcoded in the source code for easy access.
- B) In a public GitHub repository README for team reference.
- C) In an environment variable or secrets manager, with the .env file excluded from version control.
- D) In the application's package.json file.

**Answer:** C — The appSecret is a confidential credential. It must be stored in environment variables or a secrets manager. The .env file containing it must be listed in .gitignore to prevent accidental commits.

---

**Question 3:** What is the sandbox environment used for?

- A) Running production workloads with real customers.
- B) Functional development and testing with up to 100 users, isolated from production.
- C) Performance and load testing.
- D) Customer demonstrations and sales presentations.

**Answer:** B — The sandbox is a development and testing environment limited to 100 users. It is isolated from production, making it safe for experimentation. It is not suitable for load testing, customer demos, or production workloads.

---

**Question 4:** Which command installs the Rainbow Node.js SDK?

- A) `npm install rainbow-sdk`
- B) `npm install rainbow-node-sdk`
- C) `npm install @rainbow/sdk`
- D) `npm install ale-rainbow`

**Answer:** B — The correct npm package name is `rainbow-node-sdk`. This is the official ALE Node.js SDK for Rainbow.

---

**Question 5:** What must you do before your application can connect to the production Rainbow environment?

- A) Nothing — all applications can connect to production immediately.
- B) Pay a one-time fee.
- C) Submit a deployment request through the developer portal and receive ALE approval.
- D) Install a production license on your server.

**Answer:** C — Applications must be reviewed and approved by ALE before they can connect to production. This is done by submitting a deployment request through the developer portal's application management section.
