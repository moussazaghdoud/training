# SUP-104: Voice & Video Basics

| Field            | Value                                                      |
|------------------|------------------------------------------------------------|
| **Module ID**    | SUP-104                                                    |
| **Title**        | Voice & Video Basics                                       |
| **Track**        | Support (L1 Foundation)                                    |
| **Duration**     | 45 minutes                                                 |
| **Content Types**| Reading, Video Demo, Interactive Lab, Knowledge Check      |
| **Prerequisites**| SUP-101, SUP-102                                           |

## Learning Objectives

By the end of this module, you will be able to:

1. Explain how peer-to-peer WebRTC calls work in Rainbow, including initiating, accepting, and transferring calls.
2. Describe the audio and video conferencing capabilities, including participant limits and video stream management.
3. Guide users through screen sharing on both desktop and mobile platforms.
4. Identify and explain conference moderation controls available to organizers.
5. Interpret call quality indicators and understand common quality issues.
6. Describe the recording and transcription features powered by AI.

---

## 1. Peer-to-Peer WebRTC Calls

### 1.1 What Is WebRTC?

WebRTC (Web Real-Time Communication) is the underlying technology that powers Rainbow's voice and video calls. It is an open standard supported by all major browsers and operating systems. Key characteristics of WebRTC in Rainbow:

- **No plugins required**: Calls work directly in the browser (web client) or through the native client without additional software
- **Peer-to-peer when possible**: For one-to-one calls, audio and video data flows directly between the two participants' devices when network conditions allow, reducing latency
- **TURN relay fallback**: When direct peer-to-peer connection is not possible (e.g., due to restrictive firewalls or NAT configurations), Rainbow's TURN (Traversal Using Relays around NAT) servers relay the media
- **Encrypted**: All WebRTC media streams are encrypted using SRTP (Secure Real-time Transport Protocol) with DTLS key exchange

### 1.2 Initiating a Call

There are multiple ways to start a call in Rainbow:

**From a conversation (desktop or web):**
1. Open the conversation with the contact
2. Click the **phone icon** for an audio call or the **camera icon** for a video call in the conversation header
3. The recipient receives an incoming call notification with Accept and Decline buttons

**From the contact list:**
1. Hover over a contact's name
2. Click the phone or camera icon that appears in the quick-action overlay

**From the dial pad (telephony users):**
1. Navigate to the **Telephony** section
2. Open the dial pad
3. Enter a phone number (for PSTN calls via PBX) or a Rainbow extension
4. Click the call button

**From the search bar:**
1. Type a contact's name in the global search bar
2. Click the phone or camera icon next to the search result

**On mobile:**
1. Tap on a contact or conversation
2. Tap the phone or camera icon in the conversation header
3. Alternatively, tap and hold a contact's name for the quick-action menu

### 1.3 Accepting and Declining Calls

When a call comes in, the recipient sees an **incoming call notification** that varies by platform:

| Platform    | Notification Type                                                  |
|-------------|---------------------------------------------------------------------|
| **Windows** | A pop-up window appears (even if Rainbow is minimized) with the caller's name, avatar, and Accept/Decline buttons |
| **macOS**   | Similar pop-up window with native macOS notification styling        |
| **Web**     | A browser notification (if permitted) and an in-app banner          |
| **iOS**     | CallKit full-screen notification on lock screen; in-app banner if unlocked |
| **Android** | Full-screen notification or heads-up notification depending on settings |

**Call response options:**
- **Accept (audio)**: Answers the call with audio only
- **Accept (video)**: Answers the call with both audio and video (available when the caller initiated a video call)
- **Decline**: Rejects the call; the caller hears a busy signal or is redirected per call forwarding rules
- **Decline with message**: Sends a predefined text message to the caller (e.g., "I'll call you back in 5 minutes") — available on mobile clients

If the recipient does not answer within the timeout period (typically 30 seconds), the call is treated as unanswered and appears as a missed call in the recipient's call log.

### 1.4 During a Call

Once a call is connected, the following controls are available:

**Audio controls:**
- **Mute/Unmute microphone**: Toggles the local microphone. When muted, a visual indicator shows on the other participant's screen
- **Speaker/device selection**: Switch between speaker, headset, or Bluetooth device during the call (click the arrow next to the microphone icon)
- **DTMF dial pad**: Open the touch-tone keypad for interacting with IVR systems or conference bridges

**Video controls:**
- **Camera on/off**: Toggle the local camera feed. Turning off the camera does not end the call; it continues as audio-only
- **Camera selection**: Switch between cameras (e.g., laptop built-in camera and external USB webcam)
- **Self-view**: A small preview of your own video feed, which can be repositioned by dragging

**Call management:**
- **Hold**: Places the call on hold (the other party hears hold music or silence). Available for PBX-integrated calls
- **Add participant**: Escalates the P2P call into a conference by adding a third person
- **Screen share**: Starts sharing your screen (see Section 3)
- **Transfer**: Transfers the call to another person (see Section 1.5)
- **Record**: Starts recording the call (Enterprise tier, admin-enabled)

### 1.5 Call Transfer

Call transfer is available on all tiers for WebRTC calls and with enhanced options for PBX-integrated calls.

**Blind transfer (unattended):**
1. During an active call, click the **Transfer** button
2. Search for or select the target contact
3. Click **Transfer**
4. The call is immediately connected to the target person and you are disconnected

**Attended transfer (consultative):**
1. During an active call, click the **Transfer** button
2. Select "Consult first" option
3. Search for or select the target contact
4. Rainbow places the original caller on hold and connects you with the target
5. Speak with the target to brief them (e.g., "I have a customer who needs help with...")
6. Click **Complete Transfer** to connect the original caller with the target, or **Cancel** to return to the original caller

**PBX transfer (Enterprise/Connect only):**
When Rainbow is integrated with a PBX, transfer operations use the PBX's native transfer mechanism, which may support additional options like transfer to voicemail, transfer to hunt group, or transfer to an external number.

### 1.6 Call Escalation

A one-to-one call can be escalated to a multi-party conference:

1. During an active P2P call, click **Add Participant**
2. Search for and select one or more contacts
3. Click **Add**
4. The selected contacts receive a call invitation
5. When they accept, the call becomes a conference (see Section 2)

This is a common support scenario: users sometimes accidentally add a participant and want to know how to remove them. The call organizer can click on the participant list and remove individual participants from the conference.

---

## 2. Audio and Video Conferencing

### 2.1 Conference Capabilities Overview

Rainbow's conferencing system supports both scheduled and ad hoc conferences with the following specifications:

| Specification              | Value                                                  |
|----------------------------|--------------------------------------------------------|
| **Maximum participants**   | 120 per conference                                      |
| **Maximum video streams**  | 49 simultaneous video feeds                             |
| **Audio codec**            | Opus (adaptive bitrate)                                 |
| **Video codec**            | VP8, VP9, H.264 (negotiated automatically)              |
| **Screen sharing**         | Supported (counts as one video stream)                  |
| **Recording**              | Available (Enterprise tier, admin-enabled)              |
| **Transcription**          | Available (Enterprise tier, AI feature)                 |
| **Dial-in via PSTN**       | Available (requires telephony integration)              |
| **Waiting room**           | Supported (configurable by organizer)                   |

### 2.2 Creating an Ad Hoc Conference

**From a Bubble:**
1. Open a Bubble
2. Click the phone or camera icon in the header
3. All Bubble members are notified and can join

**From a one-to-one call:**
1. During an active call, click **Add Participant**
2. The call becomes a conference as additional participants join

**From the Calendar/Meetings section:**
1. Click **New Meeting** or **Start Instant Meeting**
2. Add participants by name or email
3. Click **Start**

### 2.3 Scheduling a Conference

Scheduled conferences provide additional features compared to ad hoc calls:

1. Navigate to **Calendar** in the navigation rail
2. Click **Schedule Meeting**
3. Fill in the meeting details:
   - **Title**: Name of the meeting
   - **Date and time**: Start time and duration
   - **Recurrence**: One-time, daily, weekly, monthly
   - **Participants**: Add by name or email
   - **Description**: Agenda or notes
   - **Settings**: Enable/disable waiting room, recording, mute on entry
4. Click **Schedule**

**What happens when you schedule:**
- All participants receive an **email invitation** with a join link and dial-in number (if telephony is configured)
- The meeting appears in participants' Rainbow Calendar view
- If calendar integration (Outlook/Google) is enabled, the meeting is also created in their external calendar
- A unique **meeting URL** is generated that can be shared with anyone (including non-Rainbow users)

### 2.4 Joining a Conference

Participants can join a scheduled or active conference through several methods:

- **Rainbow notification**: Click "Join" on the meeting reminder or incoming conference notification
- **Meeting URL**: Click the link received via email or chat (opens Rainbow web client if the native client is not installed)
- **Dial-in number**: Call the PSTN dial-in number and enter the conference PIN (for audio-only participation from a traditional phone)
- **From the Calendar view**: Click "Join" on the upcoming meeting card
- **From a Bubble**: If a conference is active in a Bubble, a "Join call" banner appears at the top of the conversation

### 2.5 Conference Layouts

During a video conference, participants can choose between several layout modes:

**Gallery view (Grid):**
- Displays all active video feeds in an equal-sized grid
- Supports up to 49 simultaneous video streams
- Participants beyond 49 are shown as audio-only tiles (name and avatar)
- The grid automatically resizes as participants toggle their cameras on and off

**Speaker view:**
- The active speaker's video feed fills most of the screen
- Other participants appear as small thumbnails along the bottom or side
- The active speaker is detected automatically based on audio level
- There is typically a short delay (1-2 seconds) before the view switches to a new speaker to avoid rapid flickering

**Spotlight / Pin:**
- A participant (or the organizer) can "pin" a specific person's video feed to remain as the large view regardless of who is speaking
- Useful for presentations where the speaker should remain visible even when audience members ask questions

**Screen share view:**
- When someone is sharing their screen, the shared content fills the main area
- The sharer's video (and other participants) appears as small thumbnails
- Participants can resize the shared content pane and participant panel

### 2.6 Participant Limits and Scaling

Understanding the participant limits is important for support:

- **Audio participants**: Up to 120 people can join with audio
- **Video participants**: Up to 49 can have their cameras active simultaneously. The 50th participant who enables their camera will either see a "maximum video streams reached" message or the system will automatically disable the video of the least-recently-active participant (behavior may vary by client version)
- **Screen sharing**: Only one person can share their screen at a time. A second person must wait until the first stops sharing.
- **PSTN dial-in participants**: Count toward the 120-person limit. They are audio-only and appear in the participant list with a phone icon.

---

## 3. Screen Sharing

### 3.1 Screen Sharing on Desktop (Windows and macOS)

Screen sharing allows a user to broadcast their screen content to other participants in a call or conference.

**How to start screen sharing:**
1. During an active call or conference, click the **Screen Share** button (monitor icon) in the call controls
2. A dialog appears with sharing options:
   - **Entire screen**: Shares everything visible on the selected display (useful for multi-monitor setups where the user can choose which screen to share)
   - **Application window**: Shares only a specific application window. Other windows and the desktop are not visible to participants.
   - **Browser tab** (web client only): Shares a specific browser tab, including its audio if applicable
3. Select the desired option and click **Share**
4. A colored border (typically green or blue) appears around the shared area to indicate what is being broadcast
5. To stop sharing, click the **Stop Sharing** button that appears in the call controls or the floating toolbar

**Important considerations:**
- Screen sharing is a one-way broadcast: participants can see the sharer's screen but cannot control it (Rainbow does not include remote desktop control)
- Sharing an entire screen will show everything, including notifications and sensitive information. Users should be advised to use application window sharing or enable DND before sharing
- Video performance during screen sharing depends on the content: static documents share smoothly at low bandwidth, while video playback or rapid screen changes require more bandwidth
- The sharer's camera feed is typically reduced to a small thumbnail or disabled while screen sharing is active, to conserve bandwidth

### 3.2 Screen Sharing on Mobile (iOS and Android)

Mobile screen sharing has some differences from desktop:

**iOS:**
1. Tap the **Screen Share** button during an active call
2. iOS displays a system prompt: "Rainbow Screen Broadcast — Start Broadcast"
3. Tap **Start Broadcast**
4. After a 3-second countdown, the entire screen is shared (including any app the user navigates to)
5. A red status bar or red clock indicator appears at the top of the screen to indicate active screen broadcast
6. To stop, tap the red indicator and confirm, or return to Rainbow and tap **Stop Sharing**

**Android:**
1. Tap the **Screen Share** button during an active call
2. Android displays a system permission dialog: "Rainbow will start capturing everything that's displayed on your screen"
3. Tap **Start Now**
4. The entire screen is shared
5. A notification appears in the notification shade indicating active screen capture
6. To stop, pull down the notification shade and tap **Stop** on the screen capture notification, or return to Rainbow

**Mobile screen sharing limitations:**
- Only entire screen sharing is available (no application-window-only option)
- Audio from the device (e.g., video playback audio) may or may not be shared depending on OS version and settings
- Screen sharing consumes more battery than a standard call
- Some sensitive content (password fields, banking apps) may be blanked out by the OS for security

### 3.3 Troubleshooting Screen Sharing

Common issues and resolutions:

| Issue                                      | Likely Cause                                                 | Resolution                                          |
|--------------------------------------------|--------------------------------------------------------------|-----------------------------------------------------|
| "Screen sharing unavailable"               | Feature not available on Essential tier                      | Upgrade to Business or higher                       |
| Black screen shared                         | GPU hardware acceleration conflict                           | Disable hardware acceleration in Rainbow settings   |
| No sharing options appear                   | Browser permissions not granted (web client)                 | Check browser settings for screen capture permission |
| Participants see a frozen screen            | Low bandwidth on sharer's side                               | Reduce video quality, close other apps using bandwidth |
| Screen sharing stops unexpectedly on mobile | OS killed the broadcast due to memory pressure               | Close other apps, restart the sharing                |
| Cannot share specific application window    | Feature only available on desktop native client              | Use desktop client instead of web or mobile          |

---

## 4. Conference Moderation Controls

The conference organizer (the person who created or scheduled the conference) has access to moderation controls that regular participants do not.

### 4.1 Organizer Controls

| Control                     | Description                                                                            |
|-----------------------------|----------------------------------------------------------------------------------------|
| **Mute a participant**      | Forcibly mute a specific participant's microphone. The participant receives a notification that they have been muted. They can unmute themselves unless "hard mute" is enabled. |
| **Mute all**                | Mutes all participants except the organizer. Useful at the start of a large meeting.    |
| **Hard mute (lock mute)**   | When enabled, muted participants cannot unmute themselves. They must use the "raise hand" feature to request unmuting. |
| **Remove a participant**    | Ejects a participant from the conference. They can rejoin unless the conference is locked. |
| **Lock conference**         | Prevents new participants from joining. Anyone who tries to join sees a "conference locked" message. |
| **Waiting room**            | When enabled, new participants are placed in a waiting room until the organizer admits them individually. |
| **Enable/disable recording**| Start or stop recording the conference (Enterprise tier).                                |
| **End conference for all**  | Ends the conference and disconnects all participants.                                    |
| **Promote to co-organizer** | Grants another participant organizer-level moderation controls.                          |
| **Lower all hands**         | Clears all raised-hand indicators.                                                       |

### 4.2 Participant Controls

Regular participants have the following controls:

| Control                | Description                                                        |
|------------------------|--------------------------------------------------------------------|
| **Mute/unmute self**   | Toggle own microphone (unless hard-muted by organizer)             |
| **Camera on/off**      | Toggle own camera                                                   |
| **Raise hand**         | Sends a visual indicator to the organizer and all participants      |
| **Chat**               | Send text messages in the conference chat (separate from the Bubble conversation) |
| **React**              | Send emoji reactions that briefly appear on screen                  |
| **Leave conference**   | Leave the conference without ending it for others                   |
| **Change layout**      | Switch between gallery view and speaker view                        |
| **Pin a participant**  | Pin a specific video feed to remain as the large view               |

### 4.3 The Raise Hand Feature

The raise hand feature is designed for orderly communication in large meetings:

1. A participant clicks the **Raise Hand** button (hand icon in the control bar)
2. A hand icon appears on the participant's video tile and in the participant list
3. The organizer sees a notification and a sorted list of raised hands (in the order they were raised)
4. The organizer can unmute or call on participants in order
5. The participant can lower their hand by clicking the button again, or the organizer can lower all hands at once

This feature is frequently used in webinar-style meetings, classroom sessions, and town halls.

---

## 5. Call Quality Indicators

### 5.1 Understanding Call Quality Metrics

Rainbow displays call quality indicators during active calls to help users understand the current state of their connection. These indicators are crucial for support agents to understand because call quality is one of the most common support topics.

**Network quality indicator:**
During a call, a small icon appears (typically in the corner of the video feed or call controls area) showing the network quality:

| Indicator       | Visual             | Meaning                                                     |
|-----------------|--------------------|-------------------------------------------------------------|
| **Excellent**   | 4 green bars       | Latency < 100ms, no packet loss, full HD video possible     |
| **Good**        | 3 green bars       | Latency 100-200ms, < 1% packet loss, HD video              |
| **Fair**        | 2 yellow bars      | Latency 200-400ms, 1-5% packet loss, reduced video quality |
| **Poor**        | 1 red bar          | Latency > 400ms, > 5% packet loss, audio-only recommended  |
| **No connection**| X or disconnected | Network lost, call may drop                                 |

### 5.2 Key Quality Metrics

The following metrics determine call quality:

**Latency (delay):**
The time it takes for audio or video data to travel from sender to receiver. Acceptable latency for voice calls is under 150ms one-way. Latency above 300ms causes noticeable conversational delay, making it difficult to have natural back-and-forth dialogue.

**Packet loss:**
The percentage of data packets that are lost in transit. Even 1-2% packet loss can cause audible audio artifacts (choppy sound, missing syllables). Video is more tolerant of packet loss but will show pixelation and freezing at higher loss rates.

**Jitter:**
The variation in packet arrival times. High jitter causes the audio to sound warbled or robotic. Rainbow uses a jitter buffer to smooth out variations, but extreme jitter (above 50ms) overwhelms the buffer.

**Bandwidth:**
The amount of network capacity available. Rainbow adapts its codec bitrate dynamically:

| Content Type    | Minimum Bandwidth | Recommended Bandwidth |
|-----------------|-------------------|-----------------------|
| Audio-only call | 50 Kbps           | 100 Kbps              |
| Video call (SD) | 300 Kbps          | 500 Kbps              |
| Video call (HD) | 1 Mbps            | 2 Mbps                |
| Screen sharing  | 500 Kbps          | 1.5 Mbps              |
| Conference (per participant) | Varies | 2-4 Mbps total        |

### 5.3 Common Call Quality Issues and Causes

| Symptom                             | Likely Causes                                                        |
|--------------------------------------|----------------------------------------------------------------------|
| Choppy or robotic audio             | High packet loss, high jitter, or insufficient bandwidth             |
| Echo                                 | Speaker audio feeding back into the microphone; no headset used      |
| One-way audio (can hear but not speak)| Firewall blocking UDP traffic, microphone permissions not granted    |
| No audio at all                      | Wrong audio device selected, muted at OS level, microphone disabled  |
| Video freezes but audio continues    | Bandwidth insufficient for video; Rainbow drops video to preserve audio |
| Call drops frequently                | Unstable network (Wi-Fi interference, mobile network handoff)        |
| Delay / echo on VoIP                | Network latency, especially over VPN or satellite connections        |

### 5.4 Network Requirements

For support agents, it is important to know the minimum network requirements for Rainbow calls:

- **Protocols**: WebRTC uses UDP ports 10000-65535 for media; TCP/443 for signaling
- **TURN/STUN servers**: Rainbow uses TURN servers for NAT traversal. These must be accessible on ports 443 and 3478 (UDP and TCP)
- **Firewall rules**: Corporate firewalls must allow outbound UDP traffic to Rainbow's media relay servers. If only TCP is available, Rainbow can tunnel media over TCP/443, but with reduced quality
- **VPN considerations**: Split-tunnel VPN is recommended so that Rainbow media traffic goes directly to the internet rather than through the VPN tunnel, which adds latency
- **Proxy servers**: HTTP proxies can interfere with WebRTC. Rainbow supports proxy configuration but media quality may suffer

---

## 6. Recording and Transcription

### 6.1 Call Recording

Call recording is an Enterprise tier feature that must be explicitly enabled by the company administrator. When enabled, the recording feature works as follows:

**Starting a recording:**
1. During an active call or conference, the organizer clicks the **Record** button (red circle icon)
2. All participants receive an **on-screen notification** that recording has started, along with an audible tone
3. A red "Recording" indicator remains visible to all participants throughout the recording
4. The organizer can **pause** and **resume** recording during the call

**Stopping a recording:**
1. The organizer clicks the **Stop Recording** button
2. All participants are notified that recording has stopped
3. Recording also stops automatically when the call ends

**Recording storage and access:**
- Recordings are processed and stored on Rainbow's servers after the call ends
- Processing may take several minutes depending on the call duration
- The recording appears in the conversation history as a playable media item
- The organizer and (depending on admin settings) all participants can download the recording
- Recording files are subject to the company's storage quota and retention policies
- Administrators can configure whether recordings are automatically deleted after a specified period

**Legal and compliance considerations:**
- Recording is subject to local laws. Many jurisdictions require all-party consent (all participants must be informed and agree to recording)
- The mandatory notification when recording starts is designed to satisfy consent requirements, but organizations should consult legal counsel
- Administrators can restrict who has the ability to start recordings

### 6.2 AI-Powered Transcription

Transcription is an AI feature available on the Enterprise tier. It converts spoken audio from a call or conference into text.

**How transcription works:**
1. When recording is active, Rainbow's AI engine processes the audio in near real-time
2. After the call ends, the transcription is generated and attached to the call record
3. The transcription includes:
   - **Speaker identification**: Each speaker's contributions are labeled with their name
   - **Timestamps**: Text is segmented with timestamps for easy navigation
   - **Punctuation and formatting**: AI adds punctuation and paragraph breaks for readability

**Accessing transcriptions:**
- Transcriptions appear alongside the recording in the conversation history
- They can be searched using Rainbow's message search
- They can be downloaded as a text file

### 6.3 AI Meeting Summaries

In addition to full transcriptions, Rainbow's AI can generate **meeting summaries**:

- **Key points**: A bulleted list of the main topics discussed
- **Decisions**: Specific decisions that were made during the meeting
- **Action items**: Tasks assigned to participants, with the assignee's name if identifiable
- **Follow-ups**: Items that were deferred for later discussion

Meeting summaries are generated automatically after a recorded conference ends and appear in the conversation history. They are particularly useful for participants who missed the meeting or need a quick refresher.

### 6.4 Real-Time Transcription (Live Captions)

Rainbow also offers **live captions** during active conferences:

- Spoken words are transcribed in real time and displayed as subtitles at the bottom of the video feed
- Each speaker's name is shown alongside their transcribed text
- Live captions support multiple languages (the spoken language is auto-detected or can be set manually)
- Live captions are generated locally and are not stored after the call (unless recording is also active)
- This feature is particularly valuable for hearing-impaired participants and multilingual meetings

---

## Key Concepts Summary

| Concept                    | Definition                                                                                   |
|----------------------------|----------------------------------------------------------------------------------------------|
| **WebRTC**                 | Open standard for real-time audio/video communication in browsers and apps without plugins    |
| **TURN Server**            | Relay server used when direct peer-to-peer connections are blocked by firewalls or NAT        |
| **Blind Transfer**         | Transferring a call immediately without speaking to the recipient first                       |
| **Attended Transfer**      | Placing the caller on hold, speaking to the target, then completing the transfer              |
| **Gallery View**           | Conference layout showing all video feeds in an equal-sized grid (up to 49 streams)           |
| **Speaker View**           | Conference layout showing the active speaker's video enlarged                                  |
| **Hard Mute**              | Organizer control that prevents participants from unmuting themselves                          |
| **Waiting Room**           | Conference feature where new joiners wait until the organizer admits them                     |
| **Call Quality Indicator** | Visual bars showing network quality: green (excellent) to red (poor)                          |
| **Live Captions**          | Real-time AI-powered transcription displayed as subtitles during a conference                  |

---

## Practice Exercise

**Scenario 1 — P2P Call:**
In a test environment with a partner, perform the following:
1. Initiate a video call from the desktop client
2. During the call, toggle your camera off and on
3. Switch between audio output devices (speaker vs. headset)
4. Practice a blind transfer: transfer the call to a third person
5. Call back and practice an attended transfer: put the first person on hold, consult the third person, then complete the transfer

**Scenario 2 — Conference:**
1. Schedule a conference for 15 minutes from now with at least 3 participants
2. When participants join, practice the following moderation actions:
   - Mute all participants
   - Enable hard mute and ask a participant to try to unmute (they should not be able to)
   - Ask a participant to raise their hand, then unmute them
   - Lock the conference and have someone try to join (they should see a "locked" message)
3. Start screen sharing and switch between entire screen and application window sharing
4. If recording is available, start and stop a recording, then locate the recording in the conversation history after the call

**Scenario 3 — Troubleshooting:**
Have a partner simulate a poor network condition (e.g., using a bandwidth limiter or switching to a slow mobile connection). Observe:
- How the call quality indicator changes
- When Rainbow automatically reduces video quality
- What the audio sounds like with packet loss

---

## Knowledge Check

**Question 1**: What is the maximum number of participants supported in a single Rainbow conference?

- A) 49
- B) 80
- C) 120
- D) 250

**Answer**: C — Rainbow conferences support up to 120 participants. The 49-stream limit applies to simultaneous video feeds, not total participants. Audio-only and PSTN dial-in participants also count toward the 120 total.

---

**Question 2**: During a conference, a participant's microphone is muted by the organizer with "hard mute" enabled. What can the participant do?

- A) Unmute themselves immediately
- B) Use the "raise hand" feature to request being unmuted
- C) Leave and rejoin the conference to unmute
- D) Nothing — they must wait until the organizer ends the conference

**Answer**: B — When hard mute is enabled, participants cannot unmute themselves. They should use the "raise hand" feature to signal the organizer, who can then unmute them individually.

---

**Question 3**: A user reports one-way audio during a call — they can hear the other person but cannot be heard. Which is the MOST likely cause?

- A) The user's speaker is set to the wrong device
- B) The user's microphone permission is not granted or their firewall is blocking outbound UDP
- C) The other person has enabled Do Not Disturb
- D) Rainbow's servers are experiencing an outage

**Answer**: B — One-way audio (hearing but not being heard) most commonly results from the user's microphone not being accessible — either because the OS-level microphone permission was not granted to Rainbow, or because outbound UDP traffic is being blocked by a firewall (preventing the user's audio from reaching the other party).

---

**Question 4**: What happens when a 50th participant enables their camera in a conference that already has 49 active video streams?

- A) The conference crashes
- B) The 50th participant sees an error and cannot enable their camera, or the system disables an inactive stream
- C) All video is disabled and the conference becomes audio-only
- D) The conference automatically upgrades to a higher capacity

**Answer**: B — Rainbow enforces a 49-stream maximum for simultaneous video. The 50th participant will either see a message that maximum video streams have been reached, or the system will automatically manage streams by disabling the least recently active video feed.

---

**Question 5**: When call recording starts in a Rainbow conference, what notification do participants receive?

- A) No notification — recording is silent
- B) An email notification is sent after the call
- C) An on-screen notification and audible tone inform all participants that recording has started
- D) Only the organizer is notified

**Answer**: C — Rainbow provides both an on-screen notification and an audible tone to all participants when recording begins. A visible "Recording" indicator remains on screen throughout the recording. This is designed to ensure all participants are aware they are being recorded, supporting legal consent requirements.
