# SUP-101: Rainbow Platform Overview

| Field            | Value                                                      |
|------------------|------------------------------------------------------------|
| **Module ID**    | SUP-101                                                    |
| **Title**        | Rainbow Platform Overview                                  |
| **Track**        | Support (L1 Foundation)                                    |
| **Duration**     | 30 minutes                                                 |
| **Content Types**| Reading, Diagrams, Knowledge Check                         |
| **Prerequisites**| None                                                       |

## Learning Objectives

By the end of this module, you will be able to:

1. Articulate what Rainbow is and how Alcatel-Lucent Enterprise positions it in the market.
2. Identify and compare the five Rainbow subscription tiers and their intended audiences.
3. Explain the key technical and business differentiators that set Rainbow apart from competitors.
4. List the client platforms on which Rainbow is available and describe their primary use cases.
5. Describe the target markets and industry verticals that Rainbow serves.

---

## 1. What Is Rainbow?

![video: Introduction to Rainbow — Platform Overview](rainbow-platform-intro)

### 1.1 Product Identity

Rainbow is the cloud communications platform developed and operated by **Alcatel-Lucent Enterprise (ALE)**. It combines Unified Communications as a Service (UCaaS) with Communications Platform as a Service (CPaaS) in a single offering. This dual identity is central to understanding Rainbow's market position:

- **UCaaS** delivers ready-to-use communication tools — instant messaging, voice calls, video conferencing, file sharing, and presence management — directly to end users through desktop, web, and mobile clients.
- **CPaaS** exposes a rich set of APIs, SDKs, and webhook integrations that allow developers and system integrators to embed real-time communication capabilities into third-party applications, business workflows, and IoT systems.

This combination means that Rainbow serves two audiences simultaneously: **business users** who need day-to-day collaboration tools, and **developers or integrators** who need programmable communications infrastructure.

> **Key Concept:** Rainbow's dual identity as both UCaaS and CPaaS is its defining characteristic. Every support interaction should start with understanding which "face" of Rainbow the customer is using — the ready-made collaboration app or the programmable API layer.

### 1.2 The Alcatel-Lucent Enterprise Context

Alcatel-Lucent Enterprise has a heritage spanning more than a century in enterprise networking and telephony. Rainbow builds on that heritage by extending traditional PBX and on-premises telephony systems into the cloud. Unlike pure-play cloud vendors, ALE designed Rainbow to coexist with existing telephony infrastructure — particularly the OmniPCX Enterprise (OXE) and OmniPCX Office (OXO) PBX families — rather than requiring a forklift replacement.

This hybrid philosophy is one of Rainbow's most important selling points: customers can adopt cloud communications at their own pace without abandoning investments in on-premises equipment.

> **Tip:** When a customer asks "Do I have to replace my phone system?", the answer is always no. Rainbow is designed to work alongside existing PBX infrastructure — this is one of the strongest messages you can deliver.

### 1.3 Platform Architecture at a Glance

![diagram: Rainbow Global Architecture — Microservices & Data Centers](rainbow-architecture-overview)

Rainbow runs on a globally distributed microservices architecture. The platform is hosted across **22 data centers** located in multiple geographic regions, including Europe, North America, Asia-Pacific, and the Middle East. This geographic distribution serves two purposes:

1. **Performance**: Users connect to the nearest point of presence, reducing latency for real-time voice and video.
2. **Data sovereignty**: Organizations in regulated industries or jurisdictions with strict data residency requirements can ensure that their data remains within a specific geographic boundary.

The platform achieves a published uptime of **99.87%**, backed by service-level agreements that vary by subscription tier.

> **Info:** The 22 data centers are strategically distributed to cover major regulatory regions. When a customer asks about data residency, always confirm which data center their company is assigned to via the admin portal before making any commitments.

---

## 2. Subscription Tiers

Rainbow offers five distinct subscription tiers. Understanding these tiers is fundamental to support work because the features available to a user — and therefore the issues they may encounter — depend directly on their subscription level.

### 2.1 Essential (Free Tier)

The Essential tier is Rainbow's freemium offering. It is designed to give individuals and small teams a no-cost entry point into the platform.

**Included capabilities:**
- One-to-one instant messaging
- Basic presence (Available, Busy, Away)
- Peer-to-peer audio and video calls via WebRTC
- Participation in Bubbles (group conversations) created by others
- File sharing with a limited storage quota (typically 1 GB per user)
- Access to the web client and all native clients

**Limitations:**
- No conference scheduling or moderation tools
- No PBX integration
- No admin console access (single-user mode only)
- Limited API access
- No telephony features (PSTN calling)
- Reduced file storage and sharing quotas

The Essential tier is often used by external guests invited into a Bubble by a paying customer, or by individual professionals evaluating the platform.

### 2.2 Business

The Business tier is targeted at small and medium businesses that need a complete UCaaS solution without complex telephony integration.

**Key additions over Essential:**
- Full Bubble creation and management (up to 300 members per Bubble)
- Audio and video conferencing with up to 120 participants
- Conference scheduling via calendar integration
- Screen sharing on all platforms
- Expanded file storage quotas (varies by agreement)
- Company directory and contact management
- Admin console access for company administrators
- Calendar-synced presence (integration with Microsoft Outlook and Google Calendar)
- Message qualification tags

### 2.3 Enterprise

The Enterprise tier adds capabilities required by larger organizations with existing telephony infrastructure.

**Key additions over Business:**
- Full PBX overlay: integration with OmniPCX Enterprise, OmniPCX Office, and third-party SIP-based PBXs
- Hybrid cloud deployment options
- Advanced telephony features: call transfer, call pickup, call forwarding rules, hunt groups
- LDAP and Active Directory synchronization for user provisioning
- Enhanced security controls and compliance reporting
- Dedicated data residency options
- Priority support SLA
- AI-powered features: meeting transcription, smart summaries, and translation (where available)

### 2.4 Rainbow Connect

Rainbow Connect is a specialized offer focused on **telephony integration**. It is designed for organizations that want to cloud-enable their existing PBX systems.

**Key characteristics:**
- Tight integration with ALE OmniPCX Enterprise and OmniPCX Office
- Softphone capabilities: make and receive PBX calls from the Rainbow client
- Single number reach: ring the desk phone and Rainbow client simultaneously
- Call log synchronization between PBX and Rainbow
- Visual voicemail

Rainbow Connect is frequently sold alongside existing ALE telephony maintenance agreements. Support agents should understand that Rainbow Connect users often have a blended environment — some calls route through the PBX, others through WebRTC — which can affect troubleshooting.

### 2.5 Rainbow Hub

Rainbow Hub is Rainbow's CPaaS-focused tier, targeted at **developers and system integrators**.

**Key characteristics:**
- Full REST API access for messaging, voice, video, presence, and directory services
- SDKs for JavaScript (Node.js and browser), Java, Swift, Kotlin, and C#
- Webhook and Bot frameworks for building automated workflows
- Integration connectors for CRM, ITSM, and ERP systems (Salesforce, ServiceNow, Microsoft Dynamics, SAP)
- Usage-based billing for API calls and media minutes
- Sandbox environment for development and testing

When supporting Rainbow Hub users, the nature of the issues changes significantly: you will encounter API errors, authentication token problems, SDK version incompatibilities, and webhook delivery failures rather than typical end-user UX questions.

> **Warning:** Never share tier-specific troubleshooting steps with a customer on a different tier. For example, advising an Essential-tier user to check PBX settings will cause confusion — PBX features are not available on that tier. Always verify the customer's subscription level first.

### 2.6 Tier Comparison Summary

| Feature                    | Essential | Business | Enterprise | Connect | Hub   |
|----------------------------|-----------|----------|------------|---------|-------|
| Instant messaging          | Yes       | Yes      | Yes        | Yes     | API   |
| P2P audio/video            | Yes       | Yes      | Yes        | Yes     | API   |
| Conferencing (120 users)   | No        | Yes      | Yes        | Yes     | API   |
| Screen sharing             | No        | Yes      | Yes        | Yes     | --    |
| Bubble creation            | Limited   | Yes      | Yes        | Yes     | API   |
| PBX integration            | No        | No       | Yes        | Yes     | API   |
| Admin console              | No        | Yes      | Yes        | Yes     | Yes   |
| Calendar sync              | No        | Yes      | Yes        | Yes     | --    |
| AI features                | No        | No       | Yes        | No      | API   |
| API/SDK access             | Limited   | Limited  | Full       | Limited | Full  |
| Data sovereignty options   | No        | No       | Yes        | Yes     | Yes   |

---

## 3. Key Differentiators

When speaking with customers or comparing Rainbow to competitors such as Microsoft Teams, Zoom, Cisco Webex, or RingCentral, the following differentiators are essential to understand.

### 3.1 Hybrid Cloud Architecture

Rainbow does not require an all-or-nothing cloud migration. Organizations can keep their on-premises PBX systems and overlay Rainbow on top, gaining cloud collaboration features while preserving existing telephony investments. This is particularly compelling for enterprises with thousands of desk phones already deployed.

### 3.2 Data Sovereignty

With 22 data centers across multiple continents, Rainbow allows organizations to specify where their data is stored and processed. This is a hard requirement in industries such as healthcare, banking, government, and defense, where regulations like GDPR (Europe), HIPAA (United States), or the Cloud Act create strict data residency obligations.

Rainbow's architecture ensures that customer data — messages, files, call records — can be confined to a specific geographic region. This is not simply a policy statement; it is enforced at the infrastructure level through regional deployment configurations.

### 3.3 PBX Overlay Capability

Many organizations have invested millions in PBX infrastructure over decades. Rainbow's ability to sit on top of existing ALE and third-party PBX systems without replacing them is a unique selling point. The PBX overlay provides:

- Unified call control across desk phones and software clients
- Gradual migration path from on-premises to cloud telephony
- Preservation of existing phone numbers, call routing rules, and hunt groups

### 3.4 AI-Powered Features

Rainbow integrates AI capabilities into its Enterprise tier:

- **Meeting transcription**: Automatic speech-to-text transcription of conference calls
- **Smart summaries**: AI-generated meeting summaries with key decisions and action items
- **Real-time translation**: Message translation across supported languages
- **Intelligent routing**: AI-assisted contact center call routing based on intent detection

These features are continually expanding and represent a strategic investment by ALE.

### 3.5 Global Infrastructure

- **22 data centers** across Europe, North America, Asia-Pacific, and Middle East
- **99.87% published uptime** with SLA-backed guarantees
- Redundant architecture with automatic failover between data centers
- Edge nodes for optimized media relay in regions without a full data center presence

### 3.6 Security and Compliance

- End-to-end encryption for peer-to-peer calls
- TLS 1.2+ for all data in transit
- AES-256 encryption for data at rest
- SOC 2 Type II certification
- ISO 27001 compliance
- GDPR-compliant data processing agreements

---

## 4. Client Platforms

Rainbow is available on six client platforms. Each platform shares the same core feature set but has differences driven by the operating system and form factor.

### 4.1 Web Client

- Accessible at **web.openrainbow.com** via any modern browser (Chrome, Firefox, Edge, Safari)
- No installation required — ideal for guest users and shared workstations
- Supports messaging, voice, video, screen sharing, and conferencing
- WebRTC-based calls require no plugins
- Some features (e.g., PBX desk phone control) may have limited availability compared to native clients

### 4.2 Windows Desktop Client

- Native application for Windows 10 and later
- Full feature set including PBX integration, telephony controls, and system tray presence
- Integrates with Windows notification center
- Supports Outlook calendar integration for presence synchronization
- Available via MSI installer for enterprise deployment through SCCM or Group Policy

### 4.3 macOS Desktop Client

- Native application for macOS 11 (Big Sur) and later
- Feature parity with the Windows client in most areas
- Integrates with macOS notification center and calendar
- Available through direct download or managed deployment via MDM tools

### 4.4 Android Mobile Client

- Available on Google Play Store
- Optimized for smartphones; supports tablets
- Push notifications for incoming calls and messages
- Battery-optimized background operation
- Supports Android 10 and later

### 4.5 iOS Mobile Client

- Available on Apple App Store
- Supports iPhone and iPad
- CallKit integration: incoming Rainbow calls appear like native phone calls
- Push notifications via Apple Push Notification Service (APNs)
- Supports iOS 15 and later

### 4.6 Android TV Client

- Designed for meeting room and conference room scenarios
- Allows joining video conferences from a large screen
- Simplified interface focused on meeting join and display
- Typically paired with a remote control or companion mobile device for input

---

## 5. Target Markets and Verticals

Rainbow is designed as a horizontal platform — it can serve any industry — but ALE has particular strength in several verticals.

### 5.1 Hospitality

Hotels and resorts use Rainbow to coordinate front desk, housekeeping, maintenance, and management staff. The PBX overlay capability is especially relevant because most hotel properties run ALE OmniPCX systems for guest room telephony.

### 5.2 Healthcare

Hospitals and clinics leverage Rainbow's data sovereignty features to comply with patient data regulations. Secure messaging between clinical staff, nurse call integration, and the ability to keep data within national borders are key drivers.

### 5.3 Education

Universities and school districts use Rainbow for staff collaboration, student-teacher communication in Bubbles, and virtual classroom sessions via video conferencing. The Essential (free) tier allows students to participate without licensing costs.

### 5.4 Government and Defense

Government agencies require strict data residency, security certifications, and on-premises deployment options. Rainbow's hybrid architecture and European data center footprint make it a strong fit for public sector organizations, particularly in France and other EU countries.

### 5.5 Transportation and Logistics

Airlines, railway operators, and shipping companies use Rainbow for real-time coordination across geographically dispersed operations. Integration with existing communication systems (radios, intercoms, PBX) through Rainbow Connect is a common deployment pattern.

### 5.6 Enterprise and Financial Services

Banks, insurance companies, and large corporations use the Enterprise tier for its compliance features, Active Directory integration, and advanced telephony capabilities.

---

## Key Concepts Summary

| Concept                  | Definition                                                                                        |
|--------------------------|---------------------------------------------------------------------------------------------------|
| **UCaaS**                | Unified Communications as a Service — ready-to-use voice, video, messaging, and collaboration     |
| **CPaaS**                | Communications Platform as a Service — APIs and SDKs for embedding communications into apps       |
| **PBX Overlay**          | Running Rainbow on top of existing telephony systems without replacing them                        |
| **Data Sovereignty**     | Ensuring customer data is stored and processed within a specific geographic region                 |
| **Hybrid Cloud**         | Deployment model that combines on-premises infrastructure with cloud services                     |
| **WebRTC**               | Web Real-Time Communication — browser-based protocol for voice and video without plugins          |
| **Essential Tier**       | Free tier for individuals; limited features, no admin console                                     |
| **Enterprise Tier**      | Full-featured tier with PBX integration, AI, and data sovereignty                                 |
| **Rainbow Hub**          | CPaaS tier for developers; API/SDK access with usage-based billing                                |

---

## Practice Exercise

**Scenario**: A prospect calls in asking about Rainbow. They are a mid-sized hospital (400 employees) in Germany. They currently run an OmniPCX Enterprise for their telephony. They need secure messaging between clinical staff, video conferencing for remote consultations, and they are concerned about patient data staying in the EU.

**Task**: Based on what you have learned in this module, answer the following:

1. Which subscription tier(s) would you recommend and why?
2. Which three differentiators are most relevant to this prospect?
3. Which client platforms would be most useful for clinical staff who move between floors and departments?
4. What data sovereignty assurance can you provide regarding EU data residency?

Write your answers in complete sentences, as if you were responding to the prospect in an email.

---

## Knowledge Check

**Question 1**: Rainbow combines which two service models into a single platform?

- A) SaaS and IaaS
- B) UCaaS and CPaaS
- C) PaaS and DaaS
- D) CCaaS and UCaaS

**Answer**: B — Rainbow combines UCaaS (Unified Communications as a Service) for end-user collaboration tools with CPaaS (Communications Platform as a Service) for developer APIs and integrations.

---

**Question 2**: What is the maximum number of participants supported in a Rainbow video conference?

- A) 50
- B) 80
- C) 120
- D) 250

**Answer**: C — Rainbow supports up to 120 participants in an audio/video conference, with up to 49 simultaneous video streams.

---

**Question 3**: Which subscription tier provides PBX overlay integration with OmniPCX Enterprise?

- A) Essential
- B) Business
- C) Enterprise
- D) Both Enterprise and Rainbow Connect

**Answer**: D — Both the Enterprise tier and Rainbow Connect provide PBX integration capabilities. Rainbow Connect is specifically focused on telephony integration, while Enterprise includes it as part of a broader feature set.

---

**Question 4**: How many data centers does Rainbow operate across its global infrastructure?

- A) 8
- B) 14
- C) 22
- D) 30

**Answer**: C — Rainbow operates 22 data centers across Europe, North America, Asia-Pacific, and the Middle East, supporting both performance optimization and data sovereignty requirements.

---

**Question 5**: A customer on the Essential (free) tier reports they cannot schedule a conference call. What is the most likely explanation?

- A) Their account has expired
- B) Conference scheduling is not available on the Essential tier
- C) They need to update their client software
- D) The conferencing service is experiencing an outage

**Answer**: B — Conference scheduling and moderation tools are not included in the Essential (free) tier. The customer would need to upgrade to the Business tier or higher to access these features.
