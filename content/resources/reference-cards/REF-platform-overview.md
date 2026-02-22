# Rainbow Platform Overview — Quick Reference Card

> **Version:** 2.0 | **Last Updated:** February 2026 | **Classification:** Partner & Internal Use

---

## What Is Rainbow?

Rainbow is Alcatel-Lucent Enterprise's cloud-native Communications Platform as a Service (CPaaS). It unifies voice, video, messaging, file sharing, conferencing, and telephony integration into a single platform available on every client surface.

---

## Key Platform Statistics

| Metric | Value |
|---|---|
| Global Data Centers | 22 across 5 continents |
| Platform Uptime (SLA) | 99.87% measured / 99.97% target |
| Registered Users | 1.5 million+ |
| Supported Languages | 16 |
| Available Integrations | 100+ via marketplace and API |
| Countries with Local Presence | 50+ |
| ISO Certifications | ISO 27001, ISO 27017, ISO 27018 |

---

## Client Platforms

| Platform | Availability | Notes |
|---|---|---|
| Windows Desktop | Full client | Windows 10/11, auto-update |
| macOS Desktop | Full client | macOS 12+ |
| iOS | Mobile app | iOS 15+, CallKit integration |
| Android | Mobile app | Android 10+, push notifications |
| Web Browser | Progressive Web App | Chrome, Edge, Firefox, Safari |
| Outlook Add-in | Embedded presence & click-to-call | Outlook 2016+ and Outlook 365 |
| Microsoft Teams | Direct Routing integration | Teams coexistence mode |

---

## Subscription Tiers at a Glance

| Capability | Essential (Free) | Business | Enterprise |
|---|---|---|---|
| Instant Messaging | Unlimited | Unlimited | Unlimited |
| 1:1 Audio/Video | Yes | Yes | Yes |
| Group Conferencing | Up to 6 | Up to 120 | Up to 120 |
| File Sharing | 1 GB | 20 GB | Unlimited |
| Screen Sharing | No | Yes | Yes |
| PBX Integration | No | Yes | Yes |
| Analytics Dashboard | Basic | Standard | Advanced |
| CRM Connectors | No | No | Yes |
| AI Transcription | No | No | Yes |
| SLA | Best effort | 99.9% | 99.97% |

### Additional Plan Types

| Plan | Purpose |
|---|---|
| **Rainbow Connect** | Embeddable CPaaS for developers — APIs, SDKs, webhooks |
| **Rainbow Hub** | Multi-company federation for channel partners and ecosystems |

---

## Deployment Models

### 1. Public Cloud (SaaS)
- Hosted in ALE-operated data centers
- No on-premises infrastructure required
- Automatic updates and scaling
- Best for: SMBs, distributed workforces, rapid deployment

### 2. Rainbow Edge (Hybrid)
- On-premises media and signaling server
- Control plane remains in the cloud
- Data stays within the customer perimeter
- Best for: Regulated industries, data sovereignty requirements, HDS compliance

### 3. Private Cloud
- Fully isolated tenant in a dedicated environment
- Custom SLA and data residency
- Best for: Government, defense, critical infrastructure

---

## Top Features by Tier

### Essential (Free)
1. Peer-to-peer messaging with read receipts
2. 1:1 audio and video calls
3. Small group conversations (bubbles) up to 6
4. Basic presence management
5. Mobile push notifications

### Business
1. Multi-party conferencing up to 120 participants
2. Screen sharing and co-browsing
3. PBX overlay — use Rainbow as a softphone for the existing PBX
4. Business directory and contact federation
5. Standard analytics and reporting

### Enterprise
1. AI-powered meeting transcription and action items
2. CRM connectors (Salesforce, Dynamics, ServiceNow)
3. Advanced call center features (IVR, hunt groups, ACD)
4. Full analytics suite with custom dashboards
5. Rainbow Edge deployment option

---

## Security Certifications

| Certification | Scope |
|---|---|
| **ISO 27001** | Information Security Management System |
| **ISO 27017** | Cloud-specific security controls |
| **ISO 27018** | Protection of personal data in the cloud |
| **GDPR** | Full compliance — EU data processing |
| **HDS 1.1** | Hosting of health data (France) |
| **ANSSI CSPN** | French government security certification |
| **ENS** | Spanish National Security Framework (Esquema Nacional de Seguridad) |

---

## Encryption Specifications

| Layer | Standard |
|---|---|
| Data in transit | TLS 1.2 / 1.3 |
| Media streams | SRTP (AES-128) |
| Data at rest | AES-256 |
| Key management | HSM-backed, per-tenant keys |

---

## Network Requirements (Minimum)

| Parameter | Requirement |
|---|---|
| Bandwidth per call | 100 kbps (audio) / 1.5 Mbps (video) |
| Latency | < 150 ms one-way |
| Jitter | < 30 ms |
| Packet loss | < 1% |
| Ports | TCP 443 (signaling), UDP 3478 (STUN/TURN), UDP 10000-20000 (media) |

---

## Key Integration Points

- **PBX Overlay:** OXO Connect, OXE, third-party SIP PBXs
- **CRM:** Salesforce, Microsoft Dynamics 365, ServiceNow
- **Collaboration:** Microsoft Teams Direct Routing, Outlook add-in
- **Bot Framework:** Node.js SDK, webhooks, natural language connectors
- **APIs:** REST, WebSocket, S2S webhooks via hub.openrainbow.com
- **Directory:** LDAP/Active Directory sync, SCIM provisioning

---

## Quick Links

| Resource | URL |
|---|---|
| Admin Portal | admin.openrainbow.com |
| Developer Hub | hub.openrainbow.com |
| API Documentation | developers.openrainbow.com |
| Status Page | status.openrainbow.com |
| Support Portal | support.openrainbow.com |

---

## Contact

- **Partner Support:** partnersupport@al-enterprise.com
- **Technical Escalation:** rainbow-escalation@al-enterprise.com
- **Sales Engineering:** rainbow-se@al-enterprise.com

---

*This reference card is intended for Rainbow partners, sales engineers, and internal teams. Distribution to end customers requires approval from the ALE channel management team.*
