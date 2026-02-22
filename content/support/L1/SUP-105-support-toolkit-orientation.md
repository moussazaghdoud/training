# SUP-105: Support Toolkit Orientation

| Field            | Value                                                      |
|------------------|------------------------------------------------------------|
| **Module ID**    | SUP-105                                                    |
| **Title**        | Support Toolkit Orientation                                |
| **Track**        | Support (L1 Foundation)                                    |
| **Duration**     | 30 minutes                                                 |
| **Content Types**| Reading, Guided Exploration, Knowledge Check               |
| **Prerequisites**| SUP-101, SUP-102, SUP-103, SUP-104                        |

## Learning Objectives

By the end of this module, you will be able to:

1. Navigate the Rainbow Help Center and locate articles relevant to common user questions.
2. Use the Support Community to find feature lists, certification documents, and community discussions.
3. Explain the escalation path from tier-1 through tier-3 support.
4. Find and interpret release notes and "what's new" content.
5. Identify the key diagnostic tools and describe the information to gather for effective troubleshooting.

---

## 1. Help Center Structure (help.openrainbow.com)

The Rainbow Help Center at **help.openrainbow.com** is the primary self-service resource for end users and the first reference point for support agents. It is organized into four main sections, each serving a distinct audience and purpose.

### 1.1 First Steps

The "First Steps" section is designed for new users who have just received their Rainbow account. It covers:

- **Getting started guides**: Step-by-step instructions for downloading the client, signing in for the first time, and completing initial profile setup
- **System requirements**: Minimum OS versions, browser requirements, and hardware recommendations for each platform
- **Quick start tutorials**: Short, task-focused guides such as "How to make your first call," "How to create a Bubble," and "How to share a file"
- **Account activation**: Instructions for activating an account from an email invitation, including common issues like expired invitation links and password creation requirements

**When to use this section in support**: Direct new users here when they have basic "how do I get started" questions. It saves time compared to walking them through every step manually, and the articles include screenshots that are regularly updated with each client release.

### 1.2 Using Rainbow

The "Using Rainbow" section is the largest part of the Help Center and covers the full range of end-user features:

- **Messaging**: Detailed articles on sending messages, formatting, qualification tags, reactions, replies, and message management
- **Bubbles**: Creating, managing, archiving, and deleting Bubbles; managing members and roles; external guest invitations
- **Voice and Video**: Making calls, conferencing, screen sharing, moderation controls, dial-in instructions
- **Presence and Status**: Configuring presence states, calendar synchronization, custom status messages
- **Contacts and Directory**: Adding contacts, searching the directory, managing favorites, blocking users
- **Files**: Sharing, downloading, managing files, storage quotas
- **Calendar and Scheduling**: Meeting scheduling, calendar integration setup, recurring meetings
- **Settings and Preferences**: Audio/video configuration, notification settings, privacy controls, language settings
- **Telephony**: PBX integration features, softphone usage, call forwarding, voicemail (Enterprise/Connect only)

Articles in this section typically follow a consistent format:
1. Brief description of the feature
2. Step-by-step instructions with numbered screenshots
3. Platform-specific notes (where behavior differs between desktop, web, and mobile)
4. Tips and known limitations
5. Related articles links

**When to use this section in support**: This is your go-to resource for "how do I do X?" questions. Before explaining a feature from memory, check the Help Center for the latest article — UI details change with client updates, and the Help Center is kept in sync.

### 1.3 Manage Your Company

The "Manage Your Company" section is targeted at **company administrators** and covers the administration portal:

- **User management**: Creating users, bulk import, LDAP/AD synchronization, role assignment
- **Company settings**: Branding, domain configuration, default policies
- **Telephony administration**: PBX registration, numbering plans, trunk configuration
- **Security policies**: Password rules, two-factor authentication enforcement, IP allowlisting
- **Subscription management**: Understanding license counts, usage monitoring, tier upgrades
- **Reporting**: Generating usage reports, call detail records, activity logs

**When to use this section in support**: When the issue is administrative (e.g., a user cannot be created, a policy is preventing a feature from working, or the admin needs to configure telephony), direct the company administrator to this section. L1 support agents should be familiar with the structure of these articles even though they will not be performing admin tasks directly.

### 1.4 Troubleshooting

The "Troubleshooting" section contains solutions for known issues organized by symptom:

- **Login and account issues**: "I cannot sign in," "My account is locked," "I forgot my password," "My invitation link expired"
- **Audio and video problems**: "No sound during calls," "My camera is not working," "Echo in calls," "Screen sharing shows a black screen"
- **Messaging issues**: "Messages are not being delivered," "I cannot see message history," "File upload fails"
- **Notification problems**: "I am not receiving notifications," "Notifications are delayed," "I get notifications for muted conversations"
- **Performance issues**: "Rainbow is slow," "High CPU usage," "Client crashes on startup"
- **Connectivity**: "Rainbow says I am offline," "Calls drop frequently," "Cannot connect to conference"
- **PBX/Telephony**: "Desk phone not paired," "Cannot make external calls," "Call transfer fails"

Each troubleshooting article follows a diagnostic flow:
1. **Symptom description**: What the user experiences
2. **Possible causes**: Listed from most likely to least likely
3. **Resolution steps**: Ordered from simplest to most complex
4. **Escalation criteria**: When to escalate to the next tier if the resolution steps do not work

**When to use this section in support**: This is your first stop for any problem-based call. Before attempting ad hoc troubleshooting, check whether the exact symptom is documented here. Following the documented resolution path ensures consistency and completeness.

---

## 2. Support Community (support.openrainbow.com)

The Support Community at **support.openrainbow.com** is a complementary resource to the Help Center. While the Help Center is curated documentation, the Support Community is a more dynamic environment.

### 2.1 Feature Lists

The Support Community maintains detailed **feature lists** for each client platform:

- **Rainbow for Windows — Feature List**: A comprehensive table listing every feature available on the Windows client, organized by category (messaging, calling, conferencing, etc.), with the current version number and supported tier
- **Rainbow for macOS — Feature List**: Same format for macOS
- **Rainbow for iOS — Feature List**: Same format for iOS
- **Rainbow for Android — Feature List**: Same format for Android
- **Rainbow Web — Feature List**: Same format for the web client

These feature lists are invaluable for answering questions like:
- "Does the mobile client support screen sharing?" (Check the iOS/Android feature list)
- "Can I use message qualification tags on the web?" (Check the Web feature list)
- "Is call recording available on macOS?" (Check the macOS feature list)

Feature lists are updated with each release. Always verify the version number at the top of the list to ensure you are looking at current information.

### 2.2 Certification and Compatibility Documents

The Support Community publishes **certification documents** that specify tested and supported environments:

- **Operating System Certification**: Which OS versions are officially supported for each client
- **Browser Certification**: Which browsers and versions are supported for the web client
- **Headset and Audio Device Certification**: A list of tested headsets, speakerphones, and conferencing devices (e.g., Jabra, Plantronics/Poly, Sennheiser/EPOS)
- **PBX Certification**: Which PBX versions and firmware levels are certified for integration with Rainbow
- **Network Certification**: Firewall, proxy, and network infrastructure requirements

**Why certifications matter for support**: If a user reports a problem with a specific headset, browser, or OS version, the first step is to check whether that environment is certified. If it is not, the issue may be expected and the resolution is to use a certified environment.

### 2.3 Community Forums

The community forums are discussion spaces where users, partners, and ALE staff interact:

- **General Discussion**: Broad conversations about Rainbow usage and best practices
- **Feature Requests**: Users can submit and vote on feature requests, giving you insight into what the community wants
- **Tips and Tricks**: Power-user advice on getting the most out of Rainbow
- **Technical Questions**: User-to-user troubleshooting and technical discussions
- **Developer Forum**: API, SDK, and integration discussions for Rainbow Hub users

**How to use forums in support**:
- Search the forums when you encounter an unusual issue — another user or partner may have already documented a workaround
- Do not send customers to the forums for critical issues — forums are best for general discussion, not urgent support
- If you discover a workaround in the forums that is not in the Help Center, note it and suggest it for inclusion in the official documentation

### 2.4 Known Issues and Workarounds

The Support Community maintains a **known issues** page for each client platform. This page lists:

- Issues identified in the current release that have not yet been fixed
- A brief description of each issue
- The affected platform(s) and version(s)
- A workaround if one exists
- The targeted fix version (when available)

**Always check known issues before deep troubleshooting.** If a user's problem matches a known issue, you can immediately provide the workaround and set expectations about when the fix will be available. This saves both the user's time and yours.

---

## 3. Escalation Paths

Rainbow support follows a tiered escalation model. Understanding this model is critical for L1 agents because it defines your role, your boundaries, and when you must escalate.

### 3.1 Tier-1 Support (L1)

**Who**: Front-line support agents — this is you after completing the L1 Foundation track.

**Responsibilities:**
- Handle incoming support requests via phone, chat, or ticket
- Identify the user's issue and categorize it
- Consult the Help Center and Troubleshooting section for documented resolutions
- Walk the user through resolution steps
- Verify that the issue is resolved before closing the case
- Document the issue, steps taken, and outcome in the ticketing system

**What L1 resolves:**
- Account access issues (password reset, invitation link resend)
- Basic "how to" questions (feature usage, navigation)
- Client installation and update problems
- Audio/video device configuration
- Notification and presence issues
- File sharing and storage quota questions
- Known issues with documented workarounds

**When to escalate to L2:**
- The issue does not match any Help Center or Troubleshooting article
- The documented resolution steps have been followed but the issue persists
- The issue involves server-side behavior that you cannot inspect (e.g., messages not delivered despite correct client configuration)
- The issue involves PBX integration or advanced telephony
- The user reports a potential bug that is not on the known issues list
- The issue requires access to backend logs or admin-level diagnostics

### 3.2 Tier-2 Support (L2)

**Who**: Senior support engineers with deeper technical knowledge and access to backend diagnostic tools.

**Responsibilities:**
- Investigate escalated issues from L1
- Access server-side logs and monitoring dashboards
- Perform advanced network diagnostics
- Analyze call quality data from the server side
- Liaise with the product team for suspected bugs
- Manage PBX integration troubleshooting
- Coordinate with the customer's IT team for complex network issues

**What L2 resolves:**
- Complex audio/video quality issues requiring server-side log analysis
- PBX integration problems (pairing failures, call routing issues, trunk configuration)
- Calendar synchronization failures requiring OAuth token inspection
- User provisioning issues related to LDAP/AD sync
- Performance problems requiring server-side monitoring data
- Issues requiring coordination between multiple systems (Rainbow + PBX + Active Directory + calendar)

**When to escalate to L3:**
- A confirmed bug is identified that requires a code fix
- The issue is a service-level outage affecting multiple customers
- The issue involves infrastructure (data center, network backbone, database)
- A security incident is suspected
- The issue requires access to source code or deployment configuration

### 3.3 Tier-3 Support (L3)

**Who**: Engineering team — developers and DevOps engineers who build and operate Rainbow.

**Responsibilities:**
- Fix confirmed bugs and deploy patches
- Investigate and resolve infrastructure issues
- Handle service outages and incidents
- Perform root cause analysis for recurring issues
- Provide technical guidance to L2 on novel or undocumented issues

**What L3 resolves:**
- Software bugs requiring code changes
- Infrastructure issues (server failures, database problems, network outages)
- Security incidents
- Performance bottlenecks in the platform
- Issues that require deploying a hotfix or configuration change on the server side

### 3.4 Escalation Best Practices

When escalating from L1 to L2, always include:

1. **Customer information**: Company name, user's email, subscription tier, client platform and version
2. **Issue description**: Clear, concise description of the symptom in the user's words
3. **Environment details**: OS version, browser version (if web client), network type (corporate, VPN, home Wi-Fi)
4. **Steps already taken**: Every resolution step you attempted and the result
5. **Reproducibility**: Is the issue constant, intermittent, or one-time? Can it be reproduced on demand?
6. **Diagnostic data**: Log files, screenshots, or screen recordings provided by the user
7. **Impact assessment**: How many users are affected? Is the issue blocking critical business operations?
8. **Priority recommendation**: Based on impact and urgency, suggest a priority level

**Never escalate without documenting what you have already tried.** This prevents L2 from repeating the same steps, which wastes time and frustrates the customer.

---

## 4. Release Notes and What's New

### 4.1 Where to Find Release Notes

Rainbow publishes release notes for every client update and server-side change:

- **Help Center** > **What's New**: High-level summaries of new features targeted at end users
- **Support Community** > **Release Notes**: Detailed technical release notes organized by platform and version number
- **Admin Portal** > **What's New** panel: Release highlights relevant to administrators

### 4.2 Understanding Release Note Structure

A typical release note entry includes:

- **Version number**: The client version (e.g., "Rainbow Desktop 2.x.y" or "Rainbow iOS 2.x.y")
- **Release date**: When the update was published
- **New features**: Descriptions of new capabilities added in this release
- **Improvements**: Enhancements to existing features (performance, UI, usability)
- **Bug fixes**: Issues resolved in this release, often referencing the symptom and the fix
- **Known issues**: Problems identified in this version that are expected to be fixed in a future release
- **Deprecations**: Features or APIs that are being phased out

### 4.3 How to Use Release Notes in Support

Release notes are essential for support in several scenarios:

**"The feature was working before but now it's different":**
A recent update may have changed the UI or behavior. Check the release notes for the user's current client version to see if the change is documented.

**"I don't have a feature that my colleague has":**
The user may be on a different client version. Ask for the version number (found in Settings > About) and cross-reference the release notes to determine when the feature was introduced.

**"Something broke after an update":**
Check the known issues section of the release notes for the version the user just updated to. The issue may already be documented with a workaround.

**Proactive support:**
When a major release is deployed, review the release notes proactively so that you are prepared for incoming questions about new features or behavior changes.

### 4.4 Update Mechanisms

Understanding how clients are updated helps you manage user expectations:

| Platform      | Update Mechanism                                                              |
|---------------|-------------------------------------------------------------------------------|
| **Windows**   | Auto-update (client checks for updates on launch); can be managed via MSI for enterprise deployment |
| **macOS**     | Auto-update via in-app updater; manual download also available                |
| **iOS**       | App Store update; may be automatic if the user has auto-updates enabled       |
| **Android**   | Google Play Store update; may be automatic if auto-updates are enabled        |
| **Web**       | Always up to date — served directly from Rainbow servers, no user action needed |

When a user reports an issue, always verify their client version. If they are several versions behind, updating may resolve the issue.

---

## 5. Key Diagnostic Tools and Information Gathering

Effective troubleshooting starts with gathering the right information. This section covers the diagnostic tools available to L1 support agents and the information you should collect at the start of every support interaction.

### 5.1 Initial Information Gathering Checklist

At the start of every support case, collect the following:

| Information             | Why It Matters                                                           | How to Get It                                         |
|-------------------------|--------------------------------------------------------------------------|-------------------------------------------------------|
| **User email**          | Identifies the account in the system                                     | Ask the user                                          |
| **Company name**        | Identifies the organization and their subscription tier                  | Ask the user or look up by email domain               |
| **Subscription tier**   | Determines which features should be available                            | Admin portal or account system                        |
| **Client platform**     | Desktop (Win/Mac), Web, Mobile (iOS/Android)                             | Ask the user                                          |
| **Client version**      | Determines available features and known issues                           | Settings > About in the client                        |
| **OS version**          | Needed for compatibility checks                                          | Ask the user or check system info                     |
| **Browser version**     | If using web client                                                      | Ask user to check Help > About in their browser       |
| **Network environment** | Corporate office, home Wi-Fi, VPN, mobile data                           | Ask the user                                          |
| **Issue description**   | The symptom in the user's own words                                      | Ask: "What exactly happens when you try to...?"       |
| **When it started**     | Correlate with updates, changes, or outages                              | Ask: "When did you first notice this?"                |
| **Reproducibility**     | Constant, intermittent, or one-time                                      | Ask: "Does it happen every time or just sometimes?"   |
| **Steps to reproduce**  | Required for escalation and bug reporting                                | Ask: "Can you walk me through exactly what you do?"   |

### 5.2 Client Diagnostic Logs

Rainbow clients can generate diagnostic logs that contain detailed information about the client's behavior, network connections, and errors.

**How to generate logs on desktop (Windows/macOS):**
1. Open Rainbow Settings (gear icon)
2. Navigate to **About** or **Advanced**
3. Click **Generate Diagnostic Report** or **Export Logs**
4. The client creates a ZIP file containing log files
5. Ask the user to share this file via email or a file-sharing service

**How to generate logs on mobile (iOS/Android):**
1. Open Rainbow > tap **More** > **Settings**
2. Navigate to **About** or **Help**
3. Tap **Send Diagnostic Report** or **Export Logs**
4. The app prepares a log package and opens a share dialog (email, file sharing, etc.)

**What logs contain:**
- Client startup and initialization events
- Authentication and connection events
- Call signaling events (call setup, codec negotiation, call end)
- Network connectivity events (connection changes, reconnections)
- Error messages and stack traces
- WebRTC statistics (during calls): bitrate, packet loss, jitter, latency
- User actions (feature usage, settings changes) — anonymized for privacy

**Important**: Logs may contain sensitive information (IP addresses, email addresses). Handle them according to your organization's data handling policies and do not share them publicly.

### 5.3 Network Diagnostic Tools

When call quality or connectivity issues are reported, the following network diagnostic data is helpful:

**Built-in Rainbow network test:**
Some client versions include a built-in network diagnostic that tests:
- Connectivity to Rainbow servers (HTTPS)
- UDP connectivity (for media)
- TURN server reachability
- Bandwidth estimation
- Latency measurement

This test produces a summary report that the user can share with support.

**External tools (ask the user to run):**
- **Speed test** (speedtest.net): Measure upload and download bandwidth, latency, and jitter
- **Ping test**: `ping` to Rainbow's servers to check basic connectivity and latency
- **Traceroute**: `tracert` (Windows) or `traceroute` (Mac/Linux) to Rainbow servers to identify network hops with high latency
- **WebRTC internals** (Chrome only): Navigate to `chrome://webrtc-internals` during an active call to see detailed WebRTC statistics

### 5.4 Server-Side Tools (L2+ Access)

As an L1 agent, you will not typically have access to server-side tools, but you should be aware they exist so you know what L2 can investigate:

- **Call quality dashboard**: Server-side records of call quality metrics (MOS scores, packet loss, jitter) for every call made on the platform
- **User session logs**: Server-side records of login/logout events, device connections, and feature usage
- **Service health dashboard**: Real-time status of all Rainbow microservices, including any degraded performance or outages
- **Admin audit log**: Record of all administrative actions (user creation, policy changes, PBX configuration changes)

### 5.5 Rainbow Status Page

Rainbow maintains a public **status page** that shows the current health of all platform services:

- **Messaging service**: Status of the message delivery pipeline
- **Voice/Video service**: Status of WebRTC infrastructure and TURN servers
- **Authentication service**: Status of the login and authentication system
- **API gateway**: Status of the REST API (relevant for Hub users)
- **File storage**: Status of the file upload and download service
- **Admin portal**: Status of the administration interface

The status page also shows:
- **Planned maintenance windows**: Upcoming maintenance that may affect service
- **Incident history**: Past incidents with root cause analysis and resolution details

**Always check the status page first** when multiple users report the same issue simultaneously. If there is a platform-wide incident, individual troubleshooting is unnecessary — the issue is on Rainbow's side and will be resolved by the operations team.

### 5.6 Building a Troubleshooting Workflow

Combining all the tools and resources covered in this module, here is a recommended troubleshooting workflow for L1 support:

```
1. GATHER INFORMATION
   └─ Collect the initial information checklist (Section 5.1)

2. CHECK FOR KNOWN ISSUES
   ├─ Check the Rainbow Status Page for active incidents
   ├─ Check the Known Issues page for the user's client version
   └─ Check the Help Center Troubleshooting section for the symptom

3. APPLY DOCUMENTED RESOLUTION
   ├─ Follow the step-by-step resolution from the relevant article
   └─ Document each step taken and its outcome

4. VERIFY RESOLUTION
   ├─ If resolved: Document the solution and close the case
   └─ If NOT resolved: Continue to step 5

5. GATHER DIAGNOSTIC DATA
   ├─ Request client diagnostic logs
   ├─ Request network diagnostic data (if applicable)
   └─ Capture screenshots or screen recordings from the user

6. ESCALATE TO L2
   ├─ Create escalation ticket with all gathered information
   ├─ Include all diagnostic data
   ├─ Document all steps already attempted
   └─ Set appropriate priority based on impact
```

This workflow ensures that every support case is handled systematically, nothing is overlooked, and escalations include everything L2 needs to continue the investigation efficiently.

---

## Key Concepts Summary

| Concept                    | Definition                                                                                   |
|----------------------------|----------------------------------------------------------------------------------------------|
| **Help Center**            | Curated documentation at help.openrainbow.com organized into First Steps, Using Rainbow, Manage Your Company, and Troubleshooting |
| **Support Community**      | Dynamic resource at support.openrainbow.com with feature lists, certifications, forums, and known issues |
| **Feature List**           | Per-platform table of all available features with tier and version requirements                |
| **Certification Document** | Official list of tested and supported OS versions, browsers, headsets, PBX versions, and network configurations |
| **Known Issues Page**      | List of identified problems in the current release with workarounds and targeted fix versions  |
| **Escalation Path**        | L1 (front-line) to L2 (senior engineers) to L3 (development team)                            |
| **Diagnostic Logs**        | ZIP file of client activity logs generated via Settings > About > Export Logs                  |
| **Status Page**            | Public dashboard showing real-time health of all Rainbow platform services                     |
| **Release Notes**          | Per-version documentation of new features, improvements, bug fixes, and known issues           |

---

## Practice Exercise

**Scenario 1 — Using the Help Center:**
A user calls and asks: "How do I set up my calendar to automatically change my status in Rainbow?" Without answering from memory, navigate to help.openrainbow.com and find the specific article that covers calendar-synced presence. Note:
1. The article title and URL
2. The section of the Help Center it is located in (First Steps, Using Rainbow, Manage Your Company, or Troubleshooting)
3. The key steps described in the article
4. Whether the article mentions any platform-specific differences

**Scenario 2 — Checking Known Issues:**
Navigate to the Support Community and find the known issues page for the latest Windows desktop client version. Identify:
1. How many known issues are listed
2. Whether any of them relate to audio or video functionality
3. Whether workarounds are provided

**Scenario 3 — Escalation Practice:**
A user reports: "When I try to share my screen during a conference on my Mac, Rainbow crashes and I have to restart it. This has happened three times today."

Prepare an escalation to L2 by writing up:
1. All the information you would gather from the user (use the checklist)
2. Which resources you would check before escalating (status page, known issues, troubleshooting articles)
3. The escalation ticket content, including a clear description, environment details, steps taken, and requested priority

---

## Knowledge Check

**Question 1**: A user asks how to create a Bubble. Where in the Help Center would you find the relevant article?

- A) First Steps
- B) Using Rainbow
- C) Manage Your Company
- D) Troubleshooting

**Answer**: B — Articles about using Rainbow features, including creating and managing Bubbles, are located in the "Using Rainbow" section of the Help Center. "First Steps" covers initial setup, "Manage Your Company" covers administration, and "Troubleshooting" covers problem resolution.

---

**Question 2**: Before troubleshooting an individual user's connectivity issue, what should you check first?

- A) The user's subscription tier
- B) The Rainbow Status Page for active incidents
- C) The user's client version
- D) The known issues page

**Answer**: B — Always check the Rainbow Status Page first. If there is a platform-wide incident affecting connectivity, individual troubleshooting is unnecessary. The issue will be resolved by the operations team, and you can inform the user about the known incident and estimated resolution time.

---

**Question 3**: When escalating an issue from L1 to L2, which of the following should you include?

- A) Only the user's email address and a brief description of the issue
- B) The user's information, issue description, environment details, all steps already taken, diagnostic logs, and a priority recommendation
- C) A request for L2 to call the user directly
- D) Only the diagnostic log files

**Answer**: B — A complete escalation includes customer information, issue description, environment details (OS, client version, network), all resolution steps already attempted with their outcomes, diagnostic data (logs, screenshots), impact assessment, and a recommended priority level.

---

**Question 4**: A user reports that a feature they used last week is no longer available after a client update. Where should you look first?

- A) The community forums for similar reports
- B) The release notes for the user's current client version
- C) The Help Center's First Steps section
- D) The admin portal

**Answer**: B — Release notes document changes in each version, including new features, improvements, bug fixes, deprecations, and known issues. If a feature changed or was removed, the release notes for the user's current version will document it.

---

**Question 5**: Where can a user generate diagnostic logs on the Rainbow desktop client?

- A) By running a command-line tool included with Rainbow
- B) In Settings > About (or Advanced) > Generate Diagnostic Report / Export Logs
- C) By contacting their company administrator through the admin portal
- D) By navigating to help.openrainbow.com and running an online diagnostic

**Answer**: B — Diagnostic logs are generated from within the Rainbow client itself, typically found under Settings > About or Settings > Advanced, where the user clicks "Generate Diagnostic Report" or "Export Logs." The client creates a ZIP file that can be shared with support.
