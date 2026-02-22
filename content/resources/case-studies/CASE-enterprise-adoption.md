# Case Study: Enterprise-Wide Rainbow Adoption

> **Industry:** Manufacturing
> **Company Size:** 5,000 employees across 12 sites
> **Region:** Western Europe (HQ in Germany, plants in France, Poland, and Spain)
> **Solution:** Rainbow Enterprise + Rainbow Edge (hybrid deployment)
> **Last Updated:** February 2026

---

## Executive Summary

A European manufacturing group with 5,000 employees migrated from an aging, multi-vendor PBX environment to a unified Rainbow hybrid deployment over 18 months. The project consolidated 8 different PBX systems across 12 sites into a single communication platform, delivered modern collaboration tools to a workforce that was 35% remote or mobile, and met strict European data sovereignty and compliance requirements. The deployment achieved a 40% reduction in travel costs, 60% faster cross-site decision-making, and 99.9% platform uptime in the first full year of operation.

---

## Company Context

### About the Organization

EuroTech Manufacturing Group (name changed for confidentiality) is a mid-cap industrial manufacturer producing precision components for the automotive and aerospace sectors. Founded in 1968 and headquartered in Stuttgart, Germany, the company operates:

- **1 corporate headquarters** in Stuttgart (800 employees)
- **4 manufacturing plants** in Strasbourg (France), Wroclaw (Poland), Barcelona (Spain), and Stuttgart
- **3 regional sales offices** in Paris, Milan, and London
- **4 smaller facilities** (warehouses, R&D labs, training center)

The workforce includes office-based engineers and administrators, plant-floor supervisors who are mobile within facilities, field sales representatives across Europe, and a growing remote workforce that expanded to 35% of the total headcount following pandemic-era policy changes.

### Industry Requirements

As a Tier 1 automotive supplier, EuroTech operates under:
- **IATF 16949** quality management requirements
- **ISO 27001** information security expectations from OEM customers
- **GDPR** obligations across all EU operations
- **Works council agreements** in Germany and France regarding employee monitoring and communication recording

---

## Challenges

### 1. Aging PBX Infrastructure

EuroTech had accumulated 8 different PBX systems across its 12 sites over 25 years. The environment included:

- 2 Alcatel-Lucent OXE systems (Stuttgart HQ, Strasbourg plant)
- 3 legacy Siemens HiPath systems (Wroclaw, Barcelona, Milan)
- 2 Cisco Unified CM clusters (London, Paris)
- 1 small Panasonic system (training center)

Maintenance contracts for the legacy systems were expiring, spare parts were becoming scarce, and the Siemens HiPath systems were end-of-life with no migration path from the original vendor. Annual maintenance costs across all systems totaled EUR 380,000, and the IT team estimated that sustaining the legacy environment for another 3 years would cost over EUR 1.2 million.

### 2. Remote and Mobile Workers

The shift to 35% remote work exposed the limitations of the legacy PBX environment:

- Remote workers could not use their business phone numbers from home
- No unified presence — colleagues could not see who was available across sites
- Conference calls required third-party bridge services at additional cost
- Mobile workers on the plant floor had no integration between their mobile devices and the PBX

The company was paying EUR 45,000 per year for a third-party audio conferencing service and EUR 28,000 per year for a separate video conferencing tool, neither of which integrated with the PBX or the directory.

### 3. Compliance and Data Sovereignty

EuroTech's OEM customers (major German and French automotive brands) required:

- Communication data to remain within the EU
- Encryption for all internal and external communications
- Audit trails for calls and messages related to quality incidents
- Compliance with GDPR for all employee and customer data

A US-based cloud communications platform was evaluated and rejected by the works council due to concerns about data transfers under Schrems II. The company needed a European solution with verifiable data sovereignty.

### 4. Cross-Site Collaboration Friction

With 12 sites across 5 countries, cross-site collaboration was slow and expensive:

- Engineers in Stuttgart frequently traveled to Strasbourg for quality reviews (4-hour round trip)
- Decision-making on production issues required phone tag across time zones
- No shared directory — finding the right contact at another site required asking around
- Average time to resolve cross-site quality incidents: 4.2 days

Travel costs attributable to internal meetings totaled EUR 1.8 million annually.

---

## Solution Design

### Architecture: Rainbow Enterprise + Edge (Hybrid)

After evaluating four platforms (Rainbow, Microsoft Teams, Cisco Webex, RingCentral), EuroTech selected Rainbow Enterprise with a hybrid deployment model.

#### Core Architecture

| Component | Deployment | Purpose |
|---|---|---|
| Rainbow Cloud (SaaS) | ALE EU data centers | Messaging, presence, directory, conferencing, admin portal |
| Rainbow Edge (Stuttgart) | On-premises at HQ | Media processing for HQ and German sites, data sovereignty |
| Rainbow Edge (Strasbourg) | On-premises at plant | Media processing for French sites, HDS-ready |
| OXE PBX (retained) | Stuttgart, Strasbourg | Core telephony — retained and overlaid with Rainbow |
| SIP Trunking | Cloud-connected | Replaced legacy ISDN trunks at smaller sites |
| PBX Agents | Each site with a PBX | Connected legacy PBXs to Rainbow during transition |

#### Why Rainbow Was Selected

| Evaluation Criterion | Rainbow Score | Reason |
|---|---|---|
| PBX integration | Highest | Native OXE integration; PBX agent for third-party systems |
| Data sovereignty | Highest | Rainbow Edge keeps media on-premises; EU cloud |
| Works council acceptance | Passed | European company, GDPR-compliant, no US data transfers |
| Total cost of ownership | Second lowest | Lower than Cisco; slightly above RingCentral but with Edge |
| Telephony feature depth | Highest | IVR, hunt groups, ACD, recording — native in Rainbow |
| Migration complexity | Lowest | Could overlay existing PBXs during transition, no big-bang |

### Licensing Model

| User Group | Count | License Tier | Rationale |
|---|---|---|---|
| Office-based employees | 2,800 | Enterprise | Full collaboration + telephony + AI |
| Plant-floor supervisors | 600 | Business | Telephony + messaging (no AI needed) |
| Field sales | 400 | Enterprise | CRM integration (Salesforce connector) |
| Executives | 150 | Enterprise | Full feature set + recording |
| Shared/conference devices | 50 | Business | Room systems and common area phones |
| Total | 4,000 | Mixed | Remaining 1,000 employees phased in Year 2 |

---

## Deployment Phases

### Phase 1: Foundation (Months 1-3)

**Objective:** Establish Rainbow infrastructure and pilot with IT department.

Activities:
- Deployed Rainbow Edge servers at Stuttgart and Strasbourg
- Connected the two OXE systems to Rainbow via native integration
- Configured Active Directory sync for the company directory
- Enabled SSO via SAML 2.0 (Azure AD as identity provider)
- Rolled out to 80 IT staff as the pilot group
- Tested PBX overlay, softphone, conferencing, and messaging

**Results:**
- 100% of IT pilot users active within 2 weeks
- Average of 12 messages per user per day by end of month 3
- 3 configuration issues identified and resolved (codec mismatch on OXE, LDAP attribute mapping error, firewall rule for TURN server)

### Phase 2: Headquarters Rollout (Months 4-6)

**Objective:** Roll out Rainbow to all 800 HQ employees.

Activities:
- Deployed Rainbow desktop and mobile clients via SCCM
- Conducted 12 training sessions (90 minutes each, 60-70 attendees per session)
- Migrated the HQ reception IVR to Rainbow
- Enabled Salesforce connector for the 80-person sales team at HQ
- Retired the third-party audio conferencing service

**Results:**
- 92% adoption rate at HQ within 6 weeks
- Third-party conferencing cost eliminated (EUR 45,000 annual saving)
- Sales team reported 23% increase in logged customer calls (Salesforce auto-logging)

### Phase 3: Manufacturing Plants (Months 7-12)

**Objective:** Extend Rainbow to the 4 manufacturing sites.

Activities:
- Deployed PBX agents at Wroclaw (Siemens HiPath) and Barcelona (Siemens HiPath) to overlay the legacy PBXs
- Installed Rainbow on ruggedized tablets for plant-floor supervisors
- Created shift-based hunt groups for production support lines
- Configured time-of-day routing for multi-timezone coverage
- Provided training in local languages (Polish, Spanish, French)

**Results:**
- Legacy Siemens systems overlaid — no immediate replacement needed
- Plant-floor supervisors connected to corporate directory for the first time
- Cross-plant quality incident resolution time dropped from 4.2 days to 1.6 days

### Phase 4: Sales Offices and Full Consolidation (Months 13-18)

**Objective:** Complete the rollout to all remaining sites and retire legacy systems.

Activities:
- Migrated Paris and London offices from Cisco UCM to Rainbow (SIP trunk replacement)
- Migrated Milan office from Siemens HiPath to Rainbow
- Retired the Panasonic system at the training center (replaced with Rainbow + SIP phones)
- Decommissioned 5 of the 8 legacy PBX systems (retained 2 OXE, 1 Siemens for analog devices)
- Enabled AI transcription for executive meetings and project reviews
- Completed the rollout to all 5,000 employees

**Results:**
- 6 legacy PBX systems decommissioned or scheduled for decommission
- Annual PBX maintenance costs reduced from EUR 380,000 to EUR 95,000
- 100% of employees have Rainbow access (desktop, mobile, or both)
- Video conferencing tool retired (EUR 28,000 annual saving)

---

## Adoption Metrics

### Usage After 12 Months of Full Deployment

| Metric | Value |
|---|---|
| Monthly active users | 4,650 (93% of total workforce) |
| Daily active users | 3,200 (64%) |
| Messages sent per month | 890,000 |
| Audio/video calls per month | 145,000 |
| Conferences per month | 8,200 |
| Average conference duration | 34 minutes |
| Files shared per month | 62,000 |
| PBX calls via Rainbow softphone | 78% of all business calls |
| AI transcriptions generated per month | 1,400 (executive and project meetings) |
| Mobile app installs | 2,800 (56% of workforce) |

### User Satisfaction (Internal Survey, n=1,200)

| Question | Score (1-5) |
|---|---|
| Overall satisfaction with Rainbow | 4.2 |
| Ease of use | 4.4 |
| Call quality | 4.1 |
| Messaging experience | 4.5 |
| Conferencing reliability | 4.0 |
| Would recommend to a colleague | 4.3 |

---

## ROI Results

### Quantified Financial Benefits (Annual, Year 1)

| Benefit | Annual Savings |
|---|---|
| Travel cost reduction (40% of EUR 1.8M) | EUR 720,000 |
| Third-party conferencing tools retired | EUR 73,000 |
| PBX maintenance reduction | EUR 285,000 |
| Reduced phone tag / faster decisions (productivity) | EUR 450,000 (estimated) |
| **Total annual benefit** | **EUR 1,528,000** |

### Investment

| Cost Category | Amount |
|---|---|
| Rainbow licenses (Year 1) | EUR 680,000 |
| Rainbow Edge hardware (2 servers) | EUR 48,000 |
| Professional services (deployment, training) | EUR 185,000 |
| Network upgrades (Wi-Fi at 3 plants) | EUR 120,000 |
| **Total Year 1 investment** | **EUR 1,033,000** |

### Return on Investment

| Metric | Value |
|---|---|
| Year 1 net benefit | EUR 495,000 |
| Payback period | 8.1 months |
| 3-year ROI | 312% |
| 5-year TCO vs. legacy (projected) | EUR 2.1M savings |

### Non-Financial Benefits

- **60% faster cross-site decision-making** — measured by average resolution time for cross-site quality incidents (4.2 days to 1.6 days)
- **99.9% platform uptime** achieved in the first full year (exceeding the 99.97% SLA target for all but one planned maintenance window)
- **Works council approval maintained** throughout the project — no grievances filed
- **Unified directory** across 12 sites for the first time in company history
- **Compliance ready** — all communications encrypted, audit trail available, data remains in EU

---

## Lessons Learned

### What Worked Well

1. **Phased rollout with IT-first pilot:** Starting with the IT department as the pilot group ensured that technical issues were identified and resolved before the broader rollout. IT staff also became advocates and informal support for their departments.

2. **PBX overlay strategy:** Not requiring immediate PBX replacement reduced risk and cost. The overlay approach let users transition gradually while the legacy systems were decommissioned on a comfortable timeline.

3. **Local-language training:** Providing training sessions in Polish, Spanish, and French (in addition to English and German) significantly increased adoption at manufacturing sites. Plant-floor workers were the most resistant to change and the most impacted by language barriers.

4. **Executive sponsorship:** The CTO personally used Rainbow from Day 1 and referenced it in monthly all-hands meetings. This top-down signal accelerated adoption more than any training program.

5. **Quick wins first:** Starting with messaging and presence — features that provide immediate value with no learning curve — built positive momentum before introducing more complex telephony features.

### What Could Be Improved

1. **Wi-Fi infrastructure assessment should come earlier:** Three manufacturing plants required Wi-Fi upgrades to support voice-quality traffic. This was discovered during Phase 3 and caused a 6-week delay. A pre-project network assessment would have identified this in Phase 1.

2. **Change management for desk phone retirement:** Some long-tenured employees resisted giving up their physical desk phones. A more gradual transition with side-by-side operation for 2-3 months would have eased this. The company ultimately kept analog phones at reception desks and in common areas.

3. **Salesforce connector rollout should be separate:** Rolling out the CRM integration simultaneously with the core platform overwhelmed the sales team. A staggered approach — Rainbow first, then Salesforce connector 4-6 weeks later — would have been more manageable.

4. **Union and works council engagement should start in parallel with Phase 1, not before:** The company spent 3 months in pre-project works council negotiations. While necessary, some of these discussions could have happened in parallel with the technical foundation work in Phase 1.

---

## Customer Quote

> "Rainbow did something we thought was impossible: it unified communications across 12 sites in 5 countries without forcing us to rip out our existing telephony. The overlay approach let us move at our own pace, and the Edge deployment gave our works council the data sovereignty guarantees they needed. Eighteen months later, we cannot imagine going back."
>
> — **CTO, EuroTech Manufacturing Group**

---

## Key Takeaways for Partners

1. **Manufacturing and industrial customers are prime Rainbow candidates** — they have legacy PBX estates, mobile workers, multi-site complexity, and European data sovereignty requirements that Rainbow uniquely addresses.

2. **The PBX overlay strategy is a powerful sales argument** — it removes the biggest objection ("we can't rip out our phones") and reduces project risk.

3. **Rainbow Edge is often the deciding factor** for works councils, data protection officers, and procurement teams in regulated European industries.

4. **Phased deployments with quick wins build momentum** — do not try to deliver every feature on Day 1. Start with messaging and presence, then add telephony and integrations.

5. **Travel cost reduction is the most tangible ROI metric** for manufacturing companies — it is easy to measure and immediately credible to finance teams.

---

*This case study is based on a composite of real Rainbow deployments in European manufacturing. Specific figures have been adjusted to protect customer confidentiality. Partners may use this case study in pre-sales conversations with appropriate attribution to ALE.*
