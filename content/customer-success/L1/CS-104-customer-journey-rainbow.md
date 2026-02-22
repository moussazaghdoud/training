# CS-104: The Customer Journey with Rainbow

---

| Field              | Value                                                        |
|--------------------|--------------------------------------------------------------|
| **Module ID**      | CS-104                                                       |
| **Title**          | The Customer Journey with Rainbow                            |
| **Track**          | Customer Success                                             |
| **Level**          | L1 — Foundation                                              |
| **Duration**       | 45 minutes                                                   |
| **Content Types**  | VID + INF + CAS                                              |
| **Prerequisites**  | CS-103                                                       |

## Learning Objectives

By the end of this module, you will be able to:

1. Describe the four phases of the Rainbow customer lifecycle: Onboarding, Adoption, Expansion, and Renewal.
2. Define and track success metrics for each lifecycle phase.
3. Identify adoption depth indicators that distinguish surface-level usage from deep platform engagement.
4. Recognize expansion triggers that signal a customer is ready for upsell (tier upgrades, additional sites, connectors, Rainbow Edge).
5. Detect early churn risk signals and apply intervention strategies.
6. Structure a Quarterly Business Review (QBR) using Rainbow-specific data points.

---

## Lesson Content

### Section 1: The Customer Lifecycle Model

![video: The Rainbow Customer Journey — Lifecycle Overview](rainbow-customer-lifecycle)

Customer Success for Rainbow follows a four-phase lifecycle model. Each phase has distinct objectives, metrics, and Customer Success activities. Your role is to guide every customer through these phases, ensuring they reach full value realization and renew with confidence.

![diagram: Four-Phase Customer Lifecycle — Onboarding to Renewal](customer-lifecycle-diagram)

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  ONBOARDING  │ -> │  ADOPTION    │ -> │  EXPANSION   │ -> │  RENEWAL     │
│  (Week 1-4)  │    │  (Month 2-6) │    │  (Month 6+)  │    │  (Pre-term)  │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
      │                    │                    │                    │
 Time-to-first-value  DAU/MAU ratio      Connector upsell    Renewal rate
 User activation      Feature depth      Tier upgrade        NPS score
 Admin portal setup   Support tickets    Additional sites    Contract value
```

> **Key Concept:** The customer lifecycle is not a linear process — it is a continuous loop. Renewal conversations begin the day after signing, not 30 days before expiry. Every interaction across all four phases either strengthens or weakens the renewal outcome.

The lifecycle is not strictly linear. Expansion can happen during the adoption phase if the customer sees immediate value. Churn risk can appear at any phase. A renewal conversation actually begins the day after the contract is signed — not 30 days before it expires.

---

### Section 2: Phase 1 — Onboarding (Weeks 1-4)

Onboarding is the most critical phase. Research across SaaS industries consistently shows that customers who achieve "first value" within 14 days have dramatically higher retention rates than those who do not. For Rainbow, the onboarding goal is to get users actively communicating on the platform within the first two weeks.

#### 2.1 Onboarding Success Metrics

| Metric | Definition | Target |
|---|---|---|
| **Time-to-first-value (TTFV)** | Number of days from contract signature to the first meaningful user action (sending a message, making a call) | Less than 14 days |
| **User activation rate** | Percentage of provisioned users who have logged in and performed at least one action | Greater than 70% within 30 days |
| **Admin portal setup completion** | Whether the customer's admin has completed essential setup tasks (directory import, tier assignment, basic configuration) | 100% within Week 2 |
| **Kickoff meeting held** | Whether the CS-led kickoff meeting with key stakeholders happened | Within first 5 business days |

#### 2.2 Onboarding Activities — Step by Step

**Week 1: Foundation**

1. **Kickoff meeting.** Meet the customer's project team — typically IT Director, IT admin, and a business sponsor. Review the deployment scope, user count, tier assignments, and integration requirements. Set expectations for the onboarding timeline.

2. **Admin portal walkthrough.** Guide the customer's admin through the Rainbow Admin Portal. Key tasks:
   - Import or create the corporate directory (user accounts).
   - Assign subscription tiers to user groups (use the mix-and-match strategy from CS-102).
   - Configure company settings (display name, logo, default language).
   - Set up PBX overlay connection if applicable (coordinate with technical deployment team).

3. **Deploy client applications.** Ensure Rainbow clients are installed on target devices. Six platforms to consider:
   - Windows desktop
   - macOS desktop
   - Web browser (no install needed)
   - iOS (App Store)
   - Android (Google Play)
   - Android TV (if applicable)

**Week 2: Activation**

4. **User communication.** Work with the customer's internal communications team to announce Rainbow to end users. Provide:
   - Welcome email template (customize with the customer's branding).
   - Quick-start guide (2-page PDF: how to log in, send a message, make a call, join a Bubble).
   - FAQ document addressing common first-day questions.

5. **Champion identification.** Identify 3-5 "champions" within the customer's organization — early adopters who are enthusiastic about Rainbow and can help drive adoption among their peers. Provide them with additional training and make them your internal allies.

6. **First-value checkpoint.** Monitor user activation metrics. If activation rate is below 50% by Day 14, escalate: schedule an additional training session, identify barriers (technical issues, resistance to change, competing tools), and address them directly.

> **Warning:** Do not wait until Week 4 to check activation metrics. If fewer than 30% of users have logged in by Day 7, the onboarding is at risk. Proactive intervention at Day 7 is far more effective than reactive recovery at Day 30.

**Week 3-4: Stabilization**

7. **Technical validation.** Confirm that all technical integrations are working correctly:
   - PBX overlay calls connecting properly.
   - Microsoft 365 or Google Workspace calendar sync active (Enterprise tier).
   - CRM connectors functioning (Rainbow Connect).
   - Audio/video quality acceptable (no firewall/proxy issues).

8. **Onboarding close-out meeting.** Meet with the project team to review onboarding metrics, address open issues, and transition to the adoption phase. Hand off any unresolved technical issues to support with clear ticket references.

#### 2.3 Common Onboarding Risks

| Risk | Signal | Intervention |
|---|---|---|
| Slow directory import | Admin has not imported users by Day 7 | Offer assisted import; provide CSV template |
| Low activation | Less than 30% activation by Day 14 | Schedule end-user training sessions; identify barriers |
| Competing tools | Users say "we already use Teams/Slack" | Focus on Rainbow's unique features (PBX overlay, Bubbles with external guests, sovereignty) |
| Technical blockers | WebRTC calls failing, audio quality issues | Engage technical support; check firewall/proxy configuration |
| No executive sponsor | IT deploys but business leaders are not engaged | Request a brief intro meeting with a business sponsor; frame Rainbow as a business initiative, not just an IT project |

---

### Section 3: Phase 2 — Adoption (Months 2-6)

Once onboarding is complete, the focus shifts to deepening usage. Adoption is not just about login counts — it is about feature depth. A customer where 100% of users send messages but nobody uses conferencing or AI features is poorly adopted. The goal is progressive feature engagement.

#### 3.1 Adoption Indicators

**Primary metric: DAU/MAU ratio (Daily Active Users / Monthly Active Users)**

This ratio indicates how frequently users engage with Rainbow. Industry benchmarks:

| DAU/MAU Ratio | Interpretation |
|---|---|
| Below 20% | Low engagement — users log in a few times per month. Risk of churn. |
| 20-40% | Moderate engagement — users log in weekly. Acceptable but room for growth. |
| 40-60% | Good engagement — users log in most days. Platform is becoming a daily tool. |
| Above 60% | Excellent engagement — Rainbow is embedded in daily workflows. Low churn risk. |

**Secondary metric: Feature depth**

Feature depth tracks whether users are engaging with progressively more advanced features over time. The healthy adoption sequence is:

```
Messaging (Month 1) -> Calling (Month 2) -> Conferencing (Month 3) -> Integrations (Month 4+)
```

| Depth Level | Features Used | Interpretation |
|---|---|---|
| Level 1 — Surface | Messaging, presence | Users treat Rainbow as a chat tool. Minimal value extraction. |
| Level 2 — Communication | Messaging + P2P calls + softphone | Users are communicating but not collaborating. |
| Level 3 — Collaboration | Messaging + calls + conferencing + screen sharing + Bubbles | Users are collaborating actively. Good adoption. |
| Level 4 — Embedded | All above + AI features + CRM connectors + Teams integration | Rainbow is embedded in business workflows. Excellent adoption. Maximum value. |

#### 3.2 Driving Adoption Deeper

**Strategy 1: Feature discovery campaigns.**
Most users start with messaging because it is familiar. They do not explore conferencing, AI features, or Bubbles unless prompted. Run periodic "feature discovery" campaigns:
- Month 2: "Did you know you can invite external partners to Bubbles for free?"
- Month 3: "Try AI transcription in your next team meeting — here is how to enable it."
- Month 4: "Connect Rainbow to your CRM for one-click calling — setup takes 10 minutes."

**Strategy 2: Use case workshops.**
Hold a 30-minute virtual workshop with a department to demonstrate how Rainbow solves a specific problem they face. Examples:
- Sales team: "Close deals faster with Rainbow Connect" — demo click-to-call and automatic CRM logging.
- Project managers: "Run better meetings with AI transcription" — demo action point extraction.
- Operations: "Replace your IVR vendor with Rainbow Hub" — demo call routing and dashboards.

**Strategy 3: Champion enablement.**
Your onboarding champions are your adoption multipliers. Provide them with:
- Early access to new features.
- Monthly check-in calls to gather feedback.
- A private Bubble where champions across departments can share tips and success stories.
- Recognition from leadership (mention them in QBRs as adoption leaders).

**Strategy 4: Executive engagement.**
If adoption stalls, it is often because business leaders have not endorsed Rainbow publicly. Request a brief email from the CEO or department head endorsing Rainbow as the company's collaboration platform. Executive sponsorship has a measurable impact on adoption rates.

#### 3.3 Adoption Health Scoring

Create a simple health score for each customer based on adoption metrics:

| Health Indicator | Green (Healthy) | Yellow (At Risk) | Red (Critical) |
|---|---|---|---|
| DAU/MAU ratio | Above 40% | 20-40% | Below 20% |
| Feature depth | Level 3-4 | Level 2 | Level 1 |
| Support tickets | Decreasing trend | Stable | Increasing trend |
| Executive sponsor engaged | Yes, active in QBRs | Passive | No sponsor identified |
| User activation | Above 80% | 60-80% | Below 60% |

A customer with two or more "Red" indicators requires immediate attention: schedule a call, identify the root cause, and build a recovery plan.

> **Tip:** Build a simple dashboard or spreadsheet that tracks health scores for all your accounts. Review it weekly. The goal is to catch Yellow-to-Red transitions before they become churn conversations — early intervention has a 3x higher success rate than late-stage recovery.

---

### Section 4: Phase 3 — Expansion (Month 6+)

Expansion is where Customer Success creates revenue growth. Once a customer is well-adopted, there are natural opportunities to expand the Rainbow deployment. Expansion is not "selling" — it is helping the customer get more value from a platform they already trust.

#### 4.1 Expansion Triggers

| Trigger | Signal | Expansion Opportunity |
|---|---|---|
| **New use case emerges** | Department asks about a feature they do not have | Tier upgrade (e.g., Business to Enterprise for conferencing) |
| **CRM adoption** | Sales team starts asking about click-to-call | Rainbow Connect license addition |
| **Sovereignty requirement** | CISO raises data residency concerns for specific data | Rainbow Edge deployment for sensitive departments |
| **New site or subsidiary** | Company opens a new office or acquires a company | Additional user licenses and potential PBX overlay for the new site |
| **Telephony modernization** | Customer plans to decommission old PBX hardware | Migration to Rainbow Hub for cloud-native telephony |
| **Microsoft Teams deployment** | Customer deploys Teams for collaboration | Teams Direct Routing through Rainbow for telephony |
| **AI interest** | Managers ask about meeting transcription | Enterprise tier upgrade for AI features |
| **Contact center need** | Customer service team needs IVR and call dashboards | Rainbow Hub with IVR and call statistics |
| **Developer project** | IT team wants to build custom integrations | CPaaS API access, developer sandbox |

#### 4.2 Expansion Conversation Framework

When you identify an expansion trigger, follow this approach:

1. **Validate the need.** Do not pitch a product. Ask questions: "I noticed your marketing team is running 20+ conferences a week but they are on Business tier. Are they hitting limitations?" Let the customer articulate the problem.

2. **Connect to outcomes.** Frame the expansion in business terms: "If your sales team could call directly from Salesforce with automatic logging, how much time would that save per rep per day?"

3. **Quantify the value.** Use real data from the customer's Rainbow usage: "Your team ran 85 conferences last month. With AI transcription, that is 85 meetings where action points are captured automatically instead of manually."

4. **Propose a pilot.** Do not propose a full rollout. Suggest a 30-day pilot with a small group: "Let us enable Rainbow Connect for 10 of your sales reps for 30 days and measure the impact on CRM data quality."

5. **Measure and expand.** After the pilot, present results and propose broader rollout.

#### 4.3 Expansion Metrics

| Metric | Definition |
|---|---|
| **Net Revenue Retention (NRR)** | Revenue from existing customers compared to the same period last year, including expansions and churn. Target: above 110%. |
| **Expansion revenue per account** | Additional revenue generated from tier upgrades, add-ons, and new licenses. |
| **Connector attach rate** | Percentage of accounts using at least one connector (CRM, Teams, M365). Target: above 30%. |
| **Multi-site penetration** | Percentage of multi-site customers with Rainbow deployed at all sites. |

---

### Section 5: Churn Risk Detection

Churn does not happen suddenly. It is preceded by warning signals that a vigilant Customer Success Manager can detect weeks or months in advance.

#### 5.1 Churn Risk Signals

| Signal | Severity | What It Means |
|---|---|---|
| **Declining usage** | High | DAU/MAU ratio dropping over 2+ months. Users are drifting away. |
| **Support ticket spikes** | Medium-High | Increasing technical issues signal platform frustration. |
| **Competitive evaluation mentions** | Critical | Customer mentions evaluating Teams, Zoom, or RingCentral. This is an urgent signal. |
| **Executive sponsor departure** | High | The person who championed Rainbow internally leaves the company. New leadership may not value the platform. |
| **Budget pressure** | Medium | Customer requests cost reduction discussions. May lead to license downgrades or non-renewal. |
| **Low QBR engagement** | Medium | Customer cancels QBRs or sends junior staff. Indicates Rainbow is not a strategic priority. |
| **Feature requests not met** | Medium | Customer repeatedly asks for features that Rainbow does not support. Frustration builds over time. |
| **New IT leadership** | Medium-High | A new CIO or IT Director may bring existing vendor relationships (e.g., they used Teams at their previous company). |

#### 5.2 Churn Intervention Playbook

**When you detect a risk signal:**

1. **Acknowledge immediately.** Do not wait for the next scheduled QBR. Reach out within 48 hours: "I noticed your team's usage has dropped significantly this month. I would like to understand what is happening and how we can help."

2. **Diagnose the root cause.** Use open-ended questions:
   - "What has changed in your team's workflows recently?"
   - "Are there specific frustrations users have expressed about Rainbow?"
   - "Have you started evaluating other tools? I would love to understand what you are looking for."

3. **Build a recovery plan.** Based on the root cause, create a 30-60-90 day recovery plan:
   - **Day 1-30:** Address immediate technical issues, re-engage executive sponsor, schedule training refreshers.
   - **Day 31-60:** Demonstrate new value — enable AI features, pilot a new connector, show adoption improvements.
   - **Day 61-90:** Conduct a formal QBR with ROI data, confirm that usage trends have reversed.

4. **Escalate if needed.** If the customer is actively evaluating competitors, escalate to your CS leadership and account executive. A joint response (CS + Sales + Product) may be needed to retain the account.

#### 5.3 The "Why Not Teams?" Churn Scenario

The most common competitive churn scenario for Rainbow is migration to Microsoft Teams. When this happens:

- **Do not panic.** Teams is a collaboration tool. It does not replace Rainbow's telephony, sovereignty, PBX overlay, or CPaaS capabilities.
- **Ask what is driving the evaluation.** Often it is pressure from Microsoft enterprise agreements, not dissatisfaction with Rainbow.
- **Present the coexistence model.** Show how Rainbow and Teams complement each other (Teams Direct Routing, telephony through Rainbow, sovereignty for sensitive departments).
- **Quantify switching costs.** Migrating from Rainbow to Teams involves: new telephony infrastructure (SBC deployment), loss of PBX overlay, loss of CRM connectors, loss of AI features, loss of data sovereignty. Make these costs visible.

---

### Section 6: Quarterly Business Reviews (QBRs)

The QBR is the most important recurring touchpoint between Customer Success and the customer. It is not a product demo. It is a strategic conversation about value delivered, challenges faced, and opportunities ahead.

#### 6.1 QBR Structure

A well-structured Rainbow QBR follows this agenda (45-60 minutes total):

| Section | Duration | Content |
|---|---|---|
| 1. Executive Summary | 5 min | Headline metrics: adoption, usage, ROI highlights. Start with good news. |
| 2. Usage Analytics | 10 min | DAU/MAU trend, feature depth progression, tier utilization, top Bubbles, conferencing stats. |
| 3. Value Delivered | 10 min | Quantified business outcomes: travel cost savings, meeting productivity gains, customer response time improvements. |
| 4. Support Review | 5 min | Open tickets, resolved issues, support satisfaction. Show that issues are handled. |
| 5. Roadmap & New Features | 10 min | Upcoming Rainbow features relevant to this customer. Position as continued investment. |
| 6. Action Plan | 10 min | Agreed-upon actions for the next quarter: adoption campaigns, feature enablement, expansion pilots. |
| 7. Open Discussion | 5-10 min | Customer's questions, concerns, strategic plans that might affect Rainbow usage. |

#### 6.2 QBR Data Points (Rainbow-Specific)

| Data Point | Where to Get It | Why It Matters |
|---|---|---|
| Active users (DAU/MAU) | Admin Portal analytics | Core adoption health metric |
| Messages sent (trend) | Usage analytics | Indicates daily engagement depth |
| Calls made (P2P + conference) | Usage analytics | Indicates communication adoption |
| Conference count and duration | Usage analytics | Measures meeting adoption and ROI potential |
| AI feature activation | Feature usage report | Tracks progress toward deep adoption |
| Tier distribution | Subscription dashboard | Validates mix-and-match optimization |
| License utilization | Subscription dashboard | Identifies unused licenses (cost waste) |
| Support ticket volume and trend | Support system | Indicates platform stability / user satisfaction |
| Bubble activity | Usage analytics | Measures collaboration depth |
| External guest participation | Usage analytics | Shows cross-company collaboration value |

#### 6.3 QBR Best Practices

- **Always lead with value.** Start the QBR with a concrete number: "Your teams ran 340 conferences last quarter, saving an estimated EUR 45,000 in travel costs."
- **Bring data, not opinions.** Every statement should be backed by a metric from the dashboard.
- **Listen more than you talk.** The QBR is your best opportunity to learn what the customer cares about. Ask questions. Take notes. Follow up.
- **End with a joint action plan.** Both you and the customer should leave with specific commitments for the next quarter.
- **Invite the right people.** Push for executive attendance at least every other QBR. If only the IT admin attends, Rainbow risks being seen as a technical tool rather than a strategic platform.

> **Info:** The Rainbow Admin Portal provides exportable usage analytics that you can pull directly into your QBR slides. Navigate to Analytics > Usage Reports and export the date range covering the quarter. This gives you DAU/MAU trends, messaging volume, conference counts, and feature activation data in a ready-to-present format.

---

## Key Concepts Summary

| Concept | Definition |
|---|---|
| **Time-to-First-Value (TTFV)** | Days from contract signature to first meaningful user action. Target: under 14 days. |
| **User Activation Rate** | Percentage of provisioned users who log in and perform at least one action within 30 days. |
| **DAU/MAU Ratio** | Daily active users divided by monthly active users; measures engagement frequency. Above 40% is healthy. |
| **Feature Depth** | Progression from basic messaging to full platform embedding (messaging -> calling -> conferencing -> integrations). |
| **Expansion Triggers** | Signals that a customer is ready for upsell: new sites, CRM needs, sovereignty requirements, Teams deployment. |
| **Churn Risk Signals** | Warning indicators: declining usage, support spikes, competitive evaluation mentions, executive sponsor departure. |
| **QBR** | Quarterly Business Review — structured strategic conversation reviewing value, usage, and future plans. |

---

## Practice Exercise

**Scenario: QBR Preparation**

You are preparing for a QBR with a manufacturing company (1,200 users, Enterprise tier, deployed 9 months ago). Here is the data from the admin portal:

| Metric | Q1 (3 months ago) | Q2 (current quarter) |
|---|---|---|
| DAU/MAU ratio | 45% | 32% |
| Messages sent per day | 4,200 | 3,100 |
| Conferences per week | 65 | 42 |
| AI transcription activations | 35 | 12 |
| Support tickets | 8 | 22 |
| Active Bubbles | 85 | 60 |
| User activation (cumulative) | 88% | 82% (some users deactivated) |

**Tasks:**

1. Analyze this data. What is the overall health status of this customer? Identify the specific risk signals.
2. Prepare the "Executive Summary" slide for the QBR — three sentences maximum that honestly assess the situation while maintaining a constructive tone.
3. Draft three specific actions you would propose in the "Action Plan" section to reverse the declining trends.
4. The IT Director mentioned casually in an email that the new COO "is a big Microsoft fan." How do you address this in the QBR without being confrontational?
5. What expansion opportunity might exist despite the declining metrics? (Hint: consider what the declining AI adoption might tell you about user needs versus feature awareness.)

---

## Knowledge Check

**Question 1:** What is the target time-to-first-value (TTFV) during Rainbow onboarding?

- A) Less than 24 hours
- B) Less than 14 days
- C) Less than 90 days
- D) There is no target — it depends on the customer

**Correct Answer:** B — The onboarding target is to have users achieving first value (sending messages, making calls) within 14 days of contract signature. Research shows that customers who activate quickly have significantly higher retention rates.

---

**Question 2:** A customer's DAU/MAU ratio has been below 20% for two consecutive months. What does this indicate?

- A) The customer is using Rainbow efficiently and does not need to log in daily.
- B) Low engagement — users are drifting away from the platform. This is a churn risk signal.
- C) The customer needs more licenses.
- D) This is normal for Enterprise-tier customers.

**Correct Answer:** B — A DAU/MAU ratio below 20% indicates that most users only log in a few times per month. This signals low engagement and is a warning that the customer may not be getting enough value from Rainbow to justify renewal.

---

**Question 3:** Which of the following is the MOST critical churn risk signal?

- A) A support ticket about audio quality
- B) A customer mentioning they are evaluating Microsoft Teams as a replacement
- C) A request for a new feature
- D) A decline in Bubble activity

**Correct Answer:** B — A customer actively evaluating a competitor is the most critical churn risk signal. It requires immediate, escalated response from CS, Sales, and potentially Product teams.

---

**Question 4:** What is the correct adoption depth progression for a healthy Rainbow customer?

- A) Conferencing -> Messaging -> Telephony -> AI
- B) AI -> Conferencing -> Messaging -> Calls
- C) Messaging -> Calling -> Conferencing -> Integrations (CRM, AI, Teams)
- D) CRM Integration -> Telephony -> Messaging -> Conferencing

**Correct Answer:** C — Healthy adoption follows a natural progression: users start with messaging (familiar, low barrier), then adopt calling (softphone, P2P), then conferencing (team meetings), and finally integrate with business systems (CRM connectors, AI features, Teams integration). Each level deepens engagement and increases switching costs.

---

**Question 5:** In a QBR, what should you always lead with?

- A) A list of open support tickets.
- B) A request for the customer to upgrade their tier.
- C) A concrete value metric — a number that demonstrates the business impact Rainbow has delivered.
- D) A demo of new Rainbow features.

**Correct Answer:** C — Always lead with value. Start with a concrete, quantified business outcome: travel savings, meeting productivity, response time improvements. This frames the entire QBR around the value Rainbow delivers, not the problems it might have.
