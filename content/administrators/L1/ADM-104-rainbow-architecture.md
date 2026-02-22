# ADM-104: Understanding Rainbow Architecture

| Field            | Value                                                      |
|------------------|------------------------------------------------------------|
| **Module ID**    | ADM-104                                                    |
| **Title**        | Understanding Rainbow Architecture                         |
| **Track**        | Administrators (L1 Foundation)                             |
| **Duration**     | 30 minutes                                                 |
| **Content Types**| Reading, Diagrams, Knowledge Check                         |
| **Prerequisites**| ADM-101: Rainbow Admin Portal Overview                     |

## Learning Objectives

By the end of this module, you will be able to:

1. Describe the three Rainbow deployment models — Public Cloud, Rainbow Edge, and Hybrid — and identify the use case for each.
2. Explain how Rainbow clients connect to the platform using HTTPS, WebSocket, and WebRTC protocols.
3. Describe how PBX integration works through the CTI/SIP gateway and which PBX families are supported.
4. Identify Rainbow's global data center footprint and explain how data sovereignty is enforced through regional assignments.
5. List the firewall ports and service dependencies required for Rainbow to operate correctly in an enterprise network.

---

## 1. Deployment Models

### 1.1 Overview of Deployment Options

Rainbow offers three deployment models to accommodate different organizational requirements for data control, infrastructure management, and regulatory compliance. Understanding these models is essential for administrators because the deployment model affects where data is stored, how services are accessed, and what infrastructure you need to manage (if any).

The three models are:

| Model            | Infrastructure Managed By | Data Location               | Best For                                          |
|------------------|---------------------------|-----------------------------|---------------------------------------------------|
| **Public Cloud** | ALE (fully hosted)        | ALE data centers            | Most organizations; no on-premises infrastructure needed |
| **Rainbow Edge** | Customer (on-premises)    | Customer premises            | Regulated industries needing full data control    |
| **Hybrid**       | Shared (ALE + Customer)   | Split between cloud and premises | Organizations with mixed requirements           |

### 1.2 Public Cloud

The Public Cloud model is Rainbow's primary deployment option and the one used by the majority of customers. In this model:

- **All infrastructure is managed by ALE**: Servers, storage, networking, security patching, upgrades, and monitoring are handled entirely by the ALE operations team.
- **No on-premises equipment is required**: The only thing you need is client devices (computers, phones, tablets) with internet connectivity.
- **Data is stored in ALE data centers**: Your organization's data resides in the data center region assigned during provisioning (see Section 4).
- **Updates are automatic**: New features, security patches, and performance improvements are deployed by ALE on a regular release cadence (typically every 2-4 weeks). Administrators do not need to schedule or manage updates.

The Public Cloud model is suitable for:
- Organizations that want to minimize IT infrastructure overhead
- Companies that do not have regulatory requirements mandating on-premises data storage
- Organizations that prefer a fully managed service with predictable subscription costs
- Small and medium businesses without dedicated data center facilities

> **Tip:** For most organizations, the Public Cloud model is the right choice. It offers the fastest time to value (no infrastructure to set up), the lowest ongoing management burden (ALE handles everything), and automatic access to the latest features. Only consider Edge or Hybrid if you have specific regulatory or technical requirements that mandate on-premises data storage.

### 1.3 Rainbow Edge

Rainbow Edge is a private cloud deployment where the Rainbow platform runs on infrastructure located within the customer's own premises (on-premises data center, private cloud, or colocation facility).

**Key characteristics:**

- **Customer-managed infrastructure**: The customer provides and maintains the servers, storage, and networking. ALE provides the Rainbow software and manages updates, but the infrastructure is the customer's responsibility.
- **Data stays local**: All messages, files, call records, and user data remain within the customer's premises. No data transits to ALE's public cloud data centers.
- **Isolated environment**: The Rainbow Edge instance is a self-contained deployment. It does not share infrastructure or data with other Rainbow customers.
- **Controlled update cadence**: While ALE provides updates, the customer controls when those updates are applied to their Edge deployment. This allows for change management review and testing before production deployment.

**Infrastructure requirements for Rainbow Edge:**

| Component              | Specification                                                    |
|------------------------|------------------------------------------------------------------|
| **Compute**            | Minimum 8 vCPU, 32 GB RAM per application node (minimum 2 nodes for HA) |
| **Storage**            | Minimum 1 TB SSD for database and file storage, expandable      |
| **Network**            | 1 Gbps internal network, 100 Mbps internet bandwidth minimum    |
| **Operating System**   | Linux (Ubuntu Server 20.04 LTS or RHEL 8+)                      |
| **Virtualization**     | VMware vSphere 7.0+, Hyper-V 2019+, or KVM                     |
| **Container Platform** | Docker 20.10+ and Kubernetes 1.24+ (for microservices deployment)|

Rainbow Edge is suitable for:
- Government agencies and defense organizations with strict data sovereignty mandates
- Healthcare institutions subject to regulations that prohibit cloud storage of patient data
- Financial institutions with regulatory requirements for on-premises data processing
- Organizations operating in regions with limited or unreliable internet connectivity
- Companies with existing data center capacity and skilled infrastructure teams

### 1.4 Hybrid Deployment

The Hybrid model combines Public Cloud and Rainbow Edge, allowing an organization to split its deployment based on specific requirements.

**Common hybrid scenarios:**

- **Data type segregation**: Messaging and collaboration traffic runs through the Public Cloud for maximum performance and feature availability, while call recordings and voicemail (which may contain sensitive information) are stored on-premises via Rainbow Edge.
- **User group segregation**: Executive leadership and legal departments use Rainbow Edge (on-premises) due to the sensitivity of their communications, while the rest of the organization uses the Public Cloud.
- **Geographic segregation**: Users in regions with strict data sovereignty requirements (e.g., Germany, UAE) are served by Rainbow Edge instances in local data centers, while users in other regions use the Public Cloud.
- **Gradual migration**: Organizations transitioning from fully on-premises to cloud can deploy Rainbow Edge first, then migrate user groups to the Public Cloud over time.

**How hybrid routing works:**

In a Hybrid deployment, each user is assigned to either the Public Cloud or a specific Rainbow Edge instance. The routing is determined at the company and site level:

- A site can be configured to use the Public Cloud or a specific Edge instance.
- Users at that site connect to the designated platform.
- Cross-platform communication (a Public Cloud user messaging an Edge user within the same company) is supported through a federation bridge that ALE configures between the two environments.

> **Warning:** Hybrid deployments are significantly more complex to manage than pure Public Cloud deployments. They require careful network planning, additional infrastructure for the Edge component, and ongoing coordination between your IT team and ALE. Only pursue a Hybrid model if your regulatory or business requirements genuinely demand it. Most compliance requirements can be met by the Public Cloud with appropriate data center region selection.

---

## 2. Client Connectivity

### 2.1 Protocol Overview

Rainbow clients (desktop, mobile, web) communicate with the Rainbow platform using three main protocols. Each protocol serves a different purpose in the communication flow.

![diagram: Rainbow Client Connectivity — Protocol Stack and Data Flows](adm-connectivity-protocol-stack)

| Protocol       | Purpose                                    | Port  | Transport   |
|----------------|--------------------------------------------|-------|-------------|
| **HTTPS**      | REST API calls, authentication, signaling  | 443   | TCP         |
| **WebSocket**  | Real-time events and presence updates      | 443   | TCP (upgraded from HTTPS) |
| **WebRTC**     | Voice and video media streams              | Various| UDP (preferred) / TCP (fallback) |

### 2.2 HTTPS (REST API and Signaling)

HTTPS is the foundation protocol for all Rainbow communication. Every interaction between a client and the Rainbow platform begins with HTTPS.

**Functions handled by HTTPS:**

- **Authentication**: Login, token issuance, token refresh, and logout. Rainbow uses OAuth 2.0 with JWT (JSON Web Tokens) for authentication. When a user logs in, the client receives an access token and a refresh token over HTTPS.
- **REST API calls**: All non-real-time operations are performed through REST API calls over HTTPS. This includes:
  - Retrieving the contact directory
  - Sending and receiving messages (initial retrieval; real-time delivery uses WebSocket)
  - Creating and managing Bubbles
  - Uploading and downloading files
  - Managing user settings and preferences
  - Administrative operations (user creation, license assignment, etc.)
- **Signaling**: Call setup and teardown signaling is performed over HTTPS. When a user initiates a voice or video call, the client sends a signaling request to the Rainbow server, which coordinates the connection between participants.

All HTTPS communication is encrypted using TLS 1.2 or higher. Rainbow servers do not accept connections using older TLS versions (1.0, 1.1) or unencrypted HTTP.

### 2.3 WebSocket (Real-Time Events)

WebSocket provides a persistent, bidirectional communication channel between the client and the Rainbow server. It is established as an upgrade from an HTTPS connection on port 443.

**Functions handled by WebSocket:**

- **Real-time message delivery**: When a user receives a new message, the server pushes it to the client immediately over the WebSocket connection, without the client needing to poll for new messages.
- **Presence updates**: Changes in user presence (Available, Busy, Away, Do Not Disturb) are broadcast in real time over WebSocket to all connected contacts.
- **Typing indicators**: The "User is typing..." indicator is transmitted over WebSocket.
- **Call state events**: Ring, answer, hangup, and hold events are pushed to the client for real-time call status display.
- **System notifications**: Administrative notifications, Bubble membership changes, and other system events are delivered over WebSocket.

The WebSocket connection is initiated immediately after successful authentication. If the WebSocket connection is lost (due to network interruption), the client automatically attempts to reconnect with exponential backoff (1 second, 2 seconds, 4 seconds, etc.). During reconnection, the client falls back to HTTPS polling for critical events.

### 2.4 WebRTC (Voice and Video Media)

WebRTC (Web Real-Time Communication) is the protocol used for actual voice and video media streams. Unlike HTTPS and WebSocket, which carry text-based data (API calls, messages, events), WebRTC carries the audio and video content of calls.

**Key characteristics of WebRTC in Rainbow:**

- **Peer-to-peer when possible**: For one-to-one calls, Rainbow attempts to establish a direct peer-to-peer media connection between the two participants. This minimizes latency and server load.
- **Media server for conferences**: For multi-party conferences (3+ participants), media flows through Rainbow's media servers, which mix and distribute audio/video streams.
- **UDP preferred**: WebRTC prefers UDP transport for media because it provides lower latency than TCP. Audio and video streams can tolerate some packet loss (minor audio glitches) but are very sensitive to latency.
- **TCP fallback**: If UDP is blocked by a firewall or NAT device, WebRTC falls back to TCP transport. This increases latency but ensures connectivity.
- **TURN relay**: When direct peer-to-peer connections are not possible (both participants behind restrictive NATs or firewalls), the media is relayed through TURN (Traversal Using Relays around NAT) servers operated by ALE.

**Media quality:**

| Media Type       | Codec        | Bandwidth (per stream)          |
|------------------|--------------|---------------------------------|
| Voice            | Opus         | 16-64 kbps (adaptive)           |
| Video (SD)       | VP8/H.264    | 300-500 kbps                    |
| Video (HD 720p)  | VP8/H.264    | 1-2 Mbps                        |
| Video (HD 1080p) | VP8/H.264    | 2-4 Mbps                        |
| Screen sharing   | VP8/H.264    | 500 kbps - 3 Mbps (adaptive)   |

> **Key Concept:** From a network administration perspective, the most important thing to understand is that Rainbow uses three protocol layers — HTTPS for control, WebSocket for real-time events, and WebRTC for media. HTTPS and WebSocket both run on port 443 (TCP). WebRTC uses dynamic UDP ports or TURN on port 3478. If your firewall blocks any of these, some Rainbow features will not work correctly.

---

## 3. PBX Integration

### 3.1 How PBX Integration Works

Rainbow integrates with existing PBX (Private Branch Exchange) telephone systems through a component called the **Rainbow CTI/SIP Gateway**. This gateway acts as a bridge between the Rainbow cloud platform and the on-premises PBX.

**Supported PBX families:**

| PBX                        | Integration Method | Gateway Type                    |
|----------------------------|--------------------|---------------------------------|
| **OmniPCX Enterprise (OXE)** | Native CTI        | Rainbow OXE Gateway             |
| **OmniPCX Office (OXO)**    | Native CTI        | Rainbow OXO Gateway             |
| **Third-party SIP PBX**     | SIP trunk          | Rainbow SIP Gateway             |

### 3.2 The CTI/SIP Gateway

The CTI/SIP Gateway is a software component installed within the customer's network (on a dedicated server or virtual machine). It performs the following functions:

- **Call control translation**: Translates PBX-specific call control commands (make call, answer, transfer, hold, park) into Rainbow API calls, and vice versa.
- **Directory synchronization**: Synchronizes the PBX user/extension directory with Rainbow, ensuring that desk phone extensions map to the correct Rainbow user accounts.
- **Call state relay**: Reports real-time call state events (ringing, connected, on hold, transferred) from the PBX to Rainbow, so the Rainbow client can display accurate call status.
- **Softphone bridge**: Enables Rainbow clients to make and receive PBX calls as if they were a physical desk phone. The audio media flows between the Rainbow client (via WebRTC) and the PBX (via SIP), with the gateway handling the protocol translation.

### 3.3 Call Flow Example

To illustrate how a call flows through the integrated system, consider this scenario: Alice (using her Rainbow desktop client) calls Bob (who has a desk phone and a Rainbow mobile client).

1. Alice clicks "Call" on Bob's contact card in the Rainbow desktop client.
2. The Rainbow client sends a call initiation request to the Rainbow cloud via HTTPS.
3. The Rainbow cloud signals the CTI/SIP Gateway at Alice's site.
4. The Gateway instructs the PBX to set up a call from Alice's extension to Bob's extension.
5. The PBX rings Bob's desk phone AND the Rainbow cloud pushes a call notification to Bob's mobile client (simultaneous ring).
6. Bob answers on his desk phone.
7. The PBX establishes the audio path between Alice (via the Gateway, via WebRTC from her Rainbow client) and Bob (via his desk phone).
8. The Rainbow cloud updates both Alice's and Bob's call status to "In Call" via WebSocket.

This entire sequence happens in under 2 seconds and is transparent to both users.

### 3.4 Gateway Installation Requirements

The CTI/SIP Gateway has the following requirements:

| Requirement              | Specification                                                |
|--------------------------|--------------------------------------------------------------|
| **Operating System**     | Windows Server 2019+ or Linux (Ubuntu 20.04+, RHEL 8+)       |
| **CPU**                  | 4 vCPU minimum                                               |
| **RAM**                  | 8 GB minimum                                                 |
| **Storage**              | 50 GB for application and logs                                |
| **Network**              | Access to PBX on the internal network AND outbound HTTPS to Rainbow cloud |
| **PBX Connectivity**     | CTI link to OXE/OXO or SIP trunk to third-party PBX          |

> **Info:** The CTI/SIP Gateway is typically installed and configured by an ALE partner or the ALE professional services team during the initial deployment. As a Company Administrator, you do not need to install the gateway yourself, but you should understand its role in the architecture and ensure it has the necessary network access. The gateway is managed through the Telephony section of the admin portal after installation.

---

## 4. Global Infrastructure and Data Sovereignty

### 4.1 Data Center Footprint

Rainbow operates on a globally distributed infrastructure with **22 data centers** across multiple geographic regions. This distribution serves both performance and compliance purposes.

**Data center regions:**

| Region              | Locations                            | Primary Coverage                    |
|---------------------|--------------------------------------|-------------------------------------|
| **Europe West**     | France (Paris, Strasbourg)           | France, Southern Europe             |
| **Europe Central**  | Germany (Frankfurt)                  | DACH region, Central Europe          |
| **Europe North**    | Netherlands (Amsterdam)              | Benelux, Northern Europe             |
| **United Kingdom**  | London                               | UK, Ireland                          |
| **North America**   | Canada (Montreal, Toronto)           | North America                        |
| **Asia-Pacific**    | Singapore, Hong Kong, Sydney         | Southeast Asia, ANZ                  |
| **Middle East**     | UAE (Dubai)                          | Gulf states, Middle East             |
| **India**           | Mumbai                               | Indian subcontinent                  |

The remaining data centers serve as backup and edge nodes for media relay, providing redundancy and optimized media routing for regions without a primary data center presence.

### 4.2 Data Sovereignty

Data sovereignty refers to the legal and regulatory requirement that data be stored and processed within the borders of a specific country or region. This is particularly important for:

- **GDPR** (General Data Protection Regulation): Requires that personal data of EU residents be processed in compliance with EU law. While GDPR does not strictly require data to remain in the EU, many organizations interpret it conservatively and mandate EU data residency.
- **Healthcare regulations** (HIPAA, HDS): May require patient data to remain within specific jurisdictions.
- **Government security standards**: Many governments require that communication data for public sector organizations remain within national borders.
- **Financial regulations**: Banking and insurance regulators may require transaction and communication records to be stored domestically.

**How Rainbow enforces data sovereignty:**

When your company is assigned to a data center region during provisioning, Rainbow ensures that:

- **All user data** (messages, files, contacts, presence history) is stored exclusively in that region's data centers.
- **All data processing** (search indexing, analytics computation, AI processing) occurs within that region.
- **Backup and disaster recovery** replicas are maintained within the same region or a pre-approved partner region (e.g., France-primary with Strasbourg-backup).
- **Media relay servers** within the region handle voice and video traffic. Cross-region media relay only occurs when participants are in different regions, and in that case, media is decrypted only at the endpoints.

The data center assignment is visible in the admin portal under **Company > Company Profile** and cannot be changed by administrators. A data center migration (changing your assigned region) is a major operation that requires coordination with ALE and may involve downtime.

### 4.3 Redundancy and Failover

Each primary data center region operates with built-in redundancy:

- **Active-active clustering**: Application services run across multiple server clusters within the data center. If one cluster fails, others continue to serve traffic.
- **Database replication**: User data is replicated synchronously within the data center and asynchronously to a backup data center in the same region.
- **Automatic failover**: If the primary data center experiences a complete outage, services fail over to the backup data center. The failover process is automatic and typically completes within minutes.
- **Published uptime**: Rainbow targets **99.87% uptime**, which translates to approximately 11.4 hours of total downtime per year. Actual uptime has historically exceeded this target.

---

## 5. Network Requirements and Firewall Configuration

### 5.1 Required Ports and Protocols

For Rainbow to function correctly in an enterprise network, the following ports must be open in the corporate firewall for outbound traffic from client devices and the CTI/SIP Gateway.

| Port      | Protocol | Direction  | Purpose                                              | Required? |
|-----------|----------|------------|------------------------------------------------------|-----------|
| **443**   | TCP      | Outbound   | HTTPS (REST API, authentication, signaling), WebSocket | Yes       |
| **3478**  | UDP/TCP  | Outbound   | TURN server for media relay when direct P2P fails    | Yes       |
| **10000-20000** | UDP | Outbound   | WebRTC media (voice, video, screen sharing)          | Recommended |
| **5060**  | UDP/TCP  | Internal   | SIP signaling between Gateway and PBX                | If PBX integrated |
| **5061**  | TCP      | Internal   | SIP over TLS (secure SIP) between Gateway and PBX   | If PBX integrated |

### 5.2 DNS Requirements

Rainbow clients resolve server addresses through DNS. The following DNS requirements must be met:

- **Public DNS resolution**: Client devices must be able to resolve public DNS names (*.openrainbow.com, *.rainbow.com).
- **DNS caching**: DNS caching is recommended to reduce resolution latency. A TTL (Time to Live) of 300 seconds is typical.
- **Split-horizon DNS**: If your organization uses split-horizon DNS (internal and external DNS views), ensure that the external view includes Rainbow's DNS records.

### 5.3 NTP (Network Time Protocol)

Accurate time synchronization is critical for Rainbow's security and functionality:

- **TLS certificate validation**: TLS certificates are time-sensitive. If a client's clock is significantly off, TLS connections will fail because certificates will appear expired or not-yet-valid.
- **Token validation**: OAuth access tokens have time-based expiration. Clock skew beyond 5 minutes can cause authentication failures.
- **Audit logging**: Timestamps in audit logs and call detail records must be accurate for regulatory compliance.

Ensure all client devices and servers (including the CTI/SIP Gateway) synchronize their clocks with a reliable NTP source. Most corporate networks already have NTP infrastructure; verify that Rainbow-related servers are configured to use it.

### 5.4 Certificate Authorities

Rainbow uses TLS certificates issued by major public certificate authorities (CAs). Client devices must trust these CAs for HTTPS connections to succeed.

**Required trusted CAs:**
- DigiCert Global Root G2
- DigiCert Global Root CA
- Let's Encrypt ISRG Root X1

Most operating systems and browsers trust these CAs by default. However, in environments where custom CA trust stores are configured (common in enterprises with TLS inspection proxies), you must ensure these CAs are included.

### 5.5 TLS Inspection Considerations

Many enterprise networks deploy TLS inspection (also called SSL inspection or HTTPS interception) proxies that decrypt and re-encrypt HTTPS traffic for security scanning. While Rainbow generally works with TLS inspection proxies, there are important considerations:

- **Performance impact**: TLS inspection adds latency to every HTTPS and WebSocket connection. For real-time collaboration, this additional latency can degrade call quality and messaging responsiveness.
- **WebSocket compatibility**: Some TLS inspection proxies do not correctly handle WebSocket upgrade requests, causing WebSocket connections to fail. If real-time events (message delivery, presence updates) are not working, TLS inspection is a common culprit.
- **Certificate pinning**: Some Rainbow client versions use certificate pinning for additional security. TLS inspection proxies break certificate pinning because they present a proxy-issued certificate instead of the original Rainbow server certificate. If certificate pinning conflicts occur, you may need to whitelist Rainbow domains from TLS inspection.

> **Tip:** If your organization uses a TLS inspection proxy, the simplest and most reliable approach is to **whitelist all *.openrainbow.com domains** from TLS inspection. This avoids WebSocket compatibility issues, certificate pinning conflicts, and the latency penalty of inspection for real-time collaboration traffic.

### 5.6 Media Relay Servers (TURN)

TURN (Traversal Using Relays around NAT) servers are a critical component of Rainbow's media infrastructure. They enable voice and video calls to work even when direct peer-to-peer connections are blocked by restrictive firewalls or NAT devices.

**How TURN works:**

1. When two Rainbow clients attempt to establish a voice or video call, they first try to connect directly (peer-to-peer) using ICE (Interactive Connectivity Establishment).
2. If direct connection fails (common in enterprise networks with symmetric NAT or restrictive firewalls), the clients negotiate a TURN relay through ALE's TURN servers.
3. The TURN server acts as a media relay: both clients send their audio/video streams to the TURN server, which forwards them to the other participant.
4. TURN communication uses port 3478 (UDP preferred, TCP fallback). The media content is encrypted end-to-end — the TURN server relays encrypted packets without decrypting them.

**TURN server locations:**

ALE operates TURN servers in the same geographic regions as the data centers to minimize media relay latency. When a TURN relay is needed, the nearest TURN server to the participants is selected automatically.

### 5.7 Firewall Configuration Summary

For a quick reference, here is the complete firewall configuration needed for Rainbow:

**Mandatory (all deployments):**
```
ALLOW outbound TCP 443 to *.openrainbow.com
ALLOW outbound UDP 3478 to *.openrainbow.com
ALLOW outbound TCP 3478 to *.openrainbow.com (TURN TCP fallback)
```

**Recommended (for best media quality):**
```
ALLOW outbound UDP 10000-20000 to *.openrainbow.com
```

**For PBX integration (internal network):**
```
ALLOW TCP/UDP 5060 between CTI/SIP Gateway and PBX
ALLOW TCP 5061 between CTI/SIP Gateway and PBX (if SIP-TLS)
ALLOW outbound TCP 443 from CTI/SIP Gateway to *.openrainbow.com
```

> **Warning:** If UDP ports 10000-20000 are not open, WebRTC media will fall back to TURN relay on port 3478. This works but adds latency because all media traffic must pass through the relay server rather than flowing directly between participants. For the best voice and video quality, open the UDP media range. If your security policy prohibits opening a wide UDP port range, TURN on port 3478 is a functional alternative with acceptable quality for most use cases.

---

## Key Concepts Summary

| Concept                        | Definition                                                                                          |
|--------------------------------|-----------------------------------------------------------------------------------------------------|
| **Public Cloud**               | Fully ALE-hosted deployment; no on-premises infrastructure needed                                   |
| **Rainbow Edge**               | Private cloud deployment on customer premises; data stays local                                     |
| **Hybrid**                     | Combination of Public Cloud and Edge for different user groups or data types                         |
| **HTTPS (Port 443)**           | Primary protocol for REST API, authentication, and signaling                                        |
| **WebSocket**                  | Persistent bidirectional channel for real-time events (presence, messages); upgrades from HTTPS      |
| **WebRTC**                     | Protocol for voice and video media streams; prefers UDP for low latency                             |
| **CTI/SIP Gateway**            | Bridge component connecting Rainbow cloud to on-premises PBX systems                                |
| **TURN Server**                | Media relay server that enables calls when direct peer-to-peer is blocked by firewalls              |
| **Data Sovereignty**           | Regulatory/policy requirement that data be stored and processed within a specific geographic region  |
| **Port 3478**                  | TURN server port for media relay (UDP preferred, TCP fallback)                                      |

---

## Practice Exercise

**Scenario**: You are the Company Administrator for a pharmaceutical company with 1,200 employees. The company has its headquarters in Basel, Switzerland (800 users), a research lab in Boston, USA (300 users), and a sales office in Tokyo, Japan (100 users). The company uses OmniPCX Enterprise PBX systems at all three locations. European regulations require that data for the Swiss and any EU-based users remain within Europe. The network security team requires justification for any firewall rule changes. The Boston office has a TLS inspection proxy.

**Task**: Based on what you have learned in this module, answer the following:

1. Which deployment model would you recommend for this company? If Hybrid, describe which users go where and why.
2. Prepare a firewall rule change request for the network security team. List each rule (port, protocol, direction, destination) and provide a business justification for each.
3. The Boston office reports that Rainbow messaging works but voice calls frequently fail. Given that the office has a TLS inspection proxy, what is your diagnosis and recommended solution?
4. The research lab in Boston handles sensitive IP. The Chief Security Officer asks whether voice calls between Boston and Basel researchers are encrypted. What can you tell them about Rainbow's encryption architecture for voice media?
5. A new regulatory requirement mandates that the Tokyo office's data must remain in Asia-Pacific. The company is currently assigned to the Europe (Germany) data center region. What steps would you recommend?

Write your answers as a technical briefing document for the CTO and CISO.

---

## Knowledge Check

**Question 1**: Which Rainbow deployment model requires the customer to manage their own server infrastructure?

- A) Public Cloud
- B) Rainbow Edge
- C) Hybrid (cloud portion only)
- D) All deployment models require customer-managed infrastructure

**Answer**: B — Rainbow Edge is a private cloud deployment on the customer's premises, where the customer provides and maintains the servers, storage, and networking. In the Public Cloud model, ALE manages all infrastructure. In the Hybrid model, the Edge portion is customer-managed while the cloud portion is ALE-managed.

---

**Question 2**: A Rainbow client establishes a WebSocket connection on which port?

- A) Port 80
- B) Port 443 (upgraded from HTTPS)
- C) Port 3478
- D) Port 8080

**Answer**: B — WebSocket connections in Rainbow are established as an upgrade from an HTTPS connection on port 443. This means no additional port needs to be opened for WebSocket — it piggybacks on the same port as HTTPS.

---

**Question 3**: When two Rainbow users on the same corporate network make a voice call, what is the preferred media path?

- A) Media always flows through the TURN relay server
- B) Media always flows through the Rainbow cloud
- C) A direct peer-to-peer WebRTC connection if network conditions allow
- D) Media flows through the CTI/SIP Gateway

**Answer**: C — Rainbow prefers direct peer-to-peer WebRTC connections for one-to-one calls because this minimizes latency and server load. If the direct connection fails (due to NAT or firewall restrictions), it falls back to TURN relay.

---

**Question 4**: What is the primary purpose of the CTI/SIP Gateway in a Rainbow deployment with PBX integration?

- A) To store voicemail messages locally
- B) To encrypt all PBX calls
- C) To bridge communication between the Rainbow cloud platform and the on-premises PBX
- D) To replace the PBX with cloud telephony

**Answer**: C — The CTI/SIP Gateway is a bridge component that translates between Rainbow's cloud-based signaling and the PBX's call control protocols. It enables Rainbow clients to make and receive PBX calls and synchronizes call state between the two systems.

---

**Question 5**: An administrator's firewall allows only outbound TCP 443 and nothing else. Which Rainbow features will work and which will not?

- A) Nothing will work — additional ports are always required
- B) Messaging and presence will work; voice and video calls will fail entirely
- C) Messaging, presence, and voice/video calls will all work (voice/video via TURN TCP fallback on 443)
- D) Messaging and presence will work; voice/video will work via TURN but only if port 3478 is also opened

**Answer**: D — With only TCP 443 open, HTTPS and WebSocket connections work fine, so messaging, presence, and signaling function correctly. However, voice and video media requires either direct WebRTC (UDP 10000-20000), TURN relay (port 3478), or TURN TCP fallback. Since TURN typically uses port 3478, voice and video calls will fail unless port 3478 is also opened. Some Rainbow configurations support TURN over port 443 as a last resort, but this is not guaranteed and introduces significant latency.
