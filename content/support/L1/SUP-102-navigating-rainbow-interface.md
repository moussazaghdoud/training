# SUP-102: Navigating the Rainbow Interface

| Field            | Value                                                      |
|------------------|------------------------------------------------------------|
| **Module ID**    | SUP-102                                                    |
| **Title**        | Navigating the Rainbow Interface                           |
| **Track**        | Support (L1 Foundation)                                    |
| **Duration**     | 45 minutes                                                 |
| **Content Types**| Reading, Screenshots, Interactive Walkthrough, Knowledge Check |
| **Prerequisites**| SUP-101: Rainbow Platform Overview                         |

## Learning Objectives

By the end of this module, you will be able to:

1. Identify and describe each major area of the Rainbow desktop client interface.
2. Explain the differences between the web client and native desktop clients.
3. Navigate the mobile client on iOS and Android, including key gesture patterns.
4. Describe the purpose and behavior of Bubbles, presence indicators, and the notification system.
5. Locate and explain the organization of settings and preferences.
6. Distinguish between the end-user interface and the administration console.

---

## 1. Desktop Client Layout

The Rainbow desktop client (Windows and macOS) follows a three-panel layout that will be familiar to users of modern messaging applications. Understanding this layout is critical for support agents because users will describe problems in terms of what they see on screen.

### 1.1 The Left Sidebar (Navigation Rail)

The far-left edge of the window contains the **navigation rail** — a vertical strip of icons that controls which view is displayed in the main area. From top to bottom, the standard icons are:

1. **Conversations** (chat bubble icon): Shows all active one-to-one and group conversations, sorted by most recent activity. This is the default landing view when the client starts.
2. **Contacts** (person icon): Displays the user's contact list, organized into directories — personal contacts, company directory, and external contacts.
3. **Bubbles** (circles icon): Lists all Bubbles (group spaces) the user belongs to, including active and archived Bubbles.
4. **Telephony** (phone icon): Shows the call log, dial pad, and voicemail. This section appears only when PBX integration is enabled (Enterprise or Rainbow Connect tier).
5. **Calendar** (calendar icon): Displays scheduled meetings and conferences. Visible when calendar integration (Outlook or Google) is configured.
6. **Files** (folder icon): A centralized view of all files shared across conversations and Bubbles, with search and filter options.

At the bottom of the navigation rail, you will find:

- **Settings** (gear icon): Opens the preferences panel.
- **Profile avatar**: Clicking the avatar opens the profile editor where the user can change their display name, photo, job title, and presence status.

### 1.2 The Contacts and Conversations Panel (Middle Column)

The middle column displays a scrollable list depending on which navigation rail item is selected. When **Conversations** is selected, this panel shows:

- A **search bar** at the top for filtering conversations by contact name, Bubble name, or message content.
- A list of conversation threads, each showing:
  - The contact's avatar and name (or Bubble name and icon)
  - A preview of the most recent message
  - A timestamp of the last activity
  - An unread message count badge (blue circle with number)
  - The contact's presence indicator (colored dot on the avatar)

When **Contacts** is selected, the panel displays:

- **Favorites**: Contacts the user has starred for quick access
- **Company Directory**: All users within the same Rainbow company, pulled from admin provisioning or LDAP sync
- **External Contacts**: Users from other Rainbow companies or personal contacts added manually
- **Network Contacts**: Users discovered through Rainbow's social networking features

### 1.3 The Conversation Area (Right Panel)

The right panel is the main content area where the active conversation or call is displayed. Its components vary depending on the context:

**During a messaging conversation:**
- **Header bar**: Shows the contact or Bubble name, presence status, and action buttons (voice call, video call, screen share, add participants)
- **Message stream**: Chronological display of messages with timestamps, read receipts (double check marks), and sender avatars in group conversations
- **Composition bar**: Text input field at the bottom with formatting controls (bold, italic, code blocks, lists), emoji picker, file attachment button, GIF picker, and message qualification tag selector
- **Typing indicator**: Shows "User is typing..." when the other party is composing a message

**During a voice or video call:**
- The conversation area transforms into the **call view** with video feeds, call duration timer, and call control buttons (mute, camera toggle, screen share, hang up, add participant)
- In a conference, the view switches between **gallery mode** (grid of video feeds) and **speaker mode** (active speaker is enlarged)

### 1.4 Call Controls

Call controls appear in the conversation header and during active calls. The primary controls are:

| Control              | Icon         | Behavior                                                              |
|----------------------|--------------|-----------------------------------------------------------------------|
| **Audio Call**       | Phone        | Initiates a WebRTC audio call to the selected contact                 |
| **Video Call**       | Camera       | Initiates a WebRTC video call to the selected contact                 |
| **Screen Share**     | Monitor      | Shares the entire screen or a specific application window             |
| **Mute**            | Microphone   | Toggles the local microphone on/off during an active call             |
| **Camera Toggle**    | Camera slash | Toggles the local camera on/off during a video call                   |
| **Hold**            | Pause        | Places the call on hold (available with PBX integration)              |
| **Transfer**        | Arrow        | Transfers the call to another user (blind or attended transfer)       |
| **DTMF Keypad**     | Grid         | Opens the dial pad for sending touch-tone signals during a call       |
| **Hang Up**         | Red phone    | Ends the current call                                                 |
| **Record**          | Circle       | Starts call recording (Enterprise tier, if enabled by admin)          |

### 1.5 The Notification Drawer

Clicking the **bell icon** in the upper-right corner of the window opens the notification drawer. This panel aggregates:

- Missed call notifications
- Bubble invitations
- Mentions (when someone uses @your-name in a Bubble)
- System notifications (scheduled maintenance, feature updates)
- File sharing notifications

Each notification includes a timestamp and a link that navigates directly to the relevant conversation or Bubble.

---

## 2. Web Client Differences and Capabilities

The Rainbow web client is accessible at **web.openrainbow.com** and runs entirely within the browser. It provides a nearly identical user experience to the desktop client, with a few important differences.

### 2.1 Feature Parity

The web client supports:

- All messaging features (one-to-one, Bubbles, file sharing, formatting)
- WebRTC audio and video calls
- Screen sharing (browser-level permission required)
- Conference participation and scheduling
- Presence management
- Contact and Bubble management

### 2.2 Differences from the Desktop Client

| Area                      | Desktop Client                           | Web Client                                |
|---------------------------|------------------------------------------|-------------------------------------------|
| **PBX integration**       | Full telephony controls                  | Limited; no desk phone pairing            |
| **System notifications**  | Native OS notifications                  | Browser notifications (requires permission)|
| **Auto-start**            | Can start with OS login                  | Must open browser and navigate to URL     |
| **File downloads**        | Direct to filesystem                     | Browser download dialog                   |
| **Screen sharing**        | Share specific app window                | Full screen or browser tab only (varies)  |
| **Performance**           | Native performance                       | Dependent on browser and available memory |
| **Keyboard shortcuts**    | Full set of OS-integrated shortcuts      | Subset; some conflict with browser shortcuts |
| **Background operation**  | Runs in system tray                      | Must keep browser tab open                |

### 2.3 When to Recommend the Web Client

- **Guest users**: External participants invited to a Bubble who do not want to install software
- **Shared or locked-down workstations**: Environments where software installation is restricted (e.g., hospital terminals, library computers)
- **Quick access**: Users who need to check messages from a borrowed device
- **Chromebook users**: Where native client installation is not available

### 2.4 Browser Requirements

The web client requires a modern, up-to-date browser:

- Google Chrome (recommended) version 90+
- Mozilla Firefox version 90+
- Microsoft Edge (Chromium-based) version 90+
- Apple Safari version 14+

WebRTC functionality (voice and video calls) performs best on Chrome and Edge.

---

## 3. Mobile Client Navigation Patterns

The Rainbow mobile client for iOS and Android adapts the three-panel desktop layout into a single-screen, tab-based navigation pattern suitable for smaller screens.

### 3.1 Bottom Tab Bar

The primary navigation on mobile is a **bottom tab bar** with the following tabs:

1. **Conversations**: List of all active chats, identical in content to the desktop conversations panel
2. **Contacts**: Company directory, favorites, and external contacts
3. **Bubbles**: List of all Bubbles the user belongs to
4. **Calls**: Call log showing recent, missed, and voicemail entries
5. **More**: Access to settings, profile, files, and calendar

### 3.2 Gesture Patterns

Mobile clients use standard platform gestures:

- **Swipe left on a conversation** (iOS) or **long press** (Android): Reveals quick actions — mute notifications, pin to top, archive, or delete
- **Pull down on conversation list**: Refreshes the conversation list and checks for new messages
- **Swipe right from left edge** (iOS): Navigates back to the previous screen
- **Tap and hold a message**: Opens the context menu with options to copy, forward, reply, react with emoji, or delete
- **Pinch to zoom**: Works on shared images and documents within conversations

### 3.3 In-Call Experience on Mobile

When a call is in progress, the mobile client displays a full-screen call interface:

- **Active speaker video** fills the screen
- **Local video preview** appears as a small, draggable thumbnail in one corner
- **Control bar at bottom**: Mute, camera toggle, speaker/Bluetooth selection, screen share, hang up
- **Participant list**: Accessible via a button in the top-right corner during group calls

On iOS, Rainbow integrates with **CallKit**, which means incoming Rainbow calls appear on the lock screen exactly like native phone calls, with the same answer/decline UI. This is an important detail for support because users sometimes do not realize they are receiving a Rainbow call rather than a cellular call.

On Android, Rainbow uses a **foreground notification** with action buttons for incoming calls. The exact appearance varies by Android version and manufacturer skin.

### 3.4 Push Notifications

Both mobile platforms rely on push notifications to alert users of incoming calls and messages when the app is in the background:

- **iOS**: Uses Apple Push Notification Service (APNs). Users must grant notification permission during first launch.
- **Android**: Uses Firebase Cloud Messaging (FCM). Notification channels can be configured in Android system settings.

A common support issue is users reporting they are not receiving notifications. The most frequent causes are:

1. Notification permission was denied during setup
2. Battery optimization is killing the app in the background (especially on Android devices from Samsung, Huawei, and Xiaomi)
3. Do Not Disturb mode is active on the device
4. The user is signed in on multiple devices and the notification was delivered to another device first

### 3.5 Mobile-Specific Features

- **Share extension**: Users can share files, photos, and links from other apps directly into a Rainbow conversation or Bubble using the OS share sheet
- **Picture-in-picture**: During a video call, switching to another app shows the video call in a small floating window (iOS 15+, Android 12+)
- **Contact integration**: Rainbow can sync contacts with the device address book (with user permission) to show Rainbow availability for phone contacts

---

## 4. Key UX Patterns

### 4.1 Bubbles (Group Conversations)

Bubbles are Rainbow's implementation of persistent group communication spaces. They are the most distinctive UX concept in Rainbow and a frequent topic in support interactions.

**What is a Bubble?**
A Bubble is a named group space where members can exchange messages, share files, and initiate group calls. Unlike ad hoc group chats in some platforms, Bubbles are designed to be persistent and topic-oriented — similar to channels in Slack or spaces in Google Chat.

**Bubble characteristics:**
- Each Bubble has a **name**, an optional **description**, and an optional **custom avatar**
- A Bubble can contain up to **300 members**
- Members can be from the same company or **external guests** from other Rainbow organizations or even non-Rainbow users (who receive an email invitation to join via the web client)
- Each Bubble has an **owner** (the creator) and can have **moderators** with elevated permissions
- Bubbles maintain a **full message history** that is accessible to all members, including those who join after the conversation began
- Bubbles can be **public** (discoverable by anyone in the company) or **private** (invitation only)

**Bubble member roles:**
| Role          | Can post messages | Can add members | Can remove members | Can delete Bubble | Can change settings |
|---------------|-------------------|-----------------|--------------------|--------------------|---------------------|
| Owner         | Yes               | Yes             | Yes                | Yes                | Yes                 |
| Moderator     | Yes               | Yes             | Yes                | No                 | Limited             |
| Member        | Yes               | No              | No                 | No                 | No                  |
| Guest         | Yes               | No              | No                 | No                 | No                  |

### 4.2 Presence Indicators

Presence is displayed as a colored dot on the user's avatar throughout the interface. Rainbow uses the following presence states:

| State         | Color        | Meaning                                                                 |
|---------------|-------------|-------------------------------------------------------------------------|
| **Available** | Green       | User is active and ready to communicate                                 |
| **Busy**      | Red         | User is occupied (manually set or triggered by an active call)          |
| **DND**       | Red + bar   | Do Not Disturb — all notifications are suppressed                       |
| **Away**      | Yellow      | User has been inactive for a configured period (default: 5 minutes)     |
| **Invisible** | Gray        | User appears offline to others but can still use the platform           |
| **Offline**   | Gray hollow | User is not connected to Rainbow on any device                          |

**Automatic presence transitions:**
- **Available to Away**: Triggered after the configured inactivity timeout (no mouse/keyboard activity on desktop, or app moved to background on mobile)
- **Available to Busy**: Triggered automatically when the user is in an active call or when a linked calendar shows a meeting in progress
- **Any state to DND**: Must be set manually by the user or triggered by a calendar event marked as "Busy" or "Do Not Disturb"

**Calendar-synced presence** is an important feature to understand. When enabled, Rainbow reads the user's calendar (Outlook or Google Calendar) and automatically adjusts presence:
- A calendar event marked "Busy" sets Rainbow presence to **Busy**
- A calendar event marked "Free" does not change presence
- A calendar event with "Do Not Disturb" in the title or notes sets presence to **DND**
- The user's custom status message can automatically display the calendar event title

### 4.3 Notification System

Rainbow's notification system operates on multiple levels:

1. **In-app badges**: Unread message counts on conversation items and navigation rail icons
2. **In-app banner**: A toast notification that slides in at the top of the window for a few seconds when a new message arrives in a conversation that is not currently active
3. **OS-level notifications**: Desktop notifications (Windows notification center, macOS notification center) and mobile push notifications
4. **Sound alerts**: Configurable sounds for incoming calls, messages, and mentions

**Notification preferences** can be configured at three levels:
- **Global**: Master settings that apply to all conversations
- **Per-conversation**: Mute or customize notifications for a specific one-to-one chat or Bubble
- **Schedule-based**: Quiet hours during which notifications are suppressed (e.g., outside business hours)

---

## 5. Settings and Preferences Organization

The settings panel is organized into logical sections. Knowing where to direct users is an essential support skill.

### 5.1 General Settings

- **Language**: Interface language selection (Rainbow supports 15+ languages)
- **Theme**: Light mode, dark mode, or system-matched
- **Startup behavior**: Launch at system login, start minimized, restore last session
- **Keyboard shortcuts**: View and customize shortcut bindings

### 5.2 Account Settings

- **Profile**: Display name, avatar photo, job title, department, location, phone numbers
- **Presence**: Default away timeout, calendar integration configuration, custom status messages
- **Password and security**: Password change, two-factor authentication (2FA) setup

### 5.3 Notifications

- **Message notifications**: Enable/disable, sound selection, banner style
- **Call notifications**: Ringtone selection, vibration settings (mobile)
- **Quiet hours**: Schedule for suppressing notifications
- **Mention behavior**: Choose whether @all mentions trigger notifications

### 5.4 Audio and Video

- **Input device**: Select microphone (if multiple available)
- **Output device**: Select speaker or headset
- **Ringtone device**: Select which device plays the ringtone (can differ from call audio)
- **Camera**: Select video input device
- **Audio processing**: Echo cancellation, noise reduction, automatic gain control toggles
- **Bandwidth**: Quality presets for constrained network environments

### 5.5 Telephony (Enterprise/Connect Only)

- **PBX pairing**: Status of the desk phone association
- **Call forwarding rules**: Unconditional, on busy, on no answer
- **Voicemail**: Access and configuration
- **Single number reach**: Enable/disable simultaneous ringing

### 5.6 Privacy

- **Read receipts**: Show or hide when you have read messages
- **Typing indicators**: Show or hide when you are typing
- **Profile visibility**: Control who can see your profile information
- **Block list**: Manage blocked contacts

### 5.7 About

- **Version information**: Client version number, build date
- **Diagnostic logs**: Generate and export logs for support purposes
- **Legal**: Terms of service, privacy policy, open-source licenses

---

## 6. Admin vs. User Interface Differences

Rainbow has two distinct interfaces: the **end-user client** (described above) and the **administration portal**.

### 6.1 The Administration Portal

Accessible at **admin.openrainbow.com**, the admin portal is a web-based interface used by company administrators to manage the Rainbow deployment. It is completely separate from the end-user client.

**Key sections of the admin portal:**

- **Dashboard**: Overview of company usage statistics — active users, call minutes, storage consumption, license utilization
- **Users**: User provisioning, role assignment, license management, bulk import via CSV, LDAP/AD sync configuration
- **Groups**: Organizational groups for applying policies (e.g., all users in "Sales" get conference scheduling enabled)
- **Company Settings**: Company name, domain, branding (custom logo), default user settings
- **Telephony**: PBX system registration, trunk configuration, numbering plans, call routing
- **Security**: Password policies, 2FA enforcement, IP allowlisting, session timeout settings
- **Subscriptions**: View current license counts, usage, and subscription tier details
- **Logs and Reports**: Activity logs, audit trails, call detail records (CDRs)

### 6.2 Admin Roles

Rainbow supports multiple levels of administrative access:

| Role                | Scope                                                        |
|---------------------|--------------------------------------------------------------|
| **Company Admin**   | Full control over all company settings, users, and policies  |
| **User Admin**      | Can manage users (create, edit, delete) but not company settings |
| **Support Admin**   | Read-only access to user details and logs for troubleshooting |
| **Super Admin**     | ALE-internal role with cross-company administrative access    |

### 6.3 How Admin Actions Affect the User Experience

Understanding the admin portal is important for support agents because many user issues are actually caused by admin-level configurations:

- A user cannot make external calls: Check if their admin has enabled PSTN or PBX access for their account.
- A user does not see the Telephony tab: Their subscription tier or admin settings may not include telephony features.
- A user cannot create Bubbles: The admin may have restricted Bubble creation to administrators only.
- A user's presence is always showing as Away: Calendar integration may be misconfigured at the admin level.

When troubleshooting, always consider whether the issue originates from **user-level settings** (things the user can control) or **admin-level policies** (things only the administrator can change).

---

## Key Concepts Summary

| Concept                  | Definition                                                                                       |
|--------------------------|--------------------------------------------------------------------------------------------------|
| **Navigation Rail**      | The vertical icon strip on the left side of the desktop client for switching between views        |
| **Bubble**               | A persistent group communication space supporting up to 300 members with message history          |
| **Presence Indicator**   | Colored dot on avatars showing availability: green (available), red (busy), yellow (away), gray (offline/invisible) |
| **CallKit**              | iOS framework that makes Rainbow calls appear like native phone calls on iPhone                   |
| **Calendar-synced Presence** | Automatic presence adjustment based on calendar events from Outlook or Google Calendar        |
| **Admin Portal**         | Web-based interface at admin.openrainbow.com for company administrators to manage users and settings |
| **Notification Levels**  | In-app badges, in-app banners, OS notifications, and sound alerts — configurable per conversation |

---

## Practice Exercise

**Scenario**: A user calls support and says, "I just started using Rainbow and I'm confused. I can see my coworkers in a list, but I cannot figure out how to create a group chat. Also, my boss says she can see some kind of phone tab that I don't have. And I keep missing messages because I don't get any pop-ups."

**Task**: Walk through the following steps as if you were guiding the user:

1. Explain where to find the Bubbles section in the navigation rail and how to create a new Bubble.
2. Explain why the user might not see the Telephony tab (consider subscription tier and admin settings).
3. Walk the user through checking their notification settings — both in Rainbow's preferences and at the OS level.
4. Identify whether the user should be directed to their company administrator for any of these issues.

Write your response as a script of what you would say to the user on the call.

---

## Knowledge Check

**Question 1**: What is the maximum number of members allowed in a single Bubble?

- A) 50
- B) 100
- C) 200
- D) 300

**Answer**: D — A Bubble can contain up to 300 members, including both internal company users and external guests.

---

**Question 2**: A user on iOS reports that incoming Rainbow calls look exactly like regular phone calls. What technology causes this behavior?

- A) VoIP Push
- B) CallKit integration
- C) SIP protocol
- D) WebRTC fallback

**Answer**: B — Rainbow integrates with Apple's CallKit framework on iOS, which causes incoming Rainbow calls to appear on the lock screen and in the call UI exactly like native cellular calls.

---

**Question 3**: Where does a company administrator manage user accounts and telephony settings?

- A) In the Rainbow desktop client under Settings
- B) At admin.openrainbow.com
- C) In the Rainbow mobile app under More > Admin
- D) At web.openrainbow.com/admin

**Answer**: B — The Rainbow administration portal is a separate web interface accessible at admin.openrainbow.com. It is distinct from the end-user client.

---

**Question 4**: A user's presence shows as "Away" even though they are actively using their computer. Which of the following could explain this?

- A) Their calendar shows a meeting marked as "Free"
- B) Their calendar shows a meeting marked as "Busy"
- C) They have set their status to Invisible
- D) They have disabled calendar integration

**Answer**: B — If calendar-synced presence is enabled and the calendar shows a "Busy" meeting, Rainbow may set the user's presence to Busy (not Away). However, a misconfigured calendar sync could cause unexpected presence states. The most common cause of persistent "Away" is the inactivity timeout being triggered — but calendar misconfiguration at the admin level should also be investigated.

---

**Question 5**: Which of the following is NOT a difference between the web client and the desktop client?

- A) The web client cannot pair with a PBX desk phone
- B) The web client requires the browser tab to remain open
- C) The web client does not support instant messaging
- D) The web client uses browser-level notification permissions

**Answer**: C — The web client fully supports instant messaging. The other three options are genuine differences: the web client cannot pair with a PBX desk phone, it must keep the browser tab open to function, and it relies on the browser's notification permission system rather than native OS notifications.
