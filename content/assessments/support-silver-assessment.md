# SUPPORT TRACK -- Silver (Certified) Assessment

**Assessment ID:** SUP-CERT-01
**Passing Score:** 70% (18 of 25)
**Total Questions:** 25
**Time Limit:** 45 minutes

**Domain Weighting:**
- Platform Fundamentals: 20% (5 questions)
- Messaging & Collaboration: 15% (4 questions)
- Voice/Video Troubleshooting: 25% (6 questions)
- Admin Portal Basics: 20% (5 questions)
- CRM Connector Support: 20% (5 questions)

---

## Domain 1: Platform Fundamentals

### Question 1

```yaml
id: SUP-CERT-01-Q01
type: multiple_choice
difficulty: easy
domain: Platform Fundamentals
question: >
  Which of the following Rainbow subscription tiers includes ONLY instant
  messaging, presence, and basic file sharing -- with no telephony features?
options:
  a: Rainbow Essential
  b: Rainbow Business
  c: Rainbow Enterprise
  d: Rainbow Conference
correct_answer: a
explanation: >
  Rainbow Essential is the free-tier / entry-level subscription that provides
  core messaging, presence, and basic file sharing. Telephony features such as
  PBX integration, call forwarding, and audio/video conferencing are available
  starting at the Business tier and above.
```

### Question 2

```yaml
id: SUP-CERT-01-Q02
type: multiple_choice
difficulty: medium
domain: Platform Fundamentals
question: >
  A customer reports they cannot install the Rainbow desktop client on their
  corporate Windows machines. They are running Windows 8.1 with .NET 4.5.
  What is the most likely cause?
options:
  a: The .NET version must be upgraded to 4.8 or later
  b: Windows 8.1 is no longer supported by the Rainbow desktop client
  c: The customer needs to switch to the Rainbow web client instead
  d: An antivirus exclusion must be configured for the Rainbow installer
correct_answer: b
explanation: >
  The Rainbow desktop client for Windows requires Windows 10 or later. Windows
  8.1 reached end of life and is no longer in the supported platform matrix.
  The recommended path is to upgrade the operating system or use the
  browser-based Rainbow web client as a temporary workaround.
```

### Question 3

```yaml
id: SUP-CERT-01-Q03
type: true_false
difficulty: easy
domain: Platform Fundamentals
question: >
  The Rainbow web client is supported on Mozilla Firefox, Google Chrome,
  and Microsoft Edge (Chromium-based), but NOT on Apple Safari.
options:
  a: "True"
  b: "False"
correct_answer: b
explanation: >
  Rainbow's web client supports all four major browsers: Google Chrome,
  Mozilla Firefox, Microsoft Edge (Chromium), and Apple Safari. Safari support
  was added to ensure coverage of macOS and iOS users who prefer the
  browser-based experience.
```

### Question 4

```yaml
id: SUP-CERT-01-Q04
type: multiple_choice
difficulty: medium
domain: Platform Fundamentals
question: >
  A customer on the Rainbow Business subscription wants to know the maximum
  number of participants supported in a single audio conference bridge.
  What is the correct answer?
options:
  a: 6 participants
  b: 15 participants
  c: 20 participants
  d: Unlimited participants
correct_answer: c
explanation: >
  The Rainbow Business tier supports audio/video conferences with up to 20
  participants. For larger meetings, the customer would need Rainbow
  Enterprise or the dedicated Rainbow Conference add-on, which supports
  significantly higher capacities.
```

### Question 5

```yaml
id: SUP-CERT-01-Q05
type: multi_select
difficulty: medium
domain: Platform Fundamentals
question: >
  Which of the following platforms have a native Rainbow application available
  for download? (Select ALL that apply.)
options:
  a: Windows desktop
  b: macOS desktop
  c: Linux desktop (official)
  d: iOS mobile
  e: Android mobile
correct_answer: [a, b, d, e]
explanation: >
  Rainbow provides native applications for Windows, macOS, iOS, and Android.
  There is no official Linux desktop application; Linux users are directed
  to the Rainbow web client as the supported access method.
```

---

## Domain 2: Messaging & Collaboration

### Question 6

```yaml
id: SUP-CERT-01-Q06
type: multiple_choice
difficulty: easy
domain: Messaging & Collaboration
question: >
  In Rainbow, what is the term for a persistent group conversation space
  where multiple users can exchange messages, share files, and collaborate?
options:
  a: Channel
  b: Bubble
  c: Room
  d: Thread
correct_answer: b
explanation: >
  Rainbow uses the term "Bubble" for its group conversation spaces. Bubbles
  are persistent, can be public or private, support file sharing, and serve
  as the primary collaboration unit within the platform.
```

### Question 7

```yaml
id: SUP-CERT-01-Q07
type: multiple_choice
difficulty: medium
domain: Messaging & Collaboration
question: >
  A user reports that their presence status shows "Away" even though they are
  actively using their computer. Which of the following is the most likely
  explanation?
options:
  a: The user's calendar has an event marked as "Out of Office"
  b: The user's Rainbow client has lost connectivity to the server
  c: The user manually set their status to Away and forgot to change it back
  d: The user's system idle timer triggered even while the user was active in another application
correct_answer: c
explanation: >
  When a user manually sets their presence to Away (or any manual status),
  it overrides the automatic presence detection. The status remains as
  manually set until the user explicitly changes it back. Automatic presence
  would detect keyboard/mouse activity, but manual overrides take precedence.
```

### Question 8

```yaml
id: SUP-CERT-01-Q08
type: multiple_choice
difficulty: medium
domain: Messaging & Collaboration
question: >
  What is the default maximum file size that can be shared through a
  Rainbow Bubble or one-to-one conversation?
options:
  a: 25 MB
  b: 50 MB
  c: 100 MB
  d: 200 MB
correct_answer: c
explanation: >
  The default maximum file size for sharing in Rainbow conversations
  (both one-to-one and Bubbles) is 100 MB. Company administrators can
  adjust this limit downward through the admin portal based on corporate
  policies and storage constraints.
```

### Question 9

```yaml
id: SUP-CERT-01-Q09
type: multi_select
difficulty: hard
domain: Messaging & Collaboration
question: >
  Which of the following are valid presence states in Rainbow?
  (Select ALL that apply.)
options:
  a: Available (Online)
  b: Busy (Do Not Disturb)
  c: Away
  d: Invisible
  e: On the Phone
  f: In a Meeting
correct_answer: [a, b, c, e, f]
explanation: >
  Rainbow supports the following presence states: Available, Busy / Do Not
  Disturb, Away, On the Phone, and In a Meeting (calendar-based). Rainbow
  does NOT support an Invisible mode where a user appears offline but can
  still use the platform. This distinguishes it from some consumer messaging
  applications.
```

---

## Domain 3: Voice/Video Troubleshooting

### Question 10

```yaml
id: SUP-CERT-01-Q10
type: scenario
difficulty: hard
domain: Voice/Video Troubleshooting
question: >
  Scenario: A user initiates a WebRTC audio call through the Rainbow web
  client. The call connects but neither party can hear the other. The user
  confirms their microphone and speakers work in other applications. Network
  connectivity is stable. What is the MOST likely cause?
options:
  a: The browser has not been granted microphone permissions for the Rainbow web application
  b: The user's subscription tier does not include audio calling
  c: The WebRTC SRTP encryption is incompatible with the browser version
  d: Rainbow's TURN server is unreachable causing a media relay failure
correct_answer: a
explanation: >
  When a WebRTC call connects (signaling succeeds) but there is no audio in
  either direction, the most common cause is that the browser has not granted
  microphone access to the Rainbow web application. The user should check
  browser permissions (typically shown via the lock icon in the address bar)
  and ensure microphone access is set to "Allow" for the Rainbow domain.
```

### Question 11

```yaml
id: SUP-CERT-01-Q11
type: scenario
difficulty: hard
domain: Voice/Video Troubleshooting
question: >
  Scenario: Multiple users in the same office report intermittent audio
  quality issues during Rainbow calls -- choppy audio, packet loss, and
  occasional dropped calls. Users on the same network using other VoIP
  applications report no issues. What should you investigate FIRST?
options:
  a: Whether the corporate firewall is blocking UDP traffic on Rainbow-specific ports
  b: Whether the Rainbow server is experiencing a regional outage
  c: Whether QoS policies are configured to prioritize Rainbow media traffic
  d: Whether the users' headsets are compatible with Rainbow
correct_answer: c
explanation: >
  Since other VoIP applications on the same network work fine, basic
  connectivity is not the issue. The intermittent nature (not a complete
  block) points to network quality management. The first investigation
  should focus on whether QoS policies prioritize Rainbow's media traffic.
  Without proper QoS, Rainbow's RTP streams may be deprioritized during
  network congestion, causing choppy audio and packet loss even when other
  applications with QoS markings work correctly.
```

### Question 12

```yaml
id: SUP-CERT-01-Q12
type: multiple_choice
difficulty: medium
domain: Voice/Video Troubleshooting
question: >
  Which network protocol and port range does Rainbow primarily use for
  real-time media (audio/video) transport?
options:
  a: TCP ports 80 and 443
  b: UDP ports 3478-3480 and dynamic high ports for RTP
  c: TCP ports 5060-5061
  d: UDP port 53
correct_answer: b
explanation: >
  Rainbow uses STUN/TURN on UDP ports 3478-3480 for NAT traversal, and
  dynamic high ports for the actual RTP/SRTP media streams. TCP ports 80
  and 443 are used for signaling and HTTPS traffic. SIP ports 5060-5061
  are relevant for PBX integration but not for WebRTC media transport
  directly.
```

### Question 13

```yaml
id: SUP-CERT-01-Q13
type: scenario
difficulty: hard
domain: Voice/Video Troubleshooting
question: >
  Scenario: A remote worker can send and receive instant messages in Rainbow
  without issue, but when they try to make a video call, the call never
  connects -- it rings but then fails. They are behind a home router with
  no special configuration. What is the MOST likely cause?
options:
  a: The user's Rainbow license does not include video calling
  b: The home router's firewall is blocking the UDP ports required for STUN/TURN media relay
  c: The user's webcam driver is outdated
  d: The Rainbow server does not support video calls to residential IP addresses
correct_answer: b
explanation: >
  Messaging works over HTTPS (TCP 443), which passes through virtually all
  firewalls. Video calls require UDP ports for STUN/TURN and media relay.
  If the home router blocks these UDP ports, signaling can complete (the
  call rings) but media negotiation fails and the call drops. The fix is to
  ensure UDP ports 3478-3480 are open outbound, or to configure the TURN
  server to fall back to TCP 443 if available.
```

### Question 14

```yaml
id: SUP-CERT-01-Q14
type: multiple_choice
difficulty: medium
domain: Voice/Video Troubleshooting
question: >
  What is the minimum recommended bandwidth per user for a stable Rainbow
  video call?
options:
  a: 128 Kbps symmetrical
  b: 512 Kbps symmetrical
  c: 2 Mbps symmetrical
  d: 5 Mbps symmetrical
correct_answer: b
explanation: >
  Rainbow recommends a minimum of 512 Kbps symmetrical (upload and download)
  per user for a stable one-to-one video call. For HD video and multi-party
  conferences, higher bandwidth (1-2 Mbps per participant) is recommended.
  128 Kbps is insufficient for video, while 2-5 Mbps represents ideal rather
  than minimum requirements.
```

### Question 15

```yaml
id: SUP-CERT-01-Q15
type: multiple_choice
difficulty: medium
domain: Voice/Video Troubleshooting
question: >
  A user reports that during a Rainbow conference call, their video feed
  freezes every few seconds while audio remains clear. Which metric
  should you examine FIRST in the call diagnostics?
options:
  a: Jitter on the audio stream
  b: Packet loss percentage on the video stream
  c: DNS resolution time
  d: TLS handshake duration
correct_answer: b
explanation: >
  Video freezing with clear audio typically indicates packet loss on the
  video stream specifically. Video is more bandwidth-intensive and more
  sensitive to packet loss than audio. Even 1-2% packet loss can cause
  noticeable video freezing. The call diagnostics should show per-stream
  packet loss metrics that will confirm this diagnosis.
```

---

## Domain 4: Admin Portal Basics

### Question 16

```yaml
id: SUP-CERT-01-Q16
type: multiple_choice
difficulty: easy
domain: Admin Portal Basics
question: >
  In the Rainbow Admin Portal, where would a company administrator go to
  view and manage all user accounts within their organization?
options:
  a: Dashboard > Analytics
  b: Users > Directory
  c: Settings > Global Configuration
  d: Reports > Usage
correct_answer: b
explanation: >
  The Users > Directory section of the Rainbow Admin Portal is where
  administrators manage user accounts -- creating, editing, deactivating,
  and assigning licenses. The Dashboard shows high-level analytics, Settings
  controls global configuration, and Reports provides usage data.
```

### Question 17

```yaml
id: SUP-CERT-01-Q17
type: multiple_choice
difficulty: medium
domain: Admin Portal Basics
question: >
  A support engineer needs to verify which subscription tier is assigned
  to a specific user. Which section of the Admin Portal provides this
  information?
options:
  a: The user's profile page under the "License" or "Subscription" tab
  b: The global "Billing" page which shows all licenses in bulk
  c: The "Network" settings page under "Entitlements"
  d: This information is only available through the Rainbow API
correct_answer: a
explanation: >
  Individual user license/subscription information is found on each user's
  profile page within the Admin Portal, typically under a "License" or
  "Subscription" tab. This shows the specific tier assigned (Essential,
  Business, Enterprise, etc.) and any add-ons associated with that user.
```

### Question 18

```yaml
id: SUP-CERT-01-Q18
type: scenario
difficulty: medium
domain: Admin Portal Basics
question: >
  Scenario: A company administrator accidentally deleted a user account
  that should still be active. The deletion occurred 2 hours ago. What
  is the correct recovery procedure?
options:
  a: The account is permanently deleted and must be recreated from scratch
  b: Contact Alcatel-Lucent Enterprise support to restore the account from a backup within the grace period
  c: Navigate to Users > Deleted Users and restore the account within the retention window
  d: Use the Rainbow API to call the account recovery endpoint
correct_answer: c
explanation: >
  The Rainbow Admin Portal includes a soft-delete mechanism with a
  retention window. Deleted user accounts can be found under Users >
  Deleted Users and restored by the administrator within the retention
  period. This preserves the user's conversation history, Bubble
  memberships, and configuration without requiring a support ticket.
```

### Question 19

```yaml
id: SUP-CERT-01-Q19
type: multiple_choice
difficulty: hard
domain: Admin Portal Basics
question: >
  An administrator wants to enforce a company-wide policy that prevents
  users from communicating with contacts outside their organization.
  Which Admin Portal setting achieves this?
options:
  a: Enable "Closed Company" mode under Organization Settings
  b: Set each user's profile to "Internal Only" individually
  c: Block all external domains in the Firewall settings
  d: Remove the "Federation" license from every user
correct_answer: a
explanation: >
  Rainbow's "Closed Company" (or "Closed Network") mode is an
  organization-level setting that restricts all users from communicating
  with contacts outside the company directory. This is a single toggle
  in Organization Settings rather than a per-user configuration, making
  it the most efficient way to enforce this policy.
```

### Question 20

```yaml
id: SUP-CERT-01-Q20
type: multiple_choice
difficulty: medium
domain: Admin Portal Basics
question: >
  Which Admin Portal feature allows an administrator to view real-time
  usage statistics such as active users, messages sent, and calls made?
options:
  a: Users > Activity Log
  b: Dashboard > Analytics
  c: Reports > Audit Trail
  d: Settings > Diagnostics
correct_answer: b
explanation: >
  The Dashboard > Analytics section provides real-time and historical usage
  statistics including active user counts, message volumes, call statistics,
  and other key metrics. The Audit Trail is focused on administrative actions
  rather than usage metrics, and Diagnostics is for troubleshooting system
  configuration.
```

---

## Domain 5: CRM Connector Support

### Question 21

```yaml
id: SUP-CERT-01-Q21
type: multiple_choice
difficulty: medium
domain: CRM Connector Support
question: >
  A customer using the Rainbow connector for Salesforce reports that
  incoming call screen pops are not appearing. The connector is installed
  and the user is logged in to both Rainbow and Salesforce. What should
  you check FIRST?
options:
  a: Whether the user has the correct Salesforce profile permissions for the Rainbow CTI adapter
  b: Whether the Salesforce instance is running the latest API version
  c: Whether the Rainbow server is experiencing high latency
  d: Whether the user's Salesforce license includes the "Service Cloud" add-on
correct_answer: a
explanation: >
  The most common cause of missing screen pops is that the Salesforce user
  profile or permission set does not include access to the Rainbow CTI
  (Computer Telephony Integration) adapter. Salesforce requires explicit
  permission grants for CTI softphone layouts. This should be the first
  checkpoint before investigating deeper technical issues.
```

### Question 22

```yaml
id: SUP-CERT-01-Q22
type: scenario
difficulty: hard
domain: CRM Connector Support
question: >
  Scenario: A ServiceNow administrator reports that the Rainbow connector
  was working yesterday but today all click-to-call buttons have disappeared
  from the ServiceNow interface. No changes were made to Rainbow. What is
  the MOST likely cause?
options:
  a: The Rainbow connector license expired overnight
  b: A ServiceNow update or customization changed the UI policy or client script that renders the click-to-call buttons
  c: The Rainbow API rate limit was exceeded causing a connector shutdown
  d: The ServiceNow instance was migrated to a new datacenter
correct_answer: b
explanation: >
  When click-to-call buttons disappear suddenly with no changes on the
  Rainbow side, the most likely cause is a change on the ServiceNow side --
  such as a platform update, UI policy change, or a modified client script
  that affects the rendering of the Rainbow integration components.
  ServiceNow updates can override or disable custom UI elements if not
  properly scoped.
```

### Question 23

```yaml
id: SUP-CERT-01-Q23
type: multiple_choice
difficulty: medium
domain: CRM Connector Support
question: >
  Which of the following CRM platforms has an officially supported
  Rainbow connector? (Select the BEST answer.)
options:
  a: Salesforce, Zendesk, and ServiceNow
  b: Salesforce, HubSpot, and Monday.com
  c: Zendesk, Freshdesk, and Jira Service Management
  d: Microsoft Dynamics only
correct_answer: a
explanation: >
  Rainbow provides officially supported CRM connectors for Salesforce,
  Zendesk, and ServiceNow. These are the primary CRM/ITSM platforms with
  maintained integrations including screen pop, click-to-call, call logging,
  and presence synchronization features.
```

### Question 24

```yaml
id: SUP-CERT-01-Q24
type: multiple_choice
difficulty: hard
domain: CRM Connector Support
question: >
  A Zendesk agent reports that Rainbow call logs are being created in
  Zendesk but the call duration always shows as "0 seconds." The calls
  are connecting and lasting several minutes. What is the MOST probable
  cause?
options:
  a: The Zendesk API rate limit is preventing the call-end event from updating the ticket
  b: The Rainbow connector is sending the call-start event but the call-end webhook is failing or not configured
  c: Zendesk does not support call duration fields in ticket creation
  d: The user's Zendesk role does not have permission to update ticket fields after creation
correct_answer: b
explanation: >
  Call duration is calculated as the difference between the call-start and
  call-end events. If the call-end webhook is misconfigured, blocked by a
  firewall, or experiencing errors, the call log is created at call-start
  but never updated with the end time -- resulting in a 0-second duration.
  Verifying the webhook endpoint and checking connector logs for failed
  call-end callbacks is the correct troubleshooting approach.
```

### Question 25

```yaml
id: SUP-CERT-01-Q25
type: scenario
difficulty: hard
domain: CRM Connector Support
question: >
  Scenario: After upgrading the Rainbow connector for Salesforce to the
  latest version, several agents report that contact records are no longer
  auto-matched on incoming calls. The screen pop shows "Unknown Caller"
  even for known contacts in Salesforce. The connector logs show
  "SOQL query returned 0 results." What should you investigate?
options:
  a: Whether the phone number format stored in Salesforce changed (e.g., E.164 vs. local format) and no longer matches the incoming caller ID format
  b: Whether the Salesforce session token expired and needs to be refreshed
  c: Whether the Rainbow server is sending the wrong caller ID
  d: Whether the agents need to clear their browser cache after the upgrade
correct_answer: a
explanation: >
  The log message "SOQL query returned 0 results" means the connector is
  querying Salesforce but the phone number format in the query does not
  match how numbers are stored in contact records. Connector upgrades can
  change the number normalization logic (e.g., switching to E.164 format
  "+33612345678" when contacts are stored as "06 12 34 56 78"). The fix
  involves verifying the number format mapping in the connector configuration
  and ensuring consistency between Rainbow caller ID format and Salesforce
  phone field format.
```

---

## Answer Key Summary

| Question | Answer | Domain                      | Difficulty |
|----------|--------|-----------------------------|------------|
| Q01      | A      | Platform Fundamentals       | Easy       |
| Q02      | B      | Platform Fundamentals       | Medium     |
| Q03      | B      | Platform Fundamentals       | Easy       |
| Q04      | C      | Platform Fundamentals       | Medium     |
| Q05      | A,B,D,E| Platform Fundamentals       | Medium     |
| Q06      | B      | Messaging & Collaboration   | Easy       |
| Q07      | C      | Messaging & Collaboration   | Medium     |
| Q08      | C      | Messaging & Collaboration   | Medium     |
| Q09      | A,B,C,E,F | Messaging & Collaboration| Hard       |
| Q10      | A      | Voice/Video Troubleshooting | Hard       |
| Q11      | C      | Voice/Video Troubleshooting | Hard       |
| Q12      | B      | Voice/Video Troubleshooting | Medium     |
| Q13      | B      | Voice/Video Troubleshooting | Hard       |
| Q14      | B      | Voice/Video Troubleshooting | Medium     |
| Q15      | B      | Voice/Video Troubleshooting | Medium     |
| Q16      | B      | Admin Portal Basics         | Easy       |
| Q17      | A      | Admin Portal Basics         | Medium     |
| Q18      | C      | Admin Portal Basics         | Medium     |
| Q19      | A      | Admin Portal Basics         | Hard       |
| Q20      | B      | Admin Portal Basics         | Medium     |
| Q21      | A      | CRM Connector Support       | Medium     |
| Q22      | B      | CRM Connector Support       | Hard       |
| Q23      | A      | CRM Connector Support       | Medium     |
| Q24      | B      | CRM Connector Support       | Hard       |
| Q25      | A      | CRM Connector Support       | Hard       |

**Difficulty Distribution:** Easy: 4 | Medium: 12 | Hard: 9
