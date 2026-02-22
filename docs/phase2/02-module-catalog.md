# Rainbow Training Platform — Module Catalog & Content Architecture

> Phase 2 Deliverable | Module Architecture, Content Types & Dependency Graph

---

## PART A: CONTENT TYPE DEFINITIONS

Each module is composed of one or more **content blocks**. Below are the standardized content types used across the platform:

| Code | Content Type | Description | Avg. Duration | Interaction Level |
|---|---|---|---|---|
| **VID** | Video Lesson | Narrated screencast or animated explainer | 5-15 min | Passive |
| **INT** | Interactive Walkthrough | Step-by-step guided simulation of real Rainbow UX | 10-20 min | Active |
| **SCN** | Scenario Simulation | Role-play scenario with branching decisions | 15-30 min | Active |
| **LAB** | Hands-On Lab | Live sandbox exercise with Rainbow (real or simulated environment) | 20-45 min | Active |
| **QIZ** | Knowledge Check | Multiple choice / matching quiz (5-10 questions) | 5-10 min | Assessment |
| **CAS** | Case Study | Real-world business scenario with analysis prompts | 10-20 min | Reflective |
| **REF** | Reference Card | One-page downloadable cheat sheet / quick reference | N/A (download) | Reference |
| **DEM** | Demo Script | Step-by-step demo guide with talking points | 10-20 min | Active |
| **INF** | Infographic | Visual summary of concept, process, or comparison | N/A (visual) | Reference |
| **ASM** | Assessment | Graded exam for certification | 30-45 min | Assessment |

---

## PART B: MODULE CONTENT COMPOSITION

### SUPPORT TRACK — Content Breakdown

| Module | Content Blocks | Primary Type |
|---|---|---|
| **SUP-101** Rainbow Platform Overview | VID + INF + QIZ | Conceptual |
| **SUP-102** Navigating the Interface | VID + INT | Guided |
| **SUP-103** Messaging & Presence | VID + INT + QIZ | Guided |
| **SUP-104** Voice & Video Basics | VID + INT + LAB | Hands-on |
| **SUP-105** Support Toolkit Orientation | VID + REF | Reference |
| **SUP-201** Telephony Troubleshooting | VID + SCN + REF | Scenario |
| **SUP-202** Admin Portal for Support | INT + LAB + QIZ | Hands-on |
| **SUP-203** Connector Support: CRM | VID + SCN + REF | Scenario |
| **SUP-204** Conferencing & Meeting Support | VID + SCN + QIZ | Scenario |
| **SUP-205** Network & Connectivity | VID + LAB + REF | Hands-on |
| **SUP-206** Mobile Client Support | VID + SCN + REF | Scenario |
| **SUP-301** Advanced Telephony | VID + LAB + QIZ | Hands-on |
| **SUP-302** Deployment Architecture | VID + INF + QIZ | Conceptual |
| **SUP-303** Security & Compliance Support | VID + CAS + QIZ | Case-based |
| **SUP-304** Teams Connector Troubleshooting | VID + SCN + LAB | Hands-on |
| **SUP-305** Escalation Mastery | VID + SCN + CAS | Scenario |
| **SUP-306** Troubleshooting Decision Trees | INT (interactive decision tree) | Interactive |
| **SUP-401** Support Metrics & KPIs | VID + CAS + QIZ | Case-based |
| **SUP-402** KB Contribution | VID + LAB | Hands-on |
| **SUP-403** Mentoring & Enablement | VID + CAS | Case-based |
| **SUP-404** Certification Assessment | ASM | Assessment |

### CUSTOMER SUCCESS TRACK — Content Breakdown

| Module | Content Blocks | Primary Type |
|---|---|---|
| **CS-101** Value Proposition | VID + INF + CAS | Strategic |
| **CS-102** Subscription Tiers & Licensing | VID + INT + REF | Reference |
| **CS-103** Core Features Walk-Through | VID + INT + QIZ | Guided |
| **CS-104** Customer Journey | VID + INF + CAS | Strategic |
| **CS-201** Adoption Metrics | VID + INT + LAB | Hands-on |
| **CS-202** Admin Portal Mastery | INT + LAB + QIZ | Hands-on |
| **CS-203** CRM Connector Value Stories | VID + DEM + CAS | Demo-driven |
| **CS-204** AI Meeting Features | VID + DEM + QIZ | Demo-driven |
| **CS-205** License Optimization | VID + SCN + REF | Scenario |
| **CS-206** Business Reviews | VID + SCN + REF | Scenario |
| **CS-301** Competitive Differentiation | VID + CAS + INF | Strategic |
| **CS-302** Deployment Strategy Advisory | VID + SCN + REF | Scenario |
| **CS-303** Teams Coexistence Storytelling | VID + DEM + CAS | Strategic |
| **CS-304** Security as Sales Lever | VID + CAS + REF | Strategic |
| **CS-305** Vertical Positioning | VID + DEM + CAS | Demo-driven |
| **CS-306** Expansion & Upsell Playbooks | VID + SCN + REF | Scenario |
| **CS-307** Multi-Site Success | VID + CAS | Case-based |
| **CS-401** Building CS Playbooks | VID + LAB | Hands-on |
| **CS-402** Executive Storytelling | VID + SCN + CAS | Strategic |
| **CS-403** Customer Advocacy | VID + CAS | Case-based |
| **CS-404** Certification Assessment | ASM | Assessment |

### EXECUTIVE TRACK — Content Breakdown

| Module | Content Blocks | Primary Type |
|---|---|---|
| **EXEC-101** The Rainbow Vision | VID + INF | Strategic |
| **EXEC-102** Platform at a Glance | VID + INF + REF | Reference |
| **EXEC-103** Security & Sovereignty | VID + INF + CAS | Strategic |
| **EXEC-104** Investment & ROI | VID + INF + CAS | Strategic |
| **EXEC-201** AI-Powered Productivity | VID + DEM + CAS | Demo-driven |
| **EXEC-202** Deployment Flexibility | VID + INF + SCN | Strategic |
| **EXEC-203** Teams Coexistence | VID + CAS + INF | Strategic |
| **EXEC-204** Industry-Specific Value | VID + CAS (pick vertical) | Case-based |
| **EXEC-301** Digital Transformation Roadmap | VID + CAS + INF | Strategic |
| **EXEC-302** Competitive Landscape | VID + INF + CAS | Strategic |
| **EXEC-303** PBX Modernization | VID + CAS + INF | Strategic |
| **EXEC-304** CPaaS Opportunity | VID + INF | Conceptual |
| **EXEC-401** Building the Business Case | VID + REF (templates) | Strategic |
| **EXEC-402** Change Management | VID + CAS | Case-based |
| **EXEC-403** Certification Assessment | ASM | Assessment |

### PARTNER TRACK — Content Breakdown

| Module | Content Blocks | Primary Type |
|---|---|---|
| **PTR-101** Product Portfolio | VID + INF + REF | Reference |
| **PTR-102** Market & Competition | VID + INF + CAS | Strategic |
| **PTR-103** Commercial Framework | VID + REF + QIZ | Reference |
| **PTR-104** Client Platforms | VID + REF | Reference |
| **PTR-201** PBX Overlay Story | VID + DEM + CAS | Demo-driven |
| **PTR-202** Deployment Sizing | VID + LAB + REF | Hands-on |
| **PTR-203** Admin & Provisioning | INT + LAB + QIZ | Hands-on |
| **PTR-204** Connector Demo & Sell | DEM + SCN + REF | Demo-driven |
| **PTR-205** Security Selling | VID + CAS + REF | Strategic |
| **PTR-206** Vertical Selling | VID + DEM + CAS | Demo-driven |
| **PTR-301** Advanced Telephony Design | VID + LAB + QIZ | Hands-on |
| **PTR-302** Rainbow Edge Deployment | VID + LAB + REF | Hands-on |
| **PTR-303** Migration Playbooks | VID + SCN + REF | Scenario |
| **PTR-304** Multi-Site Architecture | VID + LAB + CAS | Hands-on |
| **PTR-305** License & Deal Structuring | VID + SCN + REF | Scenario |
| **PTR-306** CPaaS for Partners | VID + DEM | Demo-driven |
| **PTR-401** Building a Rainbow Practice | VID + CAS | Case-based |
| **PTR-402** Pre-Sales Excellence | VID + SCN + DEM | Scenario |
| **PTR-403** Customer Success for Partners | VID + CAS + REF | Case-based |
| **PTR-404** Certification Assessment | ASM | Assessment |

### DEVELOPER TRACK — Content Breakdown

| Module | Content Blocks | Primary Type |
|---|---|---|
| **DEV-101** CPaaS Architecture | VID + INF + REF | Conceptual |
| **DEV-102** Environment Setup | VID + LAB | Hands-on |
| **DEV-103** First Application | LAB + QIZ | Hands-on |
| **DEV-104** Authentication & Security | VID + LAB + REF | Hands-on |
| **DEV-201** REST API Deep Dive | VID + LAB + REF | Hands-on |
| **DEV-202** Web SDK | VID + LAB + QIZ | Hands-on |
| **DEV-203** Node.js SDK | VID + LAB + QIZ | Hands-on |
| **DEV-204** S2S API & Webhooks | VID + LAB | Hands-on |
| **DEV-205** Building Chatbots | VID + LAB + QIZ | Hands-on |
| **DEV-301** Telephony APIs | VID + LAB | Hands-on |
| **DEV-302** IoT Integration | VID + LAB + CAS | Hands-on |
| **DEV-303** Mobile SDKs | VID + LAB | Hands-on |
| **DEV-304** C# SDK | VID + LAB | Hands-on |
| **DEV-305** CLI & Admin Automation | VID + LAB + REF | Hands-on |
| **DEV-401** Architecture Best Practices | VID + CAS + REF | Case-based |
| **DEV-402** Contributing to Ecosystem | VID | Conceptual |
| **DEV-403** Certification Assessment | ASM | Assessment |

---

## PART C: MODULE DEPENDENCY GRAPH

Dependencies flow **top → bottom**. A module can only be started after its prerequisites are completed.

### Support Track
```
SUP-101 ──→ SUP-102 ──→ SUP-103 ──→ SUP-104
                                        │
              ┌─────────────────────────┤
              ↓           ↓             ↓
           SUP-201    SUP-203       SUP-204
              │           │             │
              ↓           ↓             ↓
           SUP-301    SUP-304       SUP-305
              │           │             │
              └─────────┬─┘             │
                        ↓               ↓
                     SUP-306        SUP-401
                        │               │
                        └───────┬───────┘
                                ↓
                            SUP-404
                         (Certification)

SUP-105 ←── independent (can be taken anytime after SUP-101)
SUP-202 ←── requires SUP-102
SUP-205, SUP-206 ←── require SUP-104
SUP-302, SUP-303 ←── require SUP-202
SUP-402, SUP-403 ←── require SUP-401
```

### Customer Success Track
```
CS-101 ──→ CS-102 ──→ CS-103 ──→ CS-104
                         │           │
              ┌──────────┤           │
              ↓          ↓           ↓
           CS-201     CS-203      CS-205
              │          │           │
              ↓          ↓           ↓
           CS-301     CS-303      CS-306
              │          │           │
              └────────┬─┘           │
                       ↓             ↓
                    CS-402        CS-306
                       │             │
                       └──────┬──────┘
                              ↓
                          CS-404
                       (Certification)

CS-202 ←── requires CS-102
CS-204, CS-206 ←── require CS-103
CS-302, CS-304, CS-305 ←── require CS-201
CS-307 ←── requires CS-302
CS-401, CS-403 ←── require CS-402 or CS-306
```

### Executive Track
```
EXEC-101 ──→ EXEC-102 ──→ EXEC-103 ──→ EXEC-104
                              │              │
                    ┌─────────┤              │
                    ↓         ↓              ↓
                EXEC-201  EXEC-203       EXEC-202
                    │         │              │
                    ↓         ↓              ↓
                EXEC-302  EXEC-301       EXEC-303
                    │         │              │
                    └────┬────┘              │
                         ↓                   ↓
                     EXEC-401            EXEC-402
                         │                   │
                         └────────┬──────────┘
                                  ↓
                              EXEC-403
                           (Certification)

EXEC-204, EXEC-304 ←── require EXEC-102
```

### Partner Track
```
PTR-101 ──→ PTR-102 ──→ PTR-103 ──→ PTR-104
               │            │
    ┌──────────┤            │
    ↓          ↓            ↓
PTR-201    PTR-204      PTR-203
    │          │            │
    ↓          ↓            ↓
PTR-301    PTR-303      PTR-302
    │          │            │
    ↓          ↓            ↓
PTR-304    PTR-305      PTR-302
    │          │            │
    └────┬─────┘            │
         ↓                  ↓
     PTR-401            PTR-402
         │                  │
         └────────┬─────────┘
                  ↓
              PTR-404
           (Certification)

PTR-205, PTR-206 ←── require PTR-102
PTR-306 ←── requires PTR-201
PTR-403 ←── requires PTR-401
```

### Developer Track
```
DEV-101 ──→ DEV-102 ──→ DEV-103 ──→ DEV-104
                            │
              ┌─────────────┼─────────────┐
              ↓             ↓             ↓
           DEV-201       DEV-202       DEV-205
              │             │             │
              ↓             ↓             ↓
           DEV-204       DEV-303       DEV-302
              │             │             │
              └─────────────┼─────────────┘
                            ↓
                        DEV-401
                            ↓
                        DEV-403
                     (Certification)

DEV-203 ←── requires DEV-104
DEV-301 ←── requires DEV-201
DEV-304 ←── requires DEV-104
DEV-305 ←── requires DEV-104
DEV-402 ←── requires DEV-401
```

---

## PART D: CONTENT DELIVERY MATRIX

| Content Type | Self-Paced | Instructor-Led | Blended | On-Demand |
|---|---|---|---|---|
| VID (Video) | Primary | Supplement | Supplement | Primary |
| INT (Interactive) | Primary | Demo | Primary | Primary |
| SCN (Scenario) | Primary | Facilitated | Primary | Primary |
| LAB (Hands-On) | Available | Primary | Primary | Available |
| QIZ (Quiz) | Primary | N/A | Primary | Primary |
| CAS (Case Study) | Available | Primary | Primary | Available |
| REF (Reference) | Download | Handout | Download | Download |
| DEM (Demo Script) | Self-practice | Primary | Primary | Self-practice |
| INF (Infographic) | Download | Display | Download | Download |
| ASM (Assessment) | Primary | Proctored option | Primary | Primary |

---

## PART E: ESTIMATED CONTENT PRODUCTION

| Content Type | Count (all tracks) | Avg. Production Time | Total Effort |
|---|---|---|---|
| VID | ~75 videos | 8h per video | ~600h |
| INT | ~18 walkthroughs | 16h per walkthrough | ~288h |
| SCN | ~20 scenarios | 12h per scenario | ~240h |
| LAB | ~22 labs | 20h per lab | ~440h |
| QIZ | ~25 quizzes | 4h per quiz | ~100h |
| CAS | ~28 case studies | 6h per case | ~168h |
| REF | ~22 reference cards | 3h per card | ~66h |
| DEM | ~12 demo scripts | 8h per script | ~96h |
| INF | ~15 infographics | 6h per infographic | ~90h |
| ASM | 5 certification exams | 16h per exam | ~80h |
| **TOTAL** | **~242 content pieces** | | **~2,168h** |
