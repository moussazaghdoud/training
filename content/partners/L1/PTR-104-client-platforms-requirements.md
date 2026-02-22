# PTR-104: Client Platforms & System Requirements

| Field            | Value                                                        |
|------------------|--------------------------------------------------------------|
| **Module ID**    | PTR-104                                                      |
| **Title**        | Client Platforms & System Requirements                       |
| **Track**        | Partner L1 — Foundation                                      |
| **Duration**     | 30 minutes                                                   |
| **Content Types**| Reading, Technical Reference, Knowledge Check                |
| **Prerequisites**| PTR-101: Rainbow Product Portfolio                           |

## Learning Objectives

After completing this module you will be able to:

1. Describe the minimum system requirements for every Rainbow client platform.
2. Explain the desktop client installation and update mechanisms available for enterprise deployment.
3. Identify supported browsers and their WebRTC requirements for the Rainbow Web client.
4. Specify mobile client minimum OS versions and distribution channels.
5. Calculate network bandwidth requirements for audio, video, and screen sharing.
6. Advise customers on firewall, proxy, and port configuration for successful Rainbow deployment.
7. Explain the Citrix VDI optimization architecture and its requirements.

---

## 1. Desktop Clients

Rainbow provides native desktop clients for Windows and macOS. These clients deliver the richest feature set, including PBX desk phone control, which is not available in the web or mobile clients.

### 1.1 Windows Client

**Minimum System Requirements:**

| Requirement       | Specification                                              |
|-------------------|------------------------------------------------------------|
| Operating System  | Windows 10 (64-bit) or later. Windows 11 fully supported. |
| Processor         | Intel Core i3 or equivalent (dual-core, 1.5 GHz minimum)  |
| RAM               | 4 GB minimum, 8 GB recommended                            |
| Disk Space        | 500 MB for installation, additional space for cached files |
| Display           | 1280 x 720 minimum resolution                             |
| Audio             | Microphone and speakers or headset for calls               |
| Camera            | USB or built-in webcam for video calls (720p capable recommended) |
| Network           | Ethernet or Wi-Fi with stable broadband connectivity       |

**Installation Methods:**

- **MSI Installer:** A standard Windows Installer package (.msi) is provided for manual installation. Administrators can download it from the Rainbow admin portal or the ALE support site. Double-click to install with default settings, or use command-line parameters for silent installation:
  ```
  msiexec /i RainbowSetup.msi /quiet /norestart
  ```
- **SCCM / GPO Deployment:** The MSI package is fully compatible with Microsoft System Center Configuration Manager (SCCM) and Group Policy Object (GPO) software deployment. This allows IT teams to push Rainbow to thousands of desktops without user intervention. The MSI supports standard transforms (.mst) for preconfiguring settings such as server URL and auto-login parameters.
- **Microsoft Intune:** The MSI can be wrapped as a Win32 app and deployed through Microsoft Intune for organizations using modern device management.

**Auto-Update:**

The Windows client includes an automatic update mechanism. When a new version is released, the client downloads the update in the background and prompts the user to restart the application. Administrators can control the update policy:

- **Automatic (default):** Updates are downloaded and applied automatically.
- **Notify only:** Users are notified of available updates but must manually initiate the installation.
- **Disabled:** Updates are managed entirely through SCCM/GPO. The built-in updater is turned off.

Update policies are configured in the Rainbow admin portal under the company-level settings.

### 1.2 macOS Client

**Minimum System Requirements:**

| Requirement       | Specification                                              |
|-------------------|------------------------------------------------------------|
| Operating System  | macOS 11 Big Sur or later. macOS 14 Sonoma fully supported.|
| Processor         | Apple M1 (native) or Intel Core i3 (Rosetta 2 compatible) |
| RAM               | 4 GB minimum, 8 GB recommended                            |
| Disk Space        | 500 MB for installation                                   |
| Display           | 1280 x 720 minimum resolution                             |
| Audio/Camera      | Built-in or USB microphone, speakers, webcam               |

**Installation Methods:**

- **DMG Installer:** Standard macOS disk image for manual drag-and-drop installation.
- **Jamf Pro / MDM Deployment:** The DMG can be packaged as a .pkg file for deployment through Jamf Pro or any other MDM solution that supports macOS. A pre-configured plist file can be included to set default server URLs and policies.

**Auto-Update:** Same behavior as the Windows client. Automatic updates are on by default and can be controlled via admin policy.

### 1.3 Desktop Feature Comparison

Both Windows and macOS clients support the full Rainbow feature set:

- Instant messaging (1:1 and group / bubble).
- Presence (available, busy, do not disturb, away, custom status).
- Audio calls (peer-to-peer and conference, HD quality).
- Video calls (720p default, 1080p capable with sufficient bandwidth).
- Screen sharing with optional remote control.
- File sharing (up to 100 MB per file).
- PBX desk phone control (make, receive, transfer, hold, conference — requires Business tier or above).
- Search across messages, contacts, and files.
- Do Not Disturb scheduling.
- Multi-device synchronization (messages and presence sync across desktop, web, and mobile).

---

## 2. Web Client

The Rainbow Web client provides access to Rainbow through any supported browser without requiring software installation. It is the ideal solution for BYOD environments, guest users, kiosk deployments, and organizations with restrictive software installation policies.

### 2.1 Supported Browsers

| Browser              | Minimum Version | WebRTC Support | Notes                              |
|----------------------|-----------------|----------------|------------------------------------|
| Google Chrome        | Version 90+     | Full           | Recommended browser for best experience |
| Microsoft Edge       | Version 90+     | Full           | Chromium-based Edge only. Legacy Edge is not supported. |
| Mozilla Firefox      | Version 90+     | Full           | Some screen sharing features may require user permission prompts. |
| Apple Safari         | Version 14+     | Full           | macOS and iOS Safari supported.    |

**Unsupported browsers:** Internet Explorer (all versions), legacy Microsoft Edge (non-Chromium), and any browser that does not implement the WebRTC standard.

### 2.2 WebRTC Requirements

The web client relies on WebRTC (Web Real-Time Communication) for audio, video, and screen sharing. WebRTC is a browser-native technology — no plugins, extensions, or downloads are required.

For WebRTC to function correctly:

- The browser must have permission to access the microphone and camera. Users will see a browser permission prompt on first use.
- HTTPS is required. Rainbow's web client is served over HTTPS by default. WebRTC does not work on unencrypted HTTP connections.
- STUN/TURN servers must be reachable for NAT traversal (see Section 5 on firewall configuration).

### 2.3 Web Client Feature Set

The web client supports almost all features available on the desktop clients with the following exceptions:

- **PBX desk phone control** is not available in the web client. Users who need to control their desk phone must use the desktop client.
- **Auto-update** is not applicable — the web client always serves the latest version.
- **System tray integration** is not available. The browser tab must remain open to receive notifications (browser push notifications are supported for incoming calls and messages when the tab is in the background).

### 2.4 Progressive Web App (PWA)

Rainbow's web client can be installed as a Progressive Web App on Chrome and Edge. This creates a standalone window (no browser address bar) and adds Rainbow to the system's application menu. The PWA receives push notifications even when the browser is closed, providing an experience closer to a native desktop client.

---

## 3. Mobile Clients

Rainbow provides native mobile applications for iOS and Android. Mobile clients are essential for remote workers, field staff, and executives who need to stay connected while away from their desk.

### 3.1 iOS Client

| Requirement       | Specification                                              |
|-------------------|------------------------------------------------------------|
| Minimum OS        | iOS 15 or later                                            |
| Supported Devices | iPhone 8 and later, iPad (6th generation) and later        |
| Distribution      | Apple App Store (public listing)                           |
| Enterprise Dist.  | Apple Business Manager / Volume Purchase Program (VPP)     |
| Storage           | Approximately 150 MB for installation                      |

**Key iOS-specific features:**
- CallKit integration: incoming Rainbow calls appear in the native iOS call interface, including on the lock screen.
- Siri shortcuts: "Hey Siri, call John on Rainbow."
- CarPlay support for hands-free calling while driving.
- Background VoIP push notifications: incoming calls are delivered even when the app is fully closed.
- Share Extension: share photos, files, and links from other iOS apps directly into Rainbow conversations.

### 3.2 Android Client

| Requirement       | Specification                                              |
|-------------------|------------------------------------------------------------|
| Minimum OS        | Android 10 (API level 29) or later                         |
| Supported Devices | Phones and tablets with Google Play Services               |
| Distribution      | Google Play Store (public listing)                         |
| Alternative Dist. | APK sideload for devices without Google Play               |
| Enterprise Dist.  | Android Enterprise (managed Google Play)                   |
| Storage           | Approximately 120 MB for installation                      |

**Key Android-specific features:**
- Connection Service integration: Rainbow calls integrate with the Android native dialer.
- Firebase Cloud Messaging (FCM) for push notifications.
- Android Auto support for hands-free calling.
- Widgets: Rainbow presence status and recent conversations on the home screen.
- APK sideload support for ruggedized devices and environments without Google Play (common in industrial and government deployments).

### 3.3 Mobile Device Management (MDM)

Both iOS and Android clients support enterprise MDM platforms:

- **App configuration:** Server URL, default login settings, and feature policies can be pushed via MDM app configuration profiles (AppConfig standard on iOS, Managed Configurations on Android).
- **Conditional access:** MDM can enforce device compliance checks (PIN set, OS version, encryption enabled) before allowing Rainbow access.
- **Remote wipe:** MDM can remotely remove the Rainbow app and its local data from a lost or stolen device.
- **Per-app VPN:** Supported on both platforms for environments that require VPN connectivity for all Rainbow traffic.

---

## 4. Network Requirements

Proper network configuration is critical for a successful Rainbow deployment. Poor network setup is the most common cause of call quality issues and deployment failures. Understanding these requirements will help you set correct expectations with the customer's IT team.

### 4.1 Bandwidth Requirements

| Media Type        | Per-Stream Bandwidth | Direction   | Notes                              |
|-------------------|----------------------|-------------|------------------------------------|
| Audio call        | ~100 kbps            | Bidirectional| Opus codec, adaptive bitrate      |
| Video call (720p) | ~1.5 Mbps            | Bidirectional| VP8/H.264, adaptive quality        |
| Video call (1080p)| ~3.0 Mbps            | Bidirectional| Requires sufficient CPU and bandwidth |
| Screen sharing    | ~1.0 - 2.5 Mbps     | Sender only | Variable based on screen content   |
| Instant messaging | Negligible           | Bidirectional| Text-based, minimal bandwidth      |
| File transfer     | Varies               | Per transfer | Limited by connection speed        |

**Calculating total bandwidth for a site:**

To estimate the peak bandwidth requirement for a site, multiply the per-stream bandwidth by the expected number of concurrent calls. Not all users call simultaneously. A typical concurrency ratio is 10-15% of total users.

**Example:** An office with 200 Rainbow users:
- Expected concurrent audio calls: 200 x 15% = 30 calls.
- Audio bandwidth: 30 x 100 kbps x 2 (bidirectional) = 6 Mbps.
- Expected concurrent video calls: 10 calls.
- Video bandwidth: 10 x 1.5 Mbps x 2 = 30 Mbps.
- Expected concurrent screen shares: 5 sessions.
- Screen share bandwidth: 5 x 2.0 Mbps = 10 Mbps.
- **Total estimated peak bandwidth: ~46 Mbps.**

Most modern enterprise internet connections can handle this easily. However, sites with constrained bandwidth (small branch offices, satellite links) may need to restrict video or limit concurrent sessions.

### 4.2 Latency and Jitter

For acceptable call quality:

| Metric         | Acceptable   | Good        | Excellent    |
|----------------|--------------|-------------|--------------|
| Latency (RTT)  | < 300 ms     | < 150 ms    | < 50 ms      |
| Jitter          | < 30 ms      | < 15 ms     | < 5 ms       |
| Packet loss     | < 3%         | < 1%        | < 0.1%       |

If these thresholds are exceeded, users will experience choppy audio, frozen video, and delayed screen sharing. Quality of Service (QoS) configuration on the customer's network is strongly recommended.

### 4.3 Quality of Service (QoS) Recommendations

For enterprise networks, configure QoS to prioritize Rainbow traffic:

- Mark Rainbow audio traffic with DSCP EF (Expedited Forwarding, value 46).
- Mark Rainbow video traffic with DSCP AF41 (Assured Forwarding, value 34).
- Mark Rainbow signaling traffic with DSCP CS3 (Class Selector 3, value 24).
- Configure network switches and routers to honor these markings with appropriate queuing policies.

The Rainbow desktop client can be configured to apply DSCP markings to outgoing packets. Network infrastructure must be configured to preserve these markings end-to-end.

---

## 5. Firewall and Proxy Considerations

Enterprise firewalls and proxy servers are the most common deployment obstacles. The customer's security team must allow specific traffic for Rainbow to function.

### 5.1 Required Ports and Protocols

| Service              | Protocol | Destination Ports    | Direction      | Purpose                        |
|----------------------|----------|----------------------|----------------|--------------------------------|
| HTTPS (signaling)    | TCP      | 443                  | Outbound       | REST API, WebSocket signaling  |
| HTTPS (web client)   | TCP      | 443                  | Outbound       | Web application loading        |
| Media (WebRTC)       | UDP      | 3478, 49152-65535    | Outbound       | Audio/video RTP streams        |
| TURN relay           | TCP/UDP  | 443, 3478            | Outbound       | Media relay when UDP is blocked|
| STUN                 | UDP      | 3478                 | Outbound       | NAT traversal discovery        |

**Key points for security teams:**

- All signaling traffic uses TLS-encrypted HTTPS (TCP 443). This is standard web traffic and typically passes through firewalls and proxies without issue.
- Media traffic uses UDP whenever possible for lowest latency. If UDP is blocked, Rainbow falls back to TCP-based TURN relay through port 443, but this adds latency and should be avoided in production.
- No inbound ports need to be opened. All connections are initiated outbound from the Rainbow client.

### 5.2 Destination Domains

The firewall must allow outbound traffic to the following domains (exact list may be updated — always refer to the ALE documentation for the current list):

- `*.openrainbow.com` — Rainbow platform services.
- `*.openrainbow.net` — Rainbow media services.
- `*.amazonaws.com` — Content delivery (file storage, avatars).
- STUN/TURN server addresses provided in the ALE deployment guide.

### 5.3 Proxy Server Considerations

Many enterprises route web traffic through proxy servers. Rainbow works through standard HTTP/HTTPS proxies with the following considerations:

- **Transparent proxies:** Work without client configuration. Rainbow traffic passes through normally.
- **Explicit proxies:** The Rainbow desktop client can be configured to use the system proxy settings (Internet Explorer / Windows proxy configuration). Alternatively, a PAC (Proxy Auto-Configuration) file can be used.
- **SSL inspection proxies:** Proxies that perform TLS interception (man-in-the-middle) may interfere with Rainbow's WebSocket connections and certificate pinning. If SSL inspection is in use, Rainbow domains should be added to the proxy's bypass list to avoid connection failures.
- **Authenticated proxies:** The Rainbow desktop client supports NTLM and Basic proxy authentication. Users may be prompted for proxy credentials on first connection.

**Best practice:** Bypass the proxy entirely for Rainbow media traffic (UDP). Route only signaling traffic (TCP 443) through the proxy if required by security policy.

### 5.4 Split Tunneling for VPN Users

For users connecting via VPN, configure split tunneling so that Rainbow media traffic goes directly to the internet rather than through the VPN tunnel. Routing media through a VPN adds latency and reduces call quality. Signaling traffic (TCP 443) can safely travel through the VPN if needed.

---

## 6. Citrix VDI Optimization

Many enterprises use Citrix Virtual Desktop Infrastructure (VDI) to deliver applications to end users. Without optimization, running a real-time communication client inside a virtual desktop results in poor audio/video quality because media streams must travel from the user's endpoint to the VDI server, be processed by the virtual desktop, and then sent back to the user's endpoint.

### 6.1 How Rainbow VDI Optimization Works

Rainbow supports Citrix HDX RealTime Optimization. When enabled, audio and video media streams are offloaded from the virtual desktop to the user's local endpoint (the thin client or local PC running Citrix Workspace App). The media processing happens locally, providing native-quality audio and video.

The architecture works as follows:

1. The Rainbow desktop client runs inside the Citrix virtual desktop session.
2. A Rainbow VDI plugin is installed on the user's local endpoint (alongside Citrix Workspace App).
3. When a call is initiated, the Rainbow client in the virtual desktop signals the local plugin.
4. The local plugin captures microphone input and renders audio/speaker output directly on the endpoint.
5. Video capture and rendering also happen locally.
6. Only signaling and control traffic passes through the Citrix session — media never touches the VDI server.

### 6.2 Requirements for VDI Optimization

| Component                 | Requirement                                       |
|---------------------------|---------------------------------------------------|
| Citrix Virtual Apps/Desktops | Version 7.15 LTSR or later, or current release   |
| Citrix Workspace App      | Latest version on the local endpoint              |
| Rainbow VDI Plugin        | Installed on the local endpoint (Windows only)    |
| Local endpoint OS         | Windows 10 (64-bit) or later                      |
| Local endpoint hardware   | Audio device (headset/speakers), webcam optional  |
| Network from endpoint     | Direct internet access for media (not through VDI)|

### 6.3 Limitations

- VDI optimization is currently supported only on Windows endpoints with Citrix Workspace App. macOS thin clients and Linux thin clients are not supported for media offloading.
- VMware Horizon is not supported for media optimization at this time. Rainbow runs inside a VMware virtual desktop but without media offloading.
- The local endpoint must have direct internet access for WebRTC media. If the endpoint is in a locked-down network without internet access, media offloading cannot function.

### 6.4 Deployment Considerations

When a customer mentions VDI during the sales process:

1. Confirm they are using Citrix (not VMware or another VDI platform).
2. Confirm endpoint hardware has audio/video capability.
3. Confirm endpoints have direct internet access for media traffic.
4. Include the Rainbow VDI Plugin deployment in the implementation plan.
5. Budget professional services time for VDI-specific testing and configuration.

---

## Key Concepts Summary

| Concept                      | Definition                                                                     |
|------------------------------|--------------------------------------------------------------------------------|
| MSI / SCCM / GPO Deployment | Enterprise methods for mass-deploying the Windows desktop client               |
| WebRTC                       | Browser-native real-time communication technology used by the web client       |
| CallKit / Connection Service | Native OS integration for phone calls on iOS and Android respectively          |
| Bandwidth per audio call     | ~100 kbps bidirectional (Opus codec)                                           |
| Bandwidth per video call     | ~1.5 Mbps bidirectional at 720p                                                |
| STUN/TURN                    | NAT traversal protocols for establishing media connections through firewalls   |
| DSCP / QoS                   | Traffic marking and prioritization for voice/video quality                     |
| Citrix HDX Media Offloading  | VDI optimization that processes audio/video on the local endpoint              |
| Split Tunneling              | VPN configuration that routes media directly rather than through the tunnel    |

---

## Practice Exercise

**Scenario:** A law firm with 150 attorneys and 50 support staff wants to deploy Rainbow. Their environment includes:

- All attorneys use Citrix VDI sessions on Windows thin clients.
- Support staff use standard Windows 10 laptops.
- The office has a 100 Mbps internet connection.
- All internet traffic passes through a Zscaler cloud proxy with SSL inspection enabled.
- The firm uses Microsoft Intune for device management.
- Attorneys frequently work from home using Cisco AnyConnect VPN.

**Task:**

1. Identify the three biggest deployment challenges in this environment.
2. For each challenge, describe the configuration change or recommendation you would give the IT team.
3. Calculate whether the 100 Mbps internet connection is sufficient for peak usage (assume 15% audio concurrency and 5% video concurrency across all 200 users).
4. Recommend the client deployment strategy (which client for which user group, installation method, and any VDI-specific requirements).

---

## Knowledge Check

**Question 1:** A customer reports that Rainbow audio calls have choppy quality. What is the first network metric you should investigate?

- A) Download speed.
- B) Packet loss, jitter, and latency.
- C) The number of users online.
- D) The browser version.

**Answer:** B — Choppy audio is almost always caused by packet loss, excessive jitter, or high latency. Download speed is rarely the issue for audio (which requires only ~100 kbps). Check these three metrics first using a network quality test.

---

**Question 2:** A security team insists that all traffic must pass through their SSL inspection proxy. What should you advise?

- A) Tell them Rainbow does not work with proxies.
- B) Advise them to add Rainbow domains to the proxy's SSL inspection bypass list to prevent interference with WebSocket connections and certificate pinning.
- C) Tell them to disable the proxy entirely.
- D) Recommend switching to a different proxy vendor.

**Answer:** B — SSL inspection can break WebSocket connections and trigger certificate pinning failures. The correct solution is to bypass SSL inspection specifically for Rainbow domains while keeping inspection active for other traffic.

---

**Question 3:** What is the approximate bandwidth required for a single 720p video call?

- A) 100 kbps
- B) 500 kbps
- C) 1.5 Mbps
- D) 10 Mbps

**Answer:** C — A 720p video call requires approximately 1.5 Mbps of bandwidth in each direction (bidirectional). This is a key figure to remember when sizing network capacity.

---

**Question 4:** Why is split tunneling recommended for VPN users?

- A) It reduces the cost of the VPN license.
- B) It routes Rainbow media traffic directly to the internet rather than through the VPN tunnel, reducing latency and improving call quality.
- C) It makes the VPN faster for all applications.
- D) It is required by Rainbow's license agreement.

**Answer:** B — Routing real-time media through a VPN tunnel adds latency due to the extra network hops and encryption overhead. Split tunneling sends media directly to the internet while still protecting other traffic through the VPN.

---

**Question 5:** A customer uses Citrix VDI. What must be installed on the user's local endpoint for Rainbow VDI media optimization to work?

- A) The full Rainbow desktop client.
- B) The Rainbow VDI Plugin alongside Citrix Workspace App.
- C) A special web browser.
- D) Nothing — optimization is automatic.

**Answer:** B — The Rainbow VDI Plugin must be installed on the local endpoint alongside Citrix Workspace App. The plugin captures and renders audio/video locally, offloading media processing from the VDI server.
