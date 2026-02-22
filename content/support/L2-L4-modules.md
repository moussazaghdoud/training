# Support Track — L2, L3, L4 Module Content Outlines

> Rainbow Training Academy | Support Track | Practitioner through Champion Levels

---

## LEVEL 2: PRACTITIONER (5 hours total)

---

### SUP-201: Telephony Troubleshooting

| Field | Value |
|---|---|
| **Module ID** | SUP-201 |
| **Title** | Telephony Troubleshooting |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | VID + SCN + REF |
| **Prerequisites** | SUP-104 (Voice & Video Basics) |

#### Detailed Content Outline

**1. PBX Overlay Diagnostics**
- How Rainbow sits on top of OXO Connect, OmniPCX Enterprise, and third-party PBX systems via CTI/Media Bridge
- The registration handshake: Rainbow client registers with the PBX through the media gateway; common failure points include incorrect SIP trunk configuration, expired certificates, and DNS resolution errors
- Diagnostic steps: verify PBX registration status in admin portal under Users > Telephony Status; check for "PBX Not Registered" vs. "PBX Registered (No Media)" vs. "Fully Connected"
- OXO-specific issues: firmware compatibility matrix (OXO Connect R3.0+ required), trunk group limits (max 64 SIP channels per OXO), and time synchronization drift causing registration failures
- OMNI-specific issues: OmniPCX Enterprise 12.x+ compatibility, connection manager (SRTP vs. RTP negotiation), and load balancing across multiple communication servers

**2. Softphone Troubleshooting**
- Rainbow softphone architecture: WebRTC for browser calls vs. native SIP stack for desktop client PBX calls
- "No audio" scenario: check microphone permissions (OS-level and browser-level), verify audio device selection in Settings > Audio/Video, confirm WebRTC is not blocked by corporate proxy
- "One-way audio" scenario: typically caused by symmetric NAT, missing STUN/TURN configuration, or firewall blocking UDP ports 10000-20000; resolution involves configuring the TURN relay server URL in admin portal
- Call drops after 30 seconds: common cause is SIP session timer mismatch between Rainbow and PBX; solution is to align session timer values or disable SIP session timers on the PBX
- Echo and feedback: caused by acoustic echo cancellation failure; check if hardware echo cancellation is enabled on headset, disable OS audio enhancements, and verify no dual audio streams (e.g., speaker + headset simultaneously active)

**3. Call Quality Analysis**
- MOS (Mean Opinion Score) interpretation: 4.0+ = excellent, 3.5-4.0 = good, 3.0-3.5 = fair, below 3.0 = poor
- Reading the call quality report in Admin Portal > Monitoring > Call Statistics: jitter (target <30ms), packet loss (target <1%), round-trip latency (target <150ms)
- Codec selection impact: Opus codec preferred for WebRTC (adaptive bitrate 6-510 kbps), G.711 for PBX interop (64 kbps fixed), G.729 for low-bandwidth scenarios (8 kbps but lower quality)
- How to capture and share a call quality diagnostic bundle: Settings > Help > Generate Diagnostic Report; this creates a ZIP file with ICE candidate logs, SRTP stats, and codec negotiation trace
- Escalation threshold: if MOS consistently below 3.0 across multiple users at same site, escalate as network issue (not Rainbow platform issue)

**4. Common Error Scenarios and Resolution**
- Error location-not-found: user's company location is not mapped in admin portal; fix by assigning the user to a site with a configured PBX
- Error location-not-found: user's company location is not mapped in admin portal; fix by assigning the user to a site with a configured PBX
- Error location-not-found: user's company location is not mapped in admin portal; fix by assigning the user to a site with a configured PBX
- Error "403 Forbidden" on outbound PSTN call: user does not have an assigned phone number or the calling plan restricts international dialing; verify in Admin > Users > Phone Numbers
- Error "Location Not Found" on incoming call: the PBX is sending a calling number format that Rainbow cannot match; verify E.164 normalization rules in the PBX trunk configuration
- Error "Media Negotiation Failed": SRTP is required by Rainbow but the PBX is offering RTP only; enable SRTP on the PBX trunk or configure the Rainbow gateway to accept RTP fallback
- Call forwarding loop: user has forwarded calls from PBX to Rainbow and Rainbow back to PBX; detected by "Loop Detected" SIP response; resolution requires reviewing the full call routing chain

**5. Telephony Diagnostic Tools**
- SIP trace capture: how to enable SIP logging in the Rainbow admin portal under Advanced > Diagnostics; logs are available for 24 hours
- Using the Rainbow CLI command `rbw diag telephony --user <email>` to pull real-time telephony registration status
- Network path analysis: traceroute to the Rainbow media relay servers (media-*.openrainbow.com) to identify latency spikes
- Browser console diagnostics for WebRTC: accessing chrome://webrtc-internals to view ICE candidate pairs, DTLS handshake, and codec stats during a live call

#### Scenario Description (SCN)

**Setup**: The learner receives a simulated support ticket from "Martine D., Office Manager at Lyon Manufacturing" who reports: "Since we upgraded our OXO Connect firmware last night, none of our 45 users can make outgoing calls through Rainbow. Internal PBX-to-PBX calls work fine. Incoming calls from PSTN ring on the desk phones but not on Rainbow."

**Steps**:
1. The learner must identify this as a PBX overlay registration issue (not a Rainbow platform issue) based on the symptoms: PBX-to-PBX works but Rainbow-to-PSTN does not.
2. Check the simulated admin portal: Users > Telephony Status shows "PBX Not Registered" for all Lyon site users.
3. Navigate to Company > Sites > Lyon > PBX Configuration and identify that the OXO firmware upgrade changed the SIP trunk port from 5060 to 5061.
4. The learner must recommend the customer reconfigure the SIP trunk port to match the Rainbow gateway expectation (5060) or update the Rainbow site configuration to point to port 5061.
5. After the fix, the learner verifies that telephony status changes to "Fully Connected" and tests an outbound call.

**Expected Outcome**: Learner demonstrates systematic PBX overlay troubleshooting: symptom analysis, admin portal verification, root cause identification (firmware upgrade changed SIP trunk port), and resolution guidance.

#### Key Takeaways
- PBX overlay issues are the most common telephony support category; always verify registration status before investigating call quality
- One-way audio and "no audio" are almost always caused by NAT/firewall issues or microphone permissions, not by Rainbow platform failures
- MOS scores below 3.0 sustained across multiple users at the same site indicate a network problem, not a per-user issue
- The diagnostic bundle (Settings > Help > Generate Report) is the single most valuable artifact for escalation to Tier 2/3
- Always check firmware compatibility when a customer reports issues after a PBX upgrade

---

### SUP-202: Admin Portal for Support

| Field | Value |
|---|---|
| **Module ID** | SUP-202 |
| **Title** | Admin Portal for Support |
| **Level** | L2 Practitioner |
| **Duration** | 45 minutes |
| **Content Types** | INT + LAB + QIZ |
| **Prerequisites** | SUP-102 (Navigating the Interface) |

#### Detailed Content Outline

**1. Admin Portal Navigation for Support Agents**
- Accessing the admin portal at admin.openrainbow.com; required role: "Company Admin" or "Support Admin" (read-only variant)
- Dashboard overview: active users count, subscription usage bar, system health indicators, recent alerts
- Key sections for support: Users, Companies, Subscriptions, Telephony, Logs
- Difference between "Organization" view (multi-company) and "Company" view (single company); support agents typically work at the Company level
- Quick search: Ctrl+K global search to find users by name, email, or phone number across the entire organization

**2. User Management for Troubleshooting**
- Locating a user: search by email, display name, or login ID; understanding the difference between "login email" and "business email"
- Reading the user profile: subscription tier, assigned devices, telephony registration status, last login timestamp, client version
- Forcing a password reset: when to use it (account lockout, suspected compromise) vs. when not to (SSO users — password reset has no effect if SAML is configured)
- Deactivating vs. deleting a user: deactivation preserves data and can be reversed; deletion is permanent and removes all message history, call logs, and file shares associated with that user
- Impersonation mode (if available): viewing the platform as a specific user to reproduce their reported issue; note that impersonation logs are audited

**3. Company Settings Relevant to Support**
- Company-level settings that affect all users: allowed features toggle (e.g., file sharing disabled, conferencing disabled), guest access policy, external communication policy
- Network configuration: proxy settings, TURN/STUN server overrides, WebSocket URL customization
- Authentication settings: local authentication vs. SAML SSO vs. OpenID Connect; identifying SSO misconfigurations (certificate expiry, assertion consumer URL mismatch, NameID format mismatch)
- Data retention policies: message retention period (default 1 year for Enterprise), file storage limits by tier
- Reviewing the "Company Events" audit log for recent configuration changes that may correlate with reported issues

**4. Log Access and Diagnostic Information**
- Admin portal logs: user login/logout events, authentication failures, provisioning changes, telephony events
- Filtering logs: by user, by event type, by date range; exporting logs as CSV for offline analysis
- Reading authentication failure logs: "SAML_ASSERTION_EXPIRED" (clock skew between IdP and Rainbow), "INVALID_CREDENTIAL" (wrong password), "ACCOUNT_LOCKED" (too many failed attempts)
- Telephony event logs: call setup, call teardown, transfer events, conference join/leave; each event includes a correlation ID for end-to-end tracing
- API access logs (for Hub/developer accounts): request method, endpoint, response code, timestamp; useful when debugging integration failures

**5. Gathering Diagnostic Bundles**
- How to request a client-side diagnostic bundle from the user: instruct them to go to Settings > Help > Report a Problem, which uploads logs to Rainbow support servers
- Admin-side diagnostic collection: Admin > Diagnostics > Generate Report for a specific user; this pulls server-side logs including WebSocket connection history, presence state changes, and message delivery confirmations
- Combining client-side and server-side diagnostics for a complete picture of the issue timeline
- Understanding log correlation: every Rainbow operation has a request ID (x-rainbow-request-id) that links client logs, server logs, and gateway logs

#### Lab Description (LAB)

**Setup**: The learner accesses a sandbox admin portal pre-populated with a fictional company "Horizon Industries" (200 users, Enterprise tier, OXO Connect PBX at 3 sites).

**Steps**:
1. Locate the user "Jean-Pierre Martin" and identify his subscription tier, last login date, and current telephony registration status.
2. Review the company authentication settings and identify that SAML SSO is configured with a certificate expiring in 3 days — flag this as a risk.
3. Navigate to the telephony configuration for the "Paris HQ" site and verify the PBX connection status.
4. Pull the authentication failure logs for the last 7 days and identify that 12 users at the "Berlin" site have repeated "SAML_ASSERTION_EXPIRED" errors — diagnose this as a clock skew issue at the Berlin IdP server.
5. Generate a diagnostic report for Jean-Pierre Martin and identify from the logs that his Rainbow client has been disconnecting every 15 minutes (WebSocket keepalive timeout, likely caused by a proxy that drops idle connections).

**Expected Outcome**: Learner can navigate the admin portal efficiently, correlate log data with user-reported symptoms, and identify root causes from diagnostic information.

#### Key Takeaways
- The admin portal is your primary diagnostic tool; always check user status, telephony registration, and recent logs before asking the customer for more information
- SAML SSO misconfigurations (expired certificates, clock skew) are a top-5 support issue category; learn to read the authentication failure logs
- Never delete a user account when deactivation is sufficient — deletion is irreversible and destroys all associated data
- The x-rainbow-request-id is the key correlation identifier that links client, server, and gateway logs for end-to-end troubleshooting

---

### SUP-203: Connector Support: CRM Integrations

| Field | Value |
|---|---|
| **Module ID** | SUP-203 |
| **Title** | Connector Support: CRM Integrations |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | VID + SCN + REF |
| **Prerequisites** | SUP-104 (Voice & Video Basics) |

#### Detailed Content Outline

**1. Connector Architecture Overview**
- How CRM connectors work: browser extension (CTI bar) injects a Rainbow telephony widget into the CRM web interface; the extension communicates with the Rainbow client via local WebSocket
- Supported CRM connectors: Salesforce, Zendesk, ServiceNow, Microsoft Dynamics, Zoho CRM; each has a dedicated browser extension and server-side configuration
- Prerequisite: Rainbow desktop or web client must be running alongside the CRM browser tab; the CTI bar cannot function without an active Rainbow session
- Data flow: incoming call notification flows from Rainbow client to the CTI bar extension, which triggers a screen pop in the CRM showing the caller's contact record; call metadata (duration, outcome) is logged back to the CRM via the connector's API
- Version compatibility matrix: each connector release is validated against specific CRM versions; e.g., Salesforce connector v3.2 requires Salesforce Lightning Experience (Classic is not supported)

**2. Salesforce Connector Troubleshooting**
- "CTI bar not loading" in Salesforce Lightning: check that the Rainbow Salesforce Managed Package is installed in the Salesforce org, the Open CTI Softphone Layout is assigned to the user's profile, and the browser extension is enabled
- "SSO loop" on connector login: occurs when the Salesforce org uses SSO but the Rainbow connector is configured for separate authentication; resolution is to align the authentication method (enable SSO pass-through in the connector settings)
- "Call logging missing" for completed calls: verify that the connector has write access to the Task object in Salesforce; check Salesforce field-level security and that the "Log Calls Automatically" toggle is enabled in connector settings
- Screen pop not matching caller: happens when the phone number format in Salesforce contacts does not match the E.164 format that Rainbow sends; solution is to standardize phone number formats in Salesforce or configure a number normalization rule in the connector
- Performance degradation: the connector polls Salesforce SOQL queries on each incoming call; if the Salesforce org has more than 100,000 contacts, configure the connector to search by phone number index only (not full-text)

**3. Zendesk Connector Troubleshooting**
- Installation: Zendesk connector is delivered as a Zendesk App installed from the Zendesk Marketplace; requires Zendesk Suite Professional or higher
- "Agent status not syncing" between Rainbow and Zendesk: the connector maps Rainbow presence to Zendesk Talk agent status; if the mapping is misconfigured, agents appear offline in one system while online in the other
- "Ticket not created on incoming call": check that automatic ticket creation is enabled in the connector settings, the Zendesk user has the "Agent" role, and the Zendesk API rate limit has not been exceeded (Zendesk enforces 700 requests/minute)
- Click-to-call not working from Zendesk ticket: verify the phone number field on the ticket or contact is populated and formatted correctly; the connector parses the `tel:` URI scheme

**4. ServiceNow Connector Troubleshooting**
- ServiceNow integration uses the OpenFrame CTI framework; Rainbow connector installs as a ServiceNow Update Set
- "OpenFrame widget blank": typically caused by a missing ServiceNow system property `glide.ui.openframe.enabled = true`; also check that the user has the `openframe_user` role
- "Call not linked to incident": the connector matches incoming calls to incidents by caller phone number; if the caller's phone is not stored in the sys_user table, the link fails; configure fallback to create a new incident for unmatched calls
- Integration authentication: ServiceNow connector uses OAuth2 with a dedicated Rainbow service account; expired tokens cause "401 Unauthorized" errors in the connector logs; resolution is to regenerate the OAuth token

**5. General Connector Diagnostics**
- Browser extension diagnostics: right-click the CTI bar icon > "View Logs" exports a JSON log file with connection attempts, API calls, and error codes
- Common cross-connector issues: browser blocks third-party cookies (required for SSO pass-through), popup blocker prevents connector authentication window, multiple Rainbow browser tabs cause WebSocket conflicts
- Network requirements: CRM connectors require HTTPS access to both the CRM server and Rainbow API endpoints; corporate proxies that perform SSL inspection may break the connector's WebSocket connection
- Connector version check: Admin Portal > Integrations shows the installed connector version and the latest available version; auto-update is available for Salesforce and Zendesk connectors

#### Scenario Description (SCN)

**Setup**: A support ticket arrives from "David K., Sales Operations Manager at TechCorp" who reports: "Our Salesforce team (25 agents) updated to the latest Rainbow desktop client yesterday. Since then, none of them can see the CTI bar in Salesforce Lightning. Calls still work in the Rainbow client, but there is no screen pop and no call logging in Salesforce."

**Steps**:
1. The learner must recognize this as a connector compatibility issue triggered by the client update.
2. Check the simulated Admin Portal > Integrations page and see that the Salesforce connector version (v3.1) is not compatible with the latest Rainbow desktop client (v2.15) — the connector requires v3.2+.
3. Verify in the browser extension logs (provided as a downloadable file) that the error is "WEBSOCKET_HANDSHAKE_VERSION_MISMATCH."
4. Recommend updating the Salesforce Managed Package in the Salesforce org to v3.2 and updating the browser extension to the matching version.
5. Provide interim workaround: agents can use the Rainbow web client (which bundles its own connector code) while the Salesforce package is updated.

**Expected Outcome**: Learner identifies version incompatibility as the root cause, recommends the correct update path, and provides a workaround to minimize business disruption.

#### Key Takeaways
- CRM connector issues are almost never Rainbow platform issues — they are browser extension, CRM configuration, or version compatibility problems
- The CTI bar requires both the Rainbow client and the CRM browser extension to be running simultaneously; missing either one produces a "CTI bar not loading" symptom
- Phone number format mismatches between the CRM and Rainbow are the top cause of failed screen pops and missing call logs
- Always check the connector version compatibility matrix after any Rainbow client update or CRM upgrade

---

### SUP-204: Conferencing & Meeting Support

| Field | Value |
|---|---|
| **Module ID** | SUP-204 |
| **Title** | Conferencing & Meeting Support |
| **Level** | L2 Practitioner |
| **Duration** | 45 minutes |
| **Content Types** | VID + SCN + QIZ |
| **Prerequisites** | SUP-104 (Voice & Video Basics) |

#### Detailed Content Outline

**1. Conference Capacity and Limits**
- Maximum participants: 120 audio/video per conference; up to 49 simultaneous video streams (remaining participants are audio-only with avatar)
- Subscription tier requirements: Business tier and above for conference scheduling; Essential tier users can join but not host
- Conference types: Personal Room (persistent link tied to user), Scheduled Conference (calendar-integrated, one-time or recurring), Ad-Hoc Conference (escalated from a 1:1 call or Bubble)
- Capacity exceeded error: when the 121st participant tries to join, they receive "Conference Full" error; there is no waiting room — the participant must retry after someone leaves
- Performance impact: conferences with more than 30 video streams may experience quality degradation on low-bandwidth connections; the client auto-switches to audio-only for participants with poor connections

**2. Screen Sharing Failures**
- "Screen sharing not available" error: on macOS, requires Screen Recording permission in System Preferences > Security & Privacy; on Windows, requires desktop client (browser client uses getDisplayMedia API which needs HTTPS origin)
- Black screen during share: caused by hardware acceleration conflict; resolution is to disable hardware acceleration in Rainbow Settings > Advanced or update the GPU driver
- Screen sharing ends abruptly: typically caused by the OS revoking screen capture permission (macOS Sonoma introduced per-app screen capture prompts), or the Rainbow client losing WebRTC media channel
- Application-specific sharing vs. full desktop sharing: application sharing leaks fewer pixels but cannot capture pop-up dialogs from other applications; advise users to choose full desktop when demonstrating multi-application workflows
- Mobile screen sharing: supported on iOS 12+ and Android 10+; requires broadcast extension (iOS) or media projection service (Android); common failure is user denying the system prompt

**3. AI Meeting Feature Troubleshooting**
- Transcription not working: requires Enterprise tier, meeting must have 2+ participants, language must be supported (English, French, German, Spanish, Italian, Portuguese, Dutch), and the organizer must enable "AI Transcription" before or during the meeting
- Meeting bot not joining: the Rainbow AI bot (named "Rainbow AI Assistant") joins as a virtual participant; if the conference is full (120 participants), the bot cannot join; also fails if the company admin has disabled AI features in Admin > Company Settings > AI Features
- Transcription accuracy issues: background noise, strong accents, and overlapping speakers reduce accuracy; advise users to use headsets, mute when not speaking, and use the "Identify Speakers" feature for better attribution
- Action point extraction not generating: action points require at least 5 minutes of transcribed content and work best when speakers use explicit action language ("We need to...", "Action item:...", "Please do X by Friday")
- AI summary not appearing after meeting: summaries are generated asynchronously and delivered via email and Rainbow notification within 15 minutes of meeting end; if missing after 30 minutes, check that the user's email is verified and that notification preferences are enabled

**4. Conference Moderation Issues**
- Host controls: mute/unmute participants, remove participant, lock conference, enable/disable recording
- "Cannot mute participant" error: the host must have the "Moderator" role; in a Bubble-originated conference, the Bubble owner is the default moderator
- Recording not starting: recording requires the Enterprise tier and must be enabled at the company level (Admin > Company Settings > Recording); storage limits apply (varies by contract); recording is stored encrypted and accessible only to the organizer
- Participants joining with wrong identity: occurs when a user joins via the web link without logging in (appears as "Guest"); to enforce authentication, the organizer should enable "Require Login" in conference settings

**5. Conference Quality Optimization**
- Bandwidth requirements: audio-only 50 kbps per stream, video (720p) 1.5 Mbps per stream, screen sharing 2 Mbps; a 10-person video conference requires approximately 15 Mbps symmetric
- Recommending quality presets: Low (audio-only, <500 kbps total), Medium (360p video, 3 Mbps), High (720p video, 8 Mbps), Ultra (1080p video, 15 Mbps)
- Network priority: Rainbow uses DSCP marking (EF for audio, AF41 for video) — ensure network QoS policies are configured to honor these markings
- Fallback behavior: if bandwidth drops, Rainbow automatically reduces video resolution and frame rate before dropping video entirely; audio is prioritized and maintained even at very low bandwidth

#### Scenario Description (SCN)

**Setup**: "Laura M., HR Director at EuroFinance" reports: "We held our all-hands meeting with 95 participants yesterday. The AI transcription feature was turned on but only captured the first 10 minutes. After that, the transcript shows '[Transcription paused - capacity limit]'. We need the full transcript for compliance."

**Steps**:
1. Learner identifies that AI transcription has a concurrent processing limit per company (default: 5 simultaneous transcribed meetings); during the all-hands, 4 other department meetings were also using transcription.
2. Verify in the simulated admin portal that the company's transcription concurrency limit is set to 5.
3. Explain that the all-hands transcription was paused because it exceeded the pool limit; the first 4 meetings that started consumed the available slots.
4. Recommend the customer contact their account manager to increase the transcription concurrency limit, and for immediate needs, suggest recording the meeting (recording is independent of transcription) and using the recording for manual transcription.
5. Advise a governance approach: schedule critical meetings with transcription needs outside of peak times, or request a dedicated transcription slot for all-hands events.

**Expected Outcome**: Learner understands AI feature capacity limits, diagnoses the concurrency issue, and provides both immediate resolution and long-term governance recommendations.

#### Key Takeaways
- Conference capacity is 120 participants; there is no waiting room or overflow — participants beyond 120 are rejected
- Screen sharing failures on macOS are almost always a system permission issue (Screen Recording permission); on Windows, check hardware acceleration
- AI transcription requires Enterprise tier, 2+ participants, a supported language, and an available transcription slot from the company's concurrency pool
- Conference quality issues should be addressed with bandwidth analysis first; Rainbow auto-degrades video before dropping audio

---

### SUP-205: Network & Connectivity Diagnostics

| Field | Value |
|---|---|
| **Module ID** | SUP-205 |
| **Title** | Network & Connectivity Diagnostics |
| **Level** | L2 Practitioner |
| **Duration** | 45 minutes |
| **Content Types** | VID + LAB + REF |
| **Prerequisites** | SUP-104 (Voice & Video Basics) |

#### Detailed Content Outline

**1. WebRTC Troubleshooting Fundamentals**
- How Rainbow uses WebRTC: peer-to-peer for 1:1 calls, SFU (Selective Forwarding Unit) for conferences; signaling over WebSocket, media over SRTP/UDP
- ICE (Interactive Connectivity Establishment) process: the client gathers host candidates, server-reflexive candidates (via STUN), and relay candidates (via TURN); the best candidate pair is selected based on priority
- Common ICE failure: "ICE connection state: failed" means no valid candidate pair was found; most frequent cause is a firewall blocking all UDP traffic
- STUN server: used to discover the client's public IP and port; Rainbow uses stun.openrainbow.com:3478; if blocked, the client cannot determine its public address and falls back to TURN relay
- TURN server: acts as a media relay when direct peer-to-peer is impossible; Rainbow TURN servers operate on ports 443 (TCP/TLS) and 3478 (UDP); TURN over TCP/443 is the fallback of last resort and adds 30-50ms latency

**2. Firewall and Proxy Conflicts**
- Required firewall rules for Rainbow: HTTPS (TCP 443) to *.openrainbow.com, WebSocket (TCP 443) to *.openrainbow.com, STUN/TURN (UDP 3478 and TCP 443) to turn.openrainbow.com, media (UDP 10000-20000) to media-*.openrainbow.com
- Corporate proxy impact: transparent proxies generally work; explicit proxies require the Rainbow client to be configured with proxy settings; SSL-inspecting proxies break WebSocket connections unless Rainbow domains are whitelisted
- Proxy authentication: Rainbow desktop client supports Basic and NTLM proxy authentication; Kerberos proxy authentication is not supported and requires a whitelist bypass for Rainbow domains
- Symptom matrix: "Cannot connect" = WebSocket blocked; "Connects but no audio" = STUN/TURN blocked; "Audio works but choppy" = UDP media ports partially blocked or bandwidth constrained
- Testing connectivity: the Rainbow Network Test tool (accessible at test.openrainbow.com) performs automated checks of WebSocket, STUN, TURN, and media path connectivity and produces a shareable report

**3. Bandwidth Analysis**
- Minimum bandwidth requirements per call type: audio-only 100 kbps symmetric, video (360p) 500 kbps, video (720p) 1.5 Mbps, screen sharing 1-3 Mbps depending on content motion
- Bandwidth calculation for a site: (number of concurrent calls) x (bandwidth per call type) + 30% overhead for protocol headers and retransmissions
- QoS configuration: Rainbow marks audio with DSCP EF (46), video with DSCP AF41 (34); network switches and routers must be configured to prioritize these markings
- Bandwidth contention symptoms: audio distortion (metallic sound), video freezing (keyframe loss), increased latency (buffering); these symptoms worsen at predictable times (e.g., 9 AM when all users log in)
- Recommending dedicated VLAN for voice/video traffic to isolate Rainbow media from bulk data traffic

**4. ICE Candidate Failure Analysis**
- Reading ICE candidate logs: host candidates (local IP), srflx candidates (STUN-discovered public IP), relay candidates (TURN relay address)
- Common failure patterns: only host candidates gathered = STUN server unreachable; only host and srflx candidates = TURN server unreachable (will fail behind symmetric NAT); relay candidates present but connection fails = TURN credentials expired or TURN server overloaded
- Symmetric NAT: the most problematic NAT type for WebRTC; each outbound connection gets a different public port mapping, preventing direct peer-to-peer; TURN relay is required
- How to identify NAT type from logs: look for "srflx candidate" with mismatched port numbers across multiple STUN queries — this indicates symmetric NAT
- Resolution path: configure TURN over TCP/443 as fallback (works through virtually any network); for persistent issues, request the customer's network team to open UDP 3478 and UDP 10000-20000

**5. TURN/STUN Server Configuration**
- Default TURN/STUN servers: automatically configured for public cloud deployments; Edge deployments require manual TURN server configuration
- Custom TURN server: used in Edge deployments or when a customer wants to keep media traffic within their network; configuration in Admin > Company Settings > Network > TURN Configuration
- TURN credential rotation: credentials are time-limited (default 24-hour TTL); if the Rainbow client's clock is significantly skewed, TURN authentication may fail
- High availability: Rainbow TURN servers are deployed in pairs; if the primary fails, the client automatically retries with the secondary within 5 seconds
- TURN bandwidth monitoring: each TURN relay session consumes bandwidth at the TURN server location; high usage can be tracked in Admin > Monitoring > Network > TURN Statistics

#### Lab Description (LAB)

**Setup**: The learner accesses a simulated network diagnostic environment for "GlobalBank Corp" which has offices in Paris (main), London, and Singapore. Users in Singapore report consistent poor call quality when calling Paris colleagues.

**Steps**:
1. Run the Rainbow Network Test tool from the simulated Singapore endpoint; observe that STUN succeeds but TURN latency is 280ms (the nearest TURN server is in Frankfurt).
2. Analyze the call quality reports for Singapore-to-Paris calls: jitter 45ms, packet loss 3%, MOS 2.7.
3. Identify that Singapore traffic is routing through the Frankfurt TURN relay (adding 150ms+ latency) because UDP direct media is blocked by the Singapore office firewall.
4. Recommend two solutions: (a) open UDP ports 10000-20000 at the Singapore office to enable direct media path (reducing latency to ~160ms Singapore-Paris), or (b) deploy a local TURN relay in the Singapore region.
5. After the simulated firewall change, re-run the network test and observe MOS improvement to 3.8.

**Expected Outcome**: Learner can use network diagnostic tools, interpret call quality metrics, identify relay-induced latency, and recommend network configuration changes.

#### Key Takeaways
- WebRTC connectivity requires three layers to function: WebSocket (signaling), STUN (NAT traversal), and TURN (relay fallback); troubleshoot each layer independently
- TURN over TCP/443 is the universal fallback that works through virtually any firewall/proxy, but adds latency — it should be a last resort, not the default
- The Rainbow Network Test tool at test.openrainbow.com is the fastest way to diagnose connectivity issues without involving the customer's IT team
- For multi-site deployments, regional TURN server placement is critical to keeping media latency below the 150ms threshold for acceptable voice quality

---

### SUP-206: Mobile Client Support

| Field | Value |
|---|---|
| **Module ID** | SUP-206 |
| **Title** | Mobile Client Support |
| **Level** | L2 Practitioner |
| **Duration** | 30 minutes |
| **Content Types** | VID + SCN + REF |
| **Prerequisites** | SUP-104 (Voice & Video Basics) |

#### Detailed Content Outline

**1. iOS-Specific Issues**
- CallKit integration: incoming Rainbow calls appear as native phone calls on the lock screen; if CallKit is disabled (Settings > Rainbow > Disable CallKit), calls appear only as notifications and may be missed
- Push notification failures: Rainbow uses APNs (Apple Push Notification Service) for call and message alerts; if the device has "Low Power Mode" enabled or the user has disabled notifications for Rainbow in iOS Settings > Notifications, push delivery fails silently
- Background app refresh: iOS aggressively suspends background apps; if "Background App Refresh" is disabled for Rainbow, the app cannot maintain its WebSocket connection and will miss real-time events; push notifications compensate but with 1-3 second delay
- iOS VoIP push deprecation: Apple deprecated VoIP pushes for non-VoIP apps; Rainbow uses standard push + PushKit combination; on iOS 16+, the app must present a CallKit UI within 3 seconds of receiving a VoIP push or the system will terminate the app
- Storage and cache: Rainbow iOS client stores message cache locally; if device storage is critically low (<500 MB free), the app may crash on launch; clearing the Rainbow cache (Settings > Rainbow > Clear Cache) resolves this

**2. Android-Specific Issues**
- Battery optimization interference: Android OEMs (Samsung, Xiaomi, Huawei, OnePlus) implement aggressive battery optimization that kills background apps; Rainbow must be excluded from battery optimization (Settings > Apps > Rainbow > Battery > Unrestricted)
- Doze mode: when the device enters Doze mode (screen off, no motion), network access is restricted; Rainbow relies on Firebase Cloud Messaging (FCM) high-priority messages to wake the device for incoming calls; if FCM is blocked (e.g., China, some corporate networks), calls are missed entirely
- Manufacturer-specific app killers: Xiaomi MIUI "Battery Saver" and Samsung "Sleeping Apps" actively terminate Rainbow; specific exclusion instructions differ by manufacturer and OS version
- Notification channels: Android 8+ uses notification channels; Rainbow creates separate channels for calls, messages, and system notifications; if a user mutes the "Calls" channel, incoming call ringtones are silenced without warning
- Split-screen and picture-in-picture: Rainbow supports PiP for video calls on Android 8+; if the user reports "video window disappeared," they may have accidentally exited PiP mode

**3. Push Notification Failures**
- End-to-end push notification flow: Rainbow server sends notification to APNs (iOS) or FCM (Android); the push service delivers to the device; the device wakes the app; the app processes the notification and displays it
- Diagnosing push failures: Admin Portal > Users > [user] > Devices shows the device push token status; "Token Registered" means the device has a valid push token; "Token Expired" means the user needs to re-open the app to re-register
- FCM blocked networks: some corporate Wi-Fi networks block Firebase domains (*.googleapis.com, *.google.com); the device must be on a network that allows FCM traffic, or the user must use mobile data for push delivery
- Silent push vs. visible push: Rainbow sends silent pushes to wake the app and visible pushes for user-facing notifications; some MDM configurations block silent pushes, causing the app to fail at background synchronization

**4. Battery Optimization Conflicts**
- Rainbow battery usage profile: background WebSocket connection consumes 2-5% battery per day; active calls consume 5-10% battery per hour
- Reducing battery usage: advise users to disable "Keep app alive in background" if they are comfortable relying on push notifications alone (adds 1-3 second delay to incoming calls)
- Diagnosing battery drain complaints: check if the user has disabled battery optimization (causing Rainbow to maintain a permanent foreground service with a persistent notification); this keeps the WebSocket alive but consumes more battery
- Android "Adaptive Battery" and iOS "Low Power Mode" both interfere with Rainbow background operation; provide clear documentation on which OS settings to adjust

**5. VPN Interference**
- Split-tunnel vs. full-tunnel VPN: full-tunnel VPN routes all traffic through the corporate VPN gateway, including Rainbow media traffic; this adds latency and may cause call quality issues if the VPN gateway is geographically distant
- VPN MTU issues: some VPN tunnels reduce the effective MTU below 1280 bytes, causing WebRTC media packet fragmentation and audio glitches; solution is to configure the VPN with a larger MTU or exclude Rainbow domains from the VPN tunnel
- Always-on VPN (Android Enterprise): corporate-managed devices with always-on VPN cannot bypass the VPN for Rainbow traffic; in this case, ensure the VPN gateway is close to a Rainbow PoP and has sufficient bandwidth for media traffic
- Per-app VPN (iOS): if configured, ensure Rainbow is included in the VPN tunnel for signaling but excluded for media if the VPN adds excessive latency

#### Scenario Description (SCN)

**Setup**: "Sarah L., Regional Sales Manager" reports via email: "I keep missing incoming Rainbow calls on my Samsung Galaxy S23. My colleagues say they called me 5 times yesterday but I never saw any notification. Messages come through fine but only when I open the app."

**Steps**:
1. Learner identifies symptoms: missed calls (push notification failure for calls), messages only on app open (background connection killed by OS).
2. Check the simulated device info: Samsung Galaxy S23, Android 14, Rainbow v2.14, battery optimization set to "Optimized" (not "Unrestricted").
3. Verify in Admin Portal that the device push token is "Registered" — the token is valid but notifications are not reaching the device.
4. Identify root cause: Samsung's "Sleeping Apps" list includes Rainbow, AND battery optimization is not set to "Unrestricted" — the combination prevents FCM high-priority messages from waking the app.
5. Guide the user through: (a) remove Rainbow from Samsung "Sleeping Apps" in Device Care > Battery > Background Usage Limits, (b) set Rainbow to "Unrestricted" in Settings > Apps > Rainbow > Battery, (c) disable "Adaptive Battery" temporarily to test.

**Expected Outcome**: Learner correctly diagnoses the Android OEM battery optimization as the root cause rather than a Rainbow bug, and provides manufacturer-specific instructions.

#### Key Takeaways
- Mobile call notification failures are caused by OS battery optimization in 80%+ of cases, not by Rainbow platform issues
- Samsung, Xiaomi, and Huawei devices require manufacturer-specific configuration to allow Rainbow to receive push notifications reliably
- VPN interference is the second most common mobile issue; full-tunnel VPNs add latency to media traffic and should use split-tunneling for Rainbow domains
- Always check the device push token status in Admin Portal before investigating other causes of notification failures

---

## LEVEL 3: EXPERT (5 hours total)

---

### SUP-301: Advanced Telephony: IVR & Call Routing

| Field | Value |
|---|---|
| **Module ID** | SUP-301 |
| **Title** | Advanced Telephony: IVR & Call Routing |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + QIZ |
| **Prerequisites** | SUP-201 (Telephony Troubleshooting) |

#### Detailed Content Outline

**1. IVR Architecture and Configuration**
- Rainbow IVR (Interactive Voice Server) operates as a cloud service for Hub tier or as an integrated component in PBX overlay deployments
- IVR call flow structure: greeting prompt, DTMF menu selection (up to 9 options per level, 3 levels deep), queue placement, agent connection, overflow/timeout routing
- Configuration path: Admin Portal > Telephony > IVR > Create IVR Flow; flows are defined as visual flowcharts with drag-and-drop nodes
- Audio prompt management: upload WAV or MP3 files (8kHz/16kHz mono recommended for telephony quality); text-to-speech (TTS) available for dynamic prompts in 12 languages
- Common IVR issues: incorrect DTMF detection (usually caused by in-band vs. RFC 2833 mismatch between PBX and Rainbow), timeout too short (default 5 seconds per menu; increase to 10 for complex menus), prompt not playing (audio file format incompatible)

**2. Hunt Groups and Call Distribution**
- Hunt group types: Linear (try agents in fixed order), Circular (round-robin starting from last answered), Simultaneous (ring all agents), Longest Idle (route to agent idle longest)
- Configuration: Admin Portal > Telephony > Hunt Groups > Create Group; assign agents by user or by skill tag
- "Calls not distributing" issue: check that agents are in "Available" presence state; agents in "DND" or "Busy" are skipped; if ALL agents are unavailable, the call goes to the overflow destination
- "Agent keeps getting calls during lunch": the agent's presence may be manually set to Available while they are away; recommend implementing calendar-synced presence or a hard DND schedule
- Weighted distribution: Enterprise tier supports percentage-based routing (e.g., 60% to senior agents, 40% to junior); useful for gradual training ramp-up

**3. Open/Close Calendars and Business Hours**
- Calendar configuration: Admin > Telephony > Business Hours; define open hours per day of week, holidays, and special closures
- Call routing by schedule: during "open" hours, calls route to the IVR or hunt group; during "closed" hours, calls route to voicemail, an after-hours message, or an external overflow number
- Holiday calendar: supports recurring annual holidays and one-time special dates; holidays override the weekly schedule
- Time zone handling: calendars are configured per site; a multi-site deployment with sites in different time zones requires separate calendar configurations per site
- "Calls going to voicemail during business hours": most common cause is time zone misconfiguration; the calendar uses the site's time zone, not the user's local time

**4. Call Routing Chains and Failover**
- Sequential routing: incoming PSTN call > IVR > hunt group > individual agent > voicemail; each step has a configurable timeout (default 20 seconds)
- Failover routing: if the primary hunt group does not answer within the timeout, route to a secondary group, an external number, or a voicemail box
- Simultaneous ring across devices: a call can ring the desk phone, Rainbow desktop client, and Rainbow mobile client simultaneously; the first device to answer takes the call
- Call forking issues: when simultaneous ring is active, all devices ring; if the desk phone answers via auto-answer (e.g., overhead paging), the Rainbow clients still show a missed call notification — this is expected behavior
- Troubleshooting routing: Admin > Telephony > Call History > [call ID] shows the complete routing path with timestamps for each routing decision; use this to trace where a call was "lost"

**5. Teams Direct Routing for Telephony**
- How Rainbow provides PSTN calling capability to Microsoft Teams users via Direct Routing: Rainbow acts as the Session Border Controller (SBC), routing Teams calls through the Rainbow telephony infrastructure
- Configuration requirements: Microsoft 365 Phone System license, Rainbow Business/Enterprise tier, DNS SRV record pointing to Rainbow SBC, TLS certificate exchange
- Common issues: "Teams calls fail with 503 Service Unavailable" — the SBC is not registered with Teams; verify DNS SRV record and certificate thumbprint match
- Media bypass: when enabled, media flows directly between the Teams client and the PSTN gateway, bypassing the Rainbow SBC for lower latency; not all network topologies support this
- Caller ID issues: Teams may display the Rainbow SBC number instead of the user's DID; configure Caller ID policy in Teams Admin Center to override with the user's assigned number

#### Lab Description (LAB)

**Setup**: A sandbox environment with a pre-configured IVR flow for "CityMedical Group" (3 departments: Reception, Billing, Emergency). The IVR is misbehaving: pressing "2" for Billing routes to Emergency instead of Billing.

**Steps**:
1. Open the IVR flow editor and identify that the DTMF mapping for option 2 points to the Emergency hunt group instead of Billing.
2. Correct the DTMF mapping and publish the updated flow.
3. Configure a holiday calendar for the upcoming national holiday, routing all calls to an after-hours message.
4. Create a new hunt group for a "Triage Nurse" team using Longest Idle distribution.
5. Test the full call flow end-to-end using the built-in call simulation tool.

**Expected Outcome**: Learner can configure and troubleshoot IVR flows, hunt groups, and business hour calendars independently.

#### Key Takeaways
- IVR DTMF detection issues are typically caused by in-band vs. RFC 2833 mismatch; always verify the DTMF mode matches between PBX and Rainbow
- Hunt groups skip agents in DND or Busy status; if calls are not distributing, check all agents' presence states
- Business hour calendars use the site's time zone; time zone misconfiguration is the top cause of "calls going to voicemail during business hours"
- Call routing is fully traceable in Admin > Telephony > Call History; always pull the routing trace before escalating a routing issue

---

### SUP-302: Deployment Architecture for Support

| Field | Value |
|---|---|
| **Module ID** | SUP-302 |
| **Title** | Deployment Architecture for Support |
| **Level** | L3 Expert |
| **Duration** | 45 minutes |
| **Content Types** | VID + INF + QIZ |
| **Prerequisites** | SUP-202 (Admin Portal for Support) |

#### Detailed Content Outline

**1. Public Cloud Architecture**
- Rainbow public cloud is a multi-tenant SaaS platform hosted across 22 data centers globally
- Architecture: microservices running in containerized clusters, API gateway for traffic management, distributed message queue for event processing
- User traffic flow: client connects via HTTPS/WebSocket to the nearest Rainbow Point of Presence (PoP); the PoP routes requests to the user's assigned data center region
- Impact on support: all infrastructure is managed by ALE; support agents do not have access to server-side infrastructure; troubleshooting focuses on client, network, and configuration issues
- Service health: status.openrainbow.com shows real-time platform health; subscribe to RSS/email alerts for outage notifications

**2. Rainbow Edge (Private Cloud) Architecture**
- Edge is a private deployment of Rainbow on customer-owned or partner-hosted infrastructure; the entire platform runs on-premises
- Components: application server cluster (minimum 3 nodes for HA), media server, database cluster (PostgreSQL), file storage, TURN server
- Support differences: the customer or partner is responsible for infrastructure health; support agents must understand which layer is responsible (application vs. infrastructure)
- Common Edge issues: certificate expiration (Edge uses self-managed TLS certificates), database storage exhaustion, media server overload during peak hours
- Edge version management: Edge deployments receive updates quarterly; version skew between Edge and mobile/desktop clients can cause compatibility issues

**3. Hybrid Deployment Model**
- Hybrid combines public cloud for collaboration features with on-premises PBX for telephony; Rainbow acts as the bridge
- Data flow: messaging, presence, and conferencing traffic goes to the public cloud; telephony signaling and media stay on-premises through the PBX
- Support implications: issues may span both the cloud and on-premises components; diagnosing requires understanding which features are served by which layer
- Network requirements: the on-premises PBX must have outbound HTTPS connectivity to Rainbow cloud for provisioning and presence sync; media traffic stays local
- Common hybrid issues: presence desynchronization (the cloud presence and PBX presence states diverge), user directory conflicts (cloud directory vs. PBX directory)

**4. Multi-Site Deployment Patterns**
- Hub-and-spoke: one primary site with PBX, satellite offices connect via Rainbow cloud; telephony at satellite offices uses the softphone exclusively
- Mesh: each site has its own PBX with Rainbow overlay; inter-site calls route via SIP trunks or through Rainbow cloud mediation
- Survivability: if the WAN link to Rainbow cloud fails, Edge deployments continue operating locally; public cloud deployments lose all functionality
- Support diagnostic approach for multi-site: first determine the user's site, then check the site-specific PBX status, then check inter-site connectivity

**5. Troubleshooting by Deployment Model**
- Decision tree: identify deployment model first (check Admin > Company > Deployment), then apply model-specific troubleshooting steps
- Public cloud: 90% of issues are client or network related; check status.openrainbow.com before deep investigation
- Edge: check infrastructure health dashboard first (Admin > Edge > System Health shows CPU, memory, storage, certificate status)
- Hybrid: determine which feature is affected, identify whether it is cloud-served or on-premises-served, then investigate the appropriate layer
- Escalation paths differ by model: public cloud issues escalate to ALE Cloud Operations; Edge issues escalate to the customer's infrastructure team (or the partner's managed services team)

#### Key Takeaways
- Always identify the customer's deployment model before troubleshooting; the model determines which components are in scope and who is responsible for infrastructure
- Edge deployments have quarterly update cycles; version skew between Edge server and clients is a recurring source of issues
- Hybrid deployments are the most complex to troubleshoot because issues can span cloud and on-premises components
- status.openrainbow.com is the first check for public cloud issues; Admin > Edge > System Health is the first check for Edge issues

---

### SUP-303: Security & Compliance Support

| Field | Value |
|---|---|
| **Module ID** | SUP-303 |
| **Title** | Security & Compliance Support |
| **Level** | L3 Expert |
| **Duration** | 45 minutes |
| **Content Types** | VID + CAS + QIZ |
| **Prerequisites** | SUP-202 (Admin Portal for Support) |

#### Detailed Content Outline

**1. Encryption Architecture**
- Data in transit: TLS 1.2+ for all API and WebSocket connections; SRTP with AES-128 for voice/video media; DTLS for WebRTC key exchange
- Data at rest: AES-256 encryption for stored messages, files, and call recordings; encryption keys are managed per-tenant
- End-to-end encryption (E2EE): available for 1:1 messages on Enterprise tier; conference calls use server-mediated encryption (not E2EE) because the SFU must access media streams
- Certificate management: public cloud certificates are managed by ALE; Edge deployments require customer-managed certificates (common issue: Let's Encrypt certificates expiring every 90 days)
- Customer-managed encryption keys (CMEK): available for Enterprise tier on request; the customer provides and rotates the master key; this adds complexity to support as key rotation requires coordinated downtime

**2. GDPR Compliance Support**
- Rainbow's GDPR posture: ALE is the data processor; the customer organization is the data controller; a Data Processing Agreement (DPA) is included in Enterprise contracts
- Data Subject Access Request (DSAR): when a user requests their data, the admin can export all messages, files, and call logs via Admin > Users > [user] > Export Data; the export is delivered as an encrypted ZIP file within 48 hours
- Right to Erasure: Admin > Users > [user] > Delete permanently removes all personal data; a 30-day soft-delete window allows recovery before permanent deletion
- Data portability: export formats include JSON for messages, CSV for call logs, and original format for files
- Support agent obligations: never access user message content during troubleshooting without explicit written consent from the data controller; use metadata (timestamps, sender/receiver IDs, message counts) instead

**3. Data Residency and Sovereignty**
- Data center selection: at company creation, the admin selects the data center region (EU, US, APAC, Middle East); all data for that company is stored and processed exclusively in the selected region
- No cross-region data replication: unlike some competitors, Rainbow does not replicate customer data across regions for disaster recovery; instead, it uses intra-region replication between data centers in the same geographic area
- Edge deployment for maximum sovereignty: for organizations that require data to never leave their premises, Rainbow Edge keeps all data on-premises with no cloud dependency
- Compliance documentation: available at trust.openrainbow.com; includes SOC 2 Type II report, ISO 27001 certificate, penetration test summary, and data flow diagrams

**4. Industry-Specific Compliance**
- Healthcare (HDS 1.1): Rainbow is certified for hosting healthcare data in France; the HDS-certified environment is a dedicated instance with additional access controls and audit logging
- Government (ANSSI CSPN, ENS): first-level cybersecurity certification from the French National Cybersecurity Agency; Spanish National Security framework compliance for government organizations
- Financial services: Rainbow meets MiFID II requirements for call recording and retention; recordings are encrypted and tamper-evident with hash verification
- Education: FERPA-compatible data handling when configured with appropriate data retention policies and access controls

**5. Security Incident Response for Support**
- Suspected account compromise: immediately reset password (or revoke SAML session), force logout all active sessions via Admin > Users > [user] > Active Sessions > Revoke All, review the audit log for unauthorized actions
- Unauthorized data access: escalate to ALE Security Operations (security@openrainbow.com) within 1 hour; preserve all logs; do not delete any data
- Vulnerability reports from customers: direct to responsible-disclosure@openrainbow.com; do not confirm or deny vulnerabilities until ALE Security responds
- Data breach notification: ALE commits to notifying affected customers within 72 hours per GDPR requirements; the support team may receive customer inquiries during this window and should refer to the official breach notification communication

#### Key Takeaways
- Rainbow uses TLS 1.2+ for signaling and SRTP for media; true end-to-end encryption is only available for 1:1 messages, not conferences
- GDPR data subject requests are handled via Admin > Users > Export Data (for access) and Admin > Users > Delete (for erasure); support agents must never access message content without written consent
- Data residency is enforced at the infrastructure level with no cross-region replication; the data center region is selected at company creation and cannot be changed without data migration
- For suspected account compromise, the immediate action sequence is: reset password, revoke all sessions, review audit log, escalate to security

---

### SUP-304: Teams Connector Troubleshooting

| Field | Value |
|---|---|
| **Module ID** | SUP-304 |
| **Title** | Teams Connector Troubleshooting |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + SCN + LAB |
| **Prerequisites** | SUP-203 (Connector Support: CRM Integrations) |

#### Detailed Content Outline

**1. Teams Integration Architecture**
- Rainbow integrates with Microsoft Teams in two primary modes: Direct Routing (PSTN telephony via Rainbow SBC) and Coexistence (Rainbow as enhanced collaboration layer alongside Teams)
- Direct Routing architecture: Teams client > Microsoft 365 Phone System > Rainbow SBC > PSTN/PBX; Rainbow provides the telephony trunk
- Coexistence architecture: users have both Teams and Rainbow clients; Rainbow handles telephony and advanced collaboration (AI transcription, Bubbles with external guests); Teams handles internal chat and meetings
- Microsoft 365 requirements: Teams Phone System license (E5 or add-on), Global Admin for initial configuration, DNS SRV records for SBC routing
- Rainbow requirements: Business or Enterprise tier, Teams Connector module enabled in Admin > Integrations > Microsoft Teams

**2. Direct Routing Setup Failures**
- "SBC Not Registered" in Teams Admin Center: verify DNS SRV record (_sip._tls.{domain}) points to the Rainbow SBC FQDN; confirm the TLS certificate CN matches the SBC FQDN; check that TCP port 5061 is open from Microsoft 365 to the SBC
- Certificate trust chain: Microsoft Teams requires the SBC certificate to be signed by a public CA that is in Microsoft's trusted CA list; self-signed certificates are not accepted
- Codec mismatch: Teams supports Silk and G.722 for audio; Rainbow SBC must be configured to offer these codecs; if only G.711 is configured, calls may have audio issues or fail negotiation
- Media bypass configuration: when enabled, media flows directly between the Teams client and the PSTN/PBX gateway, bypassing the SBC; this requires that the Teams client and the gateway are on the same network; incorrect media bypass configuration causes "no audio" for remote/VPN users

**3. Coexistence Configuration Issues**
- Presence synchronization: Rainbow presence and Teams presence can be configured to sync via the Teams connector; a change in one system updates the other within 5-10 seconds
- "Presence not syncing": check that the Teams connector OAuth consent has been granted by a Global Admin; verify that the Teams connector service account has Teams administrator privileges; check for Azure AD Conditional Access policies that block the connector's service principal
- Calendar integration: Rainbow pulls calendar data from Microsoft 365 to set automatic presence (e.g., "In a meeting" when an Outlook event is active); this requires Microsoft Graph API permissions (Calendars.Read)
- Contact federation: Rainbow can import the Teams/Azure AD contact directory; conflicts arise when a user exists in both Rainbow and Teams directories with different attributes (phone number, title); Rainbow uses the local directory as authoritative by default

**4. Common Teams Connector Errors**
- "Teams call failed with 408 Request Timeout": the SBC did not respond within the Microsoft timeout window (10 seconds); usually caused by SBC overload or network latency between Microsoft 365 and the SBC; check SBC health and network path
- "Teams call no caller ID": the outbound caller ID policy in Teams Admin Center is not configured to use the Rainbow-assigned DID; set the CallingLineIdentity policy to use "Direct Routing number"
- "Teams user cannot receive calls": the user's Voice Routing Policy in Teams must have a route that matches the dialed number pattern and points to the Rainbow SBC; verify with `Get-CsOnlineVoiceRoutingPolicy` in Teams PowerShell
- "PSTN call quality poor via Teams": media is routing through the SBC even when media bypass should be active; check the network topology configuration in Teams Admin Center and verify that the user's network subnet is correctly mapped

**5. Hybrid Troubleshooting: Teams + Rainbow + PBX**
- Three-way integration: Teams for internal collaboration, Rainbow for external/advanced collaboration, PBX for desk phones; all three share the same DID/phone number
- Call flow tracing: incoming PSTN call > PBX IVR > Rainbow hunt group > simultaneous ring on desk phone + Rainbow client + Teams client; tracing requires logs from all three systems
- Voicemail conflicts: Teams voicemail, Rainbow voicemail, and PBX voicemail may all be active; ensure only one voicemail system is active to avoid confusing callers
- Diagnosis approach: determine which system the call entered (PBX? SBC? Teams?) by checking the incoming trunk, then trace the routing path through each system

#### Scenario Description (SCN)

**Setup**: "Klaus W., IT Manager at Hamburg Logistics" submits an urgent ticket: "After migrating 50 users to Microsoft Teams with Rainbow Direct Routing last week, about 15 users can make outbound PSTN calls from Teams, but the other 35 users get an error message saying 'Call cannot be completed.' All 50 users can make calls from the Rainbow desktop client without issues."

**Steps**:
1. Recognize that the issue is Teams-side (not Rainbow-side) since Rainbow calling works for all 50 users.
2. Check the simulated Teams Admin Center and identify that only 15 users have a Voice Routing Policy assigned; the other 35 have "Global (default)" which has no PSTN routes configured.
3. Identify that the Voice Routing Policy "RainbowDR-Policy" exists and is correctly configured with the Rainbow SBC route, but was only applied to the first batch of 15 users during migration.
4. Recommend applying the "RainbowDR-Policy" to the remaining 35 users via Teams PowerShell: `Grant-CsOnlineVoiceRoutingPolicy -Identity <user> -PolicyName "RainbowDR-Policy"`.
5. Verify that after policy assignment, all 50 users can make outbound PSTN calls from Teams.

**Expected Outcome**: Learner distinguishes between Rainbow-side and Teams-side issues, navigates Teams Admin Center diagnostic information, and provides the correct Teams PowerShell remediation.

#### Lab Description (LAB)

**Setup**: A sandbox Teams connector environment with a configured Direct Routing SBC and 10 test users.

**Steps**:
1. Verify the SBC health status and certificate validity.
2. Identify one user with a missing Voice Routing Policy and assign the correct policy.
3. Trace a failed inbound call and identify that the PSTN number format (local format) does not match the Teams user's assigned DID (E.164 format); configure a number translation rule on the SBC.
4. Diagnose a presence sync failure by reviewing the connector OAuth token status and reauthorizing the connection.
5. Test an end-to-end outbound call from Teams through the Rainbow SBC to an external number.

**Expected Outcome**: Learner can configure, diagnose, and resolve Direct Routing and coexistence issues across the Rainbow-Teams boundary.

#### Key Takeaways
- Teams Direct Routing issues are split between Teams-side (Voice Routing Policy, Phone System license) and Rainbow-side (SBC configuration, certificate, PSTN trunk); always determine which side owns the failure
- Voice Routing Policy is the most commonly missed configuration step during Direct Routing migrations; verify that every user has the correct policy assigned
- Presence synchronization between Rainbow and Teams requires OAuth consent from a Global Admin and correct Microsoft Graph API permissions
- Media bypass reduces latency but requires correct network topology configuration in Teams Admin Center; misconfiguration causes "no audio" for remote users

---

### SUP-305: Escalation Mastery & Root Cause Analysis

| Field | Value |
|---|---|
| **Module ID** | SUP-305 |
| **Title** | Escalation Mastery & Root Cause Analysis |
| **Level** | L3 Expert |
| **Duration** | 45 minutes |
| **Content Types** | VID + SCN + CAS |
| **Prerequisites** | SUP-204 (Conferencing & Meeting Support) |

#### Detailed Content Outline

**1. Structured Root Cause Analysis Framework**
- 5-Whys technique adapted for Rainbow support: start with the reported symptom and ask "why" at each layer (client, network, server, configuration, process) until the root cause is identified
- Example: "Calls drop after 30 seconds" > Why? SIP session timer expires > Why? Timer set to 30s on PBX > Why? Default was changed during firmware upgrade > Why? Firmware upgrade reset custom configuration > Root cause: unmanaged firmware upgrade process
- Fishbone (Ishikawa) diagram categories for Rainbow issues: People (user error, permissions), Process (configuration change, migration), Platform (Rainbow bug, outage), Network (firewall, bandwidth), Integration (connector, PBX, Teams)
- Documenting RCA: every escalated issue should have a documented root cause in the ticket, even if the cause is "user error" or "external network issue"; this builds a knowledge base for pattern detection

**2. When to Escalate**
- Escalation criteria: issue affects 5+ users, issue involves data loss or security, issue persists after standard troubleshooting (30 minutes for P1, 2 hours for P2), issue involves a suspected platform bug
- Priority levels: P1 (service down for entire company), P2 (feature down for multiple users), P3 (feature impaired for single user), P4 (cosmetic or non-urgent)
- What to include in an escalation: customer name, affected users count, symptom description, steps already taken, diagnostic bundle/logs, deployment model, client versions, screenshots/recordings
- Anti-patterns: escalating without troubleshooting (wastes Tier 2 time), escalating with no logs (Tier 2 will ask for them and the ticket bounces back), escalating the symptom instead of the diagnosed narrowing

**3. Log Analysis Techniques**
- Client logs: connection state timeline (Connected > Reconnecting > Disconnected), WebSocket errors (1006 Abnormal Closure = network interruption, 1001 Going Away = server-initiated disconnect)
- Server-side correlation: use the x-rainbow-request-id to trace a single operation across client, API gateway, microservice, and database layers
- Pattern recognition: if the same error appears at the same time every day, look for scheduled tasks (backup jobs, antivirus scans) that coincide; if the error correlates with high usage, look for capacity limits
- SIP trace reading: understand INVITE, 100 Trying, 180 Ringing, 200 OK, ACK, BYE sequence; identify where the failure occurs (no 180 = call not reaching destination, 200 OK but no media = codec negotiation failure)

**4. Cross-System Troubleshooting**
- Issues that span Rainbow + PBX + CRM connector + network: requires a holistic approach; start by isolating which system is responsible using elimination
- Elimination method: test calling from Rainbow web client (removes desktop client as variable), test calling to a Rainbow-only user (removes PBX as variable), test with connector disabled (removes CRM as variable)
- Timeline reconstruction: build a minute-by-minute timeline of the issue using logs from all systems; correlate timestamps (beware of clock skew between systems)
- Engaging third-party vendors: when the issue involves a CRM or PBX vendor, prepare a clear problem statement with logs showing that the issue originates in their component

**5. Post-Incident Review**
- After resolving a major incident, conduct a brief post-incident review: what happened, when, who was affected, what was the root cause, what was the resolution, how to prevent recurrence
- Knowledge base contribution: every unique root cause should be documented as a KB article (see SUP-402)
- Trend analysis: review the last 30 days of escalations to identify patterns; common patterns include "every customer who upgrades to version X.Y experiences issue Z" — these should be reported to product engineering

#### Scenario Description (SCN)

**Setup**: A branching scenario where the learner handles a P1 escalation from "MegaRetail Corp" (2,000 users, Enterprise tier, 5 sites). The CEO's executive assistant reports: "The CEO cannot join any conference calls since this morning. He gets 'Conference service unavailable' error. He has a board meeting in 90 minutes."

**Steps (branching)**:
1. Branch A: Learner checks status.openrainbow.com first (correct) — discovers no platform issues — proceeds to investigate user-specific issue.
2. Branch B: Learner immediately resets the CEO's password (incorrect for an SSO user) — this has no effect and wastes 10 minutes.
3. Following Branch A: check the admin portal — CEO's account is Enterprise tier, SSO authenticated, last login 8 AM today (successful). Conference service is enabled at company level.
4. Check conference logs: error code CONF_MEDIA_SRV_UNREACHABLE for the CEO's site (New York HQ). Other sites are unaffected.
5. Identify root cause: the New York office firewall was updated at 7 AM, and the new rules block UDP traffic to Rainbow media servers. Conference audio/video cannot be established.
6. Immediate workaround: the CEO can join conferences from his mobile client on cellular data (bypasses the office firewall).
7. Long-term fix: provide the firewall team with the required Rainbow media server IP ranges for UDP port 10000-20000.

**Expected Outcome**: Learner follows the correct diagnostic sequence (platform health > user account > site-specific investigation), provides an immediate workaround, and identifies the infrastructure root cause.

#### Key Takeaways
- Always check platform health status before investigating user-specific issues; it takes 30 seconds and can save 30 minutes
- Structured RCA (5-Whys, Fishbone) prevents jumping to conclusions and ensures the root cause is found, not just the proximate cause
- Escalations must include: customer impact scope, symptom description, steps already taken, and diagnostic logs; missing any of these causes bounce-backs
- Post-incident reviews and KB contributions transform individual support events into organizational knowledge

---

### SUP-306: Troubleshooting Decision Trees

| Field | Value |
|---|---|
| **Module ID** | SUP-306 |
| **Title** | Troubleshooting Decision Trees |
| **Level** | L3 Expert |
| **Duration** | 45 minutes |
| **Content Types** | INT (interactive decision tree) |
| **Prerequisites** | SUP-301, SUP-304 |

#### Detailed Content Outline

**1. Decision Tree Methodology**
- Structure: each tree starts with a symptom category (e.g., "Cannot make calls"), branches on diagnostic questions ("Is it all calls or specific numbers?"), and terminates at a resolution or escalation action
- Coverage: the module includes interactive decision trees for the top 20 support scenarios, covering telephony, connectivity, conferencing, connectors, and mobile
- Branching logic: binary (yes/no) and multi-path (select the matching symptom) branches; each decision point includes an explanation of why the question is diagnostically relevant
- Timed mode: advanced learners can practice the decision trees in "timed mode" where they must reach a resolution within 5 minutes per tree (simulating real support queue pressure)

**2. Telephony Decision Trees**
- Tree 1: "Cannot make or receive calls" — branches: all calls vs. specific, PBX user vs. cloud-only user, one user vs. multiple users
- Tree 2: "Call quality is poor" — branches: one-way audio, echo, choppy audio, dropped calls; each terminal leads to specific network or client settings
- Tree 3: "Voicemail not working" — branches: voicemail not recording, voicemail not playing back, voicemail notification not received
- Tree 4: "Call forwarding not functioning" — branches: forward to external number, forward to voicemail, forward to another Rainbow user

**3. Connectivity Decision Trees**
- Tree 5: "Cannot log in to Rainbow" — branches: SSO vs. local auth, error message category, browser vs. desktop vs. mobile
- Tree 6: "Frequent disconnections" — branches: interval pattern (every X minutes = proxy timeout, random = network instability), client version, OS power management
- Tree 7: "Cannot connect from this network" — branches: corporate vs. guest Wi-Fi vs. cellular, proxy configuration, firewall blocking

**4. Conferencing & AI Decision Trees**
- Tree 8: "Cannot join conference" — branches: error message type, subscription tier check, conference capacity check
- Tree 9: "Screen sharing not working" — branches: OS permission check, browser vs. desktop, hardware acceleration check
- Tree 10: "AI transcription not starting" — branches: tier check, language check, concurrent transcription limit check

**5. Connector Decision Trees**
- Tree 11: "CRM CTI bar not loading" — branches: CRM type, browser extension status, Rainbow client running check, version compatibility
- Tree 12: "Teams calls failing" — branches: inbound vs. outbound, Direct Routing policy check, SBC health check
- Tree 13: "Mobile notifications not arriving" — branches: iOS vs. Android, push token status, battery optimization, VPN interference

#### Key Takeaways
- Decision trees reduce mean time to resolution by providing a systematic diagnostic path instead of ad-hoc troubleshooting
- The top 20 scenarios in these trees cover approximately 85% of all support tickets by volume
- Each decision point should take no more than 30 seconds to evaluate; if a diagnostic step takes longer, it should be a separate branch
- The trees should be treated as living documents; update them whenever a new recurring issue pattern is identified

---

## LEVEL 4: CHAMPION (3 hours total)

---

### SUP-401: Support Metrics & KPI Optimization

| Field | Value |
|---|---|
| **Module ID** | SUP-401 |
| **Title** | Support Metrics & KPI Optimization |
| **Level** | L4 Champion |
| **Duration** | 60 minutes |
| **Content Types** | VID + CAS + QIZ |
| **Prerequisites** | SUP-305 (Escalation Mastery) |

#### Detailed Content Outline

**1. Core Support KPIs**
- First Contact Resolution (FCR): target 70%+; calculation: (issues resolved on first contact / total issues) x 100; Rainbow-specific factors: remote diagnostic tools, admin portal access, and decision trees should drive FCR above industry average
- Mean Time to Resolution (MTTR): target <4 hours for P2, <24 hours for P3; track MTTR by issue category (telephony, connectivity, connectors) to identify areas needing training investment
- Escalation Rate: target <15%; high escalation rate indicates L1/L2 skill gaps; analyze escalation reasons to identify training opportunities
- Customer Satisfaction (CSAT): target >4.2/5; correlates strongly with FCR and MTTR; post-resolution surveys should ask about resolution quality, communication quality, and overall experience
- Ticket Volume Trends: track by day of week, time of day, and issue category; spikes often correlate with platform updates, customer deployments, or external events (e.g., a major CRM update breaks connectors)

**2. Data-Driven Support Improvement**
- Pareto analysis: identify the 20% of issue types that cause 80% of tickets; focus training and KB development on these categories
- Repeat contact rate: percentage of customers who contact support again within 7 days about the same issue; a high rate (>20%) indicates resolutions are not sticking
- Self-service deflection: measure KB article views and correlate with ticket volume reduction; target 30% deflection rate (30% of potential tickets resolved by customers reading KB articles)
- Agent utilization: calculate the ratio of time spent on active tickets vs. available time; target 70-80% (below 70% = underutilized, above 80% = burnout risk)

**3. Building Support Dashboards**
- Essential dashboard metrics: real-time ticket queue depth, SLA compliance percentage (P1 responded within 15 min, P2 within 1 hour), FCR trailing 7-day average, CSAT trailing 30-day average
- Category breakdown: pie chart of ticket categories (telephony, connectivity, conferencing, connectors, mobile, admin portal, security) — allows identifying emerging issue patterns
- Trend analysis: weekly/monthly comparison of ticket volume and MTTR; use to justify staffing changes and training investments
- Heat map: tickets by day of week and hour — identifies peak support demand periods for scheduling

**4. KPI Improvement Strategies**
- Improving FCR: invest in diagnostic tool access for L1 agents, create more decision trees (SUP-306), develop quick-resolution scripts for top 10 issues
- Reducing MTTR: streamline escalation process (pre-populate escalation templates with required fields), implement warm handoff between tiers (instead of cold ticket transfers), establish expert office hours
- Reducing ticket volume: proactive monitoring (detect issues before customers report them), pre-release testing documentation, customer-facing status page with self-service diagnostics
- Improving CSAT: set expectations during first contact (estimated resolution time), provide regular updates on open tickets, follow up after resolution to confirm satisfaction

**5. Reporting to Leadership**
- Monthly support report template: executive summary, KPI dashboard, top issues this month, improvements implemented, risks identified, resource requests
- Translating metrics to business impact: "FCR improvement from 65% to 75% reduced average ticket cost from $42 to $31 (26% reduction)" — executives respond to cost metrics
- Benchmarking: compare Rainbow support metrics against industry benchmarks (HDI or MetricNet data) and against internal historical trends

#### Case Study (CAS)

**Scenario**: "AsiaPac Telecom Support Center" handles 500 Rainbow support tickets per month. Their FCR is 55% (below the 70% target), MTTR for P2 issues is 8 hours (target: 4 hours), and CSAT is 3.6/5 (target: 4.2). The support manager asks for a KPI improvement plan.

**Analysis Tasks**:
1. Perform a Pareto analysis on the provided ticket data (200 sample tickets with categories, resolution times, and escalation flags).
2. Identify that 40% of tickets are telephony-related (PBX overlay issues) and 60% of those are escalated because L1 agents lack PBX troubleshooting skills.
3. Recommend: (a) mandatory SUP-201 completion for all L1 agents, (b) create a PBX overlay decision tree, (c) establish a dedicated PBX specialist for warm handoffs.
4. Project the impact: if telephony escalation rate drops from 60% to 25%, overall FCR should improve from 55% to approximately 69%, and MTTR for telephony tickets should drop from 8 hours to 3 hours.

#### Key Takeaways
- FCR is the single most impactful KPI; improving it reduces cost per ticket, MTTR, and increases CSAT simultaneously
- Pareto analysis (the 20/80 rule) should guide all training and process improvement investments
- Self-service deflection through KB articles is the most scalable way to reduce ticket volume without adding headcount
- Always translate support metrics into business impact (cost, revenue protection, customer retention) when presenting to leadership

---

### SUP-402: Knowledge Base Contribution

| Field | Value |
|---|---|
| **Module ID** | SUP-402 |
| **Title** | Knowledge Base Contribution |
| **Level** | L4 Champion |
| **Duration** | 45 minutes |
| **Content Types** | VID + LAB |
| **Prerequisites** | SUP-401 (Support Metrics & KPI Optimization) |

#### Detailed Content Outline

**1. KB Article Structure and Standards**
- Standard template: Title (symptom-based, not solution-based), Applies To (subscription tier, client version, deployment model), Symptoms (user-reported and observed), Cause (root cause explanation), Resolution (step-by-step fix), Related Articles (links to prerequisite and follow-up articles)
- Writing style: use second person ("you"), present tense, active voice; each step should be one action; include screenshots for UI-based steps
- Searchability: include the exact error message text in the article (users will search for the error message they see); add keyword tags for alternative phrasing (e.g., "no sound" tag on a "one-way audio" article)
- Versioning: each article has a version number and "last verified" date; articles older than 6 months should be reviewed for accuracy against the current platform version

**2. Identifying KB Article Opportunities**
- Trigger: any issue resolved 3+ times with the same root cause and resolution should become a KB article
- Mining ticket data: run monthly queries for top unresolved searches in the KB (searches that returned zero results), top repeated ticket categories, and most-referenced internal troubleshooting notes
- Pattern detection: if multiple agents solve the same issue using different methods, standardize on the most efficient method and document it
- Customer-facing vs. internal: some KB articles are suitable for customer self-service (e.g., "How to grant screen sharing permission on macOS"); others are internal only (e.g., "How to trace SIP logs for PBX overlay issues")

**3. Writing Effective Resolutions**
- Step precision: "Click the Settings gear icon in the top-right corner" is better than "Go to Settings"; assume the reader has never seen the interface
- Decision logic: when the resolution depends on variables (OS, client version, tier), use conditional sections clearly labeled (e.g., "If you are on Windows:" / "If you are on macOS:")
- Verification step: every resolution should end with a verification step that confirms the issue is fixed (e.g., "Make a test call to verify audio works in both directions")
- Workaround vs. fix: clearly distinguish between a permanent fix and a temporary workaround; if only a workaround exists, note that and link to the feature request or bug report

**4. KB Governance and Quality**
- Review process: new articles are submitted as "Draft" > reviewed by a peer (technical accuracy) > reviewed by a lead (style and completeness) > published
- Feedback loop: each article has a "Was this helpful? Yes/No" rating; articles with >30% "No" ratings should be revised
- Retirement: articles for issues fixed in a platform update should be marked "Archived" (not deleted) and tagged with the version that fixed the issue

#### Lab Description (LAB)

**Setup**: The learner is given 3 resolved support tickets and must create a KB article for each.

**Steps**:
1. Ticket 1: "Salesforce CTI bar disappears after browser update" — write a customer-facing KB article with steps to reinstall the browser extension and re-enable the connector.
2. Ticket 2: "WebSocket disconnection every 15 minutes" — write an internal KB article documenting the proxy idle timeout root cause and the proxy configuration fix.
3. Ticket 3: "AI transcription shows 'Language not supported' for a supported language" — write a customer-facing KB article explaining that the organizer must manually set the transcription language before starting (auto-detect is not yet available for all languages).

**Expected Outcome**: Learner produces three KB articles that meet the template, style, and searchability standards.

#### Key Takeaways
- KB articles should be titled by symptom ("Call drops after 30 seconds") not by solution ("Adjust SIP session timer") because users search for symptoms
- Every resolution must include a verification step; a resolution without verification is incomplete
- The KB is a living system; articles must be reviewed every 6 months and retired when the underlying issue is fixed in a platform update
- Mining ticket data for repeated issues is the most efficient way to identify high-impact KB article opportunities

---

### SUP-403: Mentoring & Team Enablement

| Field | Value |
|---|---|
| **Module ID** | SUP-403 |
| **Title** | Mentoring & Team Enablement |
| **Level** | L4 Champion |
| **Duration** | 45 minutes |
| **Content Types** | VID + CAS |
| **Prerequisites** | SUP-401 (Support Metrics & KPI Optimization) |

#### Detailed Content Outline

**1. Building a Support Onboarding Runbook**
- The first 30 days: a structured onboarding plan for new support agents covering L1 Foundation modules (week 1), shadowing senior agents (week 2), handling tickets with supervision (weeks 3-4)
- Tool checklist: ensure new agents have admin portal access (Support Admin role), access to the internal KB, access to the ticket system with correct queue assignments, and Rainbow desktop + mobile clients installed
- Knowledge verification: at the end of each onboarding week, the new agent should complete the corresponding Rainbow Training module quiz; minimum passing score of 80%
- Common onboarding failure: throwing new agents into the ticket queue on day 1 without training; this damages FCR, MTTR, and CSAT and demoralizes the new hire

**2. Mentoring Techniques for Technical Growth**
- Shadowing: the mentee observes the mentor handling live tickets, with the mentor narrating their diagnostic thought process ("I am checking the admin portal first because the user mentioned SSO, so I want to verify the authentication method...")
- Reverse shadowing: the mentor observes the mentee handling tickets and provides real-time coaching; intervene only if the mentee is heading toward an incorrect or destructive action
- Ticket review: weekly review of the mentee's resolved tickets; focus on diagnostic approach (was it systematic?), resolution quality (was the root cause found or just the symptom?), and communication quality (was the customer response clear and empathetic?)
- Stretch assignments: assign the mentee one issue per week that is slightly above their current skill level (e.g., a connector issue when they have only done telephony); debrief the experience afterward

**3. Creating Internal Training Sessions**
- Identify training needs: use the KPI data from SUP-401 to identify skill gaps; if 40% of telephony tickets are escalated, run a telephony troubleshooting workshop
- Session format: 30-minute sessions, one topic per session, mix of live demo + hands-on exercise; record for those who cannot attend live
- "Ticket of the Week": select an interesting or unusual resolved ticket each week, present the diagnostic journey to the team, and discuss alternative approaches
- Brown bag sessions: invite product engineers or Tier 3 support to present deep dives on specific technical areas (e.g., "How the Rainbow SFU handles video layout switching")

**4. Measuring Team Enablement Impact**
- Before/after metrics: measure FCR, MTTR, and escalation rate before and after a training initiative; the training investment is justified if metrics improve
- Skill matrix: maintain a team skill matrix mapping each agent's proficiency (Beginner/Intermediate/Expert) across categories (telephony, connectivity, conferencing, connectors, mobile, Teams); use this to assign tickets to agents with matching skills and to identify training gaps
- Certification tracking: track which agents have completed which Rainbow Training Academy modules; set team targets (e.g., 100% L2 completion by Q2)

**5. Building a Champion Culture**
- Recognition: publicly recognize agents who achieve certifications, contribute KB articles, or mentor new hires
- Community of Practice: establish a weekly or bi-weekly "Rainbow Champions" meeting where senior agents share discoveries, discuss trends, and propose process improvements
- Feedback to product: Champions should aggregate feature requests and bug reports from their teams and submit consolidated feedback to the Rainbow product team through the partner or customer channel

#### Case Study (CAS)

**Scenario**: A support team of 12 agents has a 58% FCR rate and high turnover (3 agents left in the last 6 months). The team lead asks the Champion to design a 90-day enablement program.

**Analysis Tasks**:
1. Assess the current state: review the skill matrix, certification completion data, and exit interview feedback (common themes: "no career growth," "repetitive work," "insufficient training").
2. Design the 90-day plan: Month 1 — complete L2 modules for all agents, establish mentoring pairs (1 senior + 1 junior), launch "Ticket of the Week." Month 2 — begin L3 modules for senior agents, start KB contribution program, run weekly 30-minute training sessions. Month 3 — assess progress via FCR and MTTR improvement, celebrate first certifications, gather feedback and iterate.
3. Project outcomes: target FCR improvement to 68% and agent satisfaction improvement from 3.2/5 to 4.0/5.

#### Key Takeaways
- Structured onboarding (not "sink or swim") is the single most impactful investment in support quality; it takes 4 weeks upfront but saves months of poor performance
- The "Ticket of the Week" format is a low-effort, high-impact team learning tool that transforms individual experience into team knowledge
- Skill matrices should drive both ticket routing (match tickets to skilled agents) and training investment (identify gaps)
- Champion culture requires visible recognition, regular community meetups, and a clear path from L1 agent to certified Champion
