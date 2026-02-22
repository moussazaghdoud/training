# Security Certifications Summary — Quick Reference Card

> **Version:** 2.0 | **Last Updated:** February 2026 | **Classification:** Partner & Pre-Sales Use

---

## Overview

Rainbow's security posture is built on internationally recognized certifications, European data sovereignty principles, and a strict no-data-monetization policy. This card summarizes every certification, its scope, and its relevance to customer conversations.

---

## Certification Details

### ISO 27001 — Information Security Management System

| Attribute | Detail |
|---|---|
| **Full Name** | ISO/IEC 27001:2022 |
| **Certifying Body** | Independent accredited auditor (AFNOR / BSI) |
| **What It Certifies** | That ALE operates a comprehensive Information Security Management System (ISMS) covering risk management, access control, incident response, and continuous improvement |
| **Scope** | Rainbow cloud platform — all data centers, development, operations, and support processes |
| **Relevance** | Universal — required or expected by virtually all enterprise procurement teams |
| **Renewal Cycle** | 3-year certification with annual surveillance audits |
| **Key Controls** | Risk assessment, asset management, access control, cryptography, operations security, communications security, supplier relationships, incident management, business continuity |

**Talking Point:** "Rainbow holds ISO 27001 across all operational processes, not just the data centers. This means everything from how we write code to how we handle incidents is audited annually."

---

### ISO 27017 — Cloud Security Controls

| Attribute | Detail |
|---|---|
| **Full Name** | ISO/IEC 27017:2015 |
| **What It Certifies** | Additional security controls specific to cloud service provision and cloud service usage |
| **Scope** | Rainbow SaaS platform and underlying cloud infrastructure |
| **Relevance** | Organizations evaluating cloud providers; adds cloud-specific assurance on top of 27001 |
| **Key Controls** | Shared responsibility model, virtual machine hardening, cloud data isolation, tenant segregation, removal of cloud customer assets |

**Talking Point:** "ISO 27017 goes beyond generic security. It specifically addresses cloud concerns like data isolation between tenants and what happens to your data when you leave the platform."

---

### ISO 27018 — Protection of Personal Data in the Cloud

| Attribute | Detail |
|---|---|
| **Full Name** | ISO/IEC 27018:2019 |
| **What It Certifies** | Protection of personally identifiable information (PII) in public cloud environments |
| **Scope** | All personal data processed by the Rainbow platform |
| **Relevance** | Organizations with privacy requirements, GDPR-conscious customers, HR and healthcare verticals |
| **Key Controls** | Consent and purpose limitation, data minimization, transparency, data subject rights facilitation, sub-processor oversight, breach notification |

**Talking Point:** "This certification proves that Rainbow treats personal data with the same rigor as a data protection authority would expect. It directly supports GDPR compliance."

---

### GDPR — General Data Protection Regulation

| Attribute | Detail |
|---|---|
| **Full Name** | Regulation (EU) 2016/679 |
| **What It Covers** | Protection of personal data of EU/EEA residents |
| **ALE's Role** | Data Processor (when processing customer data); Data Controller (for ALE account data) |
| **Scope** | All personal data processed through Rainbow — user profiles, messages, call records, analytics |
| **Key Measures** | Data Processing Agreement (DPA) provided to all customers; Privacy Impact Assessment completed; Data Protection Officer appointed; sub-processor list published and maintained |
| **Data Subject Rights Supported** | Access, rectification, erasure, portability, restriction, objection |
| **Relevance** | All European customers; any global customer with EU employees or contacts |

**Talking Point:** "Every Rainbow customer receives a GDPR-compliant Data Processing Agreement. We publish our sub-processor list and notify customers of any changes with a 30-day notice period."

### GDPR Technical Measures

| Measure | Implementation |
|---|---|
| Data minimization | Only essential data collected; no behavioral profiling |
| Pseudonymization | User IDs decoupled from personal identifiers in analytics |
| Right to erasure | Automated account deletion within 30 days of request |
| Data portability | Export via API or admin portal in standard formats |
| Breach notification | 72-hour notification to authorities; customer notification without undue delay |

---

### HDS 1.1 — Hosting of Health Data (Hbergeur de Donnes de Sant)

| Attribute | Detail |
|---|---|
| **Full Name** | HDS 1.1 (French certification under Article L.1111-8 of the Public Health Code) |
| **Certifying Body** | Accredited body (BSI France / AFNOR) |
| **What It Certifies** | That the infrastructure and operations meet French legal requirements for hosting personal health data |
| **Scope** | Rainbow Edge deployment (on-premises media server + cloud control plane) and designated HDS-certified Rainbow cloud instances |
| **Relevance** | French healthcare organizations (hospitals, clinics, health networks, pharma), and any entity processing French patient data |
| **Activities Covered** | Physical infrastructure provision (HDS 1); infrastructure management (HDS 2); platform management (HDS 3); application administration (HDS 4); secure data backup (HDS 5) |
| **Renewal Cycle** | 3-year certification with annual audits |

**Talking Point:** "Rainbow is one of the very few UCaaS platforms certified HDS 1.1. For French hospitals and health networks, this is not optional — it is a legal requirement, and Rainbow meets it natively."

### HDS Architecture Requirements

| Component | Where It Runs | HDS Coverage |
|---|---|---|
| Media Server | Customer premises (Rainbow Edge) | Covered — health data stays on-site |
| Signaling Server | Customer premises or cloud | Covered under HDS 3/4 |
| Control Plane | ALE cloud (HDS-certified instance) | Covered under HDS 1/2/3 |
| Storage | Customer premises | Covered — no health data leaves the site |

---

### ANSSI CSPN — First-Level Security Certification (France)

| Attribute | Detail |
|---|---|
| **Full Name** | Certification de Scurit de Premier Niveau (CSPN) |
| **Certifying Body** | ANSSI (Agence nationale de la scurit des systmes d'information) |
| **What It Certifies** | That the product has undergone a formal security evaluation confirming resistance to standard attack scenarios |
| **Scope** | Rainbow desktop and mobile clients (communication encryption, authentication, local data protection) |
| **Evaluation Process** | 35-day focused evaluation by an ANSSI-accredited laboratory (CESTI) |
| **Relevance** | French government agencies, defense contractors, operators of vital importance (OIV), and organizations following ANSSI recommendations |

**Talking Point:** "ANSSI CSPN means the French national cybersecurity agency has independently verified the security of Rainbow's client applications. This is the standard for French government procurement."

---

### ENS — Esquema Nacional de Seguridad (Spain)

| Attribute | Detail |
|---|---|
| **Full Name** | Esquema Nacional de Seguridad (Royal Decree 311/2022) |
| **Certifying Body** | CCN (Centro Criptolgico Nacional, Spain) |
| **What It Certifies** | Compliance with Spain's National Security Framework for public-sector IT systems |
| **Scope** | Rainbow cloud services offered to Spanish public administration |
| **Level** | Category Medium (suitable for most public administration use cases) |
| **Relevance** | Spanish national, regional, and local government entities; public-sector contractors |

**Talking Point:** "ENS certification means Rainbow can be deployed by any level of Spanish government — from town councils to national ministries — meeting their national security framework requirements."

---

## Data Sovereignty Details

### Where Data Is Stored

| Data Type | Default Location | Options |
|---|---|---|
| User profiles and directory | EU (France) | EU, custom with Rainbow Edge |
| Messages and files | EU (France) | EU, custom with Rainbow Edge |
| Call signaling metadata | EU (France) | EU, custom with Rainbow Edge |
| Call media (audio/video) | Routed via nearest data center | On-premises with Rainbow Edge |
| Analytics and logs | EU (France) | EU only |
| Backups | EU (geographically separated) | Same region as primary |

### Rainbow Edge for Full Sovereignty

For organizations that require complete data sovereignty:

1. **Media never leaves the premises** — audio and video streams are processed by the on-premises Edge server
2. **Signaling can remain on-premises** — the Edge server handles SIP and WebRTC signaling locally
3. **Only control-plane metadata** reaches the cloud — user presence, licensing, and admin functions
4. **Option for air-gapped deployment** — available for classified environments (contact ALE directly)

---

## Encryption Specifications

### Data in Transit

| Protocol | Standard | Key Length | Usage |
|---|---|---|---|
| TLS | 1.2 / 1.3 | 256-bit (AES-GCM) | All signaling and API communication |
| DTLS | 1.2 | 256-bit | WebRTC key exchange |
| SRTP | AES-128-CM | 128-bit | Audio and video media streams |
| WSS | TLS 1.2+ | 256-bit | WebSocket real-time events |

### Data at Rest

| Data Type | Encryption | Key Management |
|---|---|---|
| Messages | AES-256-GCM | Per-tenant keys, HSM-backed |
| Files | AES-256-GCM | Per-tenant keys, HSM-backed |
| Databases | AES-256 (TDE) | Managed by cloud provider KMS |
| Backups | AES-256-GCM | Separate backup keys, rotated quarterly |
| Client local cache | OS-level encryption (DPAPI / Keychain) | User-bound keys |

### Key Management

| Aspect | Detail |
|---|---|
| Key storage | Hardware Security Modules (HSM) — FIPS 140-2 Level 3 |
| Key rotation | Automatic rotation every 12 months; manual rotation on demand |
| Key separation | Tenant-specific keys; ALE cannot access customer content |
| Perfect forward secrecy | Enabled for all TLS connections |

---

## No-Data-Monetization Policy

ALE maintains a contractual and public commitment:

1. **Customer data is never sold** to third parties, advertisers, or data brokers.
2. **Customer data is never used** for advertising targeting, profiling, or behavioral analysis.
3. **Customer data is never used** to train AI/ML models outside the customer's own tenant (AI features operate within the tenant scope only).
4. **Customer data is never shared** with third parties except as required by law or as explicitly authorized by the customer in the DPA.
5. **Metadata is not monetized** — call patterns, usage analytics, and presence data belong to the customer.

**Talking Point:** "Unlike some cloud vendors whose business model depends on data monetization, ALE is a telecommunications infrastructure company. Our revenue comes from software licenses and services, never from your data."

---

## Certification Relevance by Industry

| Industry | Required/Recommended Certifications |
|---|---|
| Healthcare (France) | HDS 1.1, ISO 27001, GDPR |
| Healthcare (Other EU) | ISO 27001, ISO 27018, GDPR |
| Government (France) | ANSSI CSPN, ISO 27001, GDPR |
| Government (Spain) | ENS, ISO 27001, GDPR |
| Financial Services | ISO 27001, ISO 27017, GDPR |
| Education | GDPR, ISO 27001 |
| Manufacturing | ISO 27001, GDPR |
| Legal / Professional Services | ISO 27001, ISO 27018, GDPR |
| Defense / Critical Infrastructure | ANSSI CSPN, Rainbow Edge (air-gapped) |

---

## Security Documentation Available on Request

| Document | Purpose |
|---|---|
| Security White Paper | Comprehensive security architecture overview |
| Data Processing Agreement (DPA) | GDPR-compliant controller-processor agreement |
| Sub-Processor List | All third parties processing customer data |
| Penetration Test Summary | Annual third-party pentest results (NDA required) |
| SOC 2 Bridge Letter | Assurance between audit periods |
| DPIA (Data Protection Impact Assessment) | Privacy risk assessment for Rainbow services |

---

*This reference card is designed for pre-sales conversations and security questionnaire responses. For detailed security documentation, contact your ALE security liaison or request materials through the partner portal.*
