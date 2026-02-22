# Demo Script: Microsoft Teams Coexistence

> **Duration:** 15-20 minutes
> **Audience:** IT directors, CTO/CIO, collaboration managers, Microsoft-oriented IT teams
> **Prerequisites for Demo Environment:** Rainbow Enterprise account with Teams Direct Routing configured, Microsoft Teams tenant with test users, Rainbow desktop client and Teams client both running, PBX (OXE or OXO) connected via Rainbow PBX agent, test internal and external phone numbers available
> **Last Updated:** February 2026

---

## Pre-Demo Setup Checklist

Before the demo, verify:

- [ ] Rainbow desktop client is logged in and telephony is active
- [ ] Microsoft Teams client is open and signed in with the same test user
- [ ] Direct Routing is configured — Teams is registered as a telephony endpoint in Rainbow
- [ ] PBX agent is connected and showing "Online" in Rainbow Admin Portal
- [ ] A desk phone at the PBX is available for comparison (optional but impactful)
- [ ] A second person is available to place test calls
- [ ] IVR greeting or hunt group is configured on the PBX for demonstration
- [ ] Screen sharing / projection is tested

---

## Demo Flow

### Opening — Setting the Context (3 minutes)

**[Show: Both Rainbow and Teams clients visible side by side on screen]**

**Talking Point:**
"Many organizations we speak with have already invested in Microsoft Teams for collaboration — chat, document sharing, meetings. That makes sense. Teams is excellent at those things. But when it comes to enterprise telephony — connecting to your existing PBX, running an IVR, managing hunt groups, handling advanced call routing — that is where Teams reaches its limits. And that is exactly where Rainbow fits in."

**Talking Point:**
"What I am going to show you is not Rainbow competing with Teams. It is Rainbow completing Teams. Your users keep using Teams for collaboration. Rainbow provides the telephony intelligence underneath. Let me show you how this works in practice."

**Talking Point:**
"This architecture is called Teams Direct Routing. Rainbow acts as the Session Border Controller and telephony platform, connecting your PBX infrastructure to the Teams client. Your users can make and receive business calls directly in Teams, but the call goes through Rainbow and your PBX — which means all your existing telephony features, phone numbers, and call routing stay exactly as they are."

---

### Segment 1: Receiving a Call in Teams via Rainbow (4 minutes)

**[Action: Have the colleague call the test user's business number (the PBX extension)]**

**Talking Point:**
"I am going to receive a business call now. This call is being placed to my regular business number — the one on my business card, assigned by the PBX. Watch what happens."

**[Action: The call rings simultaneously on the Rainbow client AND the Teams client]**

**Talking Point:**
"Both clients are ringing. The call came in through the PBX, was routed through Rainbow, and delivered to Teams via Direct Routing. I can answer on either client. Let me answer on Teams since that is where this user lives most of their day."

**[Action: Answer the call in Teams]**

**Talking Point:**
"I am now on a call in Microsoft Teams, using my business phone number, routed through our PBX. The caller sees our company's caller ID. The call is recorded in our PBX call detail records. All of our compliance and recording policies apply. To the end user, this is just a Teams call. But underneath, it is enterprise telephony."

**[Action: End the call]**

**Key Moment to Emphasize:**
"This is the core value. Your users do not need to learn a new application for telephony. They stay in Teams. But you — the IT team — retain full control of the telephony infrastructure, the PBX, the call routing, and the compliance."

---

### Segment 2: Making an Outbound Call from Teams (3 minutes)

**[Action: Open the Teams dial pad]**

**Talking Point:**
"Now let me place an outbound call from Teams. I will dial an external number."

**[Action: Dial an external number from Teams]**

**Talking Point:**
"The call is going out through Rainbow, through the PBX, and out through the SIP trunk. The caller ID displayed to the recipient is our company's business number — not a random cloud number. This is critical for customer-facing calls. Your customers see the same number they have always called back."

**[Action: Let the call connect briefly, then hang up]**

**Talking Point:**
"Every outbound call from Teams follows the same path as a call from a desk phone or from the Rainbow client. Same trunk, same routing rules, same CDR logging. From a management and compliance standpoint, it is identical."

---

### Segment 3: PBX Features Teams Cannot Do Alone (5 minutes)

**Talking Point:**
"Now let me show you the features that make this architecture essential — the things Teams cannot do alone."

#### 3a: IVR (Interactive Voice Response)

**[Action: Call into the IVR number from a separate phone]**

**Talking Point:**
"I am calling our main reception number. Listen to what happens."

**[Action: The IVR greeting plays: "Welcome to [Company]. Press 1 for Sales, 2 for Support, 3 for the directory."]**

**Talking Point:**
"This is an IVR running on the PBX, managed by Rainbow. Teams has no native IVR capability at this level. It has auto-attendant, which handles basic routing, but it cannot replicate the multi-level IVR trees, time-of-day routing, database lookups, and CRM-integrated routing that your PBX provides. With Rainbow coexistence, you keep all of this."

#### 3b: Hunt Groups

**[Action: Show the Rainbow Admin Portal > Hunt Groups configuration]**

**Talking Point:**
"Here is a hunt group configured for the support team. Five agents, circular distribution, overflow to voicemail after 30 seconds. When a call comes in to the support number, it rings the first available agent — and that ring can be delivered to their Teams client, their Rainbow client, their desk phone, or their mobile. Rainbow manages the hunt group logic; Teams is just one of the delivery endpoints."

#### 3c: Call Recording (Compliance)

**[Action: Show the recording settings in Rainbow Admin Portal]**

**Talking Point:**
"Compliance call recording is active for all calls routed through Rainbow — including calls answered in Teams. The recordings are stored according to your retention policy, encrypted, and accessible only to authorized compliance officers. Teams' native recording is designed for meetings, not for regulatory-grade call recording with chain-of-custody requirements."

#### 3d: Advanced Call Handling

**Talking Point:**
"Other features your users keep: attended and blind transfer between any endpoint, call park and pickup, boss-secretary filtering, call pickup groups, and abbreviated dialing. These are everyday telephony functions that Teams does not natively support but that your workforce relies on."

---

### Segment 4: Data Sovereignty (3 minutes)

**[Action: Show a diagram or slide of the Rainbow Edge architecture]**

**Talking Point:**
"This is the other major reason organizations choose this coexistence model: data sovereignty. With Rainbow Edge, the media server sits on your premises. Voice data — the actual audio of your calls — never leaves your network. The call signaling can also stay on-premises. Only control-plane metadata — presence, licensing — reaches the Rainbow cloud, which is hosted in EU data centers."

**Talking Point:**
"Compare this to a Teams-only telephony model: your voice traffic routes through Microsoft's global network, which includes data centers in the United States. For organizations subject to GDPR, Schrems II, or national security regulations, this creates a compliance exposure that Rainbow Edge eliminates entirely."

**Talking Point:**
"We have government customers and healthcare organizations that evaluated Teams Phone System but could not use it precisely because of this data residency issue. Rainbow Edge solved it while still letting their users collaborate in Teams for chat and meetings."

**Key Moment to Emphasize:**
"Your collaboration data can live in Microsoft's cloud — that is fine for documents and chats. But your voice data — which may contain personal health information, financial data, or classified discussions — stays under your control with Rainbow Edge."

---

### Segment 5: Administration and Single Pane of Glass (2 minutes)

**[Action: Show Rainbow Admin Portal dashboard]**

**Talking Point:**
"From the Rainbow Admin Portal, your IT team manages everything: user provisioning, PBX connections, Teams Direct Routing configuration, call analytics, and compliance settings. You do not need to manage telephony in two places. Rainbow is the single control point for all telephony, regardless of which client your users prefer."

**[Action: Show a user profile with both Rainbow and Teams endpoints listed]**

**Talking Point:**
"Here is a user profile. You can see they are enabled for both Rainbow and Teams telephony. Their desk phone, Rainbow softphone, and Teams client are all listed as endpoints. An incoming call rings all three. The admin manages this from one screen."

---

### Closing — Competitive Positioning (2 minutes)

**[Action: Return to the side-by-side view of Rainbow and Teams]**

**Talking Point:**
"Let me be direct about positioning. We are not asking your organization to abandon Teams. Teams is strong for collaboration. What we are saying is that enterprise telephony requires a purpose-built platform — and that platform is Rainbow."

**Value Summary:**

| What Teams Does Well | What Rainbow Adds |
|---|---|
| Chat and messaging | Enterprise IVR and auto-attendant |
| Document collaboration | PBX integration (OXE, OXO, third-party SIP) |
| Video meetings | Hunt groups, ACD, call center features |
| Basic auto-attendant | Compliance call recording |
| Presence | Data sovereignty via Edge on-premises |
| | CRM integration (Salesforce, Dynamics) |
| | Advanced call handling (park, pickup, boss-secretary) |
| | ANSSI CSPN, HDS 1.1, ENS certifications |

**Talking Point:**
"The result is that your users get the best of both worlds: Teams for collaboration, Rainbow for telephony. No compromises on either front. And from an investment perspective, you protect your existing PBX investment while giving your users a modern, unified experience."

---

## Objection Handling

### "Microsoft is adding more telephony features to Teams. Won't this gap close?"

**Response:** "Microsoft has been building Teams Phone System for several years, and it has improved. But the fundamental architecture is different. Teams is a collaboration platform with telephony bolted on. Rainbow is a telephony platform built from the ground up by Alcatel-Lucent Enterprise — a company with 100 years of telephony expertise. Features like multi-level IVR, PBX overlay, CSTA integration, and analog device support are not on Microsoft's roadmap because they are not Microsoft's core business. Even if Teams adds more telephony features, the data sovereignty issue remains: Microsoft's infrastructure is US-controlled. For European enterprises, that is a structural limitation that no feature update can fix."

### "We want to simplify — one vendor for everything."

**Response:** "I understand the appeal of consolidation. But consider what you are consolidating. If you go Teams-only, you are replacing a purpose-built telephony system with a general-purpose collaboration tool. You lose IVR, hunt groups, PBX integration, compliance recording, and data sovereignty. You also create vendor lock-in with a single US cloud provider. The Rainbow + Teams model gives you best-of-breed for both collaboration and telephony, with the flexibility to evolve either one independently."

### "Our users don't want two applications."

**Response:** "They don't have two applications. With Direct Routing, your users make and receive calls in Teams. They never need to open the Rainbow client unless they want to. Rainbow is the invisible telephony engine running behind Teams. Your users see one interface — Teams — and get enterprise-grade telephony without knowing Rainbow is there."

### "What about cost — aren't we paying for telephony twice?"

**Response:** "You are already paying for Microsoft 365. Adding Teams Phone System licenses is an additional cost on top of that. Rainbow's telephony license replaces the Teams Phone System license — you do not need both. And Rainbow's license includes the PBX integration, IVR, hunt groups, recording, and CRM connectors that would require additional third-party solutions in a Teams-only model. When you total the cost of Teams Phone + third-party IVR + third-party recording + third-party CRM connector, Rainbow is typically 20-30% less expensive and operationally simpler."

### "We don't have an on-premises PBX — we're fully cloud."

**Response:** "Rainbow works in pure cloud mode as well. You do not need an on-premises PBX. Rainbow can be your cloud telephony provider with SIP trunking, and still provide Direct Routing to Teams. The PBX features — IVR, hunt groups, call routing — run in Rainbow's cloud. Edge is an option for sovereignty, not a requirement."

---

## Post-Demo Follow-Up

After the demo, provide the prospect with:

1. **Teams Coexistence architecture document** (PDF with network diagrams)
2. **TCO comparison worksheet** — Rainbow + Teams vs. Teams Phone System + add-ons
3. **Pilot proposal** — 25 users, 60 days, Direct Routing fully configured
4. **Reference customer** in the same industry or country
5. **Data sovereignty white paper** — especially relevant for EU government and regulated industries

---

*This demo script is designed for IT decision-makers evaluating their Teams telephony strategy. Adapt the sovereignty and compliance talking points to the prospect's country and industry. Always confirm Direct Routing is working correctly in the demo environment 30 minutes before the session.*
