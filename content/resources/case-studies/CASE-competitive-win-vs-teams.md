# Case Study: Competitive Win — Rainbow vs. Teams-Only Strategy

> **Industry:** Government / Public Sector
> **Organization:** National-level regulatory agency in the EU
> **Staff:** 1,800 across 4 locations
> **Region:** Western Europe
> **Solution:** Rainbow Enterprise + Rainbow Edge + Microsoft Teams coexistence (Direct Routing)
> **Last Updated:** February 2026

---

## Executive Summary

A national regulatory agency in the European Union evaluated Microsoft Teams Phone System as part of a broader Microsoft 365 deployment but ultimately chose a Rainbow + Teams coexistence model. The decision was driven by four factors Teams could not address alone: data sovereignty for voice communications, integration with the existing Alcatel-Lucent OmniPCX Enterprise PBX, advanced telephony features (IVR, hunt groups, compliance recording), and compliance with national security certifications. Rainbow provides the telephony layer via Direct Routing to Teams, while Teams remains the collaboration platform for chat, documents, and video meetings. The deployment was completed in 14 months and achieved full regulatory compliance, zero telephony service disruption during migration, and a net positive user satisfaction score from employees who now use a single Teams interface for both collaboration and enterprise telephony.

---

## Organization Context

### About the Agency

The agency (referred to as "the Agency" for confidentiality) is a national regulatory body responsible for overseeing compliance in a critical economic sector. It employs 1,800 staff across four locations:

| Location | Function | Staff |
|---|---|---|
| **Headquarters** | Executive leadership, policy, legal | 650 |
| **Operations Center** | Inspections, investigations, case management | 520 |
| **Regional Office 1** | Field operations (northern region) | 340 |
| **Regional Office 2** | Field operations (southern region) | 290 |

The staff profile includes senior civil servants, investigators, legal counsel, IT professionals, and administrative support. Approximately 300 staff (inspectors and investigators) are mobile workers who spend 40-60% of their time in the field.

### Pre-Project Environment

- **PBX:** Alcatel-Lucent OmniPCX Enterprise (OXE) at HQ and Operations Center; two smaller Alcatel-Lucent OXO Connect systems at the regional offices
- **Collaboration:** Microsoft 365 E3 licenses deployed for all staff (Outlook, Word, Excel, SharePoint, OneDrive)
- **Microsoft Teams:** Rolled out for chat and video meetings as part of the M365 deployment; no telephony integration
- **Desk phones:** 1,200 Alcatel-Lucent IP Touch handsets across all sites
- **Mobile:** Agency-issued smartphones for 300 field inspectors (no integration with PBX)
- **Contact center:** A 25-seat citizen inquiry line managed via the OXE, handling 800+ calls per day

### The Trigger

The Agency's Microsoft 365 deployment was successful, and Teams adoption for collaboration was strong (78% monthly active users). The IT directorate proposed extending Teams to handle telephony by deploying Microsoft Teams Phone System with Calling Plans or Operator Connect. The objective was to simplify the technology stack by consolidating collaboration and telephony onto a single Microsoft platform.

A formal evaluation was launched. Rainbow was introduced by the Agency's existing Alcatel-Lucent partner, who proposed a coexistence model as an alternative to the Teams-only approach.

---

## Evaluation Process

### Evaluation Criteria

The Agency established a weighted evaluation framework:

| Criterion | Weight | Description |
|---|---|---|
| **Data Sovereignty** | 25% | Voice data must remain within national borders; no foreign government access |
| **Telephony Feature Depth** | 20% | IVR, hunt groups, ACD, compliance recording, boss-secretary, call park |
| **PBX Integration** | 15% | Ability to leverage existing OXE/OXO investment |
| **Security Certifications** | 15% | National and EU security certifications |
| **User Experience** | 10% | Minimal disruption; familiar interface; mobile integration |
| **Total Cost of Ownership** | 10% | 5-year TCO including migration, licensing, operations |
| **Vendor Viability** | 5% | Long-term viability and European presence |

### Evaluated Options

| Option | Description | Proposed By |
|---|---|---|
| **Option A: Teams Phone System** | Full Microsoft telephony with Calling Plans; PBX decommissioned | Microsoft + local partner |
| **Option B: Teams + Operator Connect** | Microsoft telephony with a local telecom operator for PSTN; PBX decommissioned | Local telecom operator |
| **Option C: Rainbow + Teams Coexistence** | Rainbow handles telephony via Direct Routing to Teams; PBX retained and overlaid | ALE partner |

---

## Why Teams Alone Fell Short

### 1. Data Sovereignty (Disqualifying for Options A and B)

The Agency operates under national security regulations that require:

- **Voice communication data** (call recordings, voicemail, CDRs) must be stored on national territory
- **No foreign government** may have legal jurisdiction over the Agency's communication data
- **The platform operator** must not be subject to extraterritorial data access laws (e.g., US CLOUD Act, FISA Section 702)

**Teams Phone System assessment:**

| Requirement | Teams Capability | Gap |
|---|---|---|
| Voice data on national territory | Microsoft data centers exist in-country, but data may traverse international nodes | Partial — routing not guaranteed to stay in-country |
| No foreign government jurisdiction | Microsoft Corporation is a US entity subject to the CLOUD Act | Failed — US government can compel data disclosure |
| Operator not subject to extraterritorial laws | Microsoft is subject to FISA, CLOUD Act, EO 12333 | Failed |

The Agency's Data Protection Officer and legal counsel concluded that Microsoft Teams Phone System could not satisfy the sovereignty requirements, regardless of where the data center was physically located, because Microsoft as a US entity remains subject to US extraterritorial data access mechanisms.

**Rainbow assessment:**

| Requirement | Rainbow Capability | Status |
|---|---|---|
| Voice data on national territory | Rainbow Edge — all media and recordings on-premises | Passed |
| No foreign government jurisdiction | ALE is incorporated in France; not subject to US law | Passed |
| Operator not subject to extraterritorial laws | ALE operates under French/EU law exclusively | Passed |

### 2. PBX Integration (Significant Gap for Options A and B)

The Agency had invested EUR 1.2 million in its OXE PBX infrastructure over the past decade. The system supported:

- 1,200 desk phones with abbreviated dialing and shared line appearances
- A 25-seat citizen inquiry contact center with IVR, ACD, and queue management
- Boss-secretary filtering for 40 executive offices
- Call recording for all calls to/from the investigation department (regulatory requirement)
- Integration with the physical security system (intercoms, door access)

**Teams assessment:** Teams Phone System would require decommissioning the entire PBX. The IVR would need to be rebuilt in Microsoft Auto Attendant (limited to 3 levels, no database lookup), the ACD would require Microsoft Queues (limited reporting, no wallboard), and call recording would require a third-party certified solution (additional cost). The physical security integration would need a separate SIP gateway.

**Rainbow assessment:** Rainbow overlays the existing OXE natively. All IVR, ACD, boss-secretary, recording, and physical security integrations continue to work unchanged. The only addition is the Rainbow PBX agent, which connects the OXE to the Rainbow cloud.

### 3. Advanced Telephony Features (Functional Gaps for Options A and B)

| Feature | Teams Phone System | Rainbow |
|---|---|---|
| Multi-level IVR (5+ levels) | Not natively (Auto Attendant: 3 levels) | Yes — OXE IVR retained |
| ACD with skills-based routing | Limited (Teams Queues) | Yes — OXE ACD retained |
| Compliance call recording | Third-party required (additional cost) | Native — Rainbow recording |
| Boss-secretary filtering | Not supported | Yes — OXE feature retained |
| Call park and pickup groups | Limited | Yes |
| Shared line appearances | Limited (delegated lines) | Yes — OXE shared lines retained |
| Analog device support (intercoms) | Not supported | Yes — via OXE analog ports |
| Wallboard / real-time queue display | Third-party required | Yes — Rainbow analytics |

### 4. Security Certifications (Gap for Options A and B)

| Certification | Required by Agency | Teams | Rainbow |
|---|---|---|---|
| National security certification (equivalent to ANSSI CSPN) | Yes | No | Yes (ANSSI CSPN) |
| ISO 27001 | Yes | Yes | Yes |
| National security framework (equivalent to ENS) | Recommended | No | Yes (ENS) |
| GDPR compliance with EU-only data processing | Yes | Partial (US entity) | Yes (EU entity) |

---

## Rainbow Solution Architecture

### Architecture Overview

```
+------------------+     +------------------+
|   Headquarters   |     | Operations Ctr   |
|                  |     |                  |
| [Rainbow Edge]   |     | [Rainbow Agent]  |
| [OXE PBX]       |     | [OXE PBX]       |
| [Contact Center] |     |                  |
| [Call Recording] |     |                  |
+--------+---------+     +--------+---------+
         |                         |
         +------------+------------+
                      |
              [Agency WAN / MPLS]
                      |
         +------------+------------+
         |                         |
+--------+---------+     +--------+---------+
| Regional Off. 1  |     | Regional Off. 2  |
|                  |     |                  |
| [Rainbow Agent]  |     | [Rainbow Agent]  |
| [OXO Connect]    |     | [OXO Connect]    |
+------------------+     +------------------+
                      |
         +------------+------------+
         |                         |
  [Rainbow Cloud]        [Microsoft 365 Cloud]
  (EU - France)          (EU data center)
  - Presence             - Teams chat
  - Directory            - SharePoint
  - Licensing            - OneDrive
  - Admin Portal         - Outlook
         |                         |
         +------- Direct Routing --+
         (SBC: Rainbow <-> Teams)
```

### How Direct Routing Works

1. **Incoming call** to the Agency's main number arrives at the OXE PBX
2. The OXE routes the call according to its dial plan (IVR, hunt group, direct extension)
3. If the destination user has Teams as their preferred endpoint, the OXE sends the call via the Rainbow PBX agent to the Rainbow SBC
4. The Rainbow SBC routes the call to Microsoft Teams via Direct Routing
5. The call rings in the user's Teams client (desktop, mobile, or web)
6. The user answers in Teams — from their perspective, it is a normal Teams call
7. Call recording, CDR logging, and compliance features are handled by Rainbow/OXE, regardless of which endpoint answered

### What Each Platform Does

| Function | Platform | Rationale |
|---|---|---|
| Chat, messaging, channels | Microsoft Teams | Already adopted; strong collaboration |
| Document collaboration | Microsoft 365 | SharePoint, OneDrive, co-authoring |
| Video meetings | Microsoft Teams | Calendar integration, guest access |
| Voice telephony (make/receive calls) | Rainbow (delivered in Teams via Direct Routing) | Sovereignty, PBX integration, features |
| IVR, ACD, contact center | Rainbow + OXE | Cannot be replicated in Teams |
| Call recording (compliance) | Rainbow | Regulatory requirement; native capability |
| Presence | Synchronized (Rainbow <-> Teams) | Users see one consistent status |
| Directory | Synchronized (AD -> Rainbow -> Teams) | Single source of truth |
| Administration | Rainbow Admin Portal + M365 Admin | Telephony in Rainbow; collaboration in M365 |

---

## Deployment

### Timeline

| Phase | Duration | Activities |
|---|---|---|
| **Phase 1: Design and Compliance** | Months 1-3 | Architecture validation with national security authority; DPO sign-off; procurement |
| **Phase 2: Infrastructure** | Months 4-5 | Rainbow Edge deployment at HQ; PBX agent installation; Direct Routing configuration with Teams tenant; SBC testing |
| **Phase 3: Pilot** | Months 6-7 | 100-user pilot at HQ (IT and legal departments); telephony in Teams validated; call quality testing |
| **Phase 4: HQ and Operations** | Months 8-10 | Full rollout to 1,170 staff at HQ and Operations Center; contact center migration to Rainbow analytics |
| **Phase 5: Regional Offices** | Months 11-12 | Rollout to 630 staff at regional offices; OXO Connect overlay |
| **Phase 6: Mobile Workers** | Months 13-14 | Inspector smartphone integration; Rainbow mobile app deployment for 300 field staff |

### Migration Approach: Zero Disruption

The most critical requirement was zero telephony service disruption. The Agency's citizen inquiry line (800+ calls/day) could not tolerate downtime.

**Approach:**
1. Rainbow was deployed in parallel with the existing PBX environment (overlay, not replacement)
2. Users were migrated in batches of 50-100, with a 48-hour observation period between batches
3. The citizen inquiry line remained on the OXE throughout the migration — Rainbow was added as an overlay for analytics and recording, but the core ACD routing was unchanged
4. A rollback plan was maintained for each batch — if issues arose, users could be reverted to PBX-only mode within 15 minutes
5. No rollback was needed. All 1,800 users were migrated without a single service interruption.

---

## Outcome

### Compliance and Security

| Requirement | Status |
|---|---|
| National security certification | Satisfied — ANSSI CSPN certified |
| Data sovereignty | Satisfied — all voice data on-premises via Edge |
| CLOUD Act exposure | Eliminated — ALE is a French/EU entity |
| Call recording compliance | Satisfied — native Rainbow recording |
| Security audit (national authority) | Passed — no findings |
| GDPR compliance | Satisfied — EU-only data processing, DPA in place |

### Telephony Feature Retention

| Feature | Status | Notes |
|---|---|---|
| Multi-level IVR | Retained | OXE IVR unchanged; citizens experience no difference |
| 25-seat contact center | Retained + enhanced | Rainbow analytics added for queue visibility |
| Boss-secretary filtering | Retained | 40 executive setups unchanged |
| Compliance recording | Retained + enhanced | Rainbow recording with search and playback |
| Shared line appearances | Retained | OXE shared lines unchanged |
| Physical security integration | Retained | Intercoms and door access unchanged |
| Call park and pickup | Retained | Works across Rainbow and Teams endpoints |

### User Experience

| Metric | Value |
|---|---|
| Users receiving calls in Teams | 1,500 (83%) — remainder prefer desk phone |
| Users making calls from Teams | 1,350 (75%) |
| Users who kept desk phone as well | 650 (36%) — mostly contact center and executives |
| User satisfaction survey (n=800) | 4.1 / 5.0 |
| Top positive feedback | "I can do everything in Teams now" (68% of respondents) |
| Top concern | "Call quality on VPN is sometimes lower" (12%) — addressed with split tunneling |

### User Satisfaction Details

| Survey Question | Score (1-5) |
|---|---|
| "The transition was smooth" | 4.3 |
| "I can make and receive calls easily" | 4.2 |
| "I prefer this to the old desk phone" | 3.8 |
| "I understand how to transfer calls" | 3.9 |
| "The system is reliable" | 4.4 |
| "I would not want to go back to the old system" | 4.5 |

### Operational Metrics (First 12 Months)

| Metric | Value |
|---|---|
| Total calls handled via Rainbow | 624,000 |
| Citizen inquiry calls (contact center) | 208,000 |
| Platform uptime | 99.97% |
| Call quality (average MOS) | 4.21 |
| Calls recorded (compliance) | 156,000 |
| PBX agent availability | 99.99% |
| Direct Routing availability | 99.95% |

---

## Financial Comparison

### 5-Year TCO Comparison

| Cost Category | Teams-Only (Option A) | Rainbow + Teams (Option C) |
|---|---|---|
| Microsoft 365 E3 licenses | EUR 1,620,000 | EUR 1,620,000 |
| Teams Phone System licenses | EUR 432,000 | EUR 0 (not needed) |
| Microsoft Calling Plans | EUR 648,000 | EUR 0 (SIP trunks via OXE) |
| Rainbow Enterprise licenses | EUR 0 | EUR 810,000 |
| Rainbow Edge hardware | EUR 0 | EUR 36,000 |
| Third-party call recording | EUR 270,000 | EUR 0 (native) |
| Third-party contact center | EUR 450,000 | EUR 0 (OXE retained) |
| PBX decommission project | EUR 380,000 | EUR 0 (PBX retained) |
| SIP gateway for analog devices | EUR 45,000 | EUR 0 (OXE handles analog) |
| New IP phones (desk replacement) | EUR 180,000 | EUR 0 (existing phones retained) |
| Professional services | EUR 220,000 | EUR 165,000 |
| Ongoing SIP trunk costs | EUR 0 | EUR 180,000 |
| **5-Year Total** | **EUR 4,245,000** | **EUR 2,811,000** |
| **5-Year Savings** | — | **EUR 1,434,000 (34%)** |

### Key Financial Insight

The Rainbow + Teams coexistence model was EUR 1.4 million less expensive over 5 years than the Teams-only approach. The primary savings came from:

1. **No Teams Phone System or Calling Plan licenses** — Rainbow provides telephony, so these Microsoft add-on licenses are not needed
2. **No third-party recording or contact center solutions** — Rainbow and the retained OXE provide these natively
3. **No PBX decommission project** — the OXE is retained and overlaid, avoiding a complex and risky migration
4. **No new hardware** — existing phones and infrastructure continue to operate

---

## Competitive Dynamics

### How Microsoft Responded

Microsoft's partner proposed several counter-arguments during the evaluation:

| Microsoft Argument | Agency's Assessment |
|---|---|
| "Teams is a single platform — simpler to manage" | True for collaboration, but telephony requires specialized features Teams does not have. Two platforms (each best-at-purpose) is simpler than one platform plus three third-party add-ons. |
| "Microsoft is investing heavily in Teams telephony" | Investment acknowledged, but current capabilities are insufficient. The Agency cannot wait 2-3 years for features it needs today. |
| "Data residency is available in-country" | Physical data center location does not resolve the CLOUD Act jurisdictional issue. The Agency's legal counsel was definitive on this point. |
| "Operator Connect solves the carrier issue" | Operator Connect addresses PSTN connectivity but does not address data sovereignty, PBX integration, or advanced telephony features. |
| "We can provide a compliance recording partner" | Adding a third-party recording vendor increases cost, complexity, and the data processing surface area. Rainbow provides it natively. |

### How the ALE Partner Won

The ALE partner's winning strategy had four pillars:

1. **Led with sovereignty, not features:** The data sovereignty argument was the most compelling and the hardest for Microsoft to counter. The partner engaged the Agency's DPO and legal counsel early and provided a detailed legal analysis of CLOUD Act implications.

2. **Positioned as "Teams AND Rainbow," not "Teams OR Rainbow":** By framing Rainbow as a complement to Teams rather than a competitor, the partner neutralized the "we are already committed to Microsoft" objection. Users keep Teams for everything they love about it.

3. **Demonstrated zero disruption migration:** The overlay approach with zero downtime was a strong contrast to the Teams-only option, which required a complex PBX decommission project with inherent risk.

4. **Quantified the TCO gap:** The EUR 1.4 million 5-year savings was a decisive factor for the procurement committee. The savings were primarily driven by avoided Microsoft add-on licenses and avoided third-party solutions.

---

## Lessons Learned

### What Worked Well

1. **Engaging legal and compliance stakeholders first** transformed the conversation from a technology comparison to a regulatory compliance decision. Once the DPO and legal counsel confirmed that Teams Phone System could not satisfy sovereignty requirements, the evaluation's direction was clear.

2. **The coexistence narrative resonated** with IT leadership, who were concerned about appearing anti-Microsoft. By positioning Rainbow as a Teams enhancement, the IT director could present the recommendation as "making Teams better" rather than "rejecting Microsoft."

3. **A working Direct Routing demo** during the evaluation was pivotal. The evaluation committee could see that users make and receive calls in Teams with no visible difference. The "invisible telephony engine" concept made the two-platform architecture palatable.

4. **The PBX overlay eliminated the biggest project risk** — a failed telephony migration. The evaluation committee had heard industry horror stories about botched PBX-to-cloud migrations and strongly preferred the incremental overlay approach.

5. **Including the 5-year TCO comparison** with specific line items (not just a total) allowed the procurement team to verify each number. Transparency built trust.

### What Could Be Improved

1. **Mobile VPN split tunneling** should have been configured before the field inspector rollout. Several inspectors experienced poor call quality when connected via the Agency's full-tunnel VPN. This was resolved with a split-tunnel policy for Rainbow media traffic, but it caused 3 weeks of complaints.

2. **Training on call transfer mechanics** was insufficient in the initial rollout. Transferring a call in Teams (when the call actually routes through Rainbow/OXE) has slightly different behavior than a native Teams call. A dedicated 30-minute training session on call transfer and conference would have prevented confusion.

3. **Change management for the contact center team** needed more attention. The 25 agents on the citizen inquiry line were the most impacted users (their daily workflow changed the most), but they received the same training as general users. A dedicated change management stream for the contact center would have been more effective.

---

## Customer Quote

> "We needed a solution that respected our sovereignty obligations, preserved our telephony investment, and gave our 1,800 staff a modern communication experience. The Rainbow and Teams coexistence model delivered all three. Our staff use Teams every day and most of them do not even know that Rainbow is the engine behind their phone calls. That is exactly how it should be."
>
> — **Director of Information Systems, the Agency**

---

## Key Takeaways for Partners

1. **Government and public-sector accounts are the strongest competitive battleground against Teams.** Sovereignty, national certifications, and extraterritorial law concerns are structural advantages that Microsoft cannot easily resolve.

2. **Lead with legal and compliance, not technical features.** Engage the customer's DPO, legal counsel, and CISO early. Provide documented analysis of CLOUD Act, Schrems II, and national security framework requirements. These stakeholders have veto power over technology decisions.

3. **Always position coexistence, never replacement.** Government IT teams have already invested in Microsoft 365 and will not abandon it. The message is: "Keep Teams. Add Rainbow for telephony." This eliminates the perception of switching cost.

4. **Build the TCO model with specific line items.** Government procurement teams verify every number. A transparent, detailed 5-year TCO comparison — showing exactly which Microsoft licenses are no longer needed and which third-party solutions are avoided — is far more persuasive than a high-level summary.

5. **Demand a proof of concept with Direct Routing.** The most powerful moment in any government evaluation is when the committee sees a call ring in Teams, answers it, and learns that the call went through Rainbow and the existing PBX. That demonstration converts skeptics into advocates.

6. **The PBX overlay is the risk mitigator.** Government agencies are risk-averse by nature. The ability to migrate incrementally — with a rollback plan at every stage — is often more important than any individual feature.

---

*This case study is based on a composite of real Rainbow deployments in European government agencies. Details have been adjusted to protect institutional confidentiality and national security sensitivities. Partners may use this case study in pre-sales conversations with government and public-sector prospects, with appropriate attribution to ALE.*
