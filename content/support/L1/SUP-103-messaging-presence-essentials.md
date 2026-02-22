# SUP-103: Messaging & Presence Essentials

| Field            | Value                                                      |
|------------------|------------------------------------------------------------|
| **Module ID**    | SUP-103                                                    |
| **Title**        | Messaging & Presence Essentials                            |
| **Track**        | Support (L1 Foundation)                                    |
| **Duration**     | 30 minutes                                                 |
| **Content Types**| Reading, Interactive Demo, Knowledge Check                 |
| **Prerequisites**| SUP-101, SUP-102                                           |

## Learning Objectives

By the end of this module, you will be able to:

1. Explain how instant messaging works in Rainbow, including formatting and message qualification.
2. Create and manage Bubbles, including adding members and inviting external guests.
3. Describe each presence state, what triggers it, and how calendar synchronization affects presence.
4. Identify file sharing capabilities, including supported file types, size limits, and storage quotas by tier.
5. Use message history and search to locate past conversations and shared files.

---

## 1. Instant Messaging

### 1.1 Sending Messages

Instant messaging is the most-used feature in Rainbow. Messages can be sent in two contexts:

- **One-to-one conversations**: Direct messages between two users. These conversations are created automatically the first time you message someone.
- **Bubble conversations**: Group messages within a Bubble. All members of the Bubble see every message.

To send a message, the user selects a conversation from the list (or starts a new one by searching for a contact), types in the composition bar at the bottom of the conversation area, and presses **Enter** (or taps the send button on mobile).

**Message delivery states** are indicated by check marks:
- **One check mark (gray)**: Message sent to the Rainbow server
- **Two check marks (gray)**: Message delivered to the recipient's device
- **Two check marks (blue)**: Message read by the recipient (if read receipts are enabled)

In Bubble conversations, read receipts show how many members have read the message rather than individual per-person indicators.

### 1.2 Message Formatting

Rainbow supports rich text formatting in messages using both a toolbar and Markdown-like shortcuts:

| Format          | Toolbar Button | Keyboard Shortcut       | Markdown Syntax        |
|-----------------|---------------|-------------------------|------------------------|
| **Bold**        | B             | Ctrl+B (Cmd+B on Mac)  | `**text**`             |
| *Italic*        | I             | Ctrl+I (Cmd+I on Mac)  | `*text*`               |
| ~~Strikethrough~~ | S           | --                      | `~~text~~`             |
| `Code (inline)` | <>           | --                      | `` `code` ``           |
| Code block      | </>           | --                      | ``` ```code``` ```     |
| Bulleted list   | List icon     | --                      | `- item`               |
| Numbered list   | Numbered icon | --                      | `1. item`              |
| Hyperlink       | Link icon     | --                      | `[text](url)`          |

Additionally, users can:
- **Mention** other Bubble members by typing `@` followed by the person's name. The mentioned user receives a highlighted notification.
- **Use @all** to notify every member of a Bubble. This is available to Bubble owners and moderators and can be disabled by admin policy.
- **Insert emoji** via the emoji picker button or by typing standard emoji shortcodes (e.g., `:smile:` renders as a smiley face).
- **Share GIFs** through the integrated GIF picker (powered by a third-party service).

### 1.3 Message Qualification Tags

Message qualification tags are a distinctive Rainbow feature that allows users to categorize their messages semantically. When composing a message, the user can select a tag that appears as a colored label on the message.

Available qualification tags include:

| Tag            | Color  | Purpose                                                      |
|----------------|--------|--------------------------------------------------------------|
| **Information**| Blue   | General informational message                                |
| **Important**  | Orange | Message that requires attention                              |
| **Urgent**     | Red    | Time-sensitive message requiring immediate action            |
| **Question**   | Purple | A question the sender wants answered                         |
| **Idea**       | Green  | A suggestion or proposal for the group                       |
| **Action**     | Yellow | A task or to-do for one or more recipients                   |

These tags are particularly useful in active Bubbles where many messages flow quickly. Team members can filter the conversation to show only messages with a specific tag — for example, viewing only "Action" items to see outstanding tasks.

**Support relevance**: Users sometimes report that they cannot find the qualification tag feature. It is accessed via a small tag icon in the composition bar, to the left of the send button. It is available only on Business tier and above.

### 1.4 Message Actions

Users can perform several actions on sent and received messages:

- **Reply**: Creates a threaded reply linked to the original message, helping keep conversations organized
- **Forward**: Sends the message to another contact or Bubble
- **Copy**: Copies the message text to the clipboard
- **Edit**: The sender can edit their own message after sending (an "edited" label appears on the message)
- **Delete**: The sender can delete their own message. In one-to-one conversations, the message is removed for both parties. In Bubbles, the message is removed for all members. Moderators and owners can delete any message in a Bubble.
- **React**: Add an emoji reaction to a message. Reactions appear as small emoji badges below the message with a count.
- **Bookmark**: Save the message for later reference in a personal bookmarks list

### 1.5 Special Message Types

Beyond plain text, Rainbow supports several special message types:

- **Location sharing**: On mobile, users can share their current GPS location as an interactive map card
- **Contact cards**: Share a Rainbow contact's profile as a structured card that others can click to start a conversation
- **Voice messages**: On mobile, users can record and send short audio messages by pressing and holding the microphone icon
- **Stickers**: Illustrated sticker packs available alongside the emoji picker

---

## 2. Bubbles: Group Conversations in Depth

### 2.1 Creating a Bubble

To create a Bubble on the desktop client:

1. Click the **Bubbles** icon in the navigation rail
2. Click the **+ (Create Bubble)** button at the top of the Bubbles panel
3. Enter a **name** for the Bubble (required, maximum 255 characters)
4. Optionally add a **description** (appears in the Bubble header)
5. Optionally set a **custom avatar** (image upload)
6. Set the **visibility**: Private (invitation only) or Public (discoverable by company members)
7. Click **Create**

The Bubble is created immediately with the creator as the owner.

### 2.2 Adding Members

After creating a Bubble, the owner can add members:

1. Open the Bubble
2. Click the **participants icon** in the conversation header (or the "+" icon)
3. Search for users by name or email
4. Select users and click **Add**

**Member limits:**
- A single Bubble supports up to **300 members**
- There is no hard limit on the number of Bubbles a user can belong to, but performance may degrade if a user is in hundreds of active Bubbles

### 2.3 Inviting External Guests

One of Rainbow's strengths is the ability to include **external users** in Bubbles. External guests can be:

- **Users from other Rainbow companies**: They are added by searching for their email address. They join the Bubble in their own Rainbow client.
- **Non-Rainbow users**: They receive an **email invitation** with a link to join the Bubble via the web client. They create a free Essential account (or use a temporary guest session, depending on the admin configuration).

External guests are marked with a **globe icon** on their avatar in the Bubble member list, making it clear to all participants that someone from outside the organization is present.

**Security note**: Administrators can control whether their users are allowed to invite external guests. If a user reports they cannot add external members, the admin may have disabled this feature.

### 2.4 Bubble Management

**Owner actions:**
- Rename the Bubble
- Change the description and avatar
- Promote members to moderator
- Remove members (including moderators)
- Archive the Bubble (preserves history but marks it inactive)
- Delete the Bubble permanently (irreversible, all history is lost)
- Transfer ownership to another member

**Moderator actions:**
- Add and remove members
- Delete messages from any member
- Pin important messages to the top of the conversation

**Archiving vs. Deleting:**
- **Archive**: The Bubble moves to the "Archived" section. Members can still read the history, but no new messages can be posted. The Bubble can be reactivated by the owner.
- **Delete**: The Bubble and all its content (messages, files) are permanently removed. This action cannot be undone.

### 2.5 Bubble Conferences

Any member of a Bubble can initiate a group audio or video call within the Bubble:

1. Open the Bubble
2. Click the **phone icon** (audio) or **camera icon** (video) in the conversation header
3. All Bubble members receive a notification to join the call
4. Members can join or decline individually

The call appears as an event within the Bubble conversation stream. Members who were not online when the call started can join later by clicking the "Join call" banner that remains active in the Bubble during the conference.

---

## 3. Presence States

### 3.1 Presence State Definitions

Presence is a real-time indicator of a user's availability and willingness to communicate. Rainbow implements the following presence states:

**Available (Green)**
The user is online and ready to communicate. This is the default state when a user logs in and is actively using Rainbow. All notifications are delivered normally.

**Busy (Red)**
The user is occupied. This state can be set manually by the user or triggered automatically by:
- An active phone call (the presence switches to Busy when a call starts and returns to the previous state when the call ends)
- A calendar event marked as "Busy" (when calendar sync is enabled)
- Manual selection by the user

When a user is Busy, they still receive all notifications, but the visual indicator tells others that the user may not respond immediately.

**Do Not Disturb / DND (Red with horizontal bar)**
The user has explicitly requested not to be disturbed. DND differs from Busy in a critical way: **notifications are suppressed**. When in DND mode:
- No desktop or mobile notifications are delivered
- No sound alerts play
- Incoming calls may go directly to voicemail (if configured)
- The user can still manually check conversations and will see unread message badges

DND can be set manually or triggered by a calendar event explicitly configured to trigger DND.

**Away (Yellow/Orange)**
The user is online but has been inactive for a period. This state is triggered automatically:
- On desktop: After the configured inactivity timeout (default 5 minutes of no mouse or keyboard activity)
- On mobile: When the app moves to the background

The Away state returns to Available when the user resumes activity.

**Invisible (Gray — same as offline)**
The user chooses to appear offline to other users while retaining full access to Rainbow. When Invisible:
- Other users see the person as offline (gray dot)
- The Invisible user can read messages, participate in conversations, and see others' presence
- Incoming calls may or may not ring depending on the platform and configuration

Invisible mode is a **manual-only** state. It is never set automatically.

### 3.2 Presence Priority and Conflict Resolution

When multiple presence triggers conflict, Rainbow uses the following priority order (highest to lowest):

1. **DND** (manual or calendar-triggered)
2. **Busy** (active call)
3. **Busy** (manual or calendar-triggered)
4. **Away** (inactivity timeout)
5. **Available** (default active state)
6. **Invisible** (manual override — always honored regardless of other triggers)

For example, if a user manually sets their presence to Busy and then an inactivity timeout triggers, the presence remains Busy (not Away) because manual Busy has higher priority than automatic Away.

### 3.3 Calendar-Synced Presence

Calendar synchronization is a powerful feature that automates presence management based on the user's schedule. Rainbow integrates with:

- **Microsoft Outlook / Exchange** (via Exchange Web Services or Microsoft Graph API)
- **Google Calendar** (via Google Workspace integration)

**How it works:**

1. The user (or admin) connects Rainbow to their calendar service in settings
2. Rainbow reads the user's calendar in real time
3. When a calendar event starts:
   - If the event is marked **Busy**: Presence changes to **Busy** and optionally displays the event title as a custom status
   - If the event is marked **Free**: No presence change
   - If the event is marked **Out of Office**: Presence changes to **Busy** with an optional "Out of Office" status message
4. When the calendar event ends, presence reverts to the previous manual or automatic state

**Common support issues with calendar presence:**
- "My presence is stuck on Busy" — Check for an all-day calendar event marked as Busy, or a recurring event that has not ended
- "Calendar sync is not working" — Verify the calendar connection in settings, check that the OAuth token has not expired, and confirm the admin has enabled calendar integration
- "My custom status keeps changing" — Calendar sync may be overwriting the status with event titles; this can be toggled off in presence settings

### 3.4 Custom Status Messages

In addition to the presence state (the colored dot), users can set a **custom status message** — a short text string that appears next to their name. Examples:

- "In a meeting until 3pm"
- "Working from home"
- "On vacation — back Jan 15"
- "Focusing — slow to respond"

Custom status messages can be set manually or populated automatically from calendar event titles. They have no effect on notification behavior — only the presence state (Available, Busy, DND, Away, Invisible) controls notifications.

---

## 4. File Sharing

### 4.1 How to Share Files

Files can be shared in any conversation (one-to-one or Bubble) using several methods:

- **Attachment button**: Click the paperclip icon in the composition bar, then browse and select a file from the filesystem
- **Drag and drop**: Drag a file from the file explorer (Finder on Mac) directly into the conversation area
- **Paste from clipboard**: Copy an image and paste it directly into the composition bar (Ctrl+V / Cmd+V)
- **Mobile share extension**: Use the OS share sheet to send a file from another app to a Rainbow conversation

### 4.2 Supported File Types

Rainbow supports sharing of virtually any file type. The platform does not restrict uploads based on file extension. However, **inline preview** is available only for certain file types:

| Category          | Inline Preview Supported | File Types                                      |
|-------------------|--------------------------|--------------------------------------------------|
| **Images**        | Yes                      | JPEG, PNG, GIF, BMP, TIFF, WebP, SVG            |
| **Videos**        | Yes (streaming player)   | MP4, MOV, AVI, WebM                             |
| **Audio**         | Yes (inline player)      | MP3, WAV, OGG, AAC                              |
| **Documents**     | Yes (viewer)             | PDF                                              |
| **Office files**  | Preview thumbnail         | DOCX, XLSX, PPTX, DOC, XLS, PPT                 |
| **Text files**    | Yes                      | TXT, CSV, JSON, XML, HTML, MD                    |
| **Archives**      | No (download only)       | ZIP, RAR, 7Z, TAR, GZ                           |
| **Other**         | No (download only)       | Any other file type                              |

Files that do not support inline preview are displayed as a download card showing the filename, file size, and a download button.

### 4.3 File Size Limits and Storage Quotas

File size limits and storage quotas vary by subscription tier:

| Tier         | Maximum Single File Size | Total Storage Per User | Total Storage Per Company |
|--------------|--------------------------|------------------------|---------------------------|
| **Essential**| 100 MB                   | 1 GB                   | --                        |
| **Business** | 100 MB                   | 5 GB                   | Pooled, varies by contract|
| **Enterprise**| 100 MB                  | 10 GB                  | Pooled, varies by contract|
| **Connect**  | 100 MB                   | 5 GB                   | Pooled, varies by contract|
| **Hub**      | N/A (API-dependent)      | Varies by plan         | Varies by plan            |

**Important notes for support:**
- When a user hits their storage quota, they will see an error message when attempting to upload a new file. The error reads: "Storage limit reached. Please delete some files or contact your administrator."
- Files shared in Bubbles count against the storage quota of the **sender**, not the Bubble or the recipients.
- Administrators can view storage usage per user in the admin portal under the Users section.
- Deleted files are moved to a trash state and may not immediately free up quota. Permanent deletion (emptying trash) may take up to 24 hours to reflect in quota calculations.

### 4.4 File Management

Users can manage their shared files from the **Files** section (accessible via the navigation rail):

- **View all files**: A chronological list of all files the user has sent or received, across all conversations
- **Filter by type**: Filter by images, documents, videos, audio, or other
- **Filter by conversation**: Show files from a specific conversation or Bubble
- **Search by filename**: Text search across filenames
- **Download**: Download any file to the local device
- **Delete**: Delete files the user has uploaded (removes from the server and from all recipients' view)

### 4.5 File Security

- Files are encrypted in transit using TLS 1.2+
- Files are encrypted at rest using AES-256
- Files shared in a Bubble are accessible only to current members of that Bubble
- If a member is removed from a Bubble, they lose access to all files shared in that Bubble
- Administrators can configure data loss prevention (DLP) policies that block sharing of files containing sensitive patterns (e.g., credit card numbers, social security numbers) — this is an Enterprise tier feature

---

## 5. Message History and Search

### 5.1 Message Retention

Rainbow retains message history according to the following rules:

- **Cloud-stored messages**: All messages are stored on Rainbow's servers and synchronized across all of the user's devices
- **Retention period**: By default, messages are retained indefinitely for Business and Enterprise tiers. Essential tier retention may be limited (check current policy).
- **Admin-configurable retention**: Enterprise administrators can configure message retention policies that automatically delete messages older than a specified period (e.g., 90 days, 1 year)
- **Export**: Administrators can request data exports for compliance purposes

### 5.2 Search Functionality

Rainbow provides a global search feature accessible from the search bar at the top of the conversations panel.

**Search capabilities:**
- **Contact search**: Find users by name, email address, job title, or department
- **Message search**: Find messages containing specific keywords or phrases across all conversations
- **File search**: Find shared files by filename
- **Bubble search**: Find Bubbles by name or description

**Search behavior:**
- Results are returned in relevance order with the most recent matches first
- Search is performed across all conversations the user has access to (one-to-one and Bubbles)
- The search index is updated in near real-time (new messages become searchable within seconds)
- Search is **not case-sensitive** for message content
- Search supports partial word matching (e.g., searching "meet" will find "meeting" and "meetings")

**Advanced search filters** (available on desktop and web):
- **Date range**: Filter results to a specific time period
- **Sender**: Filter messages by the person who sent them
- **Conversation**: Limit search to a specific conversation or Bubble
- **File type**: When searching for files, filter by type (images, documents, etc.)

### 5.3 Navigating to Search Results

When a user clicks a search result:
- The conversation opens and scrolls to the exact message that matched the search
- The matching text is highlighted within the message
- The user can scroll up or down from the result to see surrounding context
- A "Jump to latest" button appears at the bottom of the conversation to return to the most recent messages

---

## Key Concepts Summary

| Concept                      | Definition                                                                                   |
|------------------------------|----------------------------------------------------------------------------------------------|
| **Message Qualification Tag**| Colored labels (Information, Important, Urgent, Question, Idea, Action) applied to messages for categorization |
| **Read Receipts**            | Check marks indicating message sent, delivered, and read status                              |
| **Bubble**                   | Persistent group communication space for up to 300 members with full message history          |
| **External Guest**           | A user from outside the company invited into a Bubble, marked with a globe icon               |
| **Presence State**           | Real-time availability indicator: Available, Busy, DND, Away, Invisible, Offline              |
| **Calendar-Synced Presence** | Automatic presence updates based on calendar events from Outlook or Google Calendar           |
| **DND (Do Not Disturb)**     | Presence state that suppresses all notifications                                              |
| **Storage Quota**            | Per-user file storage limit that varies by subscription tier                                  |
| **Message Retention**        | Server-side storage of message history, configurable by Enterprise administrators             |

---

## Practice Exercise

**Scenario 1 — Messaging**:
You are testing Rainbow's messaging features. Perform the following tasks in a test environment:

1. Send a one-to-one message to a colleague using bold and italic formatting.
2. Create a new Bubble named "Training Exercise" with a description of "Practice Bubble for SUP-103."
3. Add at least two internal members to the Bubble.
4. Send a message in the Bubble with the "Action" qualification tag that says: "Please review the attached document by end of day."
5. Reply to your own message using the threaded reply feature.
6. Share a PDF file in the Bubble and verify that it shows an inline preview.

**Scenario 2 — Presence**:
1. Set your presence to each of the five states (Available, Busy, DND, Away, Invisible) and observe how your avatar appears to others.
2. Ask a colleague to send you a message while you are in DND mode. Verify that you do not receive a desktop notification but the unread badge still appears.
3. If you have calendar integration configured, create a 15-minute test calendar event marked as "Busy" and observe your Rainbow presence change automatically.

---

## Knowledge Check

**Question 1**: A user in a Bubble sends a message with the "Urgent" qualification tag. What color label appears on the message?

- A) Blue
- B) Orange
- C) Red
- D) Yellow

**Answer**: C — The Urgent qualification tag displays as a red label on the message, indicating time-sensitive content requiring immediate action.

---

**Question 2**: What is the maximum file size a user can share in a single upload on the Business tier?

- A) 25 MB
- B) 50 MB
- C) 100 MB
- D) 250 MB

**Answer**: C — The maximum single file upload size is 100 MB across all subscription tiers. The difference between tiers is the total storage quota, not the per-file size limit.

---

**Question 3**: A user sets their presence to Do Not Disturb (DND). A colleague sends them an instant message. What happens?

- A) The message is blocked and never delivered
- B) The message is delivered but no notification sound or banner appears; unread badges still show
- C) The message is delivered with a delay after DND ends
- D) The message bounces back to the sender with a "user unavailable" notice

**Answer**: B — DND suppresses notification sounds and banners, but messages are still delivered to the server and the client. Unread message badges are still displayed. The user will see the messages when they open the conversation.

---

**Question 4**: An external guest has been invited to a Bubble. How can other members identify that this person is from outside the company?

- A) Their messages appear in a different color
- B) A globe icon appears on their avatar
- C) Their name is displayed in italics
- D) A warning banner appears at the top of the Bubble

**Answer**: B — External guests are identified by a globe icon overlaid on their avatar in the Bubble member list and in the conversation stream. This visual indicator helps members remain aware that someone from outside the organization is present.

---

**Question 5**: A user searches for "budget report" in the Rainbow search bar. Which of the following will the search return?

- A) Only messages containing the exact phrase "budget report"
- B) Messages containing "budget" or "report" in any conversation the user has access to
- C) Only files named "budget report"
- D) Only messages in the currently open conversation

**Answer**: B — Rainbow's search performs a keyword search across all conversations the user has access to. It matches messages containing the search terms and returns results ranked by relevance with the most recent first. The search is not limited to the current conversation.
