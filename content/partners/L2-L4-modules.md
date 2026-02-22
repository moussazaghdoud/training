# Partner Track — L2, L3, L4 Module Content Outlines

> Rainbow Training Academy | Partner/Reseller Track | Practitioner through Champion Levels

---

## LEVEL 2: PRACTITIONER (6 hours total)

---

### PTR-201: PBX Overlay: The Modernization Story

| Field | Value |
|---|---|
| **Module ID** | PTR-201 |
| **Title** | PBX Overlay: The Modernization Story |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | VID + DEM + CAS |
| **Prerequisites** | PTR-102 (Market & Competition) |

#### Detailed Content Outline

**1. OXO Connect Overlay Demo Flow**
- Target customer: SMB with 20-300 employees running OXO Connect R3.0 or later; existing desk phones, existing ISDN or SIP trunks
- Demo narrative: "You have invested in an OXO Connect system that handles telephony perfectly. Rainbow does not replace it — Rainbow extends it with cloud collaboration, mobile softphone, video conferencing, and AI features."
- Demo steps: (1) Show a desk phone ringing simultaneously with the Rainbow mobile client, (2) answer on the mobile client — call quality matches the desk phone, (3) during the call, add a colleague from the Rainbow directory and escalate to a 3-way conference, (4) share a document via Bubble during the call, (5) after the call, show the call log in both the OXO admin and the Rainbow admin
- Technical prerequisites: OXO Connect R3.0+, SIP trunk between OXO and Rainbow gateway, internet bandwidth (1 Mbps per concurrent softphone call), Rainbow Business or Enterprise licenses
- Business talking points: no rip-and-replace, no desk phone retraining, no PSTN number changes; cloud features added in days, not months

**2. OmniPCX Enterprise (OXE) Overlay Demo Flow**
- Target customer: mid-market to enterprise with 300-10,000+ employees; running OXE R12.x or later; multi-site with centralized telephony
- Demo narrative: "Your OmniPCX Enterprise has decades of investment, custom call routing, and deep integration with your business. Rainbow sits on top and adds the cloud collaboration layer your users are asking for."
- Demo steps: (1) Show unified directory: Rainbow pulls the OXE directory via LDAP so users see all colleagues with real-time presence, (2) click-to-call a colleague — the call routes through OXE (maintaining CDR and compliance recording), (3) transfer the call to another extension using Rainbow's visual call control, (4) show conference scheduling with Outlook integration, (5) demonstrate screen sharing and AI transcription during the conference
- Technical architecture: Rainbow connects to OXE via the PCX-to-Rainbow gateway; signaling via SIP, media via SRTP; CTI link provides call control (hold, transfer, conference) from the Rainbow client
- Multi-site benefit: Rainbow provides a unified directory and presence across all OXE-connected sites; users at Site A can see the availability of users at Site B and call them with one click

**3. Third-Party PBX Overlay via CTI/Media Bridge**
- Target customer: organizations running non-ALE PBX systems (Avaya, Cisco, Mitel, Unify) that want cloud collaboration without replacing their telephony
- Integration method: Rainbow CTI/Media Bridge provides a SIP trunk connection and CTI interface to third-party PBX systems; call control (make, answer, hold, transfer) is available from the Rainbow client
- Limitations vs. ALE PBX overlay: some advanced features (hunt group management from Rainbow, visual voicemail) may not be available depending on the third-party PBX CTI capabilities
- Demo approach: focus on the collaboration features (messaging, conferencing, AI) and position telephony integration as a value-add rather than the primary story
- Competitive advantage: "Other cloud platforms require you to abandon your existing PBX. Rainbow is the only platform that can sit on top of any PBX — ALE or not — and add cloud collaboration without disruption."

**4. Business Case Talking Points**
- Investment protection: "Your PBX system has 5-10 years of useful life remaining. Rainbow overlays add $0 to your telephony depreciation — all new investment goes to new capabilities."
- Gradual migration: "Start with Rainbow overlay today. Over 2-3 years, gradually migrate telephony to Rainbow Cloud at your own pace. No big-bang migration, no weekend cutovers."
- Employee experience: "Your employees are using consumer apps (WhatsApp, Zoom) because the PBX does not offer messaging or video. Rainbow fills that gap within your corporate security perimeter."
- Competitive displacement defense: "If you do not offer cloud collaboration, your customer will look to Microsoft Teams or Zoom. Rainbow lets you modernize your ALE telephony investment and keep the customer."

**5. Migration Path Narrative**
- Phase 1 (Month 1-3): Deploy Rainbow overlay; all users get messaging, presence, and mobile softphone
- Phase 2 (Month 4-12): Activate conferencing, AI features, and CRM connectors; begin user training
- Phase 3 (Year 2): Evaluate which telephony features can migrate to Rainbow Cloud; port PSTN numbers to SIP trunking via Rainbow
- Phase 4 (Year 3+): Decommission the PBX for sites that have fully migrated; maintain PBX only at sites with specialized requirements (e.g., hotel guest room telephony)
- Partner revenue: each phase generates partner services revenue (deployment, training, integration, managed services)

#### Case Study (CAS)

**Scenario**: A partner is responding to an RFP from "Marseille Port Authority" (800 employees across 5 port facilities). They currently run an aging Avaya IP Office PBX system. The RFP asks for "a modern unified communications solution that preserves our existing telephony investment and adds video conferencing, mobile collaboration, and data sovereignty."

**Analysis Tasks**:
1. Position the Rainbow CTI/Media Bridge overlay for the Avaya IP Office.
2. Highlight data sovereignty: all data in EU data centers, Edge deployment option for maximum control.
3. Build the 3-year migration narrative: Year 1 overlay, Year 2 conferencing/AI, Year 3 evaluate PBX migration.
4. Calculate the partner revenue opportunity: license resale, deployment services, user training, annual managed services.

#### Key Takeaways
- The PBX overlay story is the partner's most powerful selling tool: it removes the biggest objection ("we do not want to replace our PBX") from the conversation
- Always demo the simultaneous ring (desk phone + Rainbow mobile client) — it is the most visceral proof that the overlay works
- Third-party PBX overlay via CTI/Media Bridge opens the addressable market beyond the ALE install base
- The migration path narrative generates recurring partner revenue across multiple years of engagement

---

### PTR-202: Deployment Models: Sizing & Recommending

| Field | Value |
|---|---|
| **Module ID** | PTR-202 |
| **Title** | Deployment Models: Sizing & Recommending |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + REF |
| **Prerequisites** | PTR-102 (Market & Competition) |

#### Detailed Content Outline

**1. Sizing Calculator Walkthrough**
- The Rainbow Sizing Calculator is a partner tool (available on the ALE partner portal) that generates deployment specifications based on customer inputs
- Inputs: number of users, concurrent call percentage (typical: 10-15% of users), conferencing usage (meetings per day, average participants), deployment model (public cloud, Edge, hybrid), sites count and locations
- Outputs: bandwidth requirements per site, server specifications (for Edge), license count by tier, estimated monthly cost, implementation timeline
- Example: 500 users, 12% concurrent calls (60 simultaneous calls), 10 conferences/day averaging 15 participants, 3 sites = recommended 100 Mbps symmetric per site, total bandwidth 300 Mbps, Enterprise tier for 100 users, Business tier for 400 users

**2. Bandwidth Planning**
- Per-user bandwidth: audio call = 100 kbps, video call (720p) = 1.5 Mbps, screen sharing = 2 Mbps, messaging/presence = 50 kbps
- Site calculation: (concurrent audio calls x 100 kbps) + (concurrent video calls x 1.5 Mbps) + (concurrent screen shares x 2 Mbps) + (total active users x 50 kbps) + 30% overhead
- Example: site with 200 users, 10% concurrent audio calls (20 x 100 kbps = 2 Mbps), 5% concurrent video calls (10 x 1.5 Mbps = 15 Mbps), 2 concurrent screen shares (2 x 2 Mbps = 4 Mbps), messaging overhead (200 x 50 kbps = 10 Mbps) + 30% = approximately 40 Mbps
- QoS requirements: DSCP marking for audio (EF/46) and video (AF41/34); network switches must be configured to honor these markings; recommend a dedicated VLAN for voice/video traffic at sites with >100 users
- Failover: recommend redundant internet links at sites with >200 users; if the primary link fails, Rainbow traffic should automatically route via the secondary link

**3. Server Requirements for Rainbow Edge**
- Minimum Edge deployment: 3 application servers (8 vCPU, 32 GB RAM, 500 GB SSD each), 1 media server (8 vCPU, 16 GB RAM), 1 database server (8 vCPU, 64 GB RAM, 1 TB SSD), 1 file storage server (4 vCPU, 16 GB RAM, 2 TB HDD)
- Scaling: add application servers for every additional 1,000 users; add media servers for every additional 100 concurrent calls
- High availability: for HA, double all servers and add a load balancer; minimum HA deployment = 6 application servers + 2 media servers + 2 database servers (active/passive)
- Virtualization: Edge supports VMware ESXi 7.0+, Microsoft Hyper-V, and KVM; containerized deployment (Docker/Kubernetes) is available for advanced partners
- Network: internal network between Edge components requires 10 Gbps; external connectivity requires at least 100 Mbps per 500 users

**4. Decision Criteria Matrix**
- Public cloud: choose when the customer has no data sovereignty requirements, wants the fastest deployment, and does not have dedicated IT infrastructure resources
- Edge: choose when the customer requires full on-premises data confinement, has dedicated IT infrastructure and staff, and operates in a regulated industry (government, defense, healthcare)
- Hybrid: choose when the customer has an existing PBX, wants cloud collaboration features, but needs to keep telephony on-premises for regulatory or investment protection reasons
- Decision tree: (1) Does the customer have data sovereignty requirements that prohibit public cloud? If yes > Edge. If no > (2) Does the customer have an existing PBX they want to preserve? If yes > Hybrid. If no > Public Cloud.
- Edge vs. partner-hosted Edge: if the customer wants Edge but lacks IT resources, the partner can host the Edge deployment in their own data center and offer it as a managed service (higher margin for the partner)

**5. Implementation Timeline by Model**
- Public cloud: 2-4 weeks from contract to go-live (user provisioning + training)
- Hybrid (PBX overlay): 4-8 weeks (PBX configuration + gateway setup + user provisioning + training)
- Edge: 8-16 weeks (infrastructure procurement + server installation + software deployment + configuration + testing + user provisioning + training)
- Partner-hosted Edge: 6-12 weeks (leverages existing partner infrastructure)

#### Lab Description (LAB)

**Setup**: The learner accesses the Rainbow Sizing Calculator with three customer scenarios to size.

**Steps**:
1. Scenario A: 100-user law firm, full cloud, no PBX. Size the deployment and recommend licensing.
2. Scenario B: 2,000-user government ministry, Edge deployment, 5 sites, existing OXE PBX. Size the infrastructure and bandwidth.
3. Scenario C: 500-user hospital, hybrid deployment, HDS compliance, 2 sites. Size the deployment and identify the HDS-specific requirements.
4. For each scenario, generate a one-page summary with: recommended deployment model, license mix, bandwidth per site, server specifications (if Edge), timeline, and estimated cost.

**Expected Outcome**: Learner can use the Sizing Calculator to produce accurate deployment specifications for any customer scenario.

#### Key Takeaways
- The Sizing Calculator is the partner's primary tool for pre-sales technical qualification; always use it rather than estimating manually
- Bandwidth planning must account for concurrent usage peaks (typically 10-15% of users), not just total user count
- Edge deployments require significant infrastructure planning; allow 8-16 weeks and ensure the customer has dedicated IT resources
- Partner-hosted Edge is a high-margin managed services opportunity for partners with their own data center

---

### PTR-203: Admin Portal & Provisioning Mastery

| Field | Value |
|---|---|
| **Module ID** | PTR-203 |
| **Title** | Admin Portal & Provisioning Mastery |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | INT + LAB + QIZ |
| **Prerequisites** | PTR-103 (Commercial Framework) |

#### Detailed Content Outline

**1. Bulk CSV Import**
- CSV template: download from Admin > Users > Import > Download Template; required columns: email, firstName, lastName, companyId, subscriptionTier; optional: phoneNumber, department, site, language
- Validation rules: email must be unique across the platform, companyId must match an existing company, subscriptionTier must be one of (essential, business, enterprise, connect, hub)
- Error handling: the import process validates all rows before processing; errors are reported per row with error codes (DUPLICATE_EMAIL, INVALID_TIER, MISSING_REQUIRED_FIELD); fix errors and re-upload only the failed rows
- Performance: CSV import processes approximately 100 users per minute; for 1,000+ user imports, schedule during off-peak hours
- Post-import verification: check Admin > Users > filter by "Created Date = today" to verify all users were created correctly

**2. Rainbow CLI Provisioning Commands**
- CLI installation: `npm install -g rainbow-cli` (requires Node.js 16+)
- Authentication: `rbw login --email admin@company.com --password ***` or `rbw login --token <API_token>` for automation scripts
- Key commands: `rbw user create --email --firstName --lastName --tier`, `rbw user list --company <companyId> --format json`, `rbw user update --email --tier enterprise`, `rbw user delete --email`
- Batch operations: `rbw user import --file users.csv` (same CSV format as portal import), `rbw user export --company <companyId> --output users.csv`
- Automation: CLI commands can be scripted in bash/PowerShell for scheduled provisioning (e.g., nightly sync with HR system: export new hires from HR > generate CSV > `rbw user import`)

**3. Multi-Site Setup**
- Site creation: Admin > Company > Sites > Add Site; each site has a name, address, time zone, and optional PBX configuration
- Site assignment: users are assigned to sites during provisioning; site assignment determines their business hours calendar, PBX registration, and local TURN server
- Inter-site communication: all users across sites share the same company directory; calls between sites route through the Rainbow cloud (or via SIP trunks if PBX-to-PBX)
- Site-level administration: a "Site Admin" role allows local administrators to manage users at their site without access to other sites; this is important for multi-site deployments with distributed IT teams
- Common issue: when a new site is created but the PBX configuration is missing, users at that site cannot make telephony calls; always configure the PBX connection as part of site setup

**4. Directory Federation**
- LDAP/AD synchronization: Admin > Directory > LDAP Sync; configure the LDAP server URL, bind DN, search base, and attribute mapping
- Microsoft 365 directory sync: Admin > Directory > M365 Sync; requires OAuth consent from a Global Admin; syncs users, groups, and calendar data
- Google Workspace sync: Admin > Directory > Google Sync; requires domain-wide delegation; syncs users and calendar data
- Conflict resolution: when a user exists in both the local Rainbow directory and the synchronized directory, Rainbow uses the local entry as authoritative for attributes that differ; the sync does not overwrite local changes
- Monitoring: Admin > Directory > Sync Status shows last sync time, sync duration, records synchronized, and any errors

**5. Partner Provisioning Best Practices**
- Template library: maintain pre-built CSV templates for common deployment patterns (50-user SMB, 200-user mid-market, 1000-user enterprise)
- Naming conventions: use consistent naming for companies (include the customer name and country), sites (city + building), and admin accounts (admin@customername.onrainbow.com)
- Documentation: create a deployment runbook for each customer that documents the provisioning steps taken, configurations applied, and credentials created
- Handoff: after provisioning, conduct a handoff session with the customer's IT admin demonstrating the admin portal, user management, and directory sync — this reduces post-deployment support burden on the partner

#### Lab Description (LAB)

**Setup**: Sandbox environment with a blank company "DemoTech Solutions" that needs to be set up from scratch.

**Steps**:
1. Create 3 sites: "Munich HQ" (time zone CET), "London Office" (time zone GMT), "Singapore Branch" (time zone SGT).
2. Import 50 users via CSV (provided): 30 to Munich, 15 to London, 5 to Singapore; assign tier mix: 40 Business + 10 Enterprise.
3. Configure LDAP sync pointing to the provided test LDAP server; run the first sync and verify 50 additional users are imported.
4. Use the Rainbow CLI to upgrade 5 specific users from Business to Enterprise tier.
5. Create a "Site Admin" account for each site and verify they can only manage users at their assigned site.

**Expected Outcome**: Learner can perform a complete multi-site deployment including bulk provisioning, directory sync, CLI operations, and role-based administration.

#### Key Takeaways
- Bulk CSV import is the fastest way to provision large user populations; always validate the CSV before uploading
- The Rainbow CLI enables automation of provisioning tasks; use it for recurring operations (nightly HR sync, batch tier changes)
- Multi-site deployments require PBX configuration per site; missing PBX config is the top cause of "users cannot make calls" post-deployment
- Directory federation keeps the Rainbow directory in sync with the customer's existing identity source; monitor sync status as part of ongoing maintenance

---

### PTR-204: Connector Ecosystem: Demo & Sell

| Field | Value |
|---|---|
| **Module ID** | PTR-204 |
| **Title** | Connector Ecosystem: Demo & Sell |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | DEM + SCN + REF |
| **Prerequisites** | PTR-102 (Market & Competition) |

#### Detailed Content Outline

**1. CRM Connector Demo Scripts**
- Salesforce: "Your sales team logs calls manually. With Rainbow's Salesforce connector, every call is auto-logged with duration and notes. Click-to-call from any contact record. Real-time presence shows who is available before you transfer."
- ServiceNow: "Your ITSM team juggles between ServiceNow and the phone system. Rainbow embeds telephony directly in ServiceNow — click-to-call from incidents, auto-create work notes from calls, presence-aware escalation."
- Microsoft Dynamics: "Your customer service team searches for customer records before each call. Rainbow's screen pop opens the Dynamics record instantly when the phone rings — 45 seconds saved per call, 150 calls per day."
- Zendesk: "Your support agents toggle between Zendesk and the phone. Rainbow's Zendesk connector puts the softphone right inside Zendesk — incoming calls auto-create tickets, outbound calls are one-click from any ticket."

**2. Teams Connector Demo Script**
- Positioning: "Your customer has Microsoft 365 and uses Teams for chat. But they need enterprise telephony — PSTN calling, IVR, call recording. Rainbow provides the telephony backbone via Direct Routing."
- Demo: (1) Show a Teams user making a PSTN call routed through Rainbow, (2) show the call appearing in Rainbow's call analytics, (3) show presence sync between Teams and Rainbow, (4) show an external guest joining a Rainbow Bubble to collaborate with the Teams user
- Sales angle: "Microsoft Calling Plans cost $8-12/user/month and require porting numbers to Microsoft. Rainbow Direct Routing uses the customer's existing SIP trunks and PBX numbers — no porting, no Microsoft dependency for telephony."

**3. M365 and Google Workspace Integration Demo**
- Calendar integration: "Rainbow reads the user's calendar and automatically sets presence to 'In Meeting' during appointments. No manual status changes needed."
- Contact sync: "The user's Outlook or Google contacts appear in the Rainbow directory, merged with the corporate directory. One search, all contacts."
- File sharing: "Files shared in Rainbow Bubbles can be stored in OneDrive or Google Drive, maintaining the customer's file governance policies."

**4. Per-Connector Revenue Opportunity**
- License uplift: CRM connectors require Rainbow Connect or Enterprise tier; upgrading users from Business to Enterprise/Connect generates additional recurring revenue
- Deployment services: each connector requires configuration on both the Rainbow side and the CRM side; partner deployment services (8-16 hours per connector) at professional services rates
- Training: connector-specific user training (2-4 hours per connector) ensures adoption and reduces support burden
- Managed services: ongoing connector monitoring and troubleshooting as a monthly managed service (recurring revenue)
- Per-customer revenue model: 200-user Salesforce connector deployment = license upgrade + deployment + training = approximately $15,000 first-year partner revenue + $8,000/year recurring

**5. Objection Handling for Connector Sales**
- "We already have a CTI solution": "How well does it integrate with your PBX? Rainbow provides unified call control across your PBX, mobile softphone, and CRM — one platform instead of three."
- "Our CRM vendor has built-in telephony": "CRM-native telephony is typically basic (click-to-call only). Rainbow adds full PBX integration, call recording, IVR, hunt groups, and cross-CRM unified presence."
- "It is too expensive to add another integration": "The ROI calculation shows payback in 2-3 months from time savings alone. Let me walk you through the numbers for your team size."

#### Scenario Description (SCN)

**Setup**: The partner is presenting to "Atlas Insurance" (300 employees, 80 sales reps using Salesforce, 40 claims agents using ServiceNow). The IT Director asks: "Can Rainbow really replace our existing telephony AND integrate with both CRM platforms?"

**Steps**:
1. Demo the Salesforce connector for the sales workflow: click-to-call, auto-logging, screen pop.
2. Demo the ServiceNow connector for the claims workflow: incident-linked calls, presence-aware routing, work note automation.
3. Show that both connectors share the same Rainbow telephony infrastructure: one PBX overlay, one softphone, two CRM integrations.
4. Calculate the combined ROI: 80 sales reps x 15 min/day saved + 40 claims agents x 7 min/escalation saved = annual savings of $X.
5. Present the pricing: 120 Rainbow Connect licenses (for CRM users) + 180 Rainbow Business licenses (for other employees) + deployment services.

**Expected Outcome**: Learner can demo multiple connectors in a single presentation, calculate combined ROI, and structure a multi-connector deal.

#### Key Takeaways
- Each connector demo should follow the pattern: pain point, solution demo, ROI calculation, pricing
- Multi-connector deals are the highest-value partner opportunities; one Rainbow platform powering two or more CRM integrations is a compelling story
- Always calculate ROI in the customer's context (their team size, call volume, hourly cost); generic numbers are less persuasive
- Connector sales generate four revenue streams: license uplift, deployment services, training, and managed services

---

### PTR-205: Security & Compliance Selling

| Field | Value |
|---|---|
| **Module ID** | PTR-205 |
| **Title** | Security & Compliance Selling |
| **Level** | L2 Practitioner |
| **Duration** | 45 minutes |
| **Content Types** | VID + CAS + REF |
| **Prerequisites** | PTR-102 (Market & Competition) |

#### Detailed Content Outline

**1. The Security Certification Portfolio as Competitive Weapon**
- ISO 27001:2022 — annual independent audit; certificate available for customer procurement teams
- SOC 2 Type II — continuous 12-month monitoring; report shared under NDA during RFP processes
- HDS 1.1 — healthcare-specific; mandatory for French healthcare organizations; differentiator in healthcare vertical
- ANSSI CSPN — French government cybersecurity certification; mandatory for many French government contracts
- ENS — Spanish government security framework; mandatory for Spanish government contracts
- Competitive comparison: Microsoft Teams has ISO 27001 and SOC 2 but not HDS or ANSSI CSPN; Zoom has SOC 2 but not ISO 27001 or HDS; Rainbow has all five

**2. Data Sovereignty Selling Points**
- European headquarters: ALE is headquartered in France; Rainbow is subject to EU privacy regulations and NOT subject to the US CLOUD Act
- 22 data centers: the customer selects their data center region at deployment; all data is confined to that region
- No cross-border data transfer: unlike Microsoft (which may transfer data between US and EU data centers for processing), Rainbow guarantees data stays in the selected region
- Edge option: for maximum sovereignty, Rainbow Edge keeps all data on customer premises with zero cloud dependency
- Sales language: "When you select Rainbow, you are selecting a European communications platform with European data protection. Your data stays where you put it — guaranteed."

**3. RFP Security Section Responses**
- Most RFP security sections ask the same 50-100 questions; the Rainbow Security FAQ (trust.openrainbow.com) provides pre-written answers for the top 200 questions
- Time saver: instead of spending 20+ hours answering security questionnaires, use the Security FAQ to pre-fill 80% of the answers
- Custom responses: for questions not covered by the FAQ, route to the ALE security team via the partner portal; 5-7 business day turnaround
- Proactive approach: share the Security FAQ with the prospect's procurement team early in the sales cycle to prevent security from becoming a blocker at the decision stage

**4. Compliance as Deal Accelerator**
- Healthcare deals: "Rainbow is HDS-certified. Your compliance team will not need to conduct a separate security audit — our certification covers it."
- Government deals: "Rainbow holds ANSSI CSPN certification. This is a pre-qualification for French government procurement. You will not find this certification from any US-based competitor."
- Financial services: "Rainbow's call recording with tamper-evident hash verification meets MiFID II requirements. We can show you the compliance documentation."
- Education: "Rainbow's free Essential tier allows students to participate without cost, while the Enterprise tier for staff provides the security controls your institution requires."

**5. Building Security into the Sales Narrative**
- Early qualification: ask "What compliance certifications does your organization require for communication tools?" in the first discovery meeting; this identifies whether security is a differentiator or a hygiene factor
- Decision-maker mapping: the CISO or compliance officer is often an unspoken decision-maker; ensure they are included in the evaluation or that their requirements are addressed in the proposal
- Competitive trap: "Have you asked your other vendors for their ISO 27001 certificate, their data residency guarantee, and their CLOUD Act exposure statement? We can provide all three."

#### Key Takeaways
- Security certifications are not just compliance requirements; they are competitive weapons that win deals when positioned early in the sales cycle
- Data sovereignty (European HQ, no CLOUD Act exposure) is Rainbow's strongest security differentiator against US competitors
- The Security FAQ on trust.openrainbow.com pre-fills 80% of RFP security questions; use it to accelerate every deal
- Always qualify for compliance requirements in the first discovery meeting; late-stage security objections can kill deals

---

### PTR-206: Vertical Solution Selling

| Field | Value |
|---|---|
| **Module ID** | PTR-206 |
| **Title** | Vertical Solution Selling |
| **Level** | L2 Practitioner |
| **Duration** | 45 minutes |
| **Content Types** | VID + DEM + CAS |
| **Prerequisites** | PTR-102 (Market & Competition) |

#### Detailed Content Outline

**1. Hospitality: Rainbow Hospitality Solution Pitch**
- Pain point: hotels use walkie-talkies and pagers for staff coordination; these are unreliable, insecure, and cannot share images/files
- Solution: Rainbow messaging replaces walkie-talkies for housekeeping, maintenance, and management; PBX overlay preserves guest room telephony; conferencing enables multi-property management meetings
- ROI story: 12-minute reduction in room turnaround time per room; at 300 rooms and 85% occupancy, that is 51 hours saved per day
- Demo focus: group messaging with photo sharing (send a photo of a maintenance issue), presence-based task routing (assign to an available housekeeper)

**2. Healthcare: Rainbow Healthcare Solution Pitch**
- Pain point: clinical staff use personal phones and consumer apps for patient-related communication; this violates HIPAA/GDPR and creates data silos
- Solution: Rainbow provides secure, HDS-certified messaging for clinical teams; video conferencing for remote consultations; PBX overlay for existing hospital telephony
- Compliance hook: "Rainbow is HDS-certified. Using Rainbow, your clinical staff communicate on a platform that meets healthcare data hosting requirements — unlike WhatsApp or Telegram."
- Demo focus: secure messaging between doctor and nurse (message is encrypted, stored in HDS-certified environment), video consultation with a remote specialist

**3. Education: Rainbow Classroom Solution Pitch**
- Pain point: schools need virtual classroom tools but cannot afford per-student licensing; consumer tools (Zoom free) have security and privacy concerns
- Solution: Rainbow's free Essential tier allows unlimited student accounts; Enterprise tier for teachers enables conferencing, screen sharing, and recording
- Cost advantage: "For a school with 50 teachers and 1,000 students, only the 50 teachers need paid licenses. Students join for free."
- Demo focus: virtual classroom session (teacher shares screen, records the lecture, students participate via chat), file sharing for course materials

**4. Government: Rainbow Sovereign Solution Pitch**
- Pain point: government agencies need sovereign communications — no foreign vendor data access, no public cloud, full audit trail
- Solution: Rainbow Edge deployed on government infrastructure; ANSSI CSPN and ENS certified; all data stays on-premises
- Competitive elimination: "Show me another UCaaS platform that is ANSSI-certified and runs entirely on-premises with zero cloud dependency. Rainbow Edge is the only one."
- Demo focus: on-premises deployment architecture diagram, audit log demonstration, encryption configuration

**5. Tailoring the Pitch to Any Vertical**
- Framework: (1) Identify the vertical-specific pain point, (2) map Rainbow features to that pain point, (3) reference the relevant compliance certification, (4) quantify the ROI with vertical-specific metrics, (5) close with a customer reference or case study from the same vertical
- Discovery questions: "What communication tools does your staff currently use? Are you satisfied with the security posture? What would better communication look like for your organization?"
- Vertical reference library: maintain a library of anonymized case studies per vertical (hospitality, healthcare, education, government, transport, financial services)

#### Key Takeaways
- Vertical selling is about translating Rainbow's horizontal features into industry-specific language and ROI metrics
- The free Essential tier is a powerful cost differentiator in education and hospitality where many users need basic functionality only
- Healthcare and government verticals are compliance-first; lead with certifications before discussing features
- Always close a vertical pitch with a reference or case study from the same industry

---

## LEVEL 3: EXPERT (6 hours total)

---

### PTR-301: Advanced Telephony Design

| Field | Value |
|---|---|
| **Module ID** | PTR-301 |
| **Title** | Advanced Telephony Design |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + QIZ |
| **Prerequisites** | PTR-201 (PBX Overlay) |

#### Detailed Content Outline

**1. IVR Design for Customer Deployments**
- IVR best practices: maximum 3 menu levels, maximum 5 options per level, professional greeting recording, timeout handling (repeat menu after 5 seconds, route to operator after 2 timeouts)
- DTMF vs. speech recognition: DTMF is reliable and universally supported; speech recognition is available for Enterprise tier and adds a modern caller experience but requires more testing
- Multi-language IVR: create separate IVR flows per language and use a language selection menu at the first level ("Press 1 for English, appuyez sur 2 pour le francais")
- Seasonal routing: configure holiday calendars and special business hours for seasonal businesses (retail, hospitality)

**2. Call Routing Architecture**
- Routing types: Linear hunt (fixed order), Circular (round-robin), Simultaneous (ring all), Longest Idle, Skills-Based (route to agent with matching skill tag)
- Overflow design: primary group > wait queue (with music/announcements) > secondary group > voicemail > external overflow number
- Time-of-day routing: different routing during business hours, lunch hours, after hours, weekends, and holidays
- Geographic routing: route calls to the nearest site based on caller area code or DNIS; useful for multi-site organizations with local support teams

**3. CTI/Media Bridge Configuration**
- CTI link setup: configure the CTI connection between Rainbow and the PBX; protocol options: CSTA (for ALE PBX), TAPI (for Windows-based CTI), SIP (for direct SIP integration)
- Media Bridge: handles the audio/video media path between the PBX and Rainbow; supports SRTP for encrypted media; requires proper codec negotiation (G.711, G.722, Opus)
- Third-party PBX considerations: each PBX vendor has different CTI capabilities; document the supported features per PBX model in the deployment design document
- Testing: after CTI/Media Bridge configuration, test all call scenarios: make call, receive call, hold, retrieve, transfer, conference, park, pickup

**4. Teams Direct Routing Design**
- Architecture: Microsoft Teams > M365 Phone System > Rainbow SBC > PSTN/PBX; the SBC acts as the telephony gateway
- Capacity planning: each SBC instance supports up to 1,000 concurrent calls; for larger deployments, deploy multiple SBCs behind a load balancer
- Number management: plan the DID number assignment (one number per user, shared numbers for hunt groups); number porting from existing carrier to Rainbow SIP trunk takes 2-4 weeks
- Media bypass: enable for sites where the Teams client and the PSTN gateway are on the same network; reduces latency and SBC load; disable for remote/VPN users

**5. Telephony Design Documentation**
- Design document template: executive summary, deployment architecture diagram, number plan, IVR flow diagram, routing tables, failover plan, capacity calculation, testing plan
- Customer sign-off: the telephony design document should be reviewed and signed by the customer's IT lead before implementation begins
- Change management: any post-deployment changes to IVR, routing, or number assignments should follow a change request process with testing in a staging environment before production deployment

#### Lab Description (LAB)

**Setup**: Design and configure a telephony solution for "Nordic Insurance Group" (500 users, 3 sites, OXE PBX, Teams Direct Routing).

**Steps**:
1. Design the IVR flow: main greeting > language selection (EN/NO/SE) > department selection (Claims/Sales/Support) > queue > agent.
2. Configure hunt groups: Claims (15 agents, Longest Idle), Sales (20 agents, Circular), Support (10 agents, Simultaneous).
3. Set up business hours: Mon-Fri 8:00-17:00 CET, with 30-minute lunch routing to reduced queue.
4. Configure the Teams Direct Routing SBC connection for 200 Teams users.
5. Test end-to-end: inbound PSTN call > IVR > hunt group > agent answer on Rainbow client; Teams user makes outbound PSTN call via Rainbow SBC.

**Expected Outcome**: Learner can design and configure a complete telephony solution including IVR, hunt groups, business hours, and Teams integration.

#### Key Takeaways
- IVR design should follow the 3-level, 5-option rule; deeper or wider menus frustrate callers and increase abandonment
- Always include overflow and timeout handling in routing design; unanswered calls must never reach a dead end
- Teams Direct Routing requires careful capacity planning; size the SBC for peak concurrent calls, not average
- Every telephony design must be documented and signed off by the customer before implementation

---

### PTR-302: Rainbow Edge: Design & Deployment

| Field | Value |
|---|---|
| **Module ID** | PTR-302 |
| **Title** | Rainbow Edge: Design & Deployment |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + REF |
| **Prerequisites** | PTR-203 (Admin & Provisioning) |

#### Detailed Content Outline

**1. Edge Architecture Deep Dive**
- Components: application cluster (stateless, horizontally scalable), media cluster (handles audio/video processing), database cluster (PostgreSQL with streaming replication), file storage (S3-compatible object storage or NFS), reverse proxy/load balancer (Nginx or HAProxy)
- Network architecture: internal management VLAN (server-to-server communication), service VLAN (client-facing services on ports 443 and 3478), external VLAN (optional, for federation with public Rainbow cloud or other Edge instances)
- TLS certificate management: Edge uses customer-managed TLS certificates; recommend using a private CA for internal communication and a public CA certificate for the client-facing service endpoint
- DNS configuration: internal DNS must resolve the Edge service FQDN to the load balancer IP; external DNS (if federation is enabled) must resolve to the external-facing IP

**2. Prerequisites and Site Readiness**
- Infrastructure checklist: server hardware/VMs provisioned per specifications, network VLANs configured, firewall rules for internal communication, DNS entries created, TLS certificates generated
- Software prerequisites: supported OS (Ubuntu 20.04 LTS or RHEL 8+), Docker Engine 20.10+, docker-compose 2.0+
- Network prerequisites: 10 Gbps between Edge servers, latency <1ms between nodes, NTP time synchronization across all servers
- Storage: database server requires SSD storage with sustained write throughput of 500 IOPS minimum; file storage requires capacity based on file sharing usage (estimate 1 GB per user per year)

**3. Deployment Steps**
- Step 1: Install the base OS and Docker on all servers; configure NTP synchronization
- Step 2: Deploy the Edge orchestrator tool (`rainbow-edge-installer`) on the first application server; this tool automates the deployment of all Edge components
- Step 3: Run the configuration wizard: provide the Edge FQDN, TLS certificate paths, database credentials, media server allocation, and admin account credentials
- Step 4: The installer deploys containers across all servers, initializes the database, and configures the load balancer
- Step 5: Verify deployment: access the Edge admin portal at https://<edge-fqdn>/admin; confirm all services show "Healthy" status
- Step 6: Provision the first test users and verify messaging, calling, and conferencing functionality

**4. High Availability Configuration**
- Application cluster HA: minimum 3 application server nodes behind the load balancer; if one node fails, the load balancer routes traffic to the remaining nodes; users may experience a 5-10 second reconnection
- Database HA: PostgreSQL streaming replication with automatic failover (using Patroni or similar); the standby database promotes to primary within 30 seconds
- Media server HA: deploy 2+ media servers; if one fails, ongoing calls are dropped (media sessions are stateful and cannot be migrated), but new calls are routed to the healthy server
- File storage HA: if using NFS, configure a redundant NFS server or use a distributed filesystem (GlusterFS, Ceph); if using S3-compatible storage, the storage layer handles its own HA

**5. Maintenance and Updates**
- Update schedule: Edge receives quarterly updates; updates are delivered as new container images
- Update process: download the update package from the ALE partner portal; run the update tool (`rainbow-edge-updater`); the tool performs a rolling update (one node at a time) to minimize downtime
- Backup: schedule daily database backups and weekly file storage backups; test restore procedures quarterly
- Monitoring: integrate Edge health metrics with the customer's monitoring platform (Nagios, Zabbix, Prometheus) using the Edge monitoring API

#### Lab Description (LAB)

**Setup**: A pre-staged virtual environment with 6 VMs simulating an Edge deployment.

**Steps**:
1. Verify infrastructure prerequisites: check OS version, Docker version, network connectivity between all nodes.
2. Run the Edge installer on the primary node and complete the configuration wizard.
3. Verify deployment by accessing the admin portal and confirming all services are healthy.
4. Simulate a node failure (stop Docker on one application server) and verify that the platform continues operating on the remaining nodes.
5. Perform a simulated quarterly update using the update tool.

**Expected Outcome**: Learner can deploy, verify, and maintain a Rainbow Edge instance.

#### Key Takeaways
- Edge deployment requires careful infrastructure planning; missing prerequisites (wrong OS version, insufficient network bandwidth, missing DNS entries) cause deployment failures
- HA requires minimum 3 application nodes and 2 database nodes; single-node deployments are for testing only
- Quarterly updates are delivered as container images with rolling update support; plan 2-hour maintenance windows
- Partner-managed Edge deployments are a high-value recurring revenue opportunity; many customers prefer to outsource Edge maintenance

---

### PTR-303: Migration Playbooks

| Field | Value |
|---|---|
| **Module ID** | PTR-303 |
| **Title** | Migration Playbooks |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + SCN + REF |
| **Prerequisites** | PTR-201 (PBX Overlay) |

#### Detailed Content Outline

**1. On-Premises PBX to Rainbow Cloud Migration**
- Phase 1 (Overlay): deploy Rainbow overlay on existing PBX; users get messaging, presence, and softphone alongside their desk phones (3 months)
- Phase 2 (Parallel): port PSTN numbers to Rainbow SIP trunking; configure Rainbow as the primary telephony platform; PBX remains as backup (3 months)
- Phase 3 (Cutover): decommission PBX trunks; all telephony routes through Rainbow Cloud; desk phones are optional (SIP registration to Rainbow) (3 months)
- Phase 4 (Optimization): remove PBX hardware; optimize Rainbow configuration; train admin staff on full cloud management (3 months)
- Total timeline: 12-18 months for a complete migration with overlap periods for safety

**2. Legacy PBX (Non-ALE) to Rainbow Migration**
- Assessment: inventory the existing PBX features in use (IVR, hunt groups, voicemail, call recording, etc.) and map each to Rainbow's equivalent feature
- Gap analysis: identify features that Rainbow handles differently or does not support; create a remediation plan for each gap
- SIP trunk migration: port PSTN numbers from the legacy carrier to a Rainbow-compatible SIP trunk provider; test number portability in advance
- Parallel running: operate both systems simultaneously for 30 days; route test calls through Rainbow while maintaining the legacy PBX as primary
- Cutover decision: proceed when all key features are verified, user training is complete, and the parallel running period passes without critical issues

**3. Competitor UCaaS to Rainbow Migration**
- Data migration: Rainbow does not import message history from competitor platforms; communicate this limitation upfront; recommend archiving competitor data before migration
- User training: focus on the differences between the competitor and Rainbow rather than re-teaching basics; create a "Switching to Rainbow" quick-start guide
- Number porting: port PSTN numbers from the competitor to Rainbow SIP trunking; porting timelines vary by carrier (2-4 weeks typical)
- Parallel running: maintain both platforms for 14-30 days to allow users to transition gradually
- Success metrics: track adoption daily during migration; target 70%+ DAU on Rainbow within 14 days of cutover

**4. Hybrid Transition Strategies**
- Start cloud, extend to PBX: deploy Rainbow Cloud for new users; integrate existing PBX users via overlay; gradually shift PBX users to cloud-native telephony
- Start PBX overlay, migrate to cloud: deploy overlay on day 1; migrate telephony to cloud over 12-18 months; decommission PBX at the end
- Permanent hybrid: some customers will maintain a permanent hybrid architecture (cloud for collaboration, PBX for specialized telephony needs); design for long-term coexistence

**5. Risk Mitigation and Rollback Plans**
- Rollback plan: at every migration phase, document the steps to revert to the previous state within 4 hours; maintain the previous system on standby until the new phase is stable for 30 days
- Communication plan: notify all users of each migration phase (what changes, when, what to expect, who to contact for help)
- Pilot site: always migrate a small site first (20-50 users) to validate the migration playbook before rolling out to larger sites
- Support escalation: during migration, establish a dedicated support channel (Bubble or email distribution list) for migration-related issues; this prevents migration issues from drowning in the normal support queue

#### Scenario Description (SCN)

**Setup**: "Bavarian Manufacturing Group" (1,200 users across 4 factories) wants to migrate from an aging Siemens HiPath 4000 to Rainbow Cloud. They require zero downtime for their 24/7 factory operations.

**Steps**:
1. Assess: inventory the HiPath features in use (IVR for customer service, hunt groups for factory floor, paging system integration, 24/7 operations center).
2. Gap analysis: identify that Rainbow does not natively support paging; recommend a third-party SIP paging gateway as a workaround.
3. Design the migration plan: Phase 1 = Rainbow overlay for office staff (400 users), Phase 2 = migrate customer service IVR to Rainbow, Phase 3 = migrate factory floor telephony with 24/7 parallel running, Phase 4 = decommission HiPath.
4. Plan the pilot: select the smallest factory (100 users) for Phase 1 pilot; define success criteria (90%+ activation, zero P1 issues for 30 days).
5. Design the rollback plan: at each phase, maintain the HiPath configuration and routing as backup; test rollback procedure before starting each phase.

**Expected Outcome**: Learner can design a multi-phase migration plan with gap analysis, pilot strategy, and rollback planning.

#### Key Takeaways
- Every migration should follow the overlay-parallel-cutover-optimize sequence; never do a single-day "big bang" cutover for more than 50 users
- Gap analysis is critical: identify features that do not have a 1:1 equivalent in Rainbow and create workarounds before the migration begins
- Rollback plans must be documented and tested for every migration phase; "we can always go back" must be a proven capability, not an assumption
- Migration generates the most partner services revenue of any engagement; a 12-18 month migration generates continuous billable work

---

### PTR-304: Multi-Site & Enterprise Architecture

| Field | Value |
|---|---|
| **Module ID** | PTR-304 |
| **Title** | Multi-Site & Enterprise Architecture |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + CAS |
| **Prerequisites** | PTR-301 (Advanced Telephony Design) |

#### Detailed Content Outline

**1. Multi-Company and Organization Management**
- Organization structure: parent company manages multiple subsidiary companies; Admin > Organization > Add Company; each subsidiary has its own user directory, subscription, and admin
- Federation: enable cross-company communication (messaging, calling, presence) between subsidiaries; configured per company pair
- License pooling: negotiate a single license pool at the organization level and allocate to subsidiaries based on need; simplifies procurement and enables flexibility
- Governance: balance between centralized control (security policies, compliance settings) and local autonomy (user management, site configuration)

**2. Directory Federation Across Sites**
- LDAP federation: each site may have its own LDAP/AD domain; configure multiple LDAP sync connectors in Rainbow to pull from all domains
- Global Address List: Rainbow merges all synchronized directories into a single searchable GAL; users see colleagues from all sites with accurate presence
- Conflict resolution: when the same email address exists in multiple directories, Rainbow deduplicates based on email; attributes are merged with the most recently synced value winning

**3. Network Architecture for Multi-Site**
- Hub-and-spoke: all sites connect to Rainbow Cloud; inter-site calls route through the cloud (or via SIP trunks if PBX-to-PBX)
- Regional TURN servers: deploy TURN relay servers in each geographic region to keep media traffic local; reduces latency for intra-region calls
- WAN optimization: for sites with limited bandwidth, enable bandwidth throttling per site in Admin > Sites > [site] > Network Limits
- Survivability: if a site loses internet connectivity, cloud-based features are unavailable; PBX overlay users can still make/receive calls via the local PBX; Edge deployments continue full operation locally

**4. Enterprise Scalability Patterns**
- 1,000-5,000 users: single Rainbow tenant, multi-site configuration, standard public cloud deployment
- 5,000-20,000 users: multi-company organization structure, dedicated support contact at ALE, consider Edge for HQ site
- 20,000+ users: enterprise agreement with ALE, dedicated infrastructure (premium support SLA), custom API rate limits, dedicated account team
- Performance considerations: bulk operations (CSV import, directory sync) should be scheduled during off-peak hours; API rate limits apply per company (default 600 requests/minute)

**5. Disaster Recovery Planning**
- Public cloud: ALE manages DR with intra-region data center replication; published RTO of 4 hours, RPO of 1 hour
- Edge: customer is responsible for DR; recommended approach is a cold standby Edge instance at a secondary data center with daily database replication
- Hybrid: PBX provides local telephony survivability during cloud outages; ensure PBX is configured to handle all call routing independently if Rainbow Cloud is unavailable

#### Key Takeaways
- Multi-company organization structure provides centralized governance with local autonomy; use it for all enterprise deployments with subsidiaries
- Directory federation ensures a unified Global Address List across all sites and domains; configure it during initial deployment, not as an afterthought
- Regional TURN server placement is critical for call quality in multi-site deployments across geographies
- Disaster recovery planning must match the deployment model: cloud DR is ALE-managed, Edge DR is customer-managed

---

### PTR-305: License Optimization & Deal Structuring

| Field | Value |
|---|---|
| **Module ID** | PTR-305 |
| **Title** | License Optimization & Deal Structuring |
| **Level** | L3 Expert |
| **Duration** | 45 minutes |
| **Content Types** | VID + SCN + REF |
| **Prerequisites** | PTR-204 (Connector Demo & Sell) |

#### Detailed Content Outline

**1. Mix-and-Match Strategies**
- Tier allocation by role: identify which user roles need which tier (see CS-205 for the persona-to-tier mapping framework)
- Volume tiers: ALE offers volume discounts at 100, 500, 1000, and 5000 license thresholds; structure deals to hit the next volume tier for better pricing
- Multi-year discounts: 2-year contracts receive 5-10% discount; 3-year contracts receive 10-20% discount; longer commitments improve partner margin and customer cost

**2. Deal Structuring for Partner Margin**
- License margin: partner margin on Rainbow licenses varies by tier and volume; typical range is 20-35%
- Services margin: deployment, training, and managed services have 40-60% margin; maximize services in every deal
- Deal registration: register the deal on the ALE partner portal to lock pricing and protect from channel conflict; registration provides an additional 5% discount
- Payment terms: ALE offers monthly, annual, and multi-year prepaid options; annual prepaid gives 5% additional discount; partner cash flow benefits from annual prepaid

**3. Renewal Playbooks for Partners**
- 120 days before renewal: contact the customer, review usage data, identify expansion opportunities
- Optimization proposal: offer license optimization (CS-205 framework) to demonstrate partner value-add; even if the total license count decreases, the customer trusts the partner more
- Expansion bundling: bundle new licenses, connectors, or features with the renewal for a discounted combined price
- Competitive defense: if the customer is evaluating competitors at renewal, use the competitive positioning from CS-301 and the security selling from PTR-205

**4. Complex Deal Scenarios**
- Multi-country deal: different pricing in different countries; structure as a global agreement with local delivery; consider data sovereignty requirements per country
- Merger/acquisition: the acquiring company wants to absorb the acquired company's communication tools; propose a phased migration to Rainbow for the acquired entity
- Public sector: government procurement rules may require specific documentation (security certifications, data processing agreements, compliance statements); prepare these in advance

**5. Partner Deal Calculator**
- Inputs: number of users per tier, contract length, additional services (deployment, training, managed services), volume tier
- Outputs: customer monthly cost, partner margin per month, annual partner revenue, services revenue
- Scenario comparison: generate 3 pricing scenarios (good/better/best) to give the customer options

#### Key Takeaways
- Structure every deal to maximize services revenue (deployment, training, managed services), which has higher margins than license resale
- Volume tier thresholds (100, 500, 1000, 5000) can be leveraged to win deals: "If we add 20 more users, you hit the 500-user tier and save $X/month overall"
- Deal registration on the ALE partner portal protects pricing and provides additional discounts; always register before sharing pricing
- Renewal is a relationship event, not just a transaction; use the 120-day playbook to demonstrate ongoing value

---

### PTR-306: CPaaS for Partners: Extending the Offering

| Field | Value |
|---|---|
| **Module ID** | PTR-306 |
| **Title** | CPaaS for Partners: Extending the Offering |
| **Level** | L3 Expert |
| **Duration** | 30 minutes |
| **Content Types** | VID + DEM |
| **Prerequisites** | PTR-201 (PBX Overlay) |

#### Detailed Content Outline

**1. CPaaS Opportunity for Partners**
- CPaaS extends the partner's offering beyond pre-packaged UCaaS into custom communication solutions built on Rainbow's APIs
- Use cases: custom reception kiosk (visitor check-in with Rainbow video call to receptionist), IoT alerting (sensor triggers Rainbow notification to maintenance team), workflow automation (ERP event triggers a Rainbow Bubble creation for the project team)
- Revenue model: Rainbow Hub tier licenses for API access + partner development/integration services (high-margin)
- Market sizing: CPaaS is a $20B+ global market growing 25% annually; partners with development capabilities can capture custom integration revenue

**2. Demo: API-Driven Solution Example**
- Scenario: "Smart Building Notification System" — a temperature sensor detects an anomaly in a server room; the IoT gateway sends an API call to Rainbow; Rainbow creates a Bubble with the on-call maintenance team and posts an alert message with the sensor data
- Demo flow: (1) Trigger the simulated sensor alert, (2) show the Rainbow API call in the developer console, (3) show the Bubble created automatically with the alert message, (4) show the on-call team receiving mobile push notifications, (5) the team acknowledges the alert and discusses the response in the Bubble
- Technical: uses the Rainbow S2S API with a webhook to receive sensor events; Bubble creation via POST /api/rainbow/enduser/v1.0/rooms; message posting via POST /api/rainbow/enduser/v1.0/conversations/{id}/messages

**3. Positioning CPaaS with Customers**
- Discovery: "Are there business processes in your organization that could benefit from embedded communication? For example, when an ERP order is created, should the logistics team be automatically notified in a group chat?"
- Value: custom communication solutions automate manual coordination; reduce email chains and phone tag; provide audit trails for compliance
- Competitive: "Rainbow's CPaaS platform with 300+ API endpoints and SDKs in 5 languages (JavaScript, Node.js, C#, Swift, Kotlin) gives you the building blocks. We build the solution."

**4. Building CPaaS Practice Revenue**
- Service offerings: discovery workshop (2 days, $5,000-10,000), custom integration development (2-8 weeks, $20,000-80,000), ongoing support/enhancement ($2,000-5,000/month)
- Skill requirements: partner needs developers with REST API and JavaScript/Node.js experience; Rainbow Developer Track modules provide the training
- Reusable components: build a library of reusable integrations (IoT alerting template, ERP notification template, chatbot template) to reduce development time for subsequent customers

#### Key Takeaways
- CPaaS extends the partner's offering from reselling into services, where margins are 2-3x higher than license resale
- IoT alerting, workflow automation, and custom communication flows are the three most common CPaaS use cases for partners
- Partners need development capabilities (REST API, JavaScript/Node.js) to deliver CPaaS solutions; the Rainbow Developer Track provides the training
- Build a library of reusable integration templates to reduce per-customer development cost and improve margins

---

## LEVEL 4: CHAMPION (3 hours total)

---

### PTR-401: Building a Rainbow Practice

| Field | Value |
|---|---|
| **Module ID** | PTR-401 |
| **Title** | Building a Rainbow Practice |
| **Level** | L4 Champion |
| **Duration** | 60 minutes |
| **Content Types** | VID + CAS |
| **Prerequisites** | PTR-305 (License & Deal Structuring) |

#### Detailed Content Outline

**1. Team Enablement Plan**
- Roles needed: sales (product knowledge, competitive positioning), pre-sales (demo, sizing, design), deployment (configuration, migration), support (ongoing maintenance, troubleshooting)
- Certification targets: all sales staff should complete L2 Partner Track, all pre-sales should complete L3, deployment engineers should complete L3 + Developer L2, support staff should complete the Support Track
- Training investment: budget 40 hours per person for initial Rainbow enablement; this pays back in reduced ramp time and higher deal close rates
- Hiring vs. training: it is more cost-effective to train existing staff on Rainbow than to hire Rainbow-specialized engineers (who are rare); the Rainbow Training Academy is designed for this purpose

**2. Services Wrapping**
- Deployment services: fixed-fee deployment packages (Small: 50 users/$3,000, Medium: 200 users/$8,000, Large: 500+ users/$15,000+) covering provisioning, PBX configuration, user training, and handover
- Migration services: per-user pricing for PBX-to-Rainbow migration ($50-150/user depending on complexity); includes assessment, design, implementation, and parallel running
- Training services: per-session pricing for customer end-user training ($500-1,000/session for up to 20 users); create a training curriculum with hands-on exercises
- Managed services: monthly recurring revenue for ongoing administration, monitoring, and support ($5-15/user/month); includes admin portal management, user provisioning, issue resolution, and quarterly reviews

**3. Managed Services Model**
- Tier 1 (Basic): user provisioning, password resets, monthly usage reports ($5/user/month)
- Tier 2 (Standard): Tier 1 + connector management, PBX overlay monitoring, quarterly business reviews ($10/user/month)
- Tier 3 (Premium): Tier 2 + Edge server management, 24/7 support, SLA-backed response times, dedicated account manager ($15/user/month)
- SLA structure: define response times (P1: 15 min, P2: 1 hour, P3: 4 hours, P4: next business day), resolution times, and escalation paths
- Partner margin: managed services typically deliver 50-70% gross margin; higher than one-time deployment services

**4. Go-to-Market Strategy**
- Target customer segmentation: SMB (20-200 users, simpler deployments, higher volume), mid-market (200-2,000 users, PBX overlay + connectors, moderate complexity), enterprise (2,000+ users, multi-site, Edge, highest services revenue per deal)
- Marketing activities: customer webinars ("Modernize Your PBX Without Replacing It"), co-marketing with ALE at trade shows, case study publications, LinkedIn thought leadership
- Sales process: (1) Qualify with discovery questions, (2) Demo using PTR-201 through PTR-206 materials, (3) Size using the Calculator (PTR-202), (4) Propose with 3 pricing scenarios, (5) Close with partner deal registration, (6) Deploy, (7) Transition to managed services

**5. Measuring Practice Success**
- Revenue metrics: total Rainbow revenue (license + services), services-to-license ratio (target: 1.5:1 or higher), managed services recurring revenue as percentage of total
- Customer metrics: customer satisfaction (NPS), renewal rate (target: 90%+), expansion rate (percentage of customers who expand year-over-year)
- Team metrics: certifications per person, deals per quarter, average deal size, time to deploy

#### Case Study (CAS)

**Scenario**: A regional IT services partner ("TechServe Partners") wants to build a Rainbow practice. They have 5 sales staff, 3 engineers, and currently focus on ALE on-premises telephony. They need a 12-month plan to transition into cloud services.

**Analysis Tasks**:
1. Design the training plan: which Rainbow Academy modules for sales vs. engineers, timeline, certification targets.
2. Create 3 service packages: deployment, migration, and managed services with pricing.
3. Define the go-to-market approach: target 10 new Rainbow customers in Year 1, starting with their existing ALE install base.
4. Calculate the revenue target: 10 customers averaging 200 users = 2,000 users; estimated annual revenue from licenses + services.

#### Key Takeaways
- Building a Rainbow practice requires investment in people (training), processes (service packages), and go-to-market (customer acquisition)
- Managed services are the highest-margin, most predictable revenue stream; make it the centerpiece of the practice
- Start with the existing ALE install base — these customers already trust the partner and need cloud modernization
- The services-to-license ratio should be 1.5:1 or higher; if it is below 1:1, the partner is leaving money on the table

---

### PTR-402: Pre-Sales Engineering Excellence

| Field | Value |
|---|---|
| **Module ID** | PTR-402 |
| **Title** | Pre-Sales Engineering Excellence |
| **Level** | L4 Champion |
| **Duration** | 45 minutes |
| **Content Types** | VID + SCN + DEM |
| **Prerequisites** | PTR-401 (Building a Rainbow Practice) |

#### Detailed Content Outline

**1. Discovery Workshop Framework**
- Preparation: research the prospect's industry, size, and current technology stack before the meeting; review their website, press releases, and LinkedIn for context
- Discovery questions by category: current state ("What communication tools are you using today?"), pain points ("What is not working well?"), requirements ("What capabilities do you need that you do not have?"), constraints ("What are your budget, timeline, and compliance requirements?"), decision process ("Who makes the final decision? What is your evaluation timeline?")
- Documenting discovery: take structured notes using the Discovery Template (provided as REF); this becomes the input for the solution design

**2. Solution Design Process**
- Input: discovery notes, sizing calculator output, deployment model recommendation
- Design components: architecture diagram, user provisioning plan, telephony design (if applicable), connector design (if applicable), security/compliance documentation, timeline, pricing
- Review: present the solution design to the prospect in a dedicated session (not buried in the proposal document); walk through each component and gather feedback
- Iteration: expect 1-2 revision cycles; the prospect may change requirements after seeing the design

**3. POC (Proof of Concept) Execution**
- When to offer a POC: when the prospect has a strong use case but is uncertain about Rainbow's ability to deliver; when competing against an incumbent vendor; when the deal value justifies the POC investment (typically deals >$50,000 annual value)
- POC scope: limit to 10-20 users, 2-4 weeks, with clearly defined success criteria (e.g., "audio quality must exceed MOS 4.0 on all calls," "CRM connector must auto-log 100% of calls")
- POC execution: deploy a trial environment, configure the specific features being evaluated, train the POC users, monitor adoption and quality metrics daily
- POC review: at the end of the POC period, present the results against the success criteria; if criteria are met, propose the full deployment

**4. Competitive Demo Strategies**
- Demo environment: maintain a pre-configured demo environment that is always ready; do not rely on setting up demos on the fly
- Tailored demos: customize the demo to the prospect's specific use case; use their industry terminology, their typical call flow, their CRM platform
- Competitive traps: demonstrate features that the competitor cannot match (PBX overlay, data sovereignty, multi-CRM connector); after the demo, ask: "Can you show me how [competitor] handles this scenario?"
- Demo follow-up: send a recording of the demo and a one-page summary of key differentiators within 24 hours

**5. RFP Response Best Practices**
- Response structure: executive summary (1 page), solution overview (3-5 pages), feature compliance matrix (mapping every RFP requirement to Rainbow capability), pricing (3 scenarios), references (2-3 customer references), appendices (security certifications, SLAs, data processing agreements)
- Compliance matrix: for every RFP requirement, provide one of: "Fully Compliant" (with explanation), "Partially Compliant" (with workaround), "Roadmap" (with expected date), "Not Applicable" (with justification); never leave a requirement blank
- Differentiator insertion: in every section of the RFP response, include one differentiator that the competitor cannot match; this plants seeds throughout the evaluation
- Timeline: allocate 3-5 days for a standard RFP response; complex RFPs (100+ questions) may require 2 weeks

#### Scenario Description (SCN)

**Setup**: The partner's pre-sales engineer must prepare and deliver a competitive demo for "Alpine Hotels" (12 properties, 800 employees). The prospect is comparing Rainbow against Microsoft Teams + a third-party SBC vendor. The demo is in 48 hours.

**Steps**:
1. Review the prospect's RFP requirements: PBX overlay (OXO Connect at all properties), staff messaging (replacing walkie-talkies), guest room telephony integration, data sovereignty (all data in EU).
2. Prepare the demo: (a) PBX overlay showing simultaneous ring on desk phone and mobile, (b) Group messaging with photo sharing (housekeeping workflow), (c) Presence-aware task assignment, (d) Data sovereignty dashboard showing EU data center confinement.
3. Prepare the competitive trap: demonstrate the PBX overlay on the OXO Connect — this is something Teams + third-party SBC cannot do as seamlessly.
4. Deliver the demo (simulated) with the talking points from PTR-201 and PTR-206 (hospitality vertical).
5. Follow up with a one-page comparison showing Rainbow vs. Teams + SBC on each RFP requirement.

**Expected Outcome**: Learner can prepare and deliver a competitive, tailored demo under time pressure.

#### Key Takeaways
- Discovery quality determines proposal quality; never skip the discovery workshop
- POCs should have clearly defined success criteria agreed upon before the POC starts; open-ended POCs waste time
- Maintain a ready-to-go demo environment; a pre-sales engineer who needs 2 hours to set up a demo has already lost momentum
- Competitive demos should include at least one "trap" feature that the competitor cannot match

---

### PTR-403: Customer Success for Partners

| Field | Value |
|---|---|
| **Module ID** | PTR-403 |
| **Title** | Customer Success for Partners |
| **Level** | L4 Champion |
| **Duration** | 45 minutes |
| **Content Types** | VID + CAS + REF |
| **Prerequisites** | PTR-401 (Building a Rainbow Practice) |

#### Detailed Content Outline

**1. Post-Sale Adoption Responsibility**
- The partner's responsibility does not end at deployment; customers who do not adopt Rainbow will not renew, and the partner loses recurring revenue
- Adoption monitoring: pull monthly usage reports from the admin portal; track DAU/MAU per customer; set alerts for customers whose DAU/MAU drops below 70%
- Proactive outreach: when adoption dips, reach out before the customer complains; offer training sessions, feature enablement workshops, or a QBR

**2. Partner-Led QBRs**
- Structure: same as CS-206 (QBR framework) but delivered by the partner instead of the ALE CSM
- Data preparation: pull usage metrics, support ticket count, license utilization; prepare 3 talking points (celebration, opportunity, recommendation)
- Value demonstration: the QBR is the partner's opportunity to demonstrate ongoing value; without it, the customer perceives the partner as just a reseller
- Expansion identification: use the QBR to identify expansion opportunities (additional users, connectors, tier upgrades, Edge deployment)

**3. Expansion and Renewal Execution**
- Expansion playbook: identify triggers (CS-306 framework), build ROI case, propose expansion with pricing, coordinate with ALE for deal registration
- Renewal playbook: start 120 days before renewal, present optimization proposal, address any issues, secure renewal commitment
- Churn prevention: if a customer indicates they are evaluating competitors, activate the competitive defense playbook (CS-301 positioning, PTR-205 security differentiation, executive escalation if needed)
- Win-back: for customers who churn, maintain the relationship; check in every 6 months; many customers return after experiencing the limitations of the competitor they switched to

**4. Building Customer References**
- Reference strategy: every delighted customer is a potential reference; ask for permission to reference them after a successful deployment or QBR
- Case study co-creation: work with the customer to develop a case study (CS-403 framework); partner co-branding adds credibility for both parties
- Referral program: offer incentives (discounts on managed services, priority support) to customers who refer new prospects

**5. Customer Success Metrics for Partners**
- Retention rate: percentage of customers who renew year-over-year; target 90%+
- Net Revenue Retention: (renewal revenue + expansion revenue - contraction revenue) / original revenue; target 110%+ (meaning the customer base grows even without new logos)
- Customer lifetime value (CLV): average annual revenue per customer x average customer lifespan; maximize by driving adoption and expansion
- Partner NPS: survey customers about their satisfaction with the partner (not just with Rainbow); target NPS 50+

#### Key Takeaways
- Partner-led customer success is the key to recurring revenue; deployment without adoption leads to churn
- QBRs are the most valuable touchpoint for demonstrating ongoing partner value and identifying expansion opportunities
- Net Revenue Retention of 110%+ means the partner's existing customer base grows even without winning new logos
- Every delighted customer is a potential reference; build referencing into the standard post-deployment workflow
