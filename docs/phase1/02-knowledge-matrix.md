# Rainbow Training Platform — Knowledge Matrix

> Phase 1 Deliverable | Knowledge Block Classification & Gap Analysis

---

## PART A: KNOWLEDGE BLOCK CLASSIFICATION

Each knowledge block is classified as:
- **T** = Technical (how it works, configuration, troubleshooting)
- **F** = Functional (how to use it, workflows, best practices)
- **S** = Strategic (business value, ROI, competitive positioning)

---

### 1. COMMUNICATION & COLLABORATION

| Knowledge Block | Type | Current Doc Coverage | Training Priority |
|---|---|---|---|
| Instant messaging basics | F | High (Help Center) | Medium |
| Bubbles (group messaging) architecture | T | Medium | High |
| Bubbles for cross-company collaboration | F/S | Low | **Critical** |
| File sharing & storage limits by tier | F | Medium | Medium |
| Presence management & calendar sync | F | Medium | Medium |
| P2P WebRTC audio/video | T | Medium | Low |
| Conferencing (setup, moderation, limits) | F | Medium | High |
| AI meeting features (transcription, bots, action points) | F/S | Low | **Critical** |
| Screen sharing (use cases by persona) | F | Medium | Medium |

### 2. TELEPHONY

| Knowledge Block | Type | Current Doc Coverage | Training Priority |
|---|---|---|---|
| PBX overlay concept & value proposition | S | Low (corporate only) | **Critical** |
| PBX overlay configuration (OXO, OMNI) | T | Medium (Help Center) | High |
| Third-party PBX integration (CTI/Media Bridge) | T | Medium | High |
| Cloud PBX capabilities | F/S | Low | **Critical** |
| IVR setup and management | T/F | Medium | High |
| Call routing & hunt groups | T/F | Medium | High |
| Softphone deployment & usage | F | High | Medium |
| Teams Direct Routing setup & value | T/S | Low | **Critical** |
| Call statistics & dashboards | F | Low | High |

### 3. INTEGRATIONS & CONNECTORS

| Knowledge Block | Type | Current Doc Coverage | Training Priority |
|---|---|---|---|
| Salesforce connector setup & demo | T/F | Medium (dedicated section) | High |
| ServiceNow connector | T/F | Medium | High |
| Zendesk connector | T/F | Medium | High |
| Microsoft 365 integration | T/F | Low | High |
| Google Workspace integration | T/F | Low | High |
| Teams connector (telephony bridge) | T/S | Low | **Critical** |
| App Connector (generic embedding) | T | Low | High |
| Citrix VDI optimization | T | Low | Medium |
| Integration ROI & use cases | S | Very Low | **Critical** |

### 4. ADMINISTRATION & MANAGEMENT

| Knowledge Block | Type | Current Doc Coverage | Training Priority |
|---|---|---|---|
| Admin portal navigation | F | High (Help Center) | Medium |
| User provisioning (single & bulk) | T/F | Medium | High |
| Subscription management & dashboard | F | Medium | High |
| Business directory management | F | Medium | Medium |
| Company settings & policies | T/F | Medium | Medium |
| Rainbow CLI for automation | T | Low (developer docs) | High |
| License optimization strategies | S | Very Low | **Critical** |
| Multi-site / multi-company management | T/S | Low | **Critical** |

### 5. SECURITY & COMPLIANCE

| Knowledge Block | Type | Current Doc Coverage | Training Priority |
|---|---|---|---|
| Encryption architecture | T | Medium (support articles) | Medium |
| ISO 27001 certification details | T/S | Medium | High |
| GDPR compliance features | T/S | Medium | High |
| HDS certification (healthcare) | T/S | Medium | High (vertical) |
| ANSSI CSPN / ENS certifications | T/S | Medium | High (vertical) |
| Data sovereignty & residency options | S | Medium | **Critical** |
| Security comparison vs. competitors | S | Very Low | **Critical** |

### 6. DEPLOYMENT & ARCHITECTURE

| Knowledge Block | Type | Current Doc Coverage | Training Priority |
|---|---|---|---|
| Public cloud architecture | T | Medium | Medium |
| Rainbow Edge (private cloud) setup | T | Medium | High |
| Hybrid deployment strategies | T/S | Low | **Critical** |
| Migration from on-prem to cloud | T/S | Very Low | **Critical** |
| Sizing & performance considerations | T | Low | High |
| High availability & disaster recovery | T | Low | High |

### 7. DEVELOPER PLATFORM

| Knowledge Block | Type | Current Doc Coverage | Training Priority |
|---|---|---|---|
| REST API getting started | T | High (developer hub) | Medium |
| SDK quickstart (per platform) | T | High | Medium |
| S2S API & webhook architecture | T | Medium | High |
| Bot development (chatbot framework) | T | Medium | High |
| IoT integration patterns | T | Low | Medium |
| CPaaS business value & use cases | S | Low | **Critical** |
| Sample applications & starter kits | T | Medium (GitHub) | Medium |

### 8. VERTICAL SOLUTIONS

| Knowledge Block | Type | Current Doc Coverage | Training Priority |
|---|---|---|---|
| Hospitality solution architecture | T/S | Medium (datasheet) | High |
| Healthcare (HDS) solution | T/S | Medium | High |
| Education (Rainbow Classroom) | T/F | Medium | High |
| Government deployment (sovereign) | T/S | Low | High |
| Transportation solution | T/S | Very Low | Medium |
| Cross-vertical use case library | S | Very Low | **Critical** |

---

## PART B: PERSONA-KNOWLEDGE MAPPING

### Support Teams
| Priority | Knowledge Blocks Needed |
|---|---|
| **Critical** | Troubleshooting workflows, connector setup (CRM), call routing, IVR, hunt groups |
| **High** | Admin portal, user provisioning, softphone, conferencing, screen sharing |
| **Medium** | Presence, file sharing, messaging basics, encryption |
| **Low** | Deployment architecture, developer platform, vertical solutions |

### Customer Success
| Priority | Knowledge Blocks Needed |
|---|---|
| **Critical** | Business value articulation, adoption metrics, license optimization, integration ROI |
| **High** | Admin portal, subscription dashboard, conferencing, AI meeting features, CRM connectors |
| **Medium** | Call statistics, user provisioning, deployment models |
| **Low** | Technical architecture, developer platform, troubleshooting |

### Executives / CEOs
| Priority | Knowledge Blocks Needed |
|---|---|
| **Critical** | Strategic positioning, ROI/TCO, security/compliance, data sovereignty, competitive differentiation |
| **High** | AI capabilities, deployment flexibility, Teams coexistence, vertical value |
| **Medium** | Subscription tiers, conferencing, meeting features |
| **Low** | Technical configuration, troubleshooting, developer APIs |

### Partners / Resellers
| Priority | Knowledge Blocks Needed |
|---|---|
| **Critical** | PBX overlay value, deployment models, license tiers, Teams connector, multi-site management |
| **High** | Vertical solutions, security certifications, admin portal, CLI automation |
| **Medium** | CRM connectors, conferencing, migration strategies |
| **Low** | End-user features, basic messaging |

### Developers (Optional Track)
| Priority | Knowledge Blocks Needed |
|---|---|
| **Critical** | REST API, SDKs, S2S API, bot framework, CPaaS value proposition |
| **High** | Webhooks, IoT integration, sample apps, Rainbow CLI |
| **Medium** | Authentication & security, deployment architecture |
| **Low** | Business positioning, vertical solutions, admin portal |

---

## PART C: GAP ANALYSIS — Documentation vs. Business Storytelling

### CRITICAL GAPS (Must be created for training platform)

| Gap | Current State | Required State |
|---|---|---|
| **Business value narratives** | Features listed without ROI context | Each feature linked to measurable business outcomes |
| **Competitive positioning** | No comparative content | Clear differentiation vs. Teams, Zoom, RingCentral, 8x8 |
| **Customer success stories per vertical** | Minimal case studies in docs | Rich, persona-specific success stories with metrics |
| **Migration/transition playbooks** | Fragmented across docs | Step-by-step guides for common migration scenarios |
| **License optimization guides** | Only tier comparison tables | Strategic guidance on mix-and-match (Essential + Enterprise) |
| **Integration ROI calculators** | Non-existent | Interactive tools showing time/cost savings per connector |
| **PBX overlay storytelling** | Technical docs only | Business case for modernization without rip-and-replace |
| **AI features business impact** | Brief mentions | Detailed use cases with productivity metrics |
| **Teams coexistence strategy** | Product page only | Full guide: why Rainbow + Teams > Teams alone |
| **Multi-site deployment guide** | Sparse | Comprehensive architecture + business case |

### HIGH-PRIORITY GAPS

| Gap | Current State | Required State |
|---|---|---|
| **Onboarding paths by persona** | Generic getting started | Role-specific onboarding journeys |
| **Admin best practices** | Reference docs only | Guided workflows with screenshots |
| **Connector demo scripts** | Setup guides only | Sales-ready demo scripts for each connector |
| **Security whitepaper (training-ready)** | Certification articles | Executive-friendly security overview |
| **Deployment decision tree** | Separate product pages | Interactive guide: which deployment model is right? |
| **Partner enablement kit** | No unified resource | Consolidated sales tools, demo guides, pitch decks |

### MEDIUM-PRIORITY GAPS

| Gap | Current State | Required State |
|---|---|---|
| **Video/interactive tutorials** | Text-based help articles | Guided walkthroughs with real UX |
| **Assessment/quiz content** | Non-existent | Knowledge validation for certification |
| **Troubleshooting decision trees** | FAQ-style articles | Interactive diagnostic workflows |
| **API use case gallery** | Sample code on GitHub | Business-context API use case library |

---

## PART D: CONTENT SOURCE INVENTORY

| Source | URL | Content Type | Quality |
|---|---|---|---|
| Help Center (help.openrainbow.com) | help.openrainbow.com | End-user & admin guides | Good (functional) |
| Support Community (support.openrainbow.com) | support.openrainbow.com | Community Q&A, feature lists, certifications | Medium |
| Corporate Site (al-enterprise.com/rainbow) | al-enterprise.com/en/rainbow | Product positioning, datasheets | Good (strategic) |
| Developer Hub (hub.openrainbow.com) | hub.openrainbow.com | API docs, SDK guides | Good (technical) |
| GitHub (Rainbow-CPaaS) | github.com/Rainbow-CPaaS | Sample code, SDKs, starter kits | Medium |
| Product Portal (openrainbow.com) | openrainbow.com | Subscription info, connector details | Medium |
| Datasheets (PDF) | al-enterprise.com (various PDFs) | Solution sheets per vertical | Good |

---

## SUMMARY STATISTICS

| Metric | Count |
|---|---|
| Total knowledge blocks identified | 72 |
| Technical blocks | 38 (53%) |
| Functional blocks | 22 (31%) |
| Strategic blocks | 12 (17%) |
| Critical training priority | 19 blocks |
| High training priority | 28 blocks |
| Medium training priority | 18 blocks |
| Low training priority | 7 blocks |
| Critical documentation gaps | 10 |
| High-priority documentation gaps | 6 |
| Medium-priority documentation gaps | 4 |
