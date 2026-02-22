# SALES TRACK -- Silver (Certified) Assessment

**Assessment ID:** SLS-CERT-01
**Passing Score:** 70% (18 of 25)
**Total Questions:** 25
**Time Limit:** 45 minutes

**Domain Weighting:**
- Product Knowledge: 20% (5 questions)
- Competitive Differentiation: 25% (6 questions)
- Demo & Discovery: 25% (6 questions)
- Security & Compliance Selling: 15% (4 questions)
- Deal Mechanics: 15% (4 questions)

---

## Domain 1: Product Knowledge

### Question 1

```yaml
id: SLS-CERT-01-Q01
type: multiple_choice
difficulty: easy
domain: Product Knowledge
question: >
  Which Rainbow subscription tier provides API access, developer sandbox,
  webhooks, and the bot framework for embedding communication capabilities
  into custom applications?
options:
  a: Rainbow Essential
  b: Rainbow Business
  c: Rainbow Enterprise
  d: Rainbow Hub
correct_answer: d
explanation: >
  Rainbow Hub is the subscription tier specifically designed for CPaaS
  (Communications Platform as a Service) use cases. It provides API access,
  developer sandbox, webhooks, and the bot framework that enable customers
  to embed Rainbow communication capabilities into their own applications.
```

### Question 2

```yaml
id: SLS-CERT-01-Q02
type: multiple_choice
difficulty: medium
domain: Product Knowledge
question: >
  A prospect asks about Rainbow's AI meeting features. Which of the
  following is included in the Enterprise tier at no additional per-meeting
  or per-transcription charge?
options:
  a: Only AI noise cancellation
  b: AI transcription, meeting summary, and action point extraction
  c: AI transcription only — summary and action points require a separate AI add-on license
  d: AI features are not available in Rainbow and require a third-party integration
correct_answer: b
explanation: >
  Rainbow Enterprise tier includes AI transcription, AI meeting summary,
  AI action point extraction, and AI noise cancellation at no additional
  cost. There is no per-meeting or per-transcription charge — all AI
  features are bundled into the Enterprise subscription, which is a key
  competitive differentiator against Microsoft Teams Copilot ($30/user/month).
```

### Question 3

```yaml
id: SLS-CERT-01-Q03
type: true_false
difficulty: easy
domain: Product Knowledge
question: >
  Rainbow supports PBX overlay with OmniPCX Enterprise, OXO Connect, and
  third-party SIP PBX systems such as Cisco CUCM, Avaya Aura, and Mitel
  MiVoice.
options:
  a: "True"
  b: "False"
correct_answer: a
explanation: >
  Rainbow's PBX overlay capability works with ALE native PBX systems
  (OmniPCX Enterprise and OXO Connect) as well as third-party SIP PBX
  systems including Cisco CUCM, Avaya Aura, Mitel MiVoice, and Unify
  OpenScape. ALE native PBX systems get the deepest integration (full
  CTI, presence sync, simultaneous ring), while third-party SIP systems
  get core overlay features via standard SIP trunking.
```

### Question 4

```yaml
id: SLS-CERT-01-Q04
type: multiple_choice
difficulty: medium
domain: Product Knowledge
question: >
  A prospect needs to deploy Rainbow in an environment where data must never
  leave their premises and there can be no cloud dependency. Which deployment
  model should you recommend?
options:
  a: Rainbow Public Cloud with EU data residency
  b: Rainbow Hybrid with PBX overlay
  c: Rainbow Edge (private deployment)
  d: Rainbow Business tier with encryption enabled
correct_answer: c
explanation: >
  Rainbow Edge is a private deployment of the entire Rainbow platform on
  customer-owned or partner-hosted infrastructure. All data processing,
  storage, and communication remain on-premises with zero cloud dependency.
  This is the correct recommendation for government, defense, and classified
  environments where data must never leave the organization's premises.
```

### Question 5

```yaml
id: SLS-CERT-01-Q05
type: multiple_choice
difficulty: medium
domain: Product Knowledge
question: >
  How many data centers does Rainbow operate globally, and what is the
  purpose of the data center region selection at company creation?
options:
  a: 5 data centers; the region selection determines the nearest CDN for content delivery
  b: 12 data centers; the region selection determines the user interface language
  c: 22 data centers; the region selection determines where all company data is stored and processed exclusively
  d: 22 data centers; the region selection is advisory and data may be replicated across regions for redundancy
correct_answer: c
explanation: >
  Rainbow operates 22 data centers globally. When a company is created, the
  administrator selects a data center region, and all data for that company
  is stored and processed exclusively in that region. There is no
  cross-region data replication — this guarantees data sovereignty and is
  a key selling point for European customers concerned about the CLOUD Act
  and Schrems II.
```

---

## Domain 2: Competitive Differentiation

### Question 6

```yaml
id: SLS-CERT-01-Q06
type: multiple_choice
difficulty: medium
domain: Competitive Differentiation
question: >
  A prospect says: "We already pay for Microsoft 365 E5, so Teams Phone
  is essentially free. Why should we pay for Rainbow?" What is the most
  effective response?
options:
  a: Explain that Rainbow has more features than Teams
  b: Offer a larger discount to match the perceived "free" pricing
  c: Reframe by calculating the true total cost including Calling Plans per country, PBX replacement cost, and compare against Rainbow's PBX overlay which preserves existing infrastructure
  d: Suggest the prospect replace Microsoft 365 with Rainbow entirely
correct_answer: c
explanation: >
  The "Teams is free" objection is the most common competitive challenge.
  The correct response is to reframe from unit cost to total cost of
  ownership. Teams Calling Plans cost $8-12/user/month per country, PBX
  replacement costs $300-500K for a multi-site deployment, and Rainbow's
  PBX overlay avoids these costs entirely. The goal is to show that
  Rainbow's total cost is actually lower when all factors are included.
```

### Question 7

```yaml
id: SLS-CERT-01-Q07
type: multiple_choice
difficulty: hard
domain: Competitive Differentiation
question: >
  Which competitive advantage is unique to Rainbow and cannot be matched
  by any major UCaaS competitor (Microsoft Teams, RingCentral, Zoom Phone,
  or Cisco Webex Calling)?
options:
  a: AI-powered meeting transcription
  b: Mobile application availability on iOS and Android
  c: PBX overlay capability that adds cloud collaboration without replacing the existing PBX
  d: Integration with CRM platforms like Salesforce
correct_answer: c
explanation: >
  PBX overlay is Rainbow's unique competitive differentiator. No major
  UCaaS competitor offers the ability to add cloud collaboration on top of
  an existing PBX without replacing it. Microsoft Teams requires Direct
  Routing or Calling Plans (no PBX overlay), RingCentral requires full PBX
  replacement, Zoom Phone has limited PBX integration, and Cisco Webex
  Calling is tied to the Cisco hardware ecosystem. PBX overlay should
  be led in every deal where the prospect has existing PBX infrastructure.
```

### Question 8

```yaml
id: SLS-CERT-01-Q08
type: scenario
difficulty: hard
domain: Competitive Differentiation
question: >
  Scenario: A manufacturing company with 2,000 users has OmniPCX Enterprise
  at their main site and Cisco CUCM at an acquired subsidiary. RingCentral
  is also in the evaluation. The prospect asks: "Can you support both PBX
  systems without replacing either?" What is the correct positioning?
options:
  a: Explain that Rainbow only supports ALE PBX systems and cannot integrate with Cisco CUCM
  b: Position Rainbow's PBX overlay for OmniPCX (native, full feature) and for Cisco CUCM (SIP-based, core features), noting that RingCentral requires both PBX systems to be decommissioned
  c: Recommend replacing the Cisco CUCM with an OmniPCX Enterprise before deploying Rainbow
  d: Suggest deploying Rainbow only at the OmniPCX site and a different solution at the Cisco site
correct_answer: b
explanation: >
  Rainbow supports PBX overlay for both ALE native PBX systems (full
  integration) and third-party SIP PBX systems like Cisco CUCM (core
  features via SIP trunking). The competitive advantage is that Rainbow
  overlays both PBX systems without replacing either, while RingCentral
  would require decommissioning both — a cost of $600K-$1M. This multi-PBX
  overlay capability is a powerful differentiator in acquisition scenarios.
```

### Question 9

```yaml
id: SLS-CERT-01-Q09
type: multiple_choice
difficulty: medium
domain: Competitive Differentiation
question: >
  When selling against Zoom Phone, which Rainbow advantage resonates most
  strongly with European enterprise buyers in regulated industries?
options:
  a: Rainbow has a more modern user interface than Zoom
  b: Rainbow offers lower per-user pricing than Zoom Phone
  c: Rainbow provides European data sovereignty, compliance certifications (HDS, ANSSI CSPN, ENS), and 40+ years of ALE telephony heritage
  d: Rainbow supports more video conferencing participants than Zoom
correct_answer: c
explanation: >
  Zoom's weaknesses in the European enterprise market are data privacy
  concerns (past security incidents, US-headquartered), lack of European
  compliance certifications, and limited telephony heritage. Rainbow's
  counter-positioning emphasizes European data sovereignty, specific
  certifications for healthcare (HDS), French government (ANSSI CSPN),
  and Spanish government (ENS), plus the credibility of ALE's 40+ years
  in enterprise telephony.
```

### Question 10

```yaml
id: SLS-CERT-01-Q10
type: multiple_choice
difficulty: medium
domain: Competitive Differentiation
question: >
  What is the recommended competitive positioning when a prospect has
  already deployed Microsoft Teams for chat and meetings but needs
  telephony capabilities?
options:
  a: Position Rainbow as a full replacement for Teams
  b: Position Rainbow as complementary to Teams — Rainbow for telephony, PBX overlay, and compliance recording, connected via Direct Routing
  c: Advise the prospect to use Teams Phone with Calling Plans instead of Rainbow
  d: Position Rainbow as a backup system in case Teams goes down
correct_answer: b
explanation: >
  The Teams Coexistence play positions Rainbow as complementary to Teams
  rather than competitive. Rainbow handles telephony (PBX overlay, IVR,
  advanced call routing), compliance recording, and data sovereignty, while
  Teams handles chat and meetings. The two platforms connect via Direct
  Routing. This approach expands the addressable market by converting
  competitive deals into complementary ones, with a 50% win rate.
```

### Question 11

```yaml
id: SLS-CERT-01-Q11
type: true_false
difficulty: easy
domain: Competitive Differentiation
question: >
  US-headquartered UCaaS vendors such as RingCentral, Zoom, and Cisco are
  subject to the US CLOUD Act, which allows US law enforcement to request
  data stored anywhere in the world. Rainbow (built by ALE, headquartered
  in France) is not subject to the US CLOUD Act.
options:
  a: "True"
  b: "False"
correct_answer: a
explanation: >
  The US CLOUD Act applies to US-headquartered companies and gives US law
  enforcement the ability to compel disclosure of data regardless of where
  it is stored. Alcatel-Lucent Enterprise is headquartered in France and
  is not subject to the CLOUD Act. This is a significant competitive
  differentiator when selling to European organizations concerned about
  data sovereignty and the implications of Schrems II.
```

---

## Domain 3: Demo & Discovery

### Question 12

```yaml
id: SLS-CERT-01-Q12
type: multiple_choice
difficulty: medium
domain: Demo & Discovery
question: >
  According to the Discovery & Qualification module, what is the recommended
  structure for a 45-minute discovery call?
options:
  a: 45 minutes of product presentation followed by Q&A
  b: 10 minutes business context, 15 minutes current pain, 15 minutes requirements, 5 minutes next steps
  c: 20 minutes company overview, 20 minutes pricing discussion, 5 minutes close
  d: 15 minutes qualification questions, 30 minutes demo
correct_answer: b
explanation: >
  The recommended 45-minute discovery structure is: 10 minutes on business
  context (company, industry, growth plans), 15 minutes on current pain
  (what is broken, missing, or too expensive), 15 minutes on requirements
  (must-have, nice-to-have, dealbreakers), and 5 minutes on next steps.
  This structure ensures that the sales rep understands the prospect's
  situation before presenting any solution.
```

### Question 13

```yaml
id: SLS-CERT-01-Q13
type: multiple_choice
difficulty: hard
domain: Demo & Discovery
question: >
  In the MEDDPICC qualification framework, which element is the most
  critical urgency driver in Rainbow deals and should always be uncovered
  during discovery?
options:
  a: The prospect's annual IT budget cycle
  b: The number of remote workers in the organization
  c: The PBX lease expiration date
  d: The prospect's preferred deployment timeline
correct_answer: c
explanation: >
  The PBX lease expiration date is the most powerful urgency driver in
  Rainbow deals. When a PBX lease expires, the organization faces a binary
  decision: renew the lease (increasing maintenance costs) or replace/
  modernize. Rainbow's PBX overlay offers a third option — overlay and
  extend — that avoids both. A known lease expiration creates a natural
  deadline that prevents the deal from stalling.
```

### Question 14

```yaml
id: SLS-CERT-01-Q14
type: scenario
difficulty: hard
domain: Demo & Discovery
question: >
  Scenario: During discovery, a prospect says "Our communication system
  works fine — we're just exploring options." This indicates the pain is
  latent rather than acute. What is the most effective next step?
options:
  a: Move immediately to a demo to create excitement about Rainbow's features
  b: Send a pricing proposal to give them something concrete to evaluate
  c: Ask implication questions to quantify the hidden cost of the status quo — "What was the cost of the last system outage?" and "How does your current system support mobile workers?"
  d: Disqualify the deal since there is no active pain
correct_answer: c
explanation: >
  When pain is latent ("things work but could be better"), the sales rep
  must use implication questions to help the prospect recognize the hidden
  cost of the status quo. Questions like "What was the cost of the last
  outage?" and "How many minutes per day do users spend on workarounds?"
  convert vague satisfaction into quantified dissatisfaction. Moving to a
  demo or proposal without uncovering pain leads to stalled deals.
```

### Question 15

```yaml
id: SLS-CERT-01-Q15
type: multiple_choice
difficulty: medium
domain: Demo & Discovery
question: >
  When delivering an executive demo (15 minutes), what is the recommended
  narrative structure?
options:
  a: Feature tour → Pricing → Q&A
  b: Company overview → Product overview → Feature list → Pricing
  c: Context (prospect's pain) → Catalyst (Rainbow changes the game) → Contrast (before vs. after) → Commitment (next step)
  d: Technical architecture → Admin portal walkthrough → Integration demo
correct_answer: c
explanation: >
  The recommended demo narrative for executives follows: Context (the
  prospect's current pain, showing you understand their situation),
  Catalyst (the moment Rainbow changes the game), Contrast (before vs.
  after comparison), and Commitment (propose the next step). This
  structure tells a story about the prospect's future rather than touring
  Rainbow's features, and fits within a 15-minute executive attention span.
```

### Question 16

```yaml
id: SLS-CERT-01-Q16
type: multiple_choice
difficulty: medium
domain: Demo & Discovery
question: >
  Which demo scenario is the most powerful for prospects with an existing
  PBX investment?
options:
  a: Demo Scenario E — AI Meeting with live transcription
  b: Demo Scenario A — Remote Worker using mobile DID
  c: Demo Scenario D — PBX overlay showing simultaneous ring on desk phone and softphone
  d: Demo Scenario B — Contact Center with CRM screen pop
correct_answer: c
explanation: >
  For prospects with existing PBX infrastructure, the PBX overlay demo
  (Scenario D) is the most powerful because it shows the prospect
  something their current system cannot do and that no competitor can
  replicate. Seeing a user receive a simultaneous ring on their desk phone
  and Rainbow softphone, answering on the softphone while the desk phone
  gracefully releases, makes PBX overlay tangible and creates the "aha
  moment" that differentiates Rainbow from all competitors.
```

### Question 17

```yaml
id: SLS-CERT-01-Q17
type: multiple_choice
difficulty: easy
domain: Demo & Discovery
question: >
  What is the recommended timeframe for sending a personalized demo
  summary to the prospect after a live demo?
options:
  a: Within 24 hours
  b: Within 2 hours
  c: Within 1 week
  d: Only if the prospect requests it
correct_answer: b
explanation: >
  Post-demo follow-up should be sent within 2 hours of the demo while the
  prospect's enthusiasm is high. The summary should highlight the 3
  features that resonated most based on the prospect's reactions during
  the demo. The prospect's enthusiasm decays rapidly after the demo ends,
  so timely follow-up is critical to maintaining momentum.
```

---

## Domain 4: Security & Compliance Selling

### Question 18

```yaml
id: SLS-CERT-01-Q18
type: multiple_choice
difficulty: medium
domain: Security & Compliance Selling
question: >
  A French hospital network requires their UCaaS platform to be certified
  for hosting patient health data. Which Rainbow certification satisfies
  this requirement?
options:
  a: ISO 27001
  b: SOC 2 Type II
  c: HDS 1.1 (Hébergeur de Données de Santé)
  d: ANSSI CSPN
correct_answer: c
explanation: >
  HDS 1.1 (Hébergeur de Données de Santé) is the French certification
  for hosting healthcare data. Rainbow is certified HDS 1.1, making it
  one of the only UCaaS platforms qualified to host patient data in France.
  This certification is a deal-winning differentiator in the French
  healthcare vertical because competitors like Teams, RingCentral, and
  Zoom lack HDS certification.
```

### Question 19

```yaml
id: SLS-CERT-01-Q19
type: scenario
difficulty: hard
domain: Security & Compliance Selling
question: >
  Scenario: A prospect's CISO asks: "We are evaluating Rainbow and
  RingCentral. Both claim GDPR compliance. What specifically makes Rainbow
  different from a data sovereignty perspective?" What is the strongest
  differentiator to emphasize?
options:
  a: Rainbow offers better encryption algorithms than RingCentral
  b: Rainbow has more security certifications than RingCentral
  c: Rainbow guarantees that data is stored and processed exclusively in the selected EU region with no cross-region replication, and ALE (headquartered in France) is not subject to the US CLOUD Act — unlike RingCentral which is US-headquartered
  d: Rainbow's admin portal has more granular security settings than RingCentral
correct_answer: c
explanation: >
  The strongest data sovereignty differentiator is structural, not
  technical. Rainbow guarantees exclusive data residency in the selected
  region with no cross-region replication, and ALE (French-headquartered)
  is not subject to the US CLOUD Act. RingCentral is US-headquartered and
  subject to the CLOUD Act, which allows US authorities to compel data
  disclosure regardless of where data is stored. This structural difference
  cannot be addressed by technical features alone.
```

### Question 20

```yaml
id: SLS-CERT-01-Q20
type: multiple_choice
difficulty: medium
domain: Security & Compliance Selling
question: >
  When selling data sovereignty to European enterprise buyers, which
  framing approach is most effective?
options:
  a: Fear-based — emphasize that US vendors can spy on their data
  b: Positive — frame sovereignty as a choice ("choose where your data lives") rather than through fear
  c: Technical — present detailed encryption specifications and certificate chains
  d: Ignore sovereignty and focus on features instead
correct_answer: b
explanation: >
  Positive framing ("choose where your data lives") is more effective
  with senior buyers than fear-based framing ("the US government can read
  your data"). Fear-based selling creates anxiety that buyers associate
  with the vendor who delivered the message. Positive framing positions
  Rainbow as empowering the customer to take control of their data,
  which resonates better with executives who value strategic autonomy.
```

### Question 21

```yaml
id: SLS-CERT-01-Q21
type: multiple_choice
difficulty: hard
domain: Security & Compliance Selling
question: >
  A financial services prospect requires MiFID II compliance for call
  recording. Which specific Rainbow capabilities satisfy MiFID II
  requirements?
options:
  a: Basic call recording with manual export
  b: Automated call recording with AES-256 encrypted storage, tamper-evident SHA-256 hash verification, configurable retention (1-7 years), and auditable access trail
  c: Call recording stored on the local PBX
  d: Third-party recording integration via API
correct_answer: b
explanation: >
  MiFID II requires that all trade-related calls are recorded, stored
  securely, protected from tampering, retained for the regulatory period,
  and accessible for audit. Rainbow satisfies all requirements with
  automated recording, AES-256 encrypted storage, SHA-256 tamper-evident
  hashing, configurable retention up to 7 years, and a complete access
  audit trail. This is a built-in capability — no third-party tools are
  required.
```

---

## Domain 5: Deal Mechanics

### Question 22

```yaml
id: SLS-CERT-01-Q22
type: multiple_choice
difficulty: medium
domain: Deal Mechanics
question: >
  A prospect asks for a 25% discount on a 1,000-user Enterprise deal.
  According to negotiation best practices, what should the sales rep do?
options:
  a: Grant the 25% discount to close the deal quickly
  b: Refuse any discount and hold firm on list price
  c: Offer a 12-15% discount in exchange for a 3-year commitment, reference agreement, and case study participation
  d: Offer to reduce the subscription tier to Business to achieve a lower price
correct_answer: c
explanation: >
  Value-based negotiation requires that every concession is reciprocated.
  Rather than granting or refusing the discount outright, the sales rep
  should offer a meaningful discount (12-15%) in exchange for tangible
  commitments — a longer contract term (3 years for pricing predictability),
  a reference agreement (marketing value), and case study participation
  (sales enablement). This protects the deal value while giving the
  prospect a meaningful concession.
```

### Question 23

```yaml
id: SLS-CERT-01-Q23
type: scenario
difficulty: hard
domain: Deal Mechanics
question: >
  Scenario: After a successful POC, the prospect's CFO says: "Your price
  is 18% higher than RingCentral. Match their price or we go with them."
  What is the correct response?
options:
  a: Immediately match RingCentral's price to avoid losing the deal
  b: Walk away from the deal since the prospect is clearly price-focused
  c: Ask to see the RingCentral quote, identify excluded costs (PBX replacement, recording add-on, EU data residency upcharge), and build a true TCO comparison showing Rainbow is actually cheaper on total cost
  d: Offer a 90-day free trial extension to delay the decision
correct_answer: c
explanation: >
  Competitive pricing objections should never be answered with price-matching
  or walking away. The correct approach is to request the competitive quote,
  identify costs that the competitor excludes (PBX replacement, compliance
  add-ons, data residency surcharges), and build a true TCO comparison.
  In most cases, Rainbow's all-inclusive pricing (PBX overlay, recording,
  sovereignty) results in a lower total cost despite a higher unit price.
```

### Question 24

```yaml
id: SLS-CERT-01-Q24
type: multiple_choice
difficulty: medium
domain: Deal Mechanics
question: >
  What is the recommended conversion strategy after a successful
  Proof of Concept (POC)?
options:
  a: Wait for the prospect to contact you with a purchase decision
  b: Extend the POC indefinitely until the prospect is ready to commit
  c: Ensure the economic buyer sees the POC results, present ROI data, and propose converting the POC directly into a production contract with POC-to-production pricing
  d: Ask the technical team to submit a purchase request through procurement
correct_answer: c
explanation: >
  A technically successful POC that does not reach the economic buyer is
  wasted effort. The correct strategy is to schedule a 15-minute executive
  briefing to present POC results and ROI data, then propose converting
  the POC directly into production with favorable pricing. This creates
  momentum from POC success and avoids the common failure mode where
  POC results sit with the technical team without reaching the decision-maker.
```

### Question 25

```yaml
id: SLS-CERT-01-Q25
type: multiple_choice
difficulty: hard
domain: Deal Mechanics
question: >
  An enterprise deal has stalled for 60 days with no progress. According
  to pipeline management best practices, what should the sales rep do?
options:
  a: Continue nurturing the deal with weekly check-in emails
  b: Re-qualify the deal against MEDDPICC criteria — identify which elements have weakened and develop a specific action plan to address each gap, or remove the deal from the pipeline if key elements cannot be re-established
  c: Offer a significant discount to reactivate the deal
  d: Escalate to ALE executive management to pressure the prospect
correct_answer: b
explanation: >
  A deal stalled for 60 days indicates that one or more MEDDPICC elements
  have weakened — the champion may have left, the budget may have been
  redirected, or a competitor may have gained ground. The correct approach
  is to re-qualify against each MEDDPICC element, identify the specific
  gaps, and develop an action plan. If key elements (economic buyer,
  identified pain, champion) cannot be re-established, the deal should be
  removed from the pipeline to maintain forecast accuracy.
```

---

## Answer Key Summary

| Question | Answer | Domain                        | Difficulty |
|----------|--------|-------------------------------|------------|
| Q01      | D      | Product Knowledge             | Easy       |
| Q02      | B      | Product Knowledge             | Medium     |
| Q03      | A      | Product Knowledge             | Easy       |
| Q04      | C      | Product Knowledge             | Medium     |
| Q05      | C      | Product Knowledge             | Medium     |
| Q06      | C      | Competitive Differentiation   | Medium     |
| Q07      | C      | Competitive Differentiation   | Hard       |
| Q08      | B      | Competitive Differentiation   | Hard       |
| Q09      | C      | Competitive Differentiation   | Medium     |
| Q10      | B      | Competitive Differentiation   | Medium     |
| Q11      | A      | Competitive Differentiation   | Easy       |
| Q12      | B      | Demo & Discovery              | Medium     |
| Q13      | C      | Demo & Discovery              | Hard       |
| Q14      | C      | Demo & Discovery              | Hard       |
| Q15      | C      | Demo & Discovery              | Medium     |
| Q16      | C      | Demo & Discovery              | Medium     |
| Q17      | B      | Demo & Discovery              | Easy       |
| Q18      | C      | Security & Compliance Selling | Medium     |
| Q19      | C      | Security & Compliance Selling | Hard       |
| Q20      | B      | Security & Compliance Selling | Medium     |
| Q21      | B      | Security & Compliance Selling | Hard       |
| Q22      | C      | Deal Mechanics                | Medium     |
| Q23      | C      | Deal Mechanics                | Hard       |
| Q24      | C      | Deal Mechanics                | Medium     |
| Q25      | B      | Deal Mechanics                | Hard       |

**Difficulty Distribution:** Easy: 4 | Medium: 12 | Hard: 9
